/**
 * build-glossary-pages.js
 * Converts crawled/glossary/*.json → src/glossary/[slug].md
 * Also generates src/pages/glossary-index.njk
 *
 * Handles Wix classic-page HTML structure (richTextElement containers).
 *
 * Usage: node build-glossary-pages.js
 */

const fs   = require('fs');
const path = require('path');

const GLOSSARY_JSON = path.join(__dirname, 'crawled', 'glossary');
const GLOSSARY_SRC  = path.join(__dirname, 'src', 'glossary');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }

// ── HTML cleaner for Wix classic pages ────────────────────────────────────────
function cleanWixClassicHtml(html) {
  if (!html || html.length < 100) return '';

  let out = html;

  // Remove blocks we never want
  out = out.replace(/<script[\s\S]*?<\/script>/gi, '');
  out = out.replace(/<style[\s\S]*?<\/style>/gi, '');
  out = out.replace(/<svg[\s\S]*?<\/svg>/gi, '');
  out = out.replace(/<button[\s\S]*?<\/button>/gi, '');
  out = out.replace(/<nav[\s\S]*?<\/nav>/gi, '');
  out = out.replace(/<header[\s\S]*?<\/header>/gi, '');
  out = out.replace(/<footer[\s\S]*?<\/footer>/gi, '');
  out = out.replace(/<wow-image[\s\S]*?<\/wow-image>/gi, '');

  // Remove "Back to Glossary" links (Wix boilerplate at bottom of each term page)
  out = out.replace(/<h4[^>]*>[\s\S]*?Back to Glossary[\s\S]*?<\/h4>/gi, '');
  out = out.replace(/<a[^>]*>[\s\S]*?Back to Glossary[\s\S]*?<\/a>/gi, '');

  // Convert internal absolute URLs to relative paths
  // Must handle /resources/youtube-terms-glossary/[slug] BEFORE stripping the domain
  out = out.replace(/https?:\/\/www\.creatoressentials\.com\/resources\/youtube-terms-glossary\/([^"'\s/]+)/g, '/glossary/$1/');
  out = out.replace(/https?:\/\/www\.creatoressentials\.com\/resources\/youtube-terms-glossary/g, '/glossary/');
  out = out.replace(/https?:\/\/www\.creatoressentials\.com\/glossary\/([^"'\s]+)/g, '/glossary/$1/');
  out = out.replace(/https?:\/\/www\.creatoressentials\.com\//g, '/');

  // Fix Wix element IDs that look like /glossary-[slug]-list or /glossary-[slug]-all
  // These are Wix component anchor IDs that leaked into href attributes
  // Known truncations (Wix had character limits on element IDs)
  const slugExpansions = {
    'youtube-video-descri': 'youtube-video-description',
    'youtube-channel-demo': 'youtube-channel-demographics',
    'youtube-channel-desc': 'youtube-channel-description',
    'youtube-channel-keyw': 'youtube-channel-keywords',
    'youtube-branding-wat': 'youtube-branding-watermark',
    'youtube-affiliate-ma': 'youtube-affiliate-marketing',
    'channel-description':  'youtube-channel-description',
    'channel-keywords':     'youtube-channel-keywords',
    'channel-art':          'youtube-channel-art',
  };
  out = out.replace(/href="\/glossary-([a-z0-9-]+?)(?:-list|-all|-[0-9]+)?"/g, (_, slug) => {
    const expanded = slugExpansions[slug] || slug;
    return `href="/glossary/${expanded}/"`;
  });

  // Fix old-style blog URLs → new Eleventy post URLs
  out = out.replace(/href="\/blog\/([a-z0-9-]+)"/g, 'href="/posts/$1/"');
  out = out.replace(/href="\/post\/([a-z0-9-]+)"/g, 'href="/posts/$1/"');

  // Fix non-existent Wix pages
  out = out.replace(/href="\/services\/website-seo"/g, 'href="/products/youtube-seo/"');
  out = out.replace(/href="\/blank-[0-9]+"/g, '');  // strip /blank-N hrefs (keep link text)

  // Fix /tools → /blog/
  out = out.replace(/href="\/tools"/g, 'href="/blog/"');

  // Ensure /glossary without trailing slash gets one
  out = out.replace(/href="\/glossary"/g, 'href="/glossary/"');

  // Extract semantic content: find all h1-h4, p, ol, ul, li, strong, em, a tags
  // and rebuild a clean version
  const semantic = [];
  const tagPattern = /<(h[1-4]|p|ol|ul|li|strong|em|a|br)\b([^>]*)>([\s\S]*?)<\/\1>|<br\s*\/?>/gi;

  // Walk through the HTML extracting meaningful text blocks
  // Use richTextElement sections as boundaries
  const richBlocks = [];
  const richPattern = /data-testid="richTextElement"[^>]*>([\s\S]*?)(?=data-testid="richTextElement"|<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>|$)/g;
  let m;
  while ((m = richPattern.exec(out)) !== null) {
    richBlocks.push(m[1]);
  }

  // If we found richTextElement blocks, use those; otherwise fall back to full body
  const source = richBlocks.length > 0 ? richBlocks.join('\n') : out;

  // Now extract h2, h3, h4, p, ol, ul from source, cleaning each
  const blocks = [];
  const blockPattern = /<(h[2-4]|p|ol|ul)([\s\S]*?)<\/\1>/gi;
  while ((m = blockPattern.exec(source)) !== null) {
    const tag = m[1].toLowerCase();
    let inner = m[0];

    // Skip if it's pure whitespace or nav content
    const textOnly = inner.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
    if (!textOnly || textOnly.length < 3) continue;

    // Skip obvious navigation noise
    if (/back to (home|glossary|blog|top)|all services|unavailable due to demand/i.test(textOnly)) continue;

    // Clean the inner HTML
    inner = cleanInnerHtml(inner, tag);
    if (inner) blocks.push(inner);
  }

  return blocks.join('\n\n').trim();
}

function cleanInnerHtml(html, outerTag) {
  let out = html;

  // Strip all style/class/id/data attributes from every element
  out = out.replace(/\s+(style|class|id|data-[a-z-]+|aria-[a-z-]+|tabindex|dir|role|target|rel)="[^"]*"/gi, '');

  // Unwrap span tags (keep their content) — run multiple passes for nested spans
  let prev;
  do {
    prev = out;
    out = out.replace(/<span>([\s\S]*?)<\/span>/g, '$1');
  } while (out !== prev);

  // Unwrap wixGuard spans and any remaining empty spans
  out = out.replace(/<span[^>]*>\s*<\/span>/g, '');

  // Clean anchor tags: keep href only
  out = out.replace(/<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, content) => {
    const text = content.replace(/<[^>]+>/g, '').trim();
    if (!text) return '';
    if (href.startsWith('/') || href.startsWith('http')) return `<a href="${href}">${text}</a>`;
    return text;
  });

  // Remove empty/noise tags
  out = out.replace(/<(h[2-4]|p|li|strong|em)>\s*<\/\1>/gi, '');
  out = out.replace(/&nbsp;/g, ' ');

  // Collapse whitespace
  out = out.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();

  const text = out.replace(/<[^>]+>/g, '').trim();
  if (!text || text.length < 3) return '';

  return out;
}

// Derive a clean display title from slug or first h2 in content
function deriveTitle(slug, extractedTerm, bodyHtml) {
  // Strip site suffix
  let term = (extractedTerm || '').replace(/\s*\|.*$/, '').trim();

  // If term is just the site name or empty, derive from content or slug
  if (!term || /^creator essentials$/i.test(term)) {
    // Try to extract first h2 from body
    const h2 = bodyHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    if (h2) {
      term = h2[1].replace(/<[^>]+>/g, '').trim();
    }
    if (!term || /^creator essentials$/i.test(term)) {
      // Fall back to humanizing the slug
      term = slug.replace(/-/g, ' ').replace(/\byoutube\b/gi, 'YouTube').replace(/\bseo\b/gi, 'SEO').replace(/\bctr\b/gi, 'CTR').replace(/\bcpm\b/gi, 'CPM').replace(/\bama\b/gi, 'AMA').replace(/\bdslr\b/gi, 'DSLR');
      term = term.charAt(0).toUpperCase() + term.slice(1);
    }
  }

  return term;
}

function buildMarkdown(record) {
  const { slug, metaDescription, bodyHTML, relatedTerms } = record;

  const cleanedBody = cleanWixClassicHtml(bodyHTML);
  const displayTitle = deriveTitle(slug, record.term, cleanedBody);

  const desc = (metaDescription || `Definition of ${displayTitle} for YouTube creators.`).replace(/"/g, '\\"');

  const relatedYaml = relatedTerms && relatedTerms.length
    ? `related_terms:\n${relatedTerms.filter(t => t !== slug).slice(0, 8).map(t => `  - ${t}`).join('\n')}`
    : '';

  const body = cleanedBody || `<p>${displayTitle} is a term used in YouTube content creation and channel growth strategy.</p>`;

  return `---
layout: layouts/glossary.njk
title: "${displayTitle.replace(/"/g, '\\"')}"
description: "${desc}"
permalink: /glossary/${slug}/
${relatedYaml}
---

${body}
`;
}

// ── Main ──────────────────────────────────────────────────────────────────────
ensureDir(GLOSSARY_SRC);

// Read all JSON files (not just the manifest, to include retry files)
const jsonFiles = fs.readdirSync(GLOSSARY_JSON)
  .filter(f => f.endsWith('.json') && f !== '_manifest.json');

let built = 0;
const manifest = [];

for (const file of jsonFiles) {
  const record = JSON.parse(fs.readFileSync(path.join(GLOSSARY_JSON, file), 'utf8'));
  const md = buildMarkdown(record);
  fs.writeFileSync(path.join(GLOSSARY_SRC, `${record.slug}.md`), md, 'utf8');

  const title = deriveTitle(record.slug, record.term, cleanWixClassicHtml(record.bodyHTML));
  manifest.push({ slug: record.slug, title });
  console.log(`  ✓ ${record.slug}  →  "${title}"`);
  built++;
}

// Sort manifest alphabetically
manifest.sort((a, b) => a.title.localeCompare(b.title));

// ── Glossary index page ───────────────────────────────────────────────────────
const indexNjk = `---
layout: layouts/base.njk
title: "YouTube Glossary — Terms Every Creator Should Know"
description: "Definitions for common YouTube terms: algorithm, CTR, retention, SEO, CPM, thumbnails, and more. A quick reference for serious creators."
permalink: /glossary/
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow" style="color:var(--red)">YouTube Glossary</span>
    <h1>YouTube Terms Every Creator Should Know</h1>
    <p>Quick, clear definitions for the YouTube terminology that actually affects your growth — from algorithm to watch time.</p>
  </div>
</section>

<section>
  <div class="container">
    <div class="card-grid" style="grid-template-columns:repeat(auto-fill, minmax(220px,1fr)); gap:1rem;">
      {%- for term in collections.glossary -%}
      <a href="{{ term.url }}" style="text-decoration:none; color:inherit;">
        <div class="card" style="padding:1.25rem 1.5rem; cursor:pointer; transition:box-shadow 0.2s, transform 0.2s;">
          <strong style="font-size:0.95rem; color:var(--charcoal);">{{ term.data.title }}</strong>
          {% if term.data.description %}
          <p style="font-size:0.8rem; margin-top:0.375rem; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin-bottom:0;">{{ term.data.description }}</p>
          {% endif %}
        </div>
      </a>
      {%- endfor -%}
    </div>
  </div>
</section>

<section class="bg-charcoal cta-banner">
  <div class="container">
    <h2>Put these terms to work on your channel</h2>
    <p>Knowing the vocabulary is step one. A channel audit shows you exactly where your numbers stand and what to fix first.</p>
    <div class="hero-ctas">
      <a href="/services/youtube-channel-audit/" class="btn btn-white">Get a Channel Audit</a>
      <a href="/blog/" class="btn btn-outline-white">Read the Blog</a>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'glossary-index.njk'), indexNjk, 'utf8');

console.log(`\nBuilt ${built} glossary pages → src/glossary/`);
console.log('Built glossary index → src/pages/glossary-index.njk');
