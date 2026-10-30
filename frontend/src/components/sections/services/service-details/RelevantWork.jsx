import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ServiceSectionHeading from "./ServiceSectionHeading";
import { SERVICE_DETAILS_CONTENT } from "@/helper/services/service-details/serviceDetailsContent";

export default function RelevantWork({ slug }) {
  const section = SERVICE_DETAILS_CONTENT[slug]?.relevantWork;
  if (!section) return null;

  return (
    <section
      aria-labelledby="relevant-work-heading"
      className="bg-[#F5F5F2] py-20 sm:py-24 lg:py-28"
    >
      <Container size="hero">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <ServiceSectionHeading {...section} id="relevant-work-heading" />
          <Link
            href="/work"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#D9D8D2] px-5 py-3 text-sm font-semibold text-[#171A21] transition-colors hover:border-[#FF5101] hover:text-[#FF5101]"
          >
            View all work
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {section.projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-[#E5E3DE] bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[1.65] overflow-hidden bg-[#E9E8E3]">
                <Image
                  src={project.image}
                  alt={`${project.title} project`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#171A21] shadow-sm transition-colors group-hover:bg-[#FF5101] group-hover:text-white">
                  <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FF5101]">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#171A21]">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#656A73]">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}