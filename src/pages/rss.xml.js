import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { slugFromPost } from '@util/slugFromPost.js'

export async function GET(context) {
	const posts = await getCollection('notes');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: slugFromPost(post),
		})),
	});
}
