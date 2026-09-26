// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages behind the custom domain headrun.eu (DNS at Cloudflare).
// English at the root, Greek under /el.
export default defineConfig({
  site: 'https://headrun.eu',
  // Directory output + trailing slashes: GitHub Pages serves /events/ from events/index.html
  // without a redirect hop.
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  i18n: {
    locales: ['en', 'el'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
