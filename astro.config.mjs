import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	build: {
		assets: 'assets'
	},
	integrations: [
		mdx(),
		sitemap()
	],
	markdown: {
		shikiConfig: {
			theme: 'css-variables'
		}
	},
	site: 'https://bash.am'
});
