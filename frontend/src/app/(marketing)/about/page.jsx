import React from "react";
import PageHero from "@/components/common/PageHero";
import { aboutPageHeroData } from "@/helper/pageHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutMissionVision from "@/components/sections/about/AboutMissionVision";

export const metadata = {
  title: "About Us — DevOnionX",
  description:
    "We're a team of obsessive builders, strategic thinkers, and relentless problem-solvers united to build world-class digital products.",
};

const About = () => {
  return (
    <>
      <PageHero {...aboutPageHeroData} />
      <div id="about-story">
        <AboutStory />
      </div>
      <AboutMissionVision />
    </>
  );
};

export default About;
