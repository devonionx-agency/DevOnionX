import PageHero from "@/components/common/PageHero";
import BlogShowcase from "@/components/sections/blog/BlogShowcase";
import { blogPageHeroData } from "@/helper/pageHero";

const Blog = () => {
  return (
    <>
      <PageHero {...blogPageHeroData} />
      <BlogShowcase />
    </>
  );
};

export default Blog;
