import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blogPosts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const appsPrivacy = defineCollection({
  loader: glob({ pattern: "**/privacy.md", base: "./src/content/apps" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    lastUpdatedDate: z.date(),
  }),
});

const appsFAQ = defineCollection({
  loader: glob({ pattern: "**/faq.md", base: "./src/content/apps" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
  }),
});

export const collections = { blogPosts, appsPrivacy, appsFAQ };
