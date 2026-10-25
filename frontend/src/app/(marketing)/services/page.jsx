import React from "react";
import PageHero from "@/components/common/PageHero";
import { servicesPageHeroData } from "@/helper/pageHero";
import OurServices from "@/components/sections/services/OurServices";
import TechnologyStack from "@/components/sections/services/TechnologyStack";
import HowWeWork from "@/components/sections/services/HowWeWork";

export const metadata = {
  title: "Services — DevOnionX",
  description:
    "We help ambitious businesses turn ideas into powerful digital products built to solve real problems, deliver exceptional experiences, and grow with your business.",
};

const Services = () => {
  return (
    <>
      <PageHero {...servicesPageHeroData} />
      <div id="services-list">
        <OurServices />
      </div>
      <TechnologyStack />
      <HowWeWork />
    </>
  );
};

export default Services;
