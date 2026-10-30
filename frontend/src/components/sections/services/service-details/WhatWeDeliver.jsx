import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ServiceSectionHeading from "./ServiceSectionHeading";
import { SERVICE_DETAILS_CONTENT } from "@/helper/services/service-details/serviceDetailsContent";

export default function WhatWeDeliver({ slug }) {
  const section = SERVICE_DETAILS_CONTENT[slug]?.whatWeDeliver;
  if (!section) return null;

  return (
    <section
      aria-labelledby="what-we-deliver-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container size="hero">
        <ServiceSectionHeading
          {...section}
          id="what-we-deliver-heading"
          align="center"
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {section.items.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-[#E8E8E5] bg-[#FAFAF8] p-6 transition-colors duration-300 hover:border-[#FF5101]/40 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.16em] text-[#A0A2A5]">
                  0{index + 1}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-5 w-5 text-[#FF5101] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <h3 className="mt-10 text-lg font-semibold tracking-[-0.02em] text-[#171A21]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#656A73]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}