import PageHero from "@/components/common/PageHero";
import ServiceShowcase from "@/components/sections/services/ServiceShowcase";
import { servicesPageHeroData } from "@/helper/pageHero";
import React from "react";

const Services = () => {
  return (
    <>
      <PageHero {...servicesPageHeroData} />
      <ServiceShowcase/>
    </>
  );
};

export default Services;
