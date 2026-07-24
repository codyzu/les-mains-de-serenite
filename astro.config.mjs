// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import unoCSS from 'unocss/astro';
import {getSiteBasePath, joinBasePath} from './config/base-path.mjs';

const legacyMassagesPath = joinBasePath('/massages/');

// https://astro.build/config
export default defineConfig({
  site: 'https://lesmainsdeserenite.fr',
  base: getSiteBasePath(),
  integrations: [
    sitemap({
      filter: (page) => new URL(page).pathname !== legacyMassagesPath,
    }),
    unoCSS({
      injectReset: '@unocss/reset/tailwind-v4.css',
    }),
  ],
});
