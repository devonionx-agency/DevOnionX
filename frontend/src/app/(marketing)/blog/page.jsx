import PageHero from "@/components/common/PageHero";
import { blogPageHeroData } from "@/helper/pageHero";

const Blog = () => {
  return (
    <>
      <PageHero {...blogPageHeroData}/>
    </>
  );
};

export default Blog;
