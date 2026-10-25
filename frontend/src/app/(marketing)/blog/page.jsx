import React from "react";
import PageHero from "@/components/common/PageHero";
import FeaturedArticle from "@/components/sections/blog/FeaturedArticle";
import LatestInsights from "@/components/sections/blog/LatestInsights";
import { blogPageHeroData } from "@/helper/pageHero";

export const metadata = {
  title: "Insights — DevOnionX",
  description:
    "Explore deep dives into AI, web engineering, design systems, and the real stories behind the products we ship.",
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
