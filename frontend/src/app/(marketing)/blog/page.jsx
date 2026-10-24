import PageHero from "@/components/common/PageHero";
import BlogShowcase from "@/components/sections/blog/BlogShowcase";
import { blogPageHeroData } from "@/helper/pageHero";

export const metadata = {
  title: "Blog | Web Development & Technology Insights",
  description:
    "Explore DevOnionX articles on web development, website performance, e-commerce, SaaS, and practical technology insights for growing businesses.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "DevOnionX Blog | Web Development Insights",
    description:
      "Read practical insights on web development, modern technologies, and building better digital products.",
    url: "/blog",
    siteName: "DevOnionX",
    type: "website",
  },
};

const Blog = () => {
  return (
    <>
      <PageHero {...blogPageHeroData} />
      <BlogShowcase />
    </>
  );
};

export default Blog;
