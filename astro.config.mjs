import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://tvkapps.example',
  // Hybrid: most pages prerendered (see `export const prerender = true` per page),
  // only the /api routes run server-side. The two API routes opt into Vercel's
  // Edge runtime via `export const config = { runtime: 'edge' }`.
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: false },
    maxDuration: 8,
  }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
