'use strict';
const fs   = require('fs');
const path = require('path');

// ── PATHS ─────────────────────────────────────────────────────────────────────
const BASE_DIR    = path.join(__dirname, '..');
const GLOSSARY_DIR = path.join(BASE_DIR, 'src', 'glossary');
const POSTS_DIR   = path.join(BASE_DIR, 'src', 'posts');
const OUTPUT_PATH = path.join(BASE_DIR, 'link-opportunities.md');

// ── SERVICE MAP ───────────────────────────────────────────────────────────────
const SERVICE_MAP = [
  {
    patterns: [/youtube\s+coaching\s+program/i, /youtube\s+coach(?:ing)?/i, /coaching\s+program/i],
    url: '/services/youtube-coaching-program/',
    label: 'YouTube Coaching Program',
  },
  {
    patterns: [/youtube\s+consulting/i, /youtube\s+consultant/i],
    url: '/services/youtube-consulting/',
    label: 'YouTube Consulting',
  },
  {
    patterns: [/channel\s+management/i, /channel\s+manager/i],
    url: '/services/youtube-channel-management/',
    label: 'YouTube Channel Management',
  },
  {
    patterns: [/channel\s+audit/i],
    url: '/services/youtube-channel-audit/',
    label: 'YouTube Channel Audit',
  },
  {
    patterns: [/youtube\s+seo/i],
    url: '/products/youtube-seo/',
    label: 'YouTube SEO Service',
  },
  {
    patterns: [/channel\s+creation/i],
    url: '/products/youtube-channel-creation/',
    label: 'YouTube Channel Creation',
  },
];

// ── TOPIC CLUSTERS ────────────────────────────────────────────────────────────
const TOPIC_CLUSTERS = [
  ['click-through-rate', 'youtube-impressions', 'youtube-thumbnails', 'youtube-video-titles', 'clickbait'],
  ['retention', 'average-view-duration', 'average-percentage-viewed', 'youtube-watch-time', 'youtube-hooks'],
  ['seo', 'keywords', 'youtube-video-tags', 'youtube-video-description', 'youtube-channel-keywords'],
  ['youtube-algorithm', 'recommended-videos', 'youtube-impressions', 'youtube-shorts', 'retention'],
  ['youtube-subscribers', 'youtube-view', 'youtube-watch-time', 'youtube-cpm'],
  ['youtube-affiliate-marketing', 'youtube-ads', 'youtube-cpm'],
  ['youtube-community-tab', 'youtube-cards', 'end-screens', 'cta', 'youtube-playlists'],
  ['youtube-collab', 'influencers', 'youtube-live'],
  ['condenser-microphones', 'dynamic-microphones', 'lavalier-microphones', 'microphone-preamp', 'sound-card'],
  ['ring-light', 'softbox', 'dslr-cameras', 'action-camera', 'webcams', 'camcorders'],
  ['youtube-burnout', 'shadow-banning', 'sub-for-sub'],
  ['youtube-channel', 'youtube-channel-art', 'profile-picture', 'youtube-channel-description', 'youtube-branding-watermark', 'youtube-channel-keywords', 'youtube-channel-demographics'],
  ['royalty-free-music', 'creative-commons'],
  ['youtube-live', 'youtube-shorts', 'youtube-community-tab', 'youtube-video-chapters'],
  ['youtube-studio', 'youtube-channel-demographics', 'youtube-cpm'],
  ['b-roll', 'youtube-video-chapters'],
  ['closed-captions', 'youtube-video-description', 'youtube-category'],
];

// ── TERM WEIGHTS ──────────────────────────────────────────────────────────────
const TERM_WEIGHTS = {
  'click-through-rate': 3,
  'retention':          3,
  'youtube-algorithm':  3,
  'seo':                3,
  'youtube-watch-time': 3,
  'youtube-thumbnails': 3,
  'youtube-hooks':      3,
  'keywords':           2,
  'youtube-impressions':2,
  'average-view-duration': 2,
  'youtube-shorts':     2,
  'youtube-video-titles': 2,
  'youtube-subscribers':2,
  'viral':              2,
  'youtube-cpm':        2,
};

