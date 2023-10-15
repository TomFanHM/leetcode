//https://github.com/coding-in-public/astro-blog-tutorial/blob/lesson-10/src/pages/index.astro

import type { MarkdownInstance } from "astro";

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}
