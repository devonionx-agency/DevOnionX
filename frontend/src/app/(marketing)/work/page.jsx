import PageHero from "@/components/common/PageHero";
import ServicesShowcase from "@/components/sections/work/ServicesShowcase";
import WorkShowcase from "@/components/sections/work/WorkShowcase";
import WorkTechnology from "@/components/sections/work/WorkService";
import WorkService from "@/components/sections/work/WorkTechnology";
import { workPageHeroData } from "@/helper/pageHero";


const page = () => {
  return (
    <>
      <PageHero {...workPageHeroData} />
      <WorkShowcase />
      <WorkService/>
      <ServicesShowcase/>
      <WorkTechnology />
    </>
  );
};

export default page;
