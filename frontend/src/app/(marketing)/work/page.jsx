import PageHero from "@/components/common/PageHero";
import ServicesShowcase from "@/components/sections/work/ServicesShowcase";
import WorkShowcase from "@/components/sections/work/WorkShowcase";
import WorkTechnology from "@/components/sections/work/WorkService";
import WorkService from "@/components/sections/work/WorkTechnology";
import { workPageHeroData } from "@/helper/pageHero";

export const metadata = {
  title: "Our Work | Website & Software Projects",
  description:
    "Explore projects by DevOnionX, from modern business websites and e-commerce platforms to custom software solutions built for growing businesses.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work | DevOnionX",
    description:
      "See how DevOnionX turns business ideas into modern websites and software solutions.",
    url: "/work",
    siteName: "DevOnionX",
    type: "website",
  },
};

const Work = () => {
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

export default Work;
