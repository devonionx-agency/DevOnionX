import PageHero from "@/components/common/PageHero";
import WorkShowcase from "@/components/sections/work/WorkShowcase";
import { workPageHeroData } from "@/helper/pageHero";
import React from "react";

const page = () => {
  return (
    <>
      <PageHero {...workPageHeroData} />
      <WorkShowcase />
    </>
  );
};

export default page;
