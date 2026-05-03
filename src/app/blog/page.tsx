import Link from "next/link";
import { getBlogPosts, wixImageToUrl } from "@/helpers/functions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cliff Bait | Blog of Fish Stories",
  description:
    "Fish stories, lure experiments, and the digital chaos behind Cliff Bait. Built for anglers, tinkerers, and anyone who thinks in currents.",
  openGraph: {
    title: "Cliff Bait | Blog of Fish Stories",
    description:
      "Fish stories, lure experiments, and the digital chaos behind Cliff Bait.",
    type: "website",
    url: "https://cliffbait.com/blog",
    siteName: "Cliff Bait",
    images: [
      {
        url: "https://static.wixstatic.com/media/6f3554_597039e4cbab4fde8c6e203507bd0b3f~mv2.png",
        width: 1200,
        height: 630,
        alt: "Cliff Bait Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliff Bait | Blog of Fish Stories",
    description:
      "Fish stories, lure experiments, and the digital chaos behind Cliff Bait.",
    images: ["https://static.wixstatic.com/media/6f3554_597039e4cbab4fde8c6e203507bd0b3f~mv2.png"],
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts(20);
  
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 md:mt-20 relative'>
      <h1 className="text-4xl font-bold mb-8">Clifford's Fish Stories</h1>

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