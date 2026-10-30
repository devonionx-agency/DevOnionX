import React from "react";
import BusinessChallenge from "@/components/sections/services/service-details/BusinessChallenge";
import OurApproachTechnology from "@/components/sections/services/service-details/OurApproachTechnology";
import RelevantWork from "@/components/sections/services/service-details/RelevantWork";
import ServiceDetailsHero from "@/components/sections/services/service-details/ServiceDetailsHero";
import ServiceFAQs from "@/components/sections/services/service-details/ServiceFAQs";
import ServiceProcess from "@/components/sections/services/service-details/ServiceProcess";
import WhatWeDeliver from "@/components/sections/services/service-details/WhatWeDeliver";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const serviceName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${serviceName} Services`,
    description: `Explore DevOnionX ${serviceName.toLowerCase()} services. We build modern, reliable solutions tailored to your business goals.`,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${serviceName} Services | DevOnionX`,
      description: `Discover DevOnionX ${serviceName.toLowerCase()} solutions, designed around your business needs.`,
      url: `/services/${slug}`,
      siteName: "DevOnionX",
      type: "website",
    },
  };
}

export default async function ServiceDetails({ params }) {
  const { slug } = await params;

  return (
    <>
      <ServiceDetailsHero slug={slug} />
      <BusinessChallenge slug={slug} />
      <WhatWeDeliver slug={slug} />
      <OurApproachTechnology slug={slug} />
      <RelevantWork slug={slug} />
      <ServiceProcess slug={slug} />
      <ServiceFAQs slug={slug} />
    </>
  );
}
