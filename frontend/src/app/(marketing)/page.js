import dynamic from "next/dynamic";


import HeroHome from "@/components/sections/home/HeroHome";
import ProcessHome from "@/components/sections/home/ProcessHome";
import AboutSection from "@/components/sections/home/AboutSection";
import WorkSection from "@/components/sections/home/WorkSection";
import TrustHome from "@/components/sections/home/TrustHome";
import ServicesHome from "@/components/sections/home/ServicesHome";
import FaqHome from "@/components/sections/FaqHome";
import TechStackHome from "@/components/sections/home/TechStackHome";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
);

export default function Page() {
  return (
    <>
      <HeroHome />
      <TrustHome />
      <AboutSection />
      <ServicesHome />
      <TechStackHome/>
      <ProcessHome/>
      {/* <WhatYouGet /> */}
      <WorkSection/>
      {/* <Testimonials /> */}
      <FaqHome />
    </>
  );
}
