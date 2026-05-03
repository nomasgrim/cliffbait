import Link from "next/link";
import { getBlogPosts, wixImageToUrl } from "@/helpers/functions";

export default async function BlogPage() {
  const posts = await getBlogPosts(20);
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="space-y-6">
        {posts.map((post: any) => (
          <article
            key={post._id}
            className="border-b pb-6 flex gap-6 items-start"
          >
            {/* LEFT: IMAGE */}
            {post.media?.wixMedia?.image && (
              <Link href={`/blog/${post.slug}`} className="shrink-0">
                <img
                  src={wixImageToUrl(post.media.wixMedia.image) || ""}
                  alt={post.title}
                  className="w-40 h-40 object-cover rounded-lg"
                />
              </Link>
            )}

            {/* RIGHT: CONTENT */}
            <div className="flex flex-col">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold hover:underline">
                  {post.title}
                </h2>
              </Link>

              {post.excerpt && (
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {post.excerpt}
                </p>
              )}

              {post.firstPublishedDate && (
                <p className="text-sm text-gray-400 mt-3">
                  {new Date(post.firstPublishedDate).toLocaleDateString()}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}