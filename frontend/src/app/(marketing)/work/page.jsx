import PageHero from "@/components/common/PageHero";
import WorkShowcase from "@/components/sections/work/WorkShowcase";
import { workPageHeroData } from "@/helper/workPage";
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
