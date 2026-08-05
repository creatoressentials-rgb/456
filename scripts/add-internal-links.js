#!/usr/bin/env node
'use strict';

/**
 * add-internal-links.js
 *
 * For each glossary page, derives 1-2 target keywords (term name + abbreviation).
 * Scans all glossary pages and blog posts, adding an internal link for the FIRST
 * unlinked occurrence of each keyword per file. Skips self-links.
 *
 * Link format:
 *   Glossary files  → <a href="/glossary/slug/">matched text</a>
 *   Blog post files → [matched text](/glossary/slug/)
 */

const fs   = require('fs');
const path = require('path');

const BASE         = path.join(__dirname, '..');
const GLOSSARY_DIR = path.join(BASE, 'src', 'glossary');
const POSTS_DIR    = path.join(BASE, 'src', 'posts');

// Individual slug words that are abbreviations
const ABBR_MAP = {
  seo: 'SEO', ctr: 'CTR', rpm: 'RPM', cpm: 'CPM',
  avd: 'AVD', apv: 'APV', ypp: 'YPP', mcn: 'MCN',
  ugc: 'UGC', rtmp: 'RTMP', fps: 'FPS', iso: 'ISO',
  ama: 'AMA', dslr: 'DSLR', mfk: 'MFK',
};

// Single-word term names too generic to safely auto-link
const BLOCKLIST = new Set([
  'channel', 'video', 'content', 'live', 'ads', 'tab', 'app',
  'feed', 'posts', 'search', 'keys', 'gifts', 'link', 'links',
  'cut', 'remix', 'gain',
]);

// ── helpers ───────────────────────────────────────────────────────────────────

/** Convert a slug to a display term name (fallback if no H2 found). */
function slugToTermName(slug) {
  if (ABBR_MAP[slug]) return ABBR_MAP[slug];
  const words = slug.split('-');
  // Single-letter prefix: a-roll → A-Roll, b-roll → B-Roll, j-cut → J-Cut
  if (words.length === 2 && words[0].length === 1) {
    return words[0].toUpperCase() + '-' + words[1].charAt(0).toUpperCase() + words[1].slice(1);
  }
  return words.map(w =>
    ABBR_MAP[w] || (w === 'youtube' ? 'YouTube' : w.charAt(0).toUpperCase() + w.slice(1))
  ).join(' ');
}

const QUESTION_START = /^(what|why|how|when|where|is|are|can|do|does|should|which)\b/i;

/** Extract the primary term name from the first <h2> in the HTML body. */
function termFromH2(body) {
  const m = body.match(/<h2[^>]*>([^<]+)<\/h2>/i);
  if (!m) return null;
  const text = m[1].trim().replace(/\s*\([^)]+\)\s*$/, '').trim();
  // Skip question headings and anything suspiciously long for a term name
  if (QUESTION_START.test(text) || text.length > 60) return null;
  return text;
}

/** Extract parenthetical abbreviation from the first <h2>, if any. */
function abbrFromH2(body) {
  const m = body.match(/<h2[^>]*>[^<]*\(([A-Z]{2,8})\)[^<]*<\/h2>/i);
  return m ? m[1] : null;
}

/**
 * Extract an abbreviation that belongs to THIS slug specifically,
 * by looking for "[slug words] (ABBR)" anywhere in the content.
 * Uses a slug-flexible pattern so "Click-Through Rate" matches "click-through-rate" slug.
 */
function abbrFromSlugPattern(slug, content) {
  const pat = slug.split('-').join('[\\s\\-]+');
  const re  = new RegExp(pat + '\\s*\\(([A-Z]{2,8})\\)', 'i');
  const m   = content.match(re);
  return m ? m[1] : null;
}

/** Split content into [frontmatterBlock, body]. The frontmatterBlock includes the --- delimiters. */
function splitFrontmatter(content) {
  const m = content.match(/^(---\r?\n[\s\S]*?\r?\n---\r?\n)([\s\S]*)$/);
  if (!m) return [content, ''];
  return [m[1], m[2]];
}

function getFrontmatterValue(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, 'm'));
  if (!m) return null;
  return m[1].trim().replace(/^["']|["']$/g, '');
}

/** Return [start, end] ranges of already-linked text (HTML <a> and markdown links). */
function linkedRanges(content) {
  const ranges = [];
  let m;
  // HTML <a ...>...</a>
  const htmlRe = /<a[\s\S]*?<\/a>/gi;
  while ((m = htmlRe.exec(content)) !== null) ranges.push([m.index, m.index + m[0].length]);
  // Markdown [text](url)
  const mdRe = /\[[^\]\r\n]+\]\([^)\r\n]+\)/g;
  while ((m = mdRe.exec(content)) !== null) ranges.push([m.index, m.index + m[0].length]);
  return ranges;
}

function overlaps(pos, len, ranges) {
  const end = pos + len;
  return ranges.some(([rs, re]) => pos < re && end > rs);
}