// ── ALTERNATE SEARCH TERMS ────────────────────────────────────────────────────
// Extra case-insensitive strings to scan for each glossary slug.
const ALTERNATE_TERMS = {
  'youtube-algorithm':         ['algorithm'],
  'youtube-thumbnails':        ['thumbnail', 'thumbnails'],
  'youtube-hooks':             ['hook', 'hooks'],
  'youtube-watch-time':        ['watch time'],
  'retention':                 ['audience retention', 'viewer retention'],
  'click-through-rate':        ['CTR', 'click through rate'],
  'seo':                       ['SEO', 'search engine optimization'],
  'keywords':                  ['keyword'],
  'youtube-cpm':               ['CPM'],
  'youtube-impressions':       ['impressions', 'impression'],
  'youtube-subscribers':       ['subscribers', 'subscriber'],
  'youtube-shorts':            ['Shorts'],
  'youtube-video-titles':      ['video title', 'video titles', 'title optimization'],
  'average-view-duration':     ['AVD', 'average view duration'],
  'average-percentage-viewed': ['APV', 'average percentage viewed'],
  'youtube-video-tags':        ['video tags', 'tags', 'tag'],
  'youtube-community-tab':     ['community tab', 'community posts'],
  'cta':                       ['CTA', 'call to action', 'call-to-action'],
  'end-screens':               ['end screen', 'end card', 'end cards'],
  'youtube-playlists':         ['playlist', 'playlists'],
  'hashtags':                  ['hashtag'],
  'closed-captions':           ['captions', 'subtitles'],
  'royalty-free-music':        ['royalty-free music', 'royalty free music'],
  'b-roll':                    ['b-roll'],
  'youtube-affiliate-marketing': ['affiliate marketing', 'affiliate program'],
  'influencers':               ['influencer'],
  'youtube-collab':            ['collab', 'collaboration', 'collaborations'],
  'youtube-burnout':           ['burnout', 'burn out'],
  'youtube-cards':             ['cards'],
  'youtube-channel-keywords':  ['channel keywords'],
  'youtube-video-description': ['video description'],
  'youtube-video-chapters':    ['chapters', 'chapter', 'video chapters'],
  'youtube-live':              ['live stream', 'live streaming', 'livestream'],
  'creative-commons':          ['creative commons'],
  'shadow-banning':            ['shadowban', 'shadow ban', 'shadow banning'],
  'sub-for-sub':               ['sub for sub'],
  'viral':                     ['go viral', 'went viral', 'virality'],
  'vlog':                      ['vlogger', 'vlogging'],
  'youtube-ads':               ['YouTube ads', 'AdSense'],
  'youtube-channel-art':       ['channel art', 'banner art'],
  'youtube-branding-watermark':['branding watermark', 'watermark'],
  'youtube-studio':            ['YouTube Studio', 'creator studio'],
};

// ── STOP WORDS ────────────────────────────────────────────────────────────────
const STOP_WORDS = new Set([
  'a','an','the','to','of','is','for','how','what','does','are','my','on','in',
  'with','your','do','and','but','or','it','i','as','its','be','by','at','from',
  'up','that','this','was','have','has','if','not','no','vs','which','when',
  'should','you','get','out','more','key','tips','best','top','can','need',
  'know','about','here','why','so','1','2','3','4','5','6','7','8','9','10',
]);

// ── UTILITIES ─────────────────────────────────────────────────────────────────

