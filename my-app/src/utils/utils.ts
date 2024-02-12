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

/**
 * This function formats a given date string into a more readable format according to the "en-US" locale standards, using the UTC timezone.
 */
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}

export function relatedTags(arr1: string[], arr2: string[]): boolean {
  const map: Record<string, boolean> = {};
  arr1.forEach((el) => (map[el] = true));
  for (const tag of arr2) {
    if (map[tag]) return true;
  }
  return false;
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
