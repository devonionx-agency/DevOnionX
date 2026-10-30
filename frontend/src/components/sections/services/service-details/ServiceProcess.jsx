import Container from "@/components/ui/Container";
import ServiceSectionHeading from "./ServiceSectionHeading";
import { SERVICE_DETAILS_CONTENT } from "@/helper/services/service-details/serviceDetailsContent";

export default function ServiceProcess({ slug }) {
  const section = SERVICE_DETAILS_CONTENT[slug]?.process;
  if (!section) return null;

  return (
    <section
      aria-labelledby="service-process-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container size="hero">
        <ServiceSectionHeading
          {...section}
          id="service-process-heading"
          align="center"
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {section.steps.map((step, index) => (
            <li key={step.title} className="relative">
              {index < section.steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-6 hidden h-px w-[calc(100%-1rem)] bg-[#E4E3DF] lg:block"
                />
              ) : null}
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#FFD5C2] bg-[#FFF4EE] text-sm font-bold text-[#FF5101]">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-[#171A21]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#656A73]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}