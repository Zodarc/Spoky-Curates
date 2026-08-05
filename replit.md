# Lucky Living

**Lucky Living — Smarter Products. Better Life.**

A polished, content-driven Astro 4 static site for lifestyle and product-review publishing. Covers smart home, tech, wellness, style, and deals categories.

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

- `astro.config.mjs` has `site` set to `https://lucky-living-astro.vercel.app` — update this if deploying to a different domain.
- The dev server binds to `0.0.0.0:5000` for Replit preview compatibility.

## User preferences

