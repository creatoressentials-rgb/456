/**
 * wire-images.js
 * Copies featured images from crawled/images/ → src/assets/images/posts/[slug].[ext]
 * and patches featured_image frontmatter in each src/posts/[slug].md
 *
 * Usage: node wire-images.js
 */

const fs   = require('fs');
const path = require('path');

const MANIFEST  = path.join(__dirname, 'crawled', 'blog', '_manifest.json');
const SRC_IMGS  = path.join(__dirname, 'crawled', 'images');
const DEST_IMGS = path.join(__dirname, 'src', 'assets', 'images', 'posts');
const POSTS_DIR = path.join(__dirname, 'src', 'posts');

if (!fs.existsSync(DEST_IMGS)) fs.mkdirSync(DEST_IMGS, { recursive: true });

const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
let copied = 0, patched = 0, skipped = 0;

for (const post of manifest) {
  const { slug, featuredImage } = post;
  if (!featuredImage) { skipped++; continue; }

  // featuredImage is like "images/featured-[slug]-[hash].[ext]"
  const srcFile = path.join(__dirname, 'crawled', featuredImage);
  if (!fs.existsSync(srcFile)) {
    console.warn(`  WARN: source not found: ${srcFile}`);
    skipped++;
    continue;
  }

  const ext      = path.extname(featuredImage) || '.jpg';
  const destName = `${slug}${ext}`;
  const destFile = path.join(DEST_IMGS, destName);
  const publicPath = `/assets/images/posts/${destName}`;

  // Copy image
  fs.copyFileSync(srcFile, destFile);
  copied++;
  console.log(`  ✓ ${slug}${ext}`);

  // Patch frontmatter in the .md file
  const mdPath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(mdPath)) {
    console.warn(`  WARN: post not found: ${mdPath}`);
    continue;
  }

  let md = fs.readFileSync(mdPath, 'utf8');
  // Replace featured_image: "" (or any existing value) with the new path
  const updated = md.replace(
    /^featured_image:\s*["']?[^"'\n]*["']?$/m,
    `featured_image: "${publicPath}"`
  );

  if (updated !== md) {
    fs.writeFileSync(mdPath, updated, 'utf8');
    patched++;
  } else {
    console.warn(`  WARN: could not patch frontmatter in ${slug}.md`);
  }
}

console.log(`\nDone. ${copied} images copied, ${patched} posts patched, ${skipped} skipped.`);
