import { cache } from "react";
import { wixClientServer } from "@/lib/wixClientServer";

export const getProduct = cache(async (slug: string) => {
  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .limit(100) // adjust if needed
    .find();

  return products.items.find((p: any) => p.slug === slug);
});

const CATEGORY_MAP: Record<string, string> = {
  "all-products": process.env.ALL_PRODUCTS_CATEGORY_ID!,
  "featured": process.env.FEATURED_PRODUCTS_CATEGORY_ID!,
  "bug": process.env.BUGS_PRODUCTS_CATEGORY_ID!,
  "brush-hog": process.env.BRUSH_HOGS_PRODUCTS_CATEGORY_ID!,
  "worm": process.env.WORMS_PRODUCTS_CATEGORY_ID!
};

export const getCategory = cache(async (slug: string) => {
  const wixClient = await wixClientServer();

  const id = CATEGORY_MAP[slug];

  if (!id) return null;

  const category = await wixClient.collections.getCollection(id);

  console.log('slug', slug);
  console.log('id', id);
  console.log('category', category);

  return category || null;
});