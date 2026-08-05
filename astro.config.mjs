import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lucky-living-astro.vercel.app',

  server: {
    host: '0.0.0.0',
    port: 5000,
  },

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/500'),
    }),
  ],

  output: 'static',

  trailingSlash: 'always',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});