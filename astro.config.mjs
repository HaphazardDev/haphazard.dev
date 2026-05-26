// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const defaultSiteUrl = 'https://haphazard.dev';
const isPreviewContext = process.env.CONTEXT === 'deploy-preview' || process.env.CONTEXT === 'branch-deploy';
const netlifySiteUrl = isPreviewContext ? process.env.DEPLOY_PRIME_URL : process.env.URL;

// https://astro.build/config
export default defineConfig({
  site: netlifySiteUrl || process.env.DEPLOY_PRIME_URL || defaultSiteUrl,
  integrations: [sitemap()],
});
