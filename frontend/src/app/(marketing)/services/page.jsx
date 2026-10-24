import React from "react";
import HowWeWork from "@/components/sections/services/HowWeWork";
import OurServices from "@/components/sections/services/OurServices";
import ServicesHero from "@/components/sections/services/ServicesHero";
import TechnologyStack from "@/components/sections/services/TechnologyStack";

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
      <ServicesHero />
      <OurServices />
      <TechnologyStack />
      <HowWeWork />
    </>
  );
};

export default Services;
