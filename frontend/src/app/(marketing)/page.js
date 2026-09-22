import dynamic from "next/dynamic";

import TrustMetrics from "@/components/sections/TrustMetrics";
import FeaturedWork from "@/components/sections/FeaturedWork";
import FaqHome from "@/components/sections/FaqHome";
import HeroSectionTwo from "@/components/sections/home/HeroSectionTwo";
import ProblemsSection from "@/components/sections/home/ProblemsSection";
import ProcessHome from "@/components/sections/home/ProcessHome";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import WhatYouGet from "@/components/sections/home/WhatYouGet";
import WhyChooseTwo from "@/components/sections/home/WhyChooseTwo";
import ProveSection from "@/components/sections/prove/ProveSection";
import AboutSection from "@/components/sections/home/AboutSection";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
);

export default function Page() {
  return (
    <>
      <HeroSectionTwo />

      <TrustMetrics />

      {/* <ProblemsSection /> */}
      <AboutSection/>

      <ServicesGrid />

      <WhatYouGet />

      {/* <ProcessHome /> */}

     {/*  <FeaturedWork />

      <ProveSection />

      <WhyChooseTwo />

      <Testimonials />

      <FaqHome /> */}
    </>
  );
}
