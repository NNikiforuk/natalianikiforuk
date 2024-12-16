// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: "https://nikicodes.com",
	integrations: [tailwind(), icon(), sitemap()],
});