"use client";

import { notFound } from "next/navigation";
import PageHero from "@/components/common/PageHero";
import {
  SERVICE_DETAILS_HERO,
  SERVICE_DETAILS_CTA,
} from "@/helper/services/service-details/serviceDetailsHero";
import { allPageHeroImg } from "@/helper/imageProvider/pageHeroImage";

export default function ServiceDetailsHero({ slug }) {
  const data = SERVICE_DETAILS_HERO[slug];

  if (!data) return notFound();

  return (
    <PageHero
      eyebrow={data.eyebrow}
      titleLines={data.titleLines}
      description={data.description}
      bgImage={data.heroImage}
      fallbackImage={allPageHeroImg.servicesHeroImg}
      heroImageAlt={`${data.eyebrow || "Service"} Showcase`}
      primaryCta={SERVICE_DETAILS_CTA.primaryCta}
      secondaryCta={SERVICE_DETAILS_CTA.secondaryCta}
      breadcrumbOverrides={{
        services: "Services",
        [slug]: data.titleLines?.[0]?.text || slug,
      }}
    />
  );
}
