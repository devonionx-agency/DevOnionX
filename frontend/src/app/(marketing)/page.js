import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import Insights from "@/components/sections/Insights";
import OurProcess from "@/components/sections/OurProcess";
import TrustMetrics from "@/components/sections/TrustMetrics";
import WhyChoose from "@/components/sections/WhyChoose";
import FeaturedWork from "@/components/sections/FeaturedWork";
import FaqHome from "@/components/sections/FaqHome";

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));

export default function page() {
  return (
    <>
      <HeroSection />
      <TrustMetrics />
      <OurProcess />
      <FeaturedWork/>
      <WhyChoose />
      <Testimonials />
      <Insights />
      <FaqHome/>
    </>
  );
}