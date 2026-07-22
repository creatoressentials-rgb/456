/**
 * extract-glossary.js
 * Crawls all 63 Wix glossary pages and extracts structured data:
 *   slug, term, metaDescription, bodyHTML, relatedTerms
 *
 * Output:
 *   crawled/glossary/[slug].json   — one file per term
 *   crawled/glossary/_manifest.json
 *
 * Usage: node extract-glossary.js
 */

const { chromium } = require('playwright');
const fs   = require('fs');
const path = require('path');
const { URL } = require('url');

const URLS_FILE  = path.join(__dirname, 'glossary-urls.txt');
const OUT_DIR    = path.join(__dirname, 'crawled', 'glossary');
const ERRORS_LOG = path.join(__dirname, 'errors-glossary.log');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }

function logError(msg) {
  fs.appendFileSync(ERRORS_LOG, `[${new Date().toISOString()}] ${msg}\n`);
  console.error('  ERROR:', msg);
}

function slugFromUrl(raw) {
  const parts = new URL(raw).pathname.replace(/^\/|\/$/g, '').split('/');
  return parts[parts.length - 1];
}

async function extractTerm(page, rawUrl) {
  const slug = slugFromUrl(rawUrl);
  process.stdout.write(`→ ${slug} … `);

  try {
    await page.goto(rawUrl, { waitUntil: 'load', timeout: 45000 });
  } catch (err) {
    logError(`Failed to load ${rawUrl}: ${err.message}`);
    console.log('FAILED');
    return null;
  }

  await page.waitForTimeout(2500);

  const data = await page.evaluate(() => {
    // ── Term / title ──────────────────────────────────────────────
    const h1 = document.querySelector('h1');
    const term = h1 ? h1.textContent.trim() : '';

    // ── Meta description ──────────────────────────────────────────
    const metaEl = document.querySelector('meta[name="description"]');
    const metaDescription = metaEl ? metaEl.content.trim() : '';

    // og:title as fallback for term name
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogTitleText = ogTitle ? ogTitle.content.trim() : '';

    // ── Body content ──────────────────────────────────────────────
    // Wix renders content inside a post-description or rich content container
    const bodySelectors = [
      '[data-hook="post-description"]',
      '[data-hook="post-content"]',
      '[class*="blog-post"]',
      'article',
      'main',
    ];
    let bodyHTML = '';
    for (const sel of bodySelectors) {
      const el = document.querySelector(sel);
      if (el && el.innerText.trim().length > 80) {
        bodyHTML = el.innerHTML.trim();
        break;
      }
    }

    // ── Plain text fallback (for short definitions) ───────────────
    // Extract visible paragraph text from the main content area
    const paragraphs = [];
    document.querySelectorAll('p, h2, h3, h4, li').forEach((el) => {
      const text = el.innerText?.trim();
      if (text && text.length > 20) paragraphs.push({ tag: el.tagName.toLowerCase(), text });
    });

    // ── Related glossary links ────────────────────────────────────
    const relatedTerms = [];
    document.querySelectorAll('a[href*="/glossary/"]').forEach((a) => {
      const href = a.getAttribute('href') || '';
      const match = href.match(/\/glossary\/([^/?#]+)/);
      if (match) relatedTerms.push(match[1]);
    });

    return {
      term: term || ogTitleText,
      metaDescription,
      bodyHTML,
      paragraphs,
      relatedTerms: [...new Set(relatedTerms)],
    };
  });

  const record = {
    slug,
    url: rawUrl,
    term: data.term,
    metaDescription: data.metaDescription,
    bodyHTML: data.bodyHTML,
    paragraphs: data.paragraphs,
    relatedTerms: data.relatedTerms,
  };

  fs.writeFileSync(
    path.join(OUT_DIR, `${slug}.json`),
    JSON.stringify(record, null, 2),
    'utf8'
  );

  console.log(`ok  (term: "${record.term}")`);
  return record;
}

(async () => {
  ensureDir(OUT_DIR);
  if (fs.existsSync(ERRORS_LOG)) fs.unlinkSync(ERRORS_LOG);

  const urls = fs.readFileSync(URLS_FILE, 'utf8')
    .split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));

  console.log(`Extracting ${urls.length} glossary terms…\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36',
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  const results = [];
  for (const url of urls) {
    const rec = await extractTerm(page, url);
    if (rec) results.push({ slug: rec.slug, term: rec.term, metaDescription: rec.metaDescription });
  }

  await browser.close();

  fs.writeFileSync(
    path.join(OUT_DIR, '_manifest.json'),
    JSON.stringify(results, null, 2),
    'utf8'
  );

  const errCount = fs.existsSync(ERRORS_LOG)
    ? fs.readFileSync(ERRORS_LOG, 'utf8').split('\n').filter(Boolean).length : 0;

  console.log(`\nDone. ${results.length}/${urls.length} terms extracted. ${errCount} error(s).`);
  console.log('Manifest: crawled/glossary/_manifest.json');
})();
