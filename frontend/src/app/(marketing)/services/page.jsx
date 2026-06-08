import PageHero from "@/components/common/PageHero";
import { servicesPageHeroData } from "@/helper/pageHero";
import React from "react";

const Services = () => {
  return (
    <>
      <PageHero {...servicesPageHeroData} />
    </>
  );
};

export default Services;
