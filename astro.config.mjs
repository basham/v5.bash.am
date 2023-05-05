import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true
	},
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp'
		}
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
