import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMarkdown } from '@content-collections/markdown'
import { z } from 'zod'

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.string().date(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    image: z.string().optional(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document)
    return {
      ...document,
      html,
      slug: document._meta.path,
    }
  },
})

export default defineConfig({
  collections: [posts],
})
