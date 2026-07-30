/**
 * process-batch.js — generate glossary .md files and update the hub index
 *
 * Usage:
 *   node process-batch.js <batch.json> --category "Brand Deals & Sponsorships"
 *
 * Valid categories (must match heading in glossary-index.njk exactly):
 *   "YouTuber Terms"
 *   "Production & Editing"
 *   "Brand Deals & Sponsorships"
 *   "Creator Equipment"
 */
const fs   = require('fs');
const path = require('path');

// ── CLI args ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const batchFile = args.find(a => !a.startsWith('--'));
const catFlag   = args.indexOf('--category');
const category  = catFlag !== -1 ? args[catFlag + 1] : null;

if (!batchFile) {
  console.error('Usage: node process-batch.js <batch.json> --category "Category Name"');
  process.exit(1);
}
if (!category) {
  console.warn('WARNING: no --category supplied; index will NOT be updated.\n');
}

// ── Paths ─────────────────────────────────────────────────────────────────────
const GLOSSARY_SRC = path.join(__dirname, 'src', 'glossary');
const INDEX_PATH   = path.join(__dirname, 'src', 'pages', 'glossary-index.njk');

// ── Inline CTA ────────────────────────────────────────────────────────────────
const CTA = `
<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>
`;

// ── Index update ──────────────────────────────────────────────────────────────
/**
 * Inject new glossary terms into the correct category in glossary-index.njk.
 *
 * Categories with letter headings (YouTuber Terms, Production & Editing,
 * Brand Deals & Sponsorships) get a <h3 class="glossary-letter"> per letter
 * with alphabetically sorted <li> items beneath.
 *
 * The Creator Equipment category uses a single flat <ul> (no letter headings).
 */
function updateIndex(terms) {
  let idx = fs.readFileSync(INDEX_PATH, 'utf8');

  // Locate category section boundaries
  const catMarker  = `<h2 class="glossary-category-heading">${category}</h2>`;
  const catStart   = idx.indexOf(catMarker);
  if (catStart === -1) {
    console.warn(`  WARNING: category "${category}" not found in index — skipping index update.`);
    return;
  }
  // Next category div starts where the current one ends
  const nextCatDiv = idx.indexOf('<div class="glossary-category">', catStart + catMarker.length);
  const catEnd     = nextCatDiv === -1 ? idx.lastIndexOf('</div>') : nextCatDiv;

  // Detect whether this category uses letter headings
  const hasLetterHeadings = idx.slice(catStart, catEnd).includes('<h3 class="glossary-letter">');

  if (!hasLetterHeadings) {
    // ── Flat-list category (Creator Equipment) ────────────────────────────
    const ulOpen  = '<ul class="glossary-term-list">';
    const ulStart = idx.indexOf(ulOpen, catStart);
    const ulClose = idx.indexOf('</ul>', ulStart);

    const inner = idx.slice(ulStart + ulOpen.length, ulClose);
    const items = parseListItems(inner);

    for (const { slug, displayName } of terms) {
      if (idx.includes(`href="/glossary/${slug}/"`)) {
        console.log(`  (index already has ${slug})`);
        continue;
      }
      items.push({ href: `/glossary/${slug}/`, name: displayName });
    }
    items.sort((a, b) => a.name.localeCompare(b.name));

    const newInner = '\n' + items.map(i => `          <li><a href="${i.href}">${i.name}</a></li>`).join('\n') + '\n        ';
    idx = idx.slice(0, ulStart + ulOpen.length) + newInner + idx.slice(ulClose);

  } else {
    // ── Letter-headed categories ──────────────────────────────────────────
    for (const { slug, displayName } of terms) {
      if (idx.includes(`href="/glossary/${slug}/"`)) {
        console.log(`  (index already has ${slug})`);
        continue;
      }

      // Recompute bounds after each write
      const ci    = idx.indexOf(catMarker);
      const ncd   = idx.indexOf('<div class="glossary-category">', ci + catMarker.length);
      const bound = ncd === -1 ? idx.lastIndexOf('</div>') : ncd;

      const letter       = displayName[0].toUpperCase();
      const letterMarker = `<h3 class="glossary-letter">${letter}</h3>`;
      const letterIdx    = idx.indexOf(letterMarker, ci);

      if (letterIdx !== -1 && letterIdx < bound) {
        // Letter section already exists — insert alphabetically into its <ul>
        const ulOpen  = '<ul class="glossary-term-list">';
        const ulStart = idx.indexOf(ulOpen, letterIdx);
        const ulClose = idx.indexOf('</ul>', ulStart);
        const inner   = idx.slice(ulStart + ulOpen.length, ulClose);

        const items = parseListItems(inner);
        items.push({ href: `/glossary/${slug}/`, name: displayName });
        items.sort((a, b) => a.name.localeCompare(b.name));

        const newInner = '\n' + items.map(i => `          <li><a href="${i.href}">${i.name}</a></li>`).join('\n') + '\n        ';
        idx = idx.slice(0, ulStart + ulOpen.length) + newInner + idx.slice(ulClose);

      } else {
        // Letter section missing — insert it at the correct alphabetical position
        const letterRe = /<h3 class="glossary-letter">([A-Z])<\/h3>/g;
        letterRe.lastIndex = ci;
        let insertAt = null;
        let m;
        while ((m = letterRe.exec(idx)) !== null) {
          if (m.index >= bound) break;
          if (m[1] > letter) { insertAt = m.index; break; }
        }

        const newSection =
          `        <h3 class="glossary-letter">${letter}</h3>\n` +
          `        <ul class="glossary-term-list">\n` +
          `          <li><a href="/glossary/${slug}/">${displayName}</a></li>\n` +
          `        </ul>\n\n`;

        if (insertAt !== null) {
          idx = idx.slice(0, insertAt) + newSection + idx.slice(insertAt);
        } else {
          // Append just before the closing </div> of this category
          const closingDiv = idx.lastIndexOf('</div>', bound);
          idx = idx.slice(0, closingDiv) + newSection + idx.slice(closingDiv);
        }
      }
    }
  }

  fs.writeFileSync(INDEX_PATH, idx, 'utf8');
}

