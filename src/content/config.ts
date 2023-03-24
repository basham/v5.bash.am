import { defineCollection, z } from 'astro:content';

const writings = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z
			.date()
			.transform((d) => new Date(d.getTime() + Math.abs(d.getTimezoneOffset() * 60000))),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});

export const collections = { writings };
