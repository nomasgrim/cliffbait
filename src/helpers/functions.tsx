import { cache } from "react";
import { wixClientServer } from "@/lib/wixClientServer";

//
// 🛒 PRODUCTS
//
export const getProduct = cache(async (slug: string) => {
  const wixClient = await wixClientServer();

  const result = await wixClient.products
    .queryProducts()
    .limit(100)
    .find();

  return result.items.find((p: any) => p.slug === slug) || null;
});

//
// 🗂️ CATEGORIES
//
const CATEGORY_MAP: Record<string, string> = {
  "all-products": process.env.ALL_PRODUCTS_CATEGORY_ID!,
  featured: process.env.FEATURED_PRODUCTS_CATEGORY_ID!,
  bug: process.env.BUGS_PRODUCTS_CATEGORY_ID!,
  "brush-hog": process.env.BRUSH_HOGS_PRODUCTS_CATEGORY_ID!,
  worm: process.env.WORMS_PRODUCTS_CATEGORY_ID!,
};

export const getCategory = cache(async (slug: string) => {
  const wixClient = await wixClientServer();

  const id = CATEGORY_MAP[slug];
  if (!id) return null;

  return wixClient.collections.getCollection(id);
});

//
// 🧠 BLOG
//
export const getBlogPosts = cache(async (limit = 10) => {
  const wixClient = await wixClientServer();

  const result = await wixClient.posts
    .queryPosts()
    .limit(limit)
    .find();

  return result.items;
});

export const getBlogPostBySlug = cache(async (slug: string) => {
  const wixClient = await wixClientServer();

  const result = await wixClient.items
    .query("Blog/Posts")
    .eq("slug", slug)
    .limit(1)
    .find();

  const post = result.items?.[0];

  if (!post) return null;

  const data: any = post.data || post;

  return {
    id: post._id,
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    publishedDate: data.publishedDate || data.firstPublishedDate,
    content: data.richContent || data.content || null,
    heroImage: data.media?.wixMedia?.image
      ? `https://static.wixstatic.com/media/${data.media.wixMedia.image}`
      : null,
  };
});

export const getBlogPostsCached = cache(getBlogPosts);
export const getBlogPostBySlugCached = cache(getBlogPostBySlug);