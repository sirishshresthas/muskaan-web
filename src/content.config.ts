import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Müskaan Team'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.object({ src: z.string(), alt: z.string() }).optional(),
  }),
})

export const collections = { blog }