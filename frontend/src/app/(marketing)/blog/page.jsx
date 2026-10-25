import React from "react";
import PageHero from "@/components/common/PageHero";
import FeaturedArticle from "@/components/sections/blog/FeaturedArticle";
import LatestInsights from "@/components/sections/blog/LatestInsights";
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
      <div className="blog-page">
        <FeaturedArticle />
        <div id="latest-insights">
          <LatestInsights />
        </div>
      </div>
    </>
  );
};

export default Blog;
