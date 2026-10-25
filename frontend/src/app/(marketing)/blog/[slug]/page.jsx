import { notFound } from "next/navigation";
import { getBlogBySlug, getRelatedBlogs } from "@/helper/blogDetailsData";
import { BlogDetailsLayout } from "@/components/blog/blog-details";

/**
 * Generate dynamic SEO metadata for each blog article
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Article | DevOnionX",
      description: "Engineering and design insights by DevOnionX.",
      alternates: {
        canonical: `/blog/${slug}`,
      },
    };
  }

  const description = post.subtitle || post.excerpt;

  return {
    title: `${post.title} | DevOnionX Insights`,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | DevOnionX Blog`,
      description,
      url: `/blog/${slug}`,
      siteName: "DevOnionX",
      type: "article",
      publishedTime: post.date,
      authors: [typeof post.author === "string" ? post.author : post.author?.name],
      tags: post.tags,
    },
  };
}

/**
 * Dynamic Blog Details Page: /blog/[slug]
 */
export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogs(slug, post.category, 3);

  return (
    <BlogDetailsLayout
      post={post}
      relatedPosts={relatedPosts}
    />
  );
}