import { defineCollection, z } from "astro:content";

const collection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      date: z.string(),
      category: z.string(),
      draft: z.boolean(),
      imageUrl: image().refine((img) => img.width >= 600, {
        message: "Image must be at least 600 px width.",
      }),
    }),
});

export const collections = {
  articles: collection,
};
