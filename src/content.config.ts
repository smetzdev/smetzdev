// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";
// 2. Define your collection(s)
const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    atCompany: z.string().optional(),
    description: z.string(),
    href: z.string(),
    designerName: z.string().optional(),
    designerLink: z.string().optional(),
  }),
});

const notesCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    href: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectCollection,
  notes: notesCollection,
};
