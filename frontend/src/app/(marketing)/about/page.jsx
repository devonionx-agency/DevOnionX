import PageHero from "@/components/common/PageHero";
import { aboutPageHeroData } from "@/helper/pageHero";

import AboutStory from "@/components/sections/about/AboutStory";
import AboutMissionVision from "@/components/sections/about/AboutMissionVision";
import AboutMission from "@/components/sections/about/AboutMission";
import AboutTeam from "@/components/sections/about/AboutTeam";
 
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
      {/* <AboutMission /> */}
      {/* <AboutTeam /> */}
    </>
  );
};

export default About;
