import React from "react";
import PageHero from "@/components/common/PageHero";
import { aboutPageHeroData } from "@/helper/pageHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutMissionVision from "@/components/sections/about/AboutMissionVision";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutWhyChooseUs from "@/components/sections/about/AboutWhyChooseUs";
import AboutIndustries from "@/components/sections/about/AboutIndustries";
import FaqHome from "@/components/sections/FaqHome";

export const metadata = {
  title: "About Us | Web Development Team — DevOnionX",
  description:
    "Meet DevOnionX, a web development and software engineering team building modern websites, e-commerce platforms, SaaS products, and custom software for growing businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | DevOnionX",
    description:
      "Get to know DevOnionX, our team, values, and approach to building reliable web and software solutions for growing businesses.",
    url: "/about",
    siteName: "DevOnionX",
    type: "website",
  },
};

const About = () => {
  return (
    <>
      <PageHero {...aboutPageHeroData} />
      <AboutStory />
      <AboutMissionVision />
      <AboutValues />
      <AboutWhyChooseUs />
      <AboutIndustries />
      <AboutTeam />
      <FaqHome />
    </>
  );
};

export default About;
