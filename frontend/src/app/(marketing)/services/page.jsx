import React from "react";
import PageHero from "@/components/common/PageHero";
import { servicesPageHeroData } from "@/helper/pageHero";
import OurServices from "@/components/sections/services/OurServices";
import TechnologyStack from "@/components/sections/services/TechnologyStack";
import HowWeWork from "@/components/sections/services/HowWeWork";

export const metadata = {
  title: "Web Development Services",
  description:
    "Explore DevOnionX services, including custom website development, e-commerce solutions, SaaS platforms, and tailored software for growing businesses.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Development Services | DevOnionX",
    description:
      "Discover custom websites, e-commerce platforms, SaaS products, and software solutions built around your business needs.",
    url: "/services",
    siteName: "DevOnionX",
    type: "website",
  },
};

const Services = () => {
  return (
    <>
      <PageHero {...servicesPageHeroData} />
      <div id="services-list">
        <OurServices />
      </div>
      <TechnologyStack />
      <HowWeWork />
    </>
  );
};

export default Services;
