// @ts-check
import process from 'node:process';
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import unoCSS from 'unocss/astro';
import {getSiteBasePath, joinBasePath} from './config/base-path.mjs';

const legacyMassagesPath = joinBasePath('/massages/');
const shortRedirectPath = joinBasePath('/v/');
const excludedSitemapPaths = new Set([legacyMassagesPath, shortRedirectPath]);
const siteUrl = process.env.SITE_URL?.trim() || 'https://lesmainsdeserenite.fr';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
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
