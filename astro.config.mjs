// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import unoCSS from 'unocss/astro';
import {getSiteBasePath, joinBasePath} from './config/base-path.mjs';

const legacyMassagesPath = joinBasePath('/massages/');
const shortRedirectPath = joinBasePath('/v/');
const excludedSitemapPaths = new Set([legacyMassagesPath, shortRedirectPath]);
const cloudflarePagesUrl = import.meta.env.CF_PAGES_URL?.trim();

// https://astro.build/config
export default defineConfig({
  site: cloudflarePagesUrl || 'https://lesmainsdeserenite.fr',
  base: getSiteBasePath(),
  integrations: [
    sitemap({
      filter: (page) => !excludedSitemapPaths.has(new URL(page).pathname),
    }),
    unoCSS({
      injectReset: '@unocss/reset/tailwind-v4.css',
    }),
  ],
});
