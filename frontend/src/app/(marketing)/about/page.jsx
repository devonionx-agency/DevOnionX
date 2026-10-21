import PageHero from "@/components/common/PageHero";
import { aboutPageHeroData } from "@/helper/pageHero";

import AboutStory from "@/components/sections/about/AboutStory";
import AboutMissionVision from "@/components/sections/about/AboutMissionVision";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutWhyChooseUs from "@/components/sections/about/AboutWhyChooseUs";
import AboutIndustries from "@/components/sections/about/AboutIndustries";
 
export const metadata = {
  title: "About — DevonionX",
  description: "We're a team of obsessive builders, strategic thinkers, and relentless problem-solvers.",
};
 

const About = () => {
  return (
    <>
      <PageHero  {...aboutPageHeroData}/>
       <AboutStory />
        <AboutMissionVision />
        <AboutValues/>
        <AboutWhyChooseUs/>
        <AboutIndustries/>
      <AboutTeam />
    </>
  );
};

export default About;
