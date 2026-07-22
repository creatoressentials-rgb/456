/**
 * Wix blog structured-data extractor for creatoressentials.com
 * Visits each blog URL, extracts title/slug/date/author/bodyHTML/featuredImage
 * as JSON, and downloads the featured image at full resolution.
 *
 * Output:
 *   crawled/blog/[slug].json   — structured post data
 *   crawled/images/            — featured images (shared with crawl.js)
 *
 * Usage: node extract-blog.js
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const BLOG_URLS_FILE = path.join(__dirname, 'blog-urls.txt');
const BLOG_DIR = path.join(__dirname, 'crawled', 'blog');
const IMAGES_DIR = path.join(__dirname, 'crawled', 'images');
const ERRORS_LOG = path.join(__dirname, 'errors-blog.log');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function logError(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  fs.appendFileSync(ERRORS_LOG, line);
  console.error('  ERROR:', msg);
}

function slugFromUrl(rawUrl) {
  const parts = new URL(rawUrl).pathname.replace(/^\/|\/$/g, '').split('/');
  return parts[parts.length - 1];
}

// Strip Wix on-the-fly transform suffixes to get the full-res base URL.
// e.g. https://static.wixstatic.com/media/abc~mv2.jpg/v1/fill/w_310,h_200/.../foo.jpg
//   → https://static.wixstatic.com/media/abc~mv2.jpg
function normalizeWixImageUrl(imgUrl) {
  try {
    const u = new URL(imgUrl);
    if (u.hostname === 'static.wixstatic.com') {
      const v1idx = u.pathname.indexOf('/v1/');
      if (v1idx !== -1) {
        return `${u.origin}${u.pathname.slice(0, v1idx)}`;
      }
    }
    return imgUrl;
  } catch {
    return imgUrl;
  }
}

function filenameFromUrl(imgUrl) {
  try {
    const u = new URL(imgUrl);
    const parts = u.pathname.split('/').filter(Boolean);
    let name = parts[parts.length - 1].split('?')[0];
    if (!/\.\w{2,5}$/.test(name)) name += '.jpg';
    return name;
  } catch {
    return `image_${Date.now()}.jpg`;
  }
}

function dedupeFilename(dir, name) {
  let candidate = name;
  let counter = 1;
  while (fs.existsSync(path.join(dir, candidate))) {
    const ext = path.extname(name);
    const base = path.basename(name, ext);
    candidate = `${base}_${counter}${ext}`;
    counter++;
  }
  return candidate;
}

function downloadFile(fileUrl, destPath) {
  return new Promise((resolve) => {
    if (!fileUrl.startsWith('http://') && !fileUrl.startsWith('https://')) {
      resolve(null);
      return;
    }
    const proto = fileUrl.startsWith('https') ? https : http;
    const file = fs.createWriteStream(destPath);
    const req = proto.get(fileUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlink(destPath, () => {});
        downloadFile(res.headers.location, destPath).then(resolve);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(destPath, () => {});
        logError(`HTTP ${res.statusCode} downloading ${fileUrl}`);
        resolve(null);
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(destPath); });
    });
    req.on('error', (err) => {
      file.close();
      fs.unlink(destPath, () => {});
      logError(`Network error downloading ${fileUrl}: ${err.message}`);
      resolve(null);
    });
    req.setTimeout(30000, () => {
      req.destroy();
      logError(`Timeout downloading ${fileUrl}`);
      resolve(null);
    });
  });
}

async function extractPost(page, rawUrl) {
  const slug = slugFromUrl(rawUrl);
  console.log(`\n→ ${rawUrl}`);

  try {
    await page.goto(rawUrl, { waitUntil: 'load', timeout: 45000 });
  } catch (err) {
    logError(`Failed to load ${rawUrl}: ${err.message}`);
    return null;
  }

  // Let Wix JS finish rendering
  await page.waitForTimeout(3000);

  // Scroll to trigger any lazy-loaded content
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let scrolled = 0;
      const id = setInterval(() => {
        window.scrollBy(0, 400);
        scrolled += 400;
        if (scrolled >= document.body.scrollHeight) {
          clearInterval(id);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 120);
    });
  });
  await page.waitForTimeout(1000);

  const data = await page.evaluate(() => {
    // ── Title ────────────────────────────────────────────────────────────
    const titleSelectors = [
      '[data-hook="post-title"]',
      'h1[class*="title"]',
      'h1',
      'meta[property="og:title"]',
    ];
    let title = '';
    for (const sel of titleSelectors) {
      const el = document.querySelector(sel);
      if (el) {
        title = (el.content || el.textContent || '').trim();
        if (title) break;
      }
    }

    // ── Publish date ──────────────────────────────────────────────────────
    const dateSelectors = [
      '[data-hook="post-publish-date"]',
      'time[datetime]',
      'time',
      '[class*="date"]',
      'meta[property="article:published_time"]',
    ];
    let publishDate = '';
    for (const sel of dateSelectors) {
      const el = document.querySelector(sel);
      if (el) {
        publishDate = (el.getAttribute('datetime') || el.content || el.textContent || '').trim();
        if (publishDate) break;
      }
    }

    // ── Author ────────────────────────────────────────────────────────────
    const authorSelectors = [
      '[data-hook="post-author-name"]',
      '[data-hook="author-name"]',
      '[class*="author"] [class*="name"]',
      '[rel="author"]',
      'meta[name="author"]',
      'meta[property="article:author"]',
    ];
    let author = '';
    for (const sel of authorSelectors) {
      const el = document.querySelector(sel);
      if (el) {
        author = (el.content || el.textContent || '').trim();
        if (author) break;
      }
    }

    // ── Meta description ──────────────────────────────────────────────────
    const metaDesc = document.querySelector('meta[name="description"]');
    const metaDescription = metaDesc ? (metaDesc.content || '').trim() : '';

    // ── Featured image ────────────────────────────────────────────────────
    // Prefer og:image (Wix sets this to the full-res featured image)
    const ogImage = document.querySelector('meta[property="og:image"]');
    let featuredImageUrl = ogImage ? ogImage.content : '';

    // Fallback: first large img in the article body
    if (!featuredImageUrl) {
      const imgs = [...document.querySelectorAll('img[src]')];
      const large = imgs.find((img) => img.naturalWidth > 300 || img.width > 300);
      if (large) featuredImageUrl = large.src;
    }

    // ── Body HTML ─────────────────────────────────────────────────────────
    // Wix blog body lives inside one of these containers
    const bodySelectors = [
      '[data-hook="post-content"]',
      '[class*="post-content"]',
      '[class*="blog-post-page"]',
      'article',
      'main',
    ];
    let bodyHTML = '';
    for (const sel of bodySelectors) {
      const el = document.querySelector(sel);
      if (el && el.innerHTML.trim().length > 200) {
        bodyHTML = el.innerHTML.trim();
        break;
      }
    }

    return { title, publishDate, author, metaDescription, featuredImageUrl, bodyHTML };
  });

  // ── Normalize + download featured image ───────────────────────────────
  let featuredImageLocal = '';
  if (data.featuredImageUrl) {
    const normalized = normalizeWixImageUrl(data.featuredImageUrl);
    const rawName = `featured-${slug}-${filenameFromUrl(normalized)}`;
    const destName = dedupeFilename(IMAGES_DIR, rawName);
    const destPath = path.join(IMAGES_DIR, destName);
    process.stdout.write(`  featured image: ${destName} … `);
    const result = await downloadFile(normalized, destPath);
    if (result) {
      featuredImageLocal = `images/${destName}`;
      process.stdout.write('ok\n');
    } else {
      process.stdout.write('FAILED\n');
    }
  }

  const post = {
    slug,
    url: rawUrl,
    title: data.title,
    publishDate: data.publishDate,
    author: data.author || 'Rob Miller',
    metaDescription: data.metaDescription,
    featuredImage: {
      url: data.featuredImageUrl,
      local: featuredImageLocal,
    },
    bodyHTML: data.bodyHTML,
  };

  const outPath = path.join(BLOG_DIR, `${slug}.json`);
  fs.writeFileSync(outPath, JSON.stringify(post, null, 2), 'utf8');
  console.log(`  Saved → crawled/blog/${slug}.json  (title: "${post.title}")`);

  return post;
}

(async () => {
  ensureDir(BLOG_DIR);
  ensureDir(IMAGES_DIR);
  if (fs.existsSync(ERRORS_LOG)) fs.unlinkSync(ERRORS_LOG);

  const urls = fs.readFileSync(BLOG_URLS_FILE, 'utf8')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));

  console.log(`Extracting ${urls.length} blog posts…`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36',
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  const results = [];
  for (const url of urls) {
    const post = await extractPost(page, url);
    if (post) results.push(post);
  }

  await browser.close();

  // Write a summary manifest
  const manifestPath = path.join(BLOG_DIR, '_manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(results.map((p) => ({
    slug: p.slug,
    title: p.title,
    publishDate: p.publishDate,
    author: p.author,
    featuredImage: p.featuredImage.local,
  })), null, 2), 'utf8');

  const errorCount = fs.existsSync(ERRORS_LOG)
    ? fs.readFileSync(ERRORS_LOG, 'utf8').split('\n').filter(Boolean).length
    : 0;

  console.log(`\nDone. ${results.length}/${urls.length} posts extracted.`);
  console.log(`Manifest: crawled/blog/_manifest.json`);
  console.log(`Errors: ${errorCount} (see errors-blog.log)`);
})();
