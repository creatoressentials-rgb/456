# Creator Essentials — Eleventy + Netlify + Decap CMS

YouTube growth consulting site rebuilt from Wix. Clean, minimal design per the Creator Essentials brand guide.

## Tech Stack

- **Static site generator**: [Eleventy](https://www.11ty.dev/) v3
- **CMS**: [Decap CMS](https://decapcms.org/) (formerly Netlify CMS) at `/admin`
- **Hosting**: [Netlify](https://www.netlify.com/)
- **Identity**: Netlify Identity (for CMS login)

---

## Running Locally

```bash
npm install
npm start
```

The site will be available at `http://localhost:8080`.

To build without serving:

```bash
npm run build
```

Output goes to `_site/`.

---

## Project Structure

```
src/
├── _includes/
│   └── layouts/
│       ├── base.njk      ← HTML shell, nav, footer
│       ├── page.njk      ← Wraps base for content pages
│       └── post.njk      ← Wraps base for blog posts
├── assets/
│   ├── css/main.css      ← All styles (brand: red/charcoal/white)
│   ├── js/main.js        ← Mobile nav toggle
│   └── images/           ← Add images here
├── admin/
│   ├── index.html        ← Decap CMS entry point
│   └── config.yml        ← CMS collections and fields
├── posts/                ← Blog posts as Markdown
├── pages/                ← All non-blog pages as Nunjucks/Markdown
└── index.njk             ← Home page
```

---

## Deploying to Netlify

1. Push this repo to GitHub (already done)
2. Go to [netlify.com](https://netlify.com) and connect the GitHub repo
3. Build settings are already in `netlify.toml`:
   - **Build command**: `npx @11ty/eleventy`
   - **Publish directory**: `_site`

---

## Enabling the CMS (`/admin`)

After deploying:

1. In Netlify dashboard → **Identity** → Enable
2. Under Identity settings → **Services** → Enable **Git Gateway**
3. Under Identity settings → **Registration** → set to **Invite Only**
4. Click **Invite users** and invite yourself (rob.heathincometax@gmail.com)
5. You'll receive an email — click the link to set your password
6. Visit `https://your-site.netlify.app/admin` and log in

The CMS lets you create/edit blog posts and update page metadata without touching code.

---

## Adding More Blog Posts

**Via CMS** (after setup above):
- Go to `/admin` → Blog Posts → New Blog Post

**Via code**:
- Add a `.md` file to `src/posts/` with this frontmatter:

```markdown
---
layout: layouts/post.njk
title: "Your Post Title"
date: 2025-01-15
author: "Rob Miller"
description: "One-sentence summary for the blog listing."
tags:
  - Coaching
featured_image: ""
---

Post content here...
```

---

## Adding Images

Drop images into `src/assets/images/`. Reference them in templates or Markdown as `/assets/images/your-file.jpg`.

**Images still needed** (from Wix — must be added manually):
- Rob headshot/profile photo
- YouTube-Certified badge
- Client channel avatars (@LaserAway, @DanHenry, etc.)

See `content-inventory.md` for the full list.

---

## Remaining Blog Posts

The Wix site had 38 blog posts. 7 have been migrated. The remaining 31 are listed in `content-inventory.md` with their live URLs — they can be fetched and added to `src/posts/` as needed.
