const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const GLOSSARY_DIR = path.join(ROOT, 'src/glossary');
const CRAWL_DIR = path.join(ROOT, 'crawled/glossary');

const STUBS = [
  'ask-me-anything', 'b-roll', 'niche', 'profile-picture', 'softbox', 'vlog',
  'youtube-category', 'youtube-channel-description', 'youtube-community-tab',
  'youtube-live', 'youtube-playlists', 'youtube-shorts', 'youtube-subscribers',
  'youtube-video-description',
];

const SKIP_TEXTS = new Set([
  'All services and products currently unavailable due to demand. Thank you for your understanding.',
  'YouTube Channel Management',
  'YouTube Channel Creation Service',
  'YouTube Playlist Optimizations',
  'YouTube Channel Audit',
  'YouTube Competitor Analysis',
  'YouTube Terms Glossary',
  'Looking for more? Book a YouTube consultation or ask me about my YouTube channel management services today!',
]);

const FOOTER_SENTINELS = [
  "Is a YouTube Coach Worth It?",
  "How to Know When You're Ready for YouTube Coaching",
  "© 2025 by Creator Essentials",
];

function isFooter(text) {
  return FOOTER_SENTINELS.some(s => text.includes(s));
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return { frontmatter: '', rest: content };
  return { frontmatter: match[1] };
}

function buildHTML(paragraphs) {
  const seenTexts = new Set();
  const filtered = [];

  for (const item of paragraphs) {
    const text = item.text.trim();
    if (isFooter(text)) break;
    if (SKIP_TEXTS.has(text)) continue;
    if (seenTexts.has(text)) continue;

    seenTexts.add(text);
    // For "Name\n\nDescription" li items, also mark sub-parts as seen to skip duplicates
    if (text.includes('\n\n')) {
      text.split('\n\n').forEach(p => seenTexts.add(p.trim()));
    }

    filtered.push({ tag: item.tag, text });
  }

  const parts = [];
  let inList = false;

  for (const item of filtered) {
    if (item.tag === 'li') {
      if (!inList) { parts.push('<ul>'); inList = true; }

      if (item.text.includes('\n\n')) {
        const [name, ...descParts] = item.text.split('\n\n');
        const desc = descParts.join(' ').trim();
        parts.push(`<li>\n<p><strong>${escHtml(name.trim())}</strong></p>\n<p>${escHtml(desc)}</p>\n</li>`);
      } else {
        parts.push(`<li>\n<p>${escHtml(item.text)}</p>\n</li>`);
      }
    } else {
      if (inList) { parts.push('</ul>\n'); inList = false; }
      if (item.tag === 'h2') {
        parts.push(`\n<h2>${escHtml(item.text)}</h2>\n`);
      } else if (item.tag === 'h3') {
        parts.push(`\n<h3>${escHtml(item.text)}</h3>\n`);
      } else if (item.tag === 'p') {
        parts.push(`<p>${escHtml(item.text)}</p>`);
      }
    }
  }
  if (inList) parts.push('</ul>\n');

  return parts.join('\n').trim();
}

for (const slug of STUBS) {
  const mdPath = path.join(GLOSSARY_DIR, `${slug}.md`);
  const jsonPath = path.join(CRAWL_DIR, `${slug}.json`);

  if (!fs.existsSync(jsonPath)) { console.log(`SKIP (no JSON): ${slug}`); continue; }

  const mdContent = fs.readFileSync(mdPath, 'utf8');
  const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  const { frontmatter } = parseFrontmatter(mdContent);
  const body = buildHTML(json.paragraphs);

  if (!body) { console.log(`WARN (empty body): ${slug}`); continue; }

  fs.writeFileSync(mdPath, `---\n${frontmatter}\n---\n\n${body}\n`, 'utf8');
  console.log(`DONE: ${slug}.md (${body.length} chars)`);
}
