import React from "react";
import BusinessChallenge from "@/components/sections/services/service-details/BusinessChallenge";
import OurApproachTechnology from "@/components/sections/services/service-details/OurApproachTechnology";
import RelevantWork from "@/components/sections/services/service-details/RelevantWork";
import ServiceDetailsHero from "@/components/sections/services/service-details/ServiceDetailsHero";
import ServiceFAQs from "@/components/sections/services/service-details/ServiceFAQs";
import ServiceProcess from "@/components/sections/services/service-details/ServiceProcess";
import WhatWeDeliver from "@/components/sections/services/service-details/WhatWeDeliver";


export default async function ServiceDetails({ params}) {
  const { slug } = await params;

  return (
    <>
      <ServiceDetailsHero slug={slug} />
      <BusinessChallenge />
      <WhatWeDeliver />
      <OurApproachTechnology />
      <RelevantWork />
      <ServiceProcess />
      <ServiceFAQs />
    </>
  );
}
