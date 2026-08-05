# Spoky Curates

**Spoky Curates — Smarter Products. Better Life.**

A polished, content-driven Astro 4 static site for lifestyle and product-review publishing. Covers smart home, tech, wellness, style, and deals categories. Rebranded from Lucky Living.

## Stack

- **Astro 4** — static site generator
- **Tailwind CSS 4** — styling via `@tailwindcss/vite`
- **TypeScript** — typed components and utilities
- **Vite** — bundling and asset processing
- **@astrojs/rss** — RSS feed
- **@astrojs/sitemap** — XML sitemap

## Running the project

```bash
npm run dev      # dev server on port 5000
npm run build    # production build
npm run preview  # preview the production build
```

The dev workflow is configured as **Start application** (`npm run dev`, port 5000).

## Project structure

- `src/pages/` — route-based pages (home, articles, reviews, categories, search)
- `src/components/` — reusable UI components
- `src/layouts/` — shared page layouts
- `src/content/` — Markdown content collections (articles, products)
- `src/data/` — site config, categories, authors
- `src/utils/` — SEO, reading time, related content helpers
- `public/` — static assets (images, favicon, robots.txt)

## Notes

- `astro.config.mjs` `site` is set to `https://spokycurates.com`.
- The dev server binds to `0.0.0.0:5000` for Replit preview compatibility.
- Amazon Associates tag placeholder: `spokycurates-20` — update in `src/data/site.ts`.
- Twitter handle placeholder: `@spokycurates` — update in `src/data/site.ts` when ready.

## User preferences

