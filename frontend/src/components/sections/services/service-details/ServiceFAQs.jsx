import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import ServiceSectionHeading from "./ServiceSectionHeading";
import { SERVICE_DETAILS_CONTENT } from "@/helper/services/service-details/serviceDetailsContent";

export default function ServiceFAQs({ slug }) {
  const section = SERVICE_DETAILS_CONTENT[slug]?.faqs;
  if (!section) return null;

  return (
    <section
      aria-labelledby="service-faqs-heading"
      className="bg-[#F5F5F2] py-20 sm:py-24 lg:py-28"
    >
      <Container size="hero">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <ServiceSectionHeading {...section} id="service-faqs-heading" />
          <div className="divide-y divide-[#E2E0DB] border-y border-[#E2E0DB]">
            {section.items.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-semibold leading-6 text-[#171A21] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF5101] [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-[#FF5101] transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="max-w-2xl pt-4 pr-8 text-sm leading-7 text-[#656A73]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}