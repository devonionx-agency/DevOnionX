import dynamic from "next/dynamic";

import TrustMetrics from "@/components/sections/TrustMetrics";
import FaqHome from "@/components/sections/FaqHome";
import HeroSectionThree from "@/components/sections/home/HeroSectionThree";
import HeroSectionTwo from "@/components/sections/home/HeroSectionTwo";
import ProcessHome from "@/components/sections/home/ProcessHome";
import WhatYouGet from "@/components/sections/home/WhatYouGet";
import AboutSection from "@/components/sections/home/AboutSection";
import WorkSection from "@/components/sections/home/WorkSection";
import TrustHome from "@/components/sections/home/TrustHome";
import ServicesHome from "@/components/sections/home/ServicesHome";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
);

export default function Page() {
  return (
    <>
      <HeroSectionThree />
      {/* <HeroSectionTwo /> */}
       
      <TrustHome />
       {/* <TrustMetrics /> */}
      {/* <ProblemsSection /> */}
      <AboutSection />
      <ServicesHome />
      <ProcessHome/>
      {/* <WhatYouGet /> */}
      <WorkSection/>
      {/* <Testimonials /> */}
      <FaqHome />
    </>
  );
}