/** Find the first unlinked occurrence of `keyword` in `body` and wrap it. */
function linkFirstOccurrence(body, keyword, slug, useHtml) {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re      = new RegExp(`\\b(${escaped})\\b`, 'gi');
  const ranges  = linkedRanges(body);
  let match;
  while ((match = re.exec(body)) !== null) {
    if (!overlaps(match.index, match[0].length, ranges)) {
      const before = body.slice(0, match.index);
      const after  = body.slice(match.index + match[0].length);
      const linked = useHtml
        ? `<a href="/glossary/${slug}/">${match[0]}</a>`
        : `[${match[0]}](/glossary/${slug}/)`;
      return before + linked + after;
    }
  }
  return body;
}

// ── keyword map ───────────────────────────────────────────────────────────────

function buildSlugMap(glossaryFiles) {
  const map = new Map(); // slug → string[] of keywords (longest first)

  for (const { slug, fullPath } of glossaryFiles) {
    const content        = fs.readFileSync(fullPath, 'utf8');
    const [fm, body]     = splitFrontmatter(content);
    const kwSet          = new Set();

    // 1. Primary term name: prefer H2 (accurate name), fall back to slug
    const h2Term  = termFromH2(body);
    const termName = h2Term || slugToTermName(slug);
    if (termName.length >= 3 && !(!termName.includes(' ') && BLOCKLIST.has(termName.toLowerCase()))) {
      kwSet.add(termName);
    }

    // 2. Abbreviation from H2 parenthetical: "Click-Through Rate (CTR)"
    const h2Abbr = abbrFromH2(body);
    if (h2Abbr) kwSet.add(h2Abbr);

    // 3. Abbreviation from slug-flexible pattern in content: "click-through rate (CTR)"
    const patAbbr = abbrFromSlugPattern(slug, content);
    if (patAbbr && !kwSet.has(patAbbr)) kwSet.add(patAbbr);

    // 4. If slug itself ends with a known abbreviation word, add it
    //    e.g., youtube-rpm → last word "rpm" → "RPM"
    const lastWord = slug.split('-').pop();
    if (ABBR_MAP[lastWord]) {
      const abbr = ABBR_MAP[lastWord];
      if (!kwSet.has(abbr)) kwSet.add(abbr);
    }

    // Sort longest keyword first
    const keywords = [...kwSet].filter(k => k.length >= 2).sort((a, b) => b.length - a.length);
    if (keywords.length) map.set(slug, keywords);
  }

  return map;
}

// ── main ──────────────────────────────────────────────────────────────────────

function main() {
  const glossaryFiles = fs.readdirSync(GLOSSARY_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => ({ slug: f.replace('.md', ''), fullPath: path.join(GLOSSARY_DIR, f) }));

  const postFiles = fs.readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => ({ slug: null, fullPath: path.join(POSTS_DIR, f) }));

  const slugMap = buildSlugMap(glossaryFiles);
  console.log(`Built keyword map for ${slugMap.size} glossary slugs.\n`);

  // Sort by longest primary keyword first (process specific phrases before short ones)
  const slugEntries = [...slugMap.entries()].sort(([, a], [, b]) => b[0].length - a[0].length);

  const allFiles = [
    ...glossaryFiles.map(f => ({ ...f, useHtml: true  })),
    ...postFiles.map(f =>     ({ ...f, useHtml: false })),
  ];

  let totalLinks  = 0;
  let filesChanged = 0;

  for (const { slug: fileSlug, fullPath, useHtml } of allFiles) {
    const original           = fs.readFileSync(fullPath, 'utf8');
    const [fm, body]         = splitFrontmatter(original);
    const permalink          = getFrontmatterValue(fm, 'permalink') || '';

    let updatedBody = body;
    let fileLinks   = 0;

    // Track slugs already linked in this file (pre-existing + newly added)
    const linkedSlugsInFile = new Set(
      [...body.matchAll(/\/glossary\/([^\/\")\s]+)\//g)].map(m => m[1])
    );

    for (const [targetSlug, keywords] of slugEntries) {
      // Never self-link
      if (fileSlug === targetSlug) continue;
      if (permalink === `/glossary/${targetSlug}/`) continue;
      // Skip if this slug is already linked anywhere in the file
      if (linkedSlugsInFile.has(targetSlug)) continue;

      // Try each keyword for this slug; stop after the first successful link
      for (const kw of keywords) {
        const before = updatedBody;
        updatedBody  = linkFirstOccurrence(updatedBody, kw, targetSlug, useHtml);
        if (updatedBody !== before) {
          fileLinks++;
          linkedSlugsInFile.add(targetSlug);
          break; // one link per destination page per file
        }
      }
    }

    if (fileLinks > 0) {
      fs.writeFileSync(fullPath, fm + updatedBody, 'utf8');
      console.log(`  ${path.basename(fullPath).padEnd(50)} +${fileLinks}`);
      filesChanged++;
      totalLinks += fileLinks;
    }
  }

  console.log(`\nDone. Added ${totalLinks} links across ${filesChanged} files.`);
}

main();