function parseFrontmatter(content) {
  const FM_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match  = content.match(FM_RE);
  if (!match) return { meta: {}, body: content };

  const meta  = {};
  const lines = match[1].split(/\r?\n/);
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    // Array key (no value on same line)
    const arrM = line.match(/^([\w][\w_-]*):\s*$/);
    if (arrM) {
      const key = arrM[1];
      const arr = [];
      i++;
      while (i < lines.length && /^\s+-\s+/.test(lines[i])) {
        arr.push(lines[i].replace(/^\s+-\s+/, '').replace(/^["']|["']$/g, ''));
        i++;
      }
      meta[key] = arr;
      continue;
    }
    // Scalar key: value
    const scalM = line.match(/^([\w][\w_-]*):\s*(.*)/);
    if (scalM) {
      meta[scalM[1]] = scalM[2].replace(/^["']|["']$/g, '');
    }
    i++;
  }

  return { meta, body: match[2] };
}

function stripLinks(markdown) {
  return markdown.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractExistingLinks(body) {
  const links = new Set();
  const add = url => links.add(normalizeUrl(url));
  // Markdown links
  const mdRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let m;
  while ((m = mdRe.exec(body)) !== null) add(m[2]);
  // HTML anchors
  const htmlRe = /<a\s[^>]*href=["']([^"']+)["'][^>]*>/gi;
  while ((m = htmlRe.exec(body)) !== null) add(m[1]);
  return links;
}

function normalizeUrl(url) {
  return url.split('#')[0].replace(/\/*$/, '/');
}

function buildTermRegex(phrase) {
  const escaped      = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const withOptHyphen = escaped.replace(/\\-/g, '[-\\s]?');
  return new RegExp(`(?<![\\w-])${withOptHyphen}(?![\\w-])`, 'gi');
}

function countMatches(text, re) {
  re.lastIndex = 0;
  const m = text.match(re);
  return m ? m.length : 0;
}

function firstMatchText(text, re) {
  re.lastIndex = 0;
  const m = re.exec(text);
  return m ? m[0] : null;
}

function slugToName(slug) {
  const overrides = {
    'b-roll': 'B-Roll', 'click-through-rate': 'Click-Through Rate',
    'cta': 'CTA', 'dslr-cameras': 'DSLR Cameras',
    'royalty-free-music': 'Royalty-Free Music', 'seo': 'SEO',
    'sub-for-sub': 'Sub for Sub', 'youtube-cpm': 'YouTube CPM',
  };
  if (overrides[slug]) return overrides[slug];
  const wm = { youtube:'YouTube', cpm:'CPM', seo:'SEO', dslr:'DSLR', ama:'AMA', avd:'AVD', cta:'CTA' };
  return slug.split('-').map(w => wm[w] || (w.charAt(0).toUpperCase() + w.slice(1))).join(' ');
}

function getFirstH2(html) {
  const m = html.match(/<h2[^>]*>(.*?)<\/h2>/i);
  return m ? stripHtml(m[1]).trim() : null;
}

function significantWords(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
}

function scorePriority(count, slug) {
  const weight = TERM_WEIGHTS[slug] || 1;
  const score  = count * 2 + weight;
  if (score >= 7) return 'high';
  if (score >= 4) return 'medium';
  return 'low';
}

function priorityIcon(p) {
  return p === 'high' ? '🔴' : p === 'medium' ? '🟡' : '⚪';
}

// ── LOADERS ──────────────────────────────────────────────────────────────────

function loadGlossaryTerms() {
  const files = fs.readdirSync(GLOSSARY_DIR).filter(f => f.endsWith('.md'));
  return files.map(filename => {
    const content = fs.readFileSync(path.join(GLOSSARY_DIR, filename), 'utf8');
    const { meta, body } = parseFrontmatter(content);

    const slug = (meta.permalink || '').replace(/^\/glossary\//, '').replace(/\/$/, '')
                 || filename.replace('.md', '');
    const url  = meta.permalink || `/glossary/${slug}/`;

    const h2           = getFirstH2(body);
    const canonicalName = h2 || slugToName(slug);
    const plainBody    = stripHtml(body);
    const hasBody      = plainBody.length > 100;

    // Build search terms (longest first for greedy matching)
    const termsSet = new Set([canonicalName.toLowerCase()]);
    for (const alt of (ALTERNATE_TERMS[slug] || [])) {
      termsSet.add(alt.toLowerCase());
    }
    const searchTerms = Array.from(termsSet).sort((a, b) => b.length - a.length);

    return {
      filename,
      slug,
      url,
      canonicalName,
      searchTerms,
      relatedTerms: Array.isArray(meta.related_terms) ? meta.related_terms : [],
      hasBody,
      plainBody,
    };
  }).sort((a, b) => a.slug.localeCompare(b.slug));
}

function loadBlogPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  return files.map(filename => {
    const content = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
    const { meta, body } = parseFrontmatter(content);

    const slug = filename.replace('.md', '');
    const url  = `/posts/${slug}/`;
    const tags = Array.isArray(meta.tags)
      ? meta.tags
      : (meta.tags ? [meta.tags] : []);

    return {
      filename,
      slug,
      url,
      title: meta.title || slug,
      tags,
      body,
      existingLinks: extractExistingLinks(body),
    };
  }).sort((a, b) => a.slug.localeCompare(b.slug));
}

// ── ANALYZERS ─────────────────────────────────────────────────────────────────

function findGlossaryOpportunities(post, glossaryTerms) {
  const stripped = stripLinks(post.body);
  const results  = [];

  for (const term of glossaryTerms) {
    if (post.existingLinks.has(normalizeUrl(term.url))) continue;

    let bestCount  = 0;
    let bestAnchor = null;

    for (const phrase of term.searchTerms) {
      const re    = buildTermRegex(phrase);
      const count = countMatches(stripped, re);
      if (count > bestCount) {
        bestCount  = count;
        const raw  = firstMatchText(stripped, buildTermRegex(phrase));
        bestAnchor = raw || phrase;
      }
    }

    if (bestCount > 0) {
      results.push({
        slug:          term.slug,
        url:           term.url,
        canonicalName: term.canonicalName,
        anchorText:    bestAnchor,
        count:         bestCount,
        priority:      scorePriority(bestCount, term.slug),
      });
    }
  }

  const order = { high: 0, medium: 1, low: 2 };
  return results.sort((a, b) => {
    const d = order[a.priority] - order[b.priority];
    return d !== 0 ? d : b.count - a.count;
  });
}

function findServiceOpportunities(post) {
  const stripped = stripLinks(post.body);
  const results  = [];

  for (const svc of SERVICE_MAP) {
    if (post.existingLinks.has(normalizeUrl(svc.url))) continue;

    let totalCount = 0;
    let bestAnchor = null;

    for (const pat of svc.patterns) {
      const matches = stripped.match(new RegExp(pat.source, 'gi')) || [];
      totalCount += matches.length;
      if (matches.length > 0 && !bestAnchor) bestAnchor = matches[0];
    }

    if (totalCount > 0) {
      results.push({
        url:       svc.url,
        label:     svc.label,
        anchorText: bestAnchor || svc.label,
        count:     totalCount,
        priority:  'high',
      });
    }
  }

  return results.sort((a, b) => b.count - a.count);
}

function findCrossPostOpportunities(post, allPosts) {
  const myWords = new Set(significantWords(post.title));
  const results = [];

  for (const other of allPosts) {
    if (other.slug === post.slug) continue;
    if (post.existingLinks.has(normalizeUrl(other.url))) continue;

    const sharedTags  = post.tags.filter(t => other.tags.includes(t));
    const otherWords  = significantWords(other.title);
    const sharedWords = otherWords.filter(w => myWords.has(w));
    const score       = sharedTags.length * 3 + sharedWords.length;

    if (score >= 3) {
      results.push({
        slug:       other.slug,
        url:        other.url,
        title:      other.title,
        sharedTags,
        sharedWords,
        score,
        priority:   score >= 6 ? 'high' : 'medium',
      });
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, 5);
}

function buildOpportunityIndexes(glossaryTerms, posts) {
  const byPost = {};
  const byTerm = {};

  for (const post of posts) {
    byPost[post.slug] = { post, glossary: [], services: [], crossPosts: [] };
  }
  for (const term of glossaryTerms) {
    byTerm[term.slug] = { term, posts: [] };
  }

  for (const post of posts) {
    const glossaryOpps = findGlossaryOpportunities(post, glossaryTerms);
    const serviceOpps  = findServiceOpportunities(post);
    const crossOpps    = findCrossPostOpportunities(post, posts);

    byPost[post.slug].glossary   = glossaryOpps;
    byPost[post.slug].services   = serviceOpps;
    byPost[post.slug].crossPosts = crossOpps;

    for (const opp of glossaryOpps) {
      if (byTerm[opp.slug]) {
        byTerm[opp.slug].posts.push({
          post,
          count:      opp.count,
          anchorText: opp.anchorText,
          priority:   opp.priority,
        });
      }
    }
  }

  for (const entry of Object.values(byTerm)) {
    entry.posts.sort((a, b) => b.count - a.count);
  }

  return { byPost, byTerm };
}

function analyzeGlossaryGaps(glossaryTerms) {
  const termMap = {};
  for (const t of glossaryTerms) termMap[t.slug] = t;

  // Build cluster peer map
  const clusterPeers = {};
  for (const cluster of TOPIC_CLUSTERS) {
    for (const slug of cluster) {
      if (!clusterPeers[slug]) clusterPeers[slug] = new Set();
      for (const peer of cluster) {
        if (peer !== slug) clusterPeers[slug].add(peer);
      }
    }
  }

  return glossaryTerms.map(term => {
    const current   = new Set(term.relatedTerms);
    const suggested = new Set();

    // Cluster peers not already listed
    for (const peer of (clusterPeers[term.slug] || new Set())) {
      if (!current.has(peer) && termMap[peer]) suggested.add(peer);
    }

    // Body-mention scan (only for terms with real body content)
    if (term.hasBody) {
      for (const other of glossaryTerms) {
        if (other.slug === term.slug) continue;
        if (current.has(other.slug) || suggested.has(other.slug)) continue;
        for (const phrase of other.searchTerms.slice(0, 2)) {
          const re = buildTermRegex(phrase);
          re.lastIndex = 0;
          if (re.test(term.plainBody)) {
            suggested.add(other.slug);
            break;
          }
        }
      }
    }

    const validSuggested = Array.from(suggested).filter(s => termMap[s]).slice(0, 6);
    return { term, currentRelated: term.relatedTerms, suggested: validSuggested };
  });
}

// ── REPORT ────────────────────────────────────────────────────────────────────

function mdLink(text, url) {
  return `[${text}](${url})`;
}

function generateReport(byPost, byTerm, glossaryGaps, glossaryTerms, posts) {
  const lines = [];
  const now   = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

  // Totals
  let totGlossary = 0, totService = 0, totCross = 0;
  for (const { glossary, services, crossPosts } of Object.values(byPost)) {
    totGlossary += glossary.length;
    totService  += services.length;
    totCross    += crossPosts.length;
  }
  const termsWithPosts = Object.values(byTerm).filter(t => t.posts.length > 0).length;
  const gapCount       = glossaryGaps.filter(g => g.suggested.length > 0).length;

  // ── Header ────────────────────────────────────────────────────────────────
  lines.push('# Link Opportunities Audit');
  lines.push(`Generated: ${now}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push('| Metric | Count |');
  lines.push('|--------|-------|');
  lines.push(`| Blog posts scanned | ${posts.length} |`);
  lines.push(`| Glossary terms loaded | ${glossaryTerms.length} |`);
  lines.push(`| Blog → Glossary term opportunities | ${totGlossary} |`);
  lines.push(`| Blog → Service/Product page opportunities | ${totService} |`);
  lines.push(`| Blog → Blog cross-link opportunities | ${totCross} |`);
  lines.push(`| Glossary terms mentioned without links (across all posts) | ${termsWithPosts} |`);
  lines.push(`| Glossary terms with suggested related_terms additions | ${gapCount} |`);
  lines.push('');
  lines.push('---');
  lines.push('');

  // ── Section 1: By Post ────────────────────────────────────────────────────
  lines.push('## Section 1: Opportunities by Blog Post');
  lines.push('');
  lines.push('> Sorted by total inline opportunities (glossary + service). Posts with no opportunities are omitted.');
  lines.push('');

  const sortedPosts = posts.slice().sort((a, b) => {
    const at = byPost[a.slug].glossary.length + byPost[a.slug].services.length;
    const bt = byPost[b.slug].glossary.length + byPost[b.slug].services.length;
    return bt - at;
  });

  for (const post of sortedPosts) {
    const { glossary, services, crossPosts } = byPost[post.slug];
    if (glossary.length === 0 && services.length === 0 && crossPosts.length === 0) continue;

    lines.push(`### ${post.filename}`);
    lines.push(`**Title:** ${post.title}  `);
    lines.push(`**URL:** \`${post.url}\`  `);
    lines.push(`**Tags:** ${post.tags.join(', ') || '_none_'}`);
    lines.push('');

    // Glossary
    lines.push(`#### Glossary Term Opportunities (${glossary.length})`);
    if (glossary.length === 0) {
      lines.push('_None_');
    } else {
      lines.push('| | Term | Mentions | Suggested markdown |');
      lines.push('|--|------|----------|-------------------|');
      for (const o of glossary) {
        const link = `\`${mdLink(o.anchorText, o.url)}\``;
        lines.push(`| ${priorityIcon(o.priority)} | ${o.canonicalName} | ${o.count} | ${link} |`);
      }
    }
    lines.push('');

    // Services
    lines.push(`#### Service Page Opportunities (${services.length})`);
    if (services.length === 0) {
      lines.push('_None_');
    } else {
      lines.push('| | Page | Mentions | Suggested markdown |');
      lines.push('|--|------|----------|-------------------|');
      for (const o of services) {
        const link = `\`${mdLink(o.anchorText, o.url)}\``;
        lines.push(`| ${priorityIcon(o.priority)} | ${o.label} | ${o.count} | ${link} |`);
      }
    }
    lines.push('');

    // Cross-posts
    lines.push(`#### Related Posts to Cross-Link (${crossPosts.length})`);
    if (crossPosts.length === 0) {
      lines.push('_None_');
    } else {
      lines.push('| | Related Post | Signal | Suggested markdown |');
      lines.push('|--|--------------|--------|-------------------|');
      for (const o of crossPosts) {
        const signal    = o.sharedTags.length > 0
          ? `Tag: ${o.sharedTags.join(', ')}`
          : `Words: ${o.sharedWords.slice(0, 3).join(', ')}`;
        const shortTitle = o.title.replace(/^\d+\s+/, '').replace(/[?!]$/, '');
        const link       = `\`${mdLink(shortTitle, o.url)}\``;
        lines.push(`| ${priorityIcon(o.priority)} | ${o.slug}.md | ${signal} | ${link} |`);
      }
    }
    lines.push('');
    lines.push('---');
    lines.push('');
  }

  // ── Section 2: By Glossary Term ───────────────────────────────────────────
  lines.push('## Section 2: Opportunities by Glossary Term');
  lines.push('');
  lines.push('> Each row = a blog post that mentions this term but never links to its glossary page.');
  lines.push('> Sorted by total unlinked mentions across all posts.');
  lines.push('');

  const termEntries = Object.values(byTerm)
    .filter(t => t.posts.length > 0)
    .sort((a, b) => {
      const at = a.posts.reduce((s, p) => s + p.count, 0);
      const bt = b.posts.reduce((s, p) => s + p.count, 0);
      return bt - at;
    });

  for (const { term, posts: tp } of termEntries) {
    const totalMentions = tp.reduce((s, p) => s + p.count, 0);
    lines.push(`### ${term.canonicalName}`);
    lines.push(`**Glossary URL:** \`${term.url}\`  `);
    lines.push(`**Unlinked in ${tp.length} post(s) — ${totalMentions} total mentions**`);
    lines.push('');
    lines.push('| | Post | Mentions | Suggested markdown |');
    lines.push('|--|------|----------|-------------------|');
    for (const { post, count, anchorText, priority } of tp) {
      const link = `\`${mdLink(anchorText, term.url)}\``;
      lines.push(`| ${priorityIcon(priority)} | ${post.filename} | ${count} | ${link} |`);
    }
    lines.push('');
  }

  lines.push('---');
  lines.push('');

  // ── Section 3: Glossary Cross-Reference Gaps ──────────────────────────────
  lines.push('## Section 3: Glossary Cross-Reference Gaps');
  lines.push('');
  lines.push('> Terms whose `related_terms` frontmatter is empty or incomplete.');
  lines.push('> Add the suggested slugs to the `related_terms:` array in the relevant `.md` file.');
  lines.push('');

  const noRelated  = glossaryGaps.filter(g => g.currentRelated.length === 0);
  const hasRelated = glossaryGaps.filter(g => g.currentRelated.length > 0 && g.suggested.length > 0);

  lines.push(`### Terms with No related_terms (${noRelated.length})`);
  lines.push('');
  for (const { term, suggested } of noRelated) {
    if (suggested.length === 0) {
      lines.push(`- **\`${term.slug}\`** — no cluster peers or body-mentions found`);
    } else {
      lines.push(`- **\`${term.slug}\`** → add: ${suggested.map(s => `\`${s}\``).join(', ')}`);
    }
  }
  lines.push('');

  lines.push(`### Terms with Partial related_terms (${hasRelated.length})`);
  lines.push('');
  for (const { term, currentRelated, suggested } of hasRelated) {
    const cur = currentRelated.map(s => `\`${s}\``).join(', ');
    const add = suggested.map(s => `\`${s}\``).join(', ');
    lines.push(`- **\`${term.slug}\`** (has: ${cur}) → also add: ${add}`);
  }
  lines.push('');

  return lines.join('\n');
}

// ── MAIN ─────────────────────────────────────────────────────────────────────

function main() {
  console.log('Loading glossary terms...');
  const glossaryTerms = loadGlossaryTerms();
  console.log(`  Loaded ${glossaryTerms.length} terms`);

  console.log('Loading blog posts...');
  const posts = loadBlogPosts();
  console.log(`  Loaded ${posts.length} posts`);

  console.log('Analyzing link opportunities...');
  const { byPost, byTerm } = buildOpportunityIndexes(glossaryTerms, posts);

  console.log('Analyzing glossary cross-reference gaps...');
  const glossaryGaps = analyzeGlossaryGaps(glossaryTerms);

  console.log('Generating report...');
  const report = generateReport(byPost, byTerm, glossaryGaps, glossaryTerms, posts);

  fs.writeFileSync(OUTPUT_PATH, report, 'utf8');
  console.log(`\nReport written to: ${OUTPUT_PATH}`);

  // Quick summary to console
  let totGlossary = 0, totService = 0;
  for (const { glossary, services } of Object.values(byPost)) {
    totGlossary += glossary.length;
    totService  += services.length;
  }
  console.log(`  Blog → Glossary opportunities:      ${totGlossary}`);
  console.log(`  Blog → Service page opportunities:  ${totService}`);
  console.log(`  Glossary terms with gaps:           ${glossaryGaps.filter(g => g.suggested.length > 0).length}`);
}

main();
