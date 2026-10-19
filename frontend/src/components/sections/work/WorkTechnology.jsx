"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

// Edit this list freely. Each item = one card.
const technologies = [
  {
    id: "nextjs",
    group: "Framework & SEO",
    badge: "Production ready",
    name: "Next.js",
    description:
      "Server-side rendering, incremental static generation and edge caching for fast, search-friendly web interfaces.",
    usedIn: ["Web platforms", "E-commerce", "Marketing sites"],
  },
  {
    id: "react",
    group: "UI architecture",
    badge: "Core stack",
    name: "React",
    description:
      "Component-driven development, reusable design systems and rich, interactive dashboards with predictable state.",
    usedIn: ["SaaS dashboards", "Portals", "Admin panels"],
  },
  {
    id: "nodejs",
    group: "Backend runtime",
    badge: "Scalable APIs",
    name: "Node.js",
    description:
      "Event-driven services, background jobs, real-time sockets and high-throughput integrations.",
    usedIn: ["REST APIs", "Real-time apps", "Microservices"],
  },
  {
    id: "express",
    group: "API layer",
    badge: "Battle tested",
    name: "Express.js",
    description:
      "Structured routing, middleware and token-based authentication with clean, maintainable controller patterns.",
    usedIn: ["Auth flows", "Business logic", "Third-party APIs"],
  },
  {
    id: "mongodb",
    group: "Database",
    badge: "Flexible data",
    name: "MongoDB",
    description:
      "Schema validation, smart indexing and aggregation pipelines for reporting, search and analytics.",
    usedIn: ["Product catalogs", "User data", "Analytics"],
  },
  {
    id: "tailwind",
    group: "Styling & design system",
    badge: "Pixel perfect",
    name: "Tailwind CSS",
    description:
      "Fluid layouts, consistent design tokens and responsive components that stay lean in production.",
    usedIn: ["Responsive UI", "Design systems", "Landing pages"],
  },
];

const TechnologyCapabilities = () => {
  const sectionRef = useRef(null);

  // One orchestrated reveal: the cards stagger in together.
  useGSAP(
  () => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const cards = gsap.utils.toArray(".tc-card");

    ScrollTrigger.batch(cards, {
      start: "top 92%", // fires as soon as a card enters the viewport
      once: true,
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            overwrite: true,
            clearProps: "opacity,visibility,transform",
          },
        ),
    });

    // Recalculate trigger positions once images and fonts have loaded
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const id = setTimeout(refresh, 500);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(id);
    };
  },
  { scope: sectionRef, dependencies: [] },
);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden border-t border-[#E4E7EE] bg-[#F6F8FC] py-16 sm:py-20 lg:py-24"
    >
      {/* Fine grid + brand glow (same treatment as the work section) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgba(23,25,35,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,25,35,0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_0%,black_10%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,81,1,0.08),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/50 to-transparent"
      />

      <Container>
        {/* heading row: title left, description right */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#FF5101]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#FF5101]"
              />
              Our tech stack
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#171923] sm:text-4xl lg:text-5xl">
              Technology &amp;{" "}
              <span className="text-[#FF5101]">Capabilities</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#5B6275] sm:text-base">
            We build with a focused, modern stack and choose the right tool for
            each requirement, so your product ships faster and scales cleanly.
          </p>
        </div>

        {/* cards */}
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {technologies.map((tech) => (
            <li
              key={tech.id}
              className="tc-card group relative flex flex-col rounded-2xl border border-[#E4E7EE] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5101]/40 hover:shadow-[0_16px_40px_-20px_rgba(255,81,1,0.35)] sm:p-6"
            >
              {/* top row: group + badge */}
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs font-semibold text-[#FF5101]">
                  {tech.group}
                </span>
                <span className="shrink-0 rounded-md border border-[#E4E7EE] bg-[#F6F8FC] px-2 py-1 text-[11px] font-medium text-[#5B6275]">
                  {tech.badge}
                </span>
              </div>

              {/* name + description */}
              <h3 className="mt-5 text-2xl font-bold text-[#171923]">
                {tech.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6275]">
                {tech.description}
              </p>

              {/* used in */}
              <div className="mt-6 border-t border-dashed border-[#E4E7EE] pt-4">
                <p className="text-xs font-medium text-[#8A91A5]">Used in</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tech.usedIn.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-[#FF5101]/10 px-2.5 py-1 text-xs font-medium text-[#C93F00]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* accent line reveals on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-[#FF5101] transition-transform duration-300 group-hover:scale-x-100"
              />
            </li>
          ))}
        </ul>

        {/* bottom standards strip */}
        <div className="mt-6 flex flex-col gap-3 rounded-xl border border-[#E4E7EE] bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:mt-8">
          <p className="flex items-start gap-3 text-sm text-[#3B4152]">
            <span
              aria-hidden="true"
              className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-[#FF5101]"
            />
            <span>
              <strong className="font-semibold text-[#171923]">
                Engineering standards:
              </strong>{" "}
              typed API contracts, clear repository structure, testable
              controllers and accessible markup.
            </span>
          </p>

          <a
            href="/contact"
            className="shrink-0 text-sm font-semibold text-[#FF5101] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Discuss your stack
          </a>
        </div>
      </Container>
    </section>
  );
};

export default TechnologyCapabilities;