function parseListItems(inner) {
  const items = [];
  const re = /<li><a href="([^"]+)">([^<]+)<\/a><\/li>/g;
  let m;
  while ((m = re.exec(inner)) !== null) {
    items.push({ href: m[1], name: m[2] });
  }
  return items;
}

// ── Main ──────────────────────────────────────────────────────────────────────
const entries = JSON.parse(fs.readFileSync(batchFile, 'utf8'));
const indexTerms = [];

for (const entry of entries) {
  const { slug, title, description, content } = entry;

  // Extract display name from the opening <h2>
  const h2 = content.match(/<h2>([^<]+)<\/h2>/);
  const displayName = h2 ? h2[1].trim() : slug;

  // Extract related term slugs from trailing "Related terms:" paragraph
  const relatedSlugs = [];
  const relatedMatch = content.match(/<p><strong>Related terms:<\/strong>([\s\S]*?)<\/p>\s*$/);
  if (relatedMatch) {
    const linkRe = /href="\/glossary\/([^/"]+)\/?"/g;
    let m;
    while ((m = linkRe.exec(relatedMatch[1])) !== null) relatedSlugs.push(m[1]);
  }

  // Remove trailing "Related terms:" paragraph
  let body = content.replace(/<p><strong>Related terms:<\/strong>[\s\S]*?<\/p>\s*$/, '').trimEnd();

  // Insert CTA before FAQ section
  body = body.replace('<h3>Frequently asked questions</h3>', CTA + '\n<h3>Frequently asked questions</h3>');

  const relatedYaml = relatedSlugs.length
    ? `related_terms:\n${relatedSlugs.map(s => `  - ${s}`).join('\n')}`
    : '';

  const md = `---
layout: layouts/glossary.njk
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
permalink: /glossary/${slug}/
${relatedYaml}
---

${body}
`;

  fs.writeFileSync(path.join(GLOSSARY_SRC, `${slug}.md`), md, 'utf8');
  console.log(`  ✓ ${slug}.md  ("${displayName}", ${relatedSlugs.length} related terms)`);
  indexTerms.push({ slug, displayName });
}

console.log(`\nDone — ${entries.length} files written to src/glossary/`);

if (category) {
  updateIndex(indexTerms);
  console.log(`Updated index → "${category}"`);
} else {
  console.log('Index not updated (no --category flag).');
}
