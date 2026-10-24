"use client";

import { useId, useState } from "react";
import Link from "next/link";

import Container from "@/components/ui/Container";

/* ------------------------------------------------------------------ */
/*  Content: edit copy and routes here                                 */
/* ------------------------------------------------------------------ */

const hero = {
  title: "We design, build and launch your software",
  text: "We help startups and growing companies turn ideas into reliable web and mobile products, with a dedicated team covering design, development and testing from the first sketch to launch day.",
  primary: { label: "Contact us", href: "/contact" },
  secondary: { label: "Explore our services", href: "#services" },
};

const services = {
  title: "Our software services",
  text: "Everything you need to take a product from idea to release, handled by one team. Open any service to see what is included and how we work.",
  items: [
    {
      id: "web",
      name: "Web Development",
      description:
        "Fast, secure and scalable websites and web apps built with React, Next.js, Node.js and modern CMS platforms.",
      points: ["Custom web apps", "E-commerce", "CMS & Shopify", "API integration"],
      href: "/services/web-development",
    },
    {
      id: "mobile",
      name: "Mobile App Development",
      description:
        "Polished iOS and Android apps, from prototype to store release, built for performance and easy updates.",
      points: ["iOS & Android", "Cross-platform", "App store launch", "Offline support"],
      href: "/services/mobile-apps",
    },
    {
      id: "design",
      name: "UI/UX Design",
      description:
        "Research-led interfaces and design systems that look great, are simple to use and are easy for developers to build.",
      points: ["User research", "Wireframes & prototypes", "Design systems", "Usability testing"],
      href: "/services/ui-ux-design",
    },
    {
      id: "qa",
      name: "Quality Assurance",
      description:
        "Manual and automated testing that finds problems early, so every release is stable and predictable.",
      points: ["Test automation", "Performance testing", "Regression checks", "Release sign-off"],
      href: "/services/quality-assurance",
    },
    {
      id: "support",
      name: "Maintenance & Support",
      description:
        "Ongoing monitoring, updates and improvements so your product stays fast, secure and up to date after launch.",
      points: ["Bug fixes", "Security updates", "Performance tuning", "Feature roadmap"],
      href: "/services/maintenance-support",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F8FC]";

const Chevron = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${className}`}
  >
    <path d="M6 3l5 5-5 5" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Hero illustration: pure SVG, no image files needed                 */
/* ------------------------------------------------------------------ */

const HeroIllustration = () => (
  <svg
    role="img"
    aria-label="Illustration of a code editor, design shapes and a magnifying glass"
    viewBox="0 0 480 400"
    className="h-auto w-full"
  >
    <defs>
      <linearGradient id="hs-orange" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FF8A3D" />
        <stop offset="1" stopColor="#FF5101" />
      </linearGradient>
      <pattern
        id="hs-hatch"
        width="8"
        height="8"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <rect width="3" height="8" fill="#171923" />
      </pattern>
      <pattern id="hs-dots" width="9" height="9" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.6" fill="#171923" opacity="0.5" />
      </pattern>
    </defs>

    {/* background shapes */}
    <circle cx="395" cy="90" r="70" fill="url(#hs-dots)" />
    <rect x="70" y="120" width="190" height="190" rx="6" fill="url(#hs-orange)" />
    <rect x="30" y="230" width="90" height="90" fill="url(#hs-hatch)" />
    <circle cx="410" cy="290" r="42" fill="#7DD3C0" />
    <circle cx="448" cy="326" r="9" fill="#F5B301" />
    <circle cx="48" cy="50" r="9" fill="#F5B301" />

    {/* code window */}
    <g>
      <rect x="120" y="150" width="240" height="170" rx="12" fill="#fff" stroke="#171923" strokeWidth="2.5" />
      <path d="M120 162a12 12 0 0 1 12-12h216a12 12 0 0 1 12 12v18H120z" fill="#171923" />
      <circle cx="138" cy="165" r="4" fill="#FF5101" />
      <circle cx="152" cy="165" r="4" fill="#F5B301" />
      <circle cx="166" cy="165" r="4" fill="#7DD3C0" />
      <rect x="140" y="198" width="70" height="8" rx="4" fill="#FF5101" />
      <rect x="140" y="216" width="120" height="8" rx="4" fill="#171923" opacity="0.2" />
      <rect x="160" y="234" width="100" height="8" rx="4" fill="#171923" opacity="0.2" />
      <rect x="160" y="252" width="140" height="8" rx="4" fill="#171923" opacity="0.2" />
      <rect x="140" y="270" width="60" height="8" rx="4" fill="#2D9CFF" />
      <rect x="140" y="288" width="90" height="8" rx="4" fill="#171923" opacity="0.2" />
    </g>

    {/* code badge, echoing the app-icon square in the reference */}
    <rect x="300" y="60" width="110" height="110" rx="24" fill="#171923" />
    <path
      d="M335 92l-18 23 18 23M375 92l18 23-18 23M360 88l-10 54"
      fill="none"
      stroke="#fff"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* magnifying glass */}
    <circle cx="330" cy="150" r="68" fill="#fff" fillOpacity="0.15" stroke="#171923" strokeWidth="6" />
    <path d="M378 198l62 62" stroke="#171923" strokeWidth="14" strokeLinecap="round" />

    {/* cursor */}
    <path
      d="M70 90l0 38 11-9 8 18 8-4-8-17 15-1z"
      fill="#fff"
      stroke="#171923"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />

    {/* sparks */}
    <path d="M250 40l-14-18M268 34l-4-24M286 42l18-12" stroke="#7DD3C0" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Accordion                                                          */
/* ------------------------------------------------------------------ */

const AccordionItem = ({ item, isOpen, onToggle, baseId }) => {
  const buttonId = `${baseId}-btn-${item.id}`;
  const panelId = `${baseId}-panel-${item.id}`;

  return (
    <li className="border-t border-[#171923]/20 last:border-b">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={`group flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-[#171923] transition-colors duration-200 hover:text-[#FF5101] sm:py-6 sm:text-xl ${focusRing}`}
        >
          {item.name}
          <span
            aria-hidden="true"
            className={`relative h-5 w-5 shrink-0 text-[#FF5101] transition-transform duration-300 motion-reduce:transition-none ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            {/* plus that collapses into a minus */}
            <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-current" />
            <span
              className={`absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded bg-current transition-transform duration-300 motion-reduce:transition-none ${
                isOpen ? "scale-y-0" : "scale-y-100"
              }`}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6">
            <p className="max-w-xl text-sm leading-relaxed text-[#5B6275] sm:text-base">
              {item.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="rounded-md bg-[#FF5101]/10 px-2.5 py-1 text-xs font-medium text-[#C93F00]"
                >
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href={item.href}
              tabIndex={isOpen ? 0 : -1}
              className={`group/link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#171923] underline-offset-4 hover:text-[#FF5101] hover:underline ${focusRing}`}
            >
              Learn more about {item.name.toLowerCase()}
              <Chevron className="group-hover/link:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

const HeroServices = () => {
  const baseId = useId();
  const [openId, setOpenId] = useState(services.items[0].id);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section
      aria-labelledby="hs-heading"
      className="relative isolate overflow-hidden bg-[#F6F8FC] py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_0%,rgba(255,81,1,0.08),transparent_55%)]"
      />

      <Container>
        {/* 1. Hero --------------------------------------------------- */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1
              id="hs-heading"
              className="max-w-xl text-4xl font-extrabold leading-[1.1] text-[#171923] sm:text-5xl lg:text-6xl"
            >
              {hero.title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#5B6275] sm:text-lg">
              {hero.text}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={hero.primary.href}
                className={`inline-flex items-center justify-center rounded-lg bg-[#FF5101] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(255,81,1,0.7)] transition-colors duration-200 hover:bg-[#E64500] ${focusRing}`}
              >
                {hero.primary.label}
              </Link>

              <a
                href={hero.secondary.href}
                onClick={(e) => {
                  // smooth scroll to the services list and move focus there
                  const target = document.querySelector(hero.secondary.href);
                  if (!target) return;
                  e.preventDefault();
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                  target.focus({ preventScroll: true });
                }}
                className={`inline-flex items-center justify-center rounded-lg border border-[#171923] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#171923] transition-colors duration-200 hover:bg-[#171923] hover:text-white ${focusRing}`}
              >
                {hero.secondary.label}
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[520px] lg:max-w-none">
            <HeroIllustration />
          </div>
        </div>

        {/* 2. Services accordion ----------------------------------- */}
        <div
          id="services"
          tabIndex={-1}
          className="mt-20 grid scroll-mt-24 gap-10 outline-none lg:mt-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16"
        >
          <div>
            <h2 className="max-w-sm text-3xl font-extrabold leading-tight text-[#171923] sm:text-4xl">
              {services.title}
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#5B6275] sm:text-base">
              {services.text}
            </p>
          </div>

          <ul>
            {services.items.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                baseId={baseId}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default HeroServices;
