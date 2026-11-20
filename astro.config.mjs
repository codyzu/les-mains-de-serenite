// @ts-check
import process from 'node:process';
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import unoCSS from 'unocss/astro';
import {getSiteBasePath, joinBasePath} from './config/base-path.mjs';
import {validateIcons} from './config/validate-icons.mjs';

const legacyMassagesPath = joinBasePath('/massages/');
const shortRedirectPath = joinBasePath('/v/');
const sponsorRedirectPath = joinBasePath('/s/');
const excludedSitemapPaths = new Set([
  legacyMassagesPath,
  shortRedirectPath,
  sponsorRedirectPath,
]);
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
      content: {
        pipeline: {
          include: [
            /\.(?:vue|svelte|[jt]sx|vine\.ts|mdx?|astro|elm|php|phtml|marko|html)(?:$|\?)/v,
            // Localized data supplies icon classes that UnoCSS cannot see in Astro markup.
            /\/src\/data\/.*\.ts$/v,
          ],
        },
      },
    }),
    validateIcons,
  ],
});
