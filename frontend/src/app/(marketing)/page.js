import dynamic from "next/dynamic";

import TrustMetrics from "@/components/sections/TrustMetrics";
import FaqHome from "@/components/sections/FaqHome";
import HeroSectionTwo from "@/components/sections/home/HeroSectionTwo";
import ProcessHome from "@/components/sections/home/ProcessHome";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import WhatYouGet from "@/components/sections/home/WhatYouGet";
import AboutSection from "@/components/sections/home/AboutSection";
import WorkSection from "@/components/sections/home/WorkSection";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
);

export default function Page() {
  return (
    <>
      <HeroSectionTwo />
      <TrustMetrics />
      <AboutSection />
      <ServicesGrid />
      <ProcessHome/>
      {/* <WhatYouGet /> */}
      <WorkSection/>
      {/* <Testimonials /> */}
      <FaqHome />
    </>
  );
}
