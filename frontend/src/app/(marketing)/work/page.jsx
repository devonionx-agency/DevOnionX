import PageHero from "@/components/common/PageHero";
import WorkShowcase from "@/components/sections/work/WorkShowcase";
import { workPageHeroData } from "@/helper/pageHero";


const page = () => {
  return (
    <>
      <PageHero {...workPageHeroData} />
      <WorkShowcase />
    </>
  );
};

export default page;
