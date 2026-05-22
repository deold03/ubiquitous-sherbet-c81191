# Haus & Co. — Chicago Short-Term Rental Management

A boutique, lead-generation website for a Chicago short-term rental management company. The primary goal is to convert property owners into leads via consultation forms.

## Tech Stack

- **Framework:** TanStack Start (React, SSR)
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Content:** Content Collections (markdown-based CMS for the blog)
- **Forms:** Netlify Forms (AJAX submission with static HTML registration)
- **Hosting:** Netlify

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, value props, comparison table, lead form |
| `/services` | Three service lines: STR management, design, real estate |
| `/about` | Founder story and company philosophy |
| `/case-studies` | Portfolio of managed properties with placeholder results |
| `/pricing` | Transparent revenue share pricing + competitor comparison |
| `/resources` | Blog index (powered by Content Collections) |
| `/resources/$slug` | Individual blog post |
| `/checklist` | Lead magnet — free STR Starter Checklist with email opt-in |
| `/contact` | Primary lead capture form |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`.

## Adding Blog Posts

Create a new `.md` file in `content/posts/` with this frontmatter:

```markdown
---
title: "Your Post Title"
description: "A short description for SEO and previews"
published: "2024-06-01"
author: "[FOUNDER NAME]"
tags: ["tag1", "tag2"]
category: "Strategy"
image: "https://images.unsplash.com/photo-xxxxx?w=1200&q=80"
---

Your markdown content here...
```

The post will automatically appear in `/resources` and be accessible at `/resources/your-filename`.

## Customizing Placeholder Content

All placeholder text is marked with brackets like `[FOUNDER NAME]`, `[PHONE]`, `[EMAIL]`, `[X]%`, etc. Search the codebase for `[` to find all items that need real content.

## Forms

Forms use Netlify Forms with AJAX submission. The static registration file is at `public/forms.html`. Four forms are registered:

- `home-lead` — homepage lead capture
- `contact-lead` — contact page lead capture  
- `checklist` — checklist email opt-in
- `newsletter` — blog newsletter signup

## SEO

- Schema.org LocalBusiness markup in `__root.tsx` — update with real domain, phone, email
- Open Graph and Twitter Card meta tags on each page
- `public/sitemap.xml` — update with real domain before launch
- `public/robots.txt` — update with real domain
