import HeroSection from "@/components/sections/HeroSection";
import HomeServices from "@/components/sections/HomeServices";
import Insights from "@/components/sections/Insights";
import OurProcess from "@/components/sections/OurProcess";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import TrustMetrics from "@/components/sections/TrustMetrics";
import WhyChoose from "@/components/sections/WhyChoose";

export default function page() {
  return (
    <>
      <HeroSection />
      <TrustMetrics />
      <PortfolioPreview />
      <HomeServices />
      <OurProcess />
      <WhyChoose />
      <Testimonials />
      <Insights />
    </>
  );
}
