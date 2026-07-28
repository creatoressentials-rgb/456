# Creator Essentials — Claude Instructions

## Project overview

Eleventy 3.x / Nunjucks static site at `C:\Users\robhe\Documents\creatoressentials`.
Build command: `npx @11ty/eleventy`
Output: `./_site/`

---

## Glossary pages

### File location
All glossary pages live in `src/glossary/[slug].md`.

### Frontmatter template
```yaml
---
layout: layouts/glossary.njk
title: "..."
description: "..."
permalink: /glossary/[slug]/
related_terms:
  - slug-1
  - slug-2
---
```

### Heading structure rule
- The first `<h2>` is the page title — keep it as `<h2>`.
- All subsequent sections that arrive as `<h2>` → convert to `<h3>`.
- Any existing `<h3>` inside those sections → convert to `<h4>`.
- If the incoming content already uses `<h3>`/`<h4>` for sections (not `<h2>`), no conversion is needed.

### Internal links — trailing slashes
All internal `/glossary/` hrefs must include a trailing slash:
`href="/glossary/some-slug/"` not `href="/glossary/some-slug"`

### Strip: Related Terms section
Remove the `<h3>Related terms</h3>` heading and the paragraph of links that follows it. Use the slugs from that paragraph to populate the frontmatter `related_terms` array instead.

### Insert: CTA block
Insert the following block **immediately before** the `<h3>Frequently asked questions</h3>` (or `<h3>FAQ</h3>`) heading in every file:

```html
<div style="margin-top:2.5rem; padding:1.75rem; background:var(--cloud); border-radius:10px;">
  <p style="font-size:0.875rem; font-weight:600; color:var(--charcoal); margin-bottom:0.5rem;">Creator finances handled by someone who gets YouTube.</p>
  <p style="font-size:0.875rem; color:var(--slate); margin-bottom:1.25rem;">Tax prep and bookkeeping built for YouTubers — every income stream, every deduction, done right.</p>
  <a href="/services/tax-services-for-youtubers/" class="btn btn-primary" style="font-size:0.875rem;">Tax Services for Creators</a>
  &nbsp;
  <a href="/services/bookkeeping-for-youtubers/" class="btn btn-secondary" style="font-size:0.875rem; margin-left:0.5rem;">Bookkeeping for Creators</a>
</div>
```

### NEVER create this page
**Do not create a glossary page for slug `youtube-monetization-and-policies`** — ever.

If body content contains an anchor link pointing to `/glossary/youtube-monetization-and-policies/`, strip the `<a>` tag but keep the link text as plain text.

---

## Glossary hub index

Every new glossary page must be linked in `src/pages/glossary-index.njk`.

### Hub structure
- "YouTuber Terms" section uses alphabetical letter groups (`<h3 class="glossary-letter">A</h3>`, etc.).
- "Creator Equipment" section is a flat list with no letter groups.
- Add new terms in correct alphabetical order within the appropriate letter group.
- If a letter group doesn't exist yet, create it in the right position.

### Hub CSS classes
```html
<div class="glossary-categories">
  <div class="glossary-category">
    <h2 class="glossary-category-heading">YouTuber Terms</h2>
    <h3 class="glossary-letter">A</h3>
    <ul class="glossary-term-list">
      <li><a href="/glossary/slug/">Display Name</a></li>
    </ul>
  </div>
</div>
```

---

## CSS custom properties (for reference in glossary content)
- `--red` — brand red
- `--charcoal` — dark text / headings
- `--cloud` — light grey background
- `--white` — white
- `--slate` — secondary text
- `--border` — border color

---

## Workflow for each batch

1. Read the JSON file provided by the user.
2. For each page in the batch:
   - Create `src/glossary/[slug].md` following the frontmatter template and heading rules above.
   - Strip the Related Terms section; add slugs to frontmatter `related_terms`.
   - Add trailing slashes to all internal `/glossary/` hrefs.
   - Strip any link to `youtube-monetization-and-policies` (keep link text).
   - Insert CTA block before the FAQ heading.
3. Add each new term to `src/pages/glossary-index.njk` in alphabetical order.
4. Run `npx @11ty/eleventy` and confirm a clean build with no errors.
