import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true
	},
	image: {
		service: 'astro/assets/services/sharp'
	},
	integrations: [
		mdx(),
		sitemap()
	],
	site: 'https://bash.am'
});
