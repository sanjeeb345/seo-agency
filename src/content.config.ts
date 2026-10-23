import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('askaseo Team'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const caseStudyCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    client: z.string(),
    industry: z.string(),
    metric: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  'case-studies': caseStudyCollection,
};
