import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

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

export const collections = { appsPrivacy, appsFAQ };
