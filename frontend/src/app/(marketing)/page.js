import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import Insights from "@/components/sections/Insights";
import OurProcess from "@/components/sections/OurProcess";
import TrustMetrics from "@/components/sections/TrustMetrics";
import WhyChoose from "@/components/sections/WhyChoose";
import FeaturedWork from "@/components/sections/FeaturedWork";
import FaqHome from "@/components/sections/FaqHome";
import HeroSectionTwo from "@/components/sections/home/HeroSectionTwo";
import ProblemsSection from "@/components/sections/home/ProblemsSection";
import ProcessHome from "@/components/sections/home/ProcessHome";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import WhatYouGet from "@/components/sections/home/WhatYouGet";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
);

export default function page() {
  return (
    <>
      <HeroSectionTwo />
      {/* <HeroSection /> */}
      <TrustMetrics />
      <ProblemsSection />
      <ServicesGrid />
      <WhatYouGet/>
      <ProcessHome />
      {/* <OurProcess /> */}
      <FeaturedWork />
      <WhyChoose />
      <Testimonials />
      <Insights />
      <FaqHome />
    </>
  );
}
