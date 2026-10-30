import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import ServiceSectionHeading from "./ServiceSectionHeading";
import { SERVICE_DETAILS_CONTENT } from "@/helper/services/service-details/serviceDetailsContent";

export default function OurApproachTechnology({ slug }) {
  const section = SERVICE_DETAILS_CONTENT[slug]?.approach;
  if (!section) return null;

  return (
    <section
      aria-labelledby="approach-technology-heading"
      className="bg-[#101820] py-20 sm:py-24 lg:py-28"
    >
      <Container size="hero">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <ServiceSectionHeading
              {...section}
              id="approach-technology-heading"
              light
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {section.principles.map((principle) => (
                <li
                  key={principle}
                  className="flex items-start gap-3 text-sm leading-6 text-white/75"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#FF5101]"
                  />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
              A considered technology stack
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {section.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-white/85"
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm leading-6 text-white/60">
                The final stack and architecture are selected to fit your
                product, integrations, and plans for growth.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}