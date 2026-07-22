/**
 * Wix site crawler for creatoressentials.com
 * Reads URLs from urls.txt, saves full HTML + all images to /crawled/
 * Usage: node crawl.js
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const URLS_FILE = path.join(__dirname, 'urls.txt');
const CRAWLED_DIR = path.join(__dirname, 'crawled');
const IMAGES_DIR = path.join(CRAWLED_DIR, 'images');
const ERRORS_LOG = path.join(__dirname, 'errors.log');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function logError(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  fs.appendFileSync(ERRORS_LOG, line);
  console.error('  ERROR:', msg);
}

function urlToSlug(rawUrl) {
  const u = new URL(rawUrl);
  const parts = u.pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
  return parts.length === 0 ? 'home' : parts.join('--');
}

function downloadFile(fileUrl, destPath) {
  return new Promise((resolve) => {
    // Skip data URIs and non-http
    if (!fileUrl.startsWith('http://') && !fileUrl.startsWith('https://')) {
      resolve();
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
        resolve();
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    });
    req.on('error', (err) => {
      file.close();
      fs.unlink(destPath, () => {});
      logError(`Network error downloading ${fileUrl}: ${err.message}`);
      resolve();
    });
    req.setTimeout(30000, () => {
      req.destroy();
      logError(`Timeout downloading ${fileUrl}`);
      resolve();
    });
  });
}

function filenameFromUrl(imgUrl) {
  try {
    const u = new URL(imgUrl);
    // Wix image URLs often have the real filename buried in the path
    const parts = u.pathname.split('/').filter(Boolean);
    let name = parts[parts.length - 1] || 'image';
    // Strip Wix transform suffixes like /v1/fill/w_500,h_300,al_c/filename.jpg
    name = name.split('?')[0];
    // Ensure an extension
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

// Parse all image URLs from the fully-rendered page
async function extractImageUrls(page) {
  return page.evaluate(() => {
    const urls = new Set();

    // img src / data-src
    document.querySelectorAll('img').forEach((img) => {
      [img.src, img.getAttribute('data-src'), img.getAttribute('data-lazy-src')].forEach((v) => {
        if (v && v.startsWith('http')) urls.add(v);
      });

      // srcset: "url1 1x, url2 2x" or "url1 100w, url2 200w"
      const srcset = img.getAttribute('srcset') || img.getAttribute('data-srcset') || '';
      srcset.split(',').forEach((entry) => {
        const part = entry.trim().split(/\s+/)[0];
        if (part && part.startsWith('http')) urls.add(part);
      });
    });

    // CSS background-image on every element
    document.querySelectorAll('*').forEach((el) => {
      const bg = window.getComputedStyle(el).backgroundImage;
      const matches = bg.matchAll(/url\(["']?(https?:\/\/[^"')]+)["']?\)/g);
      for (const m of matches) urls.add(m[1]);
    });

    // picture > source srcset
    document.querySelectorAll('source').forEach((s) => {
      const srcset = s.getAttribute('srcset') || '';
      srcset.split(',').forEach((entry) => {
        const part = entry.trim().split(/\s+/)[0];
        if (part && part.startsWith('http')) urls.add(part);
      });
    });

    return [...urls];
  });
}

async function crawlPage(page, rawUrl) {
  const slug = urlToSlug(rawUrl);
  console.log(`\n→ ${rawUrl}  [${slug}]`);

  try {
    // Wix pages rarely reach true networkidle due to persistent analytics traffic.
    // Load fires once resources are done; we add an explicit dwell for dynamic content.
    await page.goto(rawUrl, { waitUntil: 'load', timeout: 45000 });
  } catch (err) {
    logError(`Failed to load ${rawUrl}: ${err.message}`);
    return;
  }

  // Let Wix's JS finish rendering after initial load
  await page.waitForTimeout(3000);

  // Scroll to trigger lazy-loaded content
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 400;
      const delay = 120;
      const id = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(id);
          window.scrollTo(0, 0);
          resolve();
        }
      }, delay);
    });
  });

  // Extra wait after scroll for any deferred content
  await page.waitForTimeout(1500);

  // Save HTML
  const html = await page.content();
  const htmlPath = path.join(CRAWLED_DIR, `${slug}.html`);
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`  HTML saved → crawled/${slug}.html`);

  // Collect + download images
  const imgUrls = await extractImageUrls(page);
  console.log(`  Found ${imgUrls.length} image(s)`);

  for (const imgUrl of imgUrls) {
    const rawName = filenameFromUrl(imgUrl);
    const destName = dedupeFilename(IMAGES_DIR, rawName);
    const destPath = path.join(IMAGES_DIR, destName);
    process.stdout.write(`    ↓ ${rawName} … `);
    await downloadFile(imgUrl, destPath);
    if (fs.existsSync(destPath)) process.stdout.write('ok\n');
  }
}

(async () => {
  ensureDir(CRAWLED_DIR);
  ensureDir(IMAGES_DIR);

  // Clear errors log for fresh run
  if (fs.existsSync(ERRORS_LOG)) fs.unlinkSync(ERRORS_LOG);

  const urls = fs.readFileSync(URLS_FILE, 'utf8')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));

  console.log(`Crawling ${urls.length} URLs…`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36',
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  for (const url of urls) {
    await crawlPage(page, url);
  }

  await browser.close();

  const errorCount = fs.existsSync(ERRORS_LOG)
    ? fs.readFileSync(ERRORS_LOG, 'utf8').split('\n').filter(Boolean).length
    : 0;

  console.log(`\nDone. ${urls.length} pages crawled. ${errorCount} error(s) logged to errors.log.`);
})();
