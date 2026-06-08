import PageHero from "@/components/common/PageHero";
import { workPageHeroData } from "@/helper/workPage";
import React from "react";

const page = () => {
  return (
    <>
      <PageHero {...workPageHeroData} />
    </>
  );
};

export default page;
