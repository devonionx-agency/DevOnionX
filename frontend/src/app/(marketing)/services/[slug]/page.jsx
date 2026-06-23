import ServiceHero from "@/components/common/ServiceHero";
import ServiceShow from "@/components/sections/services/servicedetails/ServiceShow";
import React from "react";

export default async function ServiceDetails({ params }) {
  const { slug } = await params;

  return (
    <>
      <ServiceHero />
      <ServiceShow slug={slug} />
    </>
  );
}
