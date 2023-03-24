import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { slugFromPost } from '@util/slugFromPost.js'

export async function get(context) {
	const posts = await getCollection('writings');
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
