import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    publishDate: z.date(),
    role: z.string(),
    stack: z.array(z.string()),
    timeline: z.string(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    image: z.string(),
    imageAlt: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
