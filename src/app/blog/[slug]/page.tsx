import { notFound } from "next/navigation";
import { getBlogPostBySlugCached } from "@/helpers/functions";
import { wixImageToUrl } from "@/helpers/functions";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlugCached(slug);

  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">
        {post.title}
      </h1>

      {/* DATE */}
      {post.publishedDate && (
        <p className="text-sm text-gray-500 mb-8">
          {new Date(post.publishedDate).toLocaleDateString()}
        </p>
      )}

      {/* HERO IMAGE */}
      {post.heroImage && (
        <img
          src={post.heroImage}
          alt={post.title}
          className="rounded-lg mb-8"
        />
      )}

      {/* CONTENT */}
      <div className="prose max-w-none">
        {renderContent(post.content)}
      </div>
    </article>
  );
}

/* =========================
   WIX RICH CONTENT RENDERER
========================= */

function renderContent(content: any) {
  console.log('content', content);
  if (!content || !content.nodes) {
    return <p>No content found.</p>;
  }

  return content.nodes.map((node: any, i: number) =>
    renderNode(node, `${i}`)
  );
}

function renderNode(node: any, key: string): any {
  switch (node.type) {
    case "PARAGRAPH":
      return (
        <p key={key} className="mb-4 leading-relaxed">
          {node.nodes?.map((child: any, i: number) =>
            renderNode(child, `${key}-${i}`)
          )}
        </p>
      );

    case "TEXT": {
      let text = node.textData?.text || "";
      let el: any = text;

      node.textData?.decorations?.forEach((dec: any) => {
        if (dec.type === "BOLD") {
          el = <strong>{el}</strong>;
        }

        if (dec.type === "UNDERLINE") {
          el = <u>{el}</u>;
        }

        if (dec.type === "LINK") {
          el = (
            <a
              href={dec.linkData?.link?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {el}
            </a>
          );
        }
      });

      return <span key={key}>{el}</span>;
    }

    case "IMAGE": {
      const id = node.imageData?.image?.src?.id;
      if (!id) return null;

      return (
        <img
          key={key}
          src={`https://static.wixstatic.com/media/${id}`}
          alt="blog image"
          className="rounded-lg my-6 mx-auto"
        />
      );
    }

    case "LAYOUT":
      return (
        <div key={key} className="my-6 grid md:grid-cols-2 gap-4">
          {node.nodes?.map((child: any, i: number) =>
            renderNode(child, `${key}-${i}`)
          )}
        </div>
      );

    case "LAYOUT_CELL":
      return (
        <div key={key}>
          {node.nodes?.map((child: any, i: number) =>
            renderNode(child, `${key}-${i}`)
          )}
        </div>
      );

    default:
      return null;
  }
}