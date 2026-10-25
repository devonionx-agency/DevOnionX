import React from "react";
import PageHero from "@/components/common/PageHero";
import WorkShowcase from "@/components/sections/work/WorkShowcase";
import { workPageHeroData } from "@/helper/pageHero";

export const metadata = {
  title: "Our Work — DevOnionX",
  description:
    "Explore our portfolio of high-performing web applications, SaaS platforms, and AI-powered solutions built for ambitious businesses.",
};

const WorkPage = () => {
  return (
    <>
      <PageHero {...workPageHeroData} />
      <div id="work-showcase">
        <WorkShowcase />
      </div>
    </>
  );
};

export default WorkPage;
