import Container from "@/components/ui/Container";
import ServiceSectionHeading from "./ServiceSectionHeading";
import { SERVICE_DETAILS_CONTENT } from "@/helper/services/service-details/serviceDetailsContent";

export default function BusinessChallenge({ slug }) {
  const section = SERVICE_DETAILS_CONTENT[slug]?.businessChallenge;
  if (!section) return null;

  return (
    <section
      aria-labelledby="business-challenge-heading"
      className="bg-[#F5F5F2] py-20 sm:py-24 lg:py-28"
    >
      <Container size="hero">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <ServiceSectionHeading {...section} id="business-challenge-heading" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.items.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#E6E4DF] bg-white p-6 sm:p-7"
              >
                <span className="text-sm font-semibold tracking-wide text-[#FF5101]">
                  0{index + 1}
                </span>
                <h3 className="mt-7 text-lg font-semibold tracking-[-0.02em] text-[#171A21]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#656A73]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}