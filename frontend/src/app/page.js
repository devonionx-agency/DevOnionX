import HeroSection from '@/components/sections/HeroSection'
import HomeServices from '@/components/sections/HomeServices'
import OurProcess from '@/components/sections/OurProcess'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import TrustMetrics from '@/components/sections/TrustMetrics'


export default function page() {
  return (
    <>
    <HeroSection/>
    <TrustMetrics/>
    <PortfolioPreview/>
    <HomeServices/>
    <OurProcess/>
    </>
  );
}
