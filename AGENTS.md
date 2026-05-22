# AGENTS.md — Haus & Co. Architecture Guide

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

Lead-generation marketing website for a Chicago short-term rental management company (Haus & Co.). Single goal: convert property owner visitors into form submissions. No e-commerce, no authentication, no database required. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 with inline arbitrary values |
| Content | Content Collections (markdown CMS for blog) |
| Forms | Netlify Forms (AJAX submission) |
| Language | TypeScript 5 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── content/
│   └── posts/          # Markdown blog posts
├── public/
│   ├── forms.html      # CRITICAL: Netlify Forms static registration
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Nav.tsx       # Fixed top nav with mobile menu
│   │   ├── Footer.tsx    # Site footer
│   │   └── LeadForm.tsx  # Reusable AJAX lead capture form
│   ├── routes/
│   │   ├── __root.tsx          # Root layout (Nav + Footer + SEO schema)
│   │   ├── index.tsx           # Home page
│   │   ├── services.tsx        # Services page
│   │   ├── about.tsx           # About/founder page
│   │   ├── case-studies.tsx    # Portfolio page
│   │   ├── pricing.tsx         # Pricing + comparison page
│   │   ├── resources.tsx       # Blog index
│   │   ├── resources.$slug.tsx # Blog post template
│   │   ├── checklist.tsx       # Lead magnet / email opt-in
│   │   └── contact.tsx         # Primary lead form
│   └── styles.css              # Global styles, fonts, prose
├── content-collections.ts      # Blog schema definition
├── vite.config.ts
└── tsconfig.json
```

## Design System

Colors (used as Tailwind arbitrary values):
- `#F5F0E8` — cream (page background)
- `#E8DFD0` — sand (section backgrounds)
- `#D4C5B0` — beige (borders, dividers)
- `#2D4A3E` — forest green (primary CTAs, brand)
- `#1C1C1C` — charcoal (dark section backgrounds, headings)
- `#6B6560` — muted brown (body text)

Typography: `font-['Playfair_Display',serif]` for headings, `font-['Inter',sans-serif]` for body. Loaded from Google Fonts in `__root.tsx`.

## Content Collections (Blog)

Blog posts are in `content/posts/*.md`. Schema in `content-collections.ts`. Posts are accessed via `import { allPosts } from 'content-collections'` inside route loaders. The slug is derived from `post._meta.path` (filename without extension).

Required frontmatter: `title`, `description`, `published` (YYYY-MM-DD), `author`. Optional: `tags`, `category`, `image`.

## Forms Pattern

All forms use Netlify Forms with AJAX. Key requirements:
1. `public/forms.html` must have a matching `<form name="..." netlify hidden>` for each form
2. React components POST to `'/forms.html'` with URL-encoded body
3. A `form-name` hidden input must be included in every submission

Four registered forms: `home-lead`, `contact-lead`, `checklist`, `newsletter`.

The reusable `LeadForm` component handles the AJAX pattern. Use it on any page with `<LeadForm formName="..." formHtmlFile="forms.html" />`.

## SEO

Per-route meta is set in the `head()` function on each route's `Route` export. Root sets site-wide LocalBusiness schema. All pages override `title`, `description`, and `og:title`.

## Placeholder Content

All items needing real data use `[BRACKET NOTATION]`. Search for `[` to find all 30+ placeholders: founder name, email, phone, domain, revenue stats, property details, pricing percentages.

## Conventions

- No CSS files beyond `styles.css` — all styling via Tailwind inline classes
- No comments on obvious code
- TypeScript strict mode — no `any` types
- Images: Unsplash URLs with `?w=XXX&q=80` parameters
