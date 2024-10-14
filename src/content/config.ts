import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date().transform((d) =>
			new Date(d.getTime() + Math.abs(d.getTimezoneOffset() * 60000))
		),
		draft: z.boolean().optional().default(false)
	})
});

export const collections = { notes };
