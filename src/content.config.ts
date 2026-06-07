import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    pubDate: z.string(),
    show: z.boolean().optional(),
    slug: z.string(),
  }),
});

export const collections = { projects };
