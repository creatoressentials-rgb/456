/**
 * fix-glossary-links.js — add trailing slashes to /glossary/slug links sitewide
 * Usage: node fix-glossary-links.js
 */
const fs   = require('fs');
const path = require('path');

function walk(dir, exts, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '_site') {
      walk(full, exts, results);
    } else if (entry.isFile() && exts.includes(path.extname(entry.name))) {
      results.push(full);
    }
  }
  return results;
}

const srcDir = path.join(__dirname, 'src');
const files  = walk(srcDir, ['.md', '.njk']);

// Match /glossary/slug with no trailing slash before the closing quote
const RE = /href="(\/glossary\/[^"\/]+)"/g;

let totalFiles = 0;
let totalLinks = 0;

for (const f of files) {
  const original = fs.readFileSync(f, 'utf8');
  const fixed    = original.replace(RE, 'href="$1/"');
  if (fixed !== original) {
    const count = (original.match(RE) || []).length;
    fs.writeFileSync(f, fixed, 'utf8');
    console.log(`  fixed ${count} link(s) — ${path.relative(__dirname, f)}`);
    totalFiles++;
    totalLinks += count;
  }
}

console.log(`\nDone — ${totalLinks} links fixed across ${totalFiles} files`);
