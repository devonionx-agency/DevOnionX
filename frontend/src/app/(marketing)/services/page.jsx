import React from "react";
import BusinessSolutions from "@/components/sections/services/BusinessSolutions";
import HowWeWork from "@/components/sections/services/HowWeWork";
import OurServices from "@/components/sections/services/OurServices";
import ServicesHero from "@/components/sections/services/ServicesHero";
import TechnologyStack from "@/components/sections/services/TechnologyStack";


const Services = () => {
  return (
    <>
      {/* <PageHero {...servicesPageHeroData} />
      <ServiceShowcase/> */}
      <ServicesHero />
      <OurServices />
      <BusinessSolutions />
      <TechnologyStack />
      <HowWeWork />
    </>
  );
};

export default Services;
