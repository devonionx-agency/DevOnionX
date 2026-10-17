import React from "react";
import BusinessChallenge from "@/components/sections/services/service-details/BusinessChallenge";
import OurApproachTechnology from "@/components/sections/services/service-details/OurApproachTechnology";
import RelevantWork from "@/components/sections/services/service-details/RelevantWork";
import ServiceDetailsHero from "@/components/sections/services/service-details/ServiceDetailsHero";
import ServiceFAQs from "@/components/sections/services/service-details/ServiceFAQs";
import ServiceProcess from "@/components/sections/services/service-details/ServiceProcess";
import WhatWeDeliver from "@/components/sections/services/service-details/WhatWeDeliver";


export default function ServiceDetails() {
  // const { slug } = await params;

  return (
    <>
      {/* <ServiceHero />
      <ServiceShow slug={slug} /> */}
      <ServiceDetailsHero />
      <BusinessChallenge />
      <WhatWeDeliver />
      <OurApproachTechnology />
      <RelevantWork />
      <ServiceProcess />
      <ServiceFAQs />
    </>
  );
}
