// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import unoCSS from 'unocss/astro';
import {getSiteBasePath} from './config/base-path.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://lesmainsdeserenite.fr',
  base: getSiteBasePath(),
  integrations: [
    sitemap(),
    unoCSS({
      injectReset: '@unocss/reset/tailwind-v4.css',
    }),
  ],
});
