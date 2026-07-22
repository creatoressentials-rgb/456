/**
 * retry-glossary.js — re-crawl specific slugs that failed
 * Usage: node retry-glossary.js action-camera retention
 */
const { chromium } = require('playwright');
const fs   = require('fs');
const path = require('path');
const { URL } = require('url');

const OUT_DIR = path.join(__dirname, 'crawled', 'glossary');
const slugs   = process.argv.slice(2);

async function extractTerm(page, slug) {
  const rawUrl = `https://www.creatoressentials.com/glossary/${slug}`;
  process.stdout.write(`→ ${slug} … `);
  try {
    await page.goto(rawUrl, { waitUntil: 'load', timeout: 60000 });
  } catch {
    try {
      await page.goto(rawUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    } catch (err) {
      console.log('FAILED:', err.message.split('\n')[0]);
      return;
    }
  }
  await page.waitForTimeout(4000);

  const data = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    const metaEl = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    let bodyHTML = '';
    const bodySelectors = ['[data-hook="post-description"]','[data-hook="post-content"]','article','main'];
    for (const sel of bodySelectors) {
      const el = document.querySelector(sel);
      if (el && el.innerText.trim().length > 80) { bodyHTML = el.innerHTML.trim(); break; }
    }
    if (!bodyHTML) bodyHTML = document.body.innerHTML;
    const relatedTerms = [];
    document.querySelectorAll('a[href*="/glossary/"]').forEach(a => {
      const m = (a.getAttribute('href')||'').match(/\/glossary\/([^/?#]+)/);
      if (m) relatedTerms.push(m[1]);
    });
    return {
      term: (h1?.textContent||ogTitle?.content||'').trim(),
      metaDescription: (metaEl?.content||'').trim(),
      bodyHTML,
      paragraphs: [],
      relatedTerms: [...new Set(relatedTerms)],
    };
  });

  const record = { slug, url: rawUrl, ...data };
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.json`), JSON.stringify(record, null, 2), 'utf8');
  console.log(`ok  (term: "${record.term}")`);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36',
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  for (const slug of slugs) await extractTerm(page, slug);
  await browser.close();
})();
