"use client";

import Link from "next/link";

import Container from "@/components/ui/Container";

/* ------------------------------------------------------------------ */
/*  Content: edit routes and copy here, nothing below needs to change  */
/* ------------------------------------------------------------------ */

const intro = {
  title: "Never settle for average software",
  text: "Work with a full-cycle software team that helps you punch above your weight, combining expert engineering, thoughtful design and rigorous testing to turn bold ideas into products people use.",
  cta: { label: "Talk to our experts", href: "/contact" },
};

const pillars = [
  {
    id: "built",
    colors: ["#FF5101", "#171923"],
    title: "Built for teams that refuse to stand still",
    text: "Make bold moves with purpose. We end the false choice between speed and quality so your product can grow without rework.",
  },
  {
    id: "smart",
    colors: ["#171923", "#2D9CFF"],
    title: "Engineering that goes beyond the brief",
    text: "We spot the gaps other teams miss, and back every decision with modern tooling, automation and clear technical thinking.",
  },
  {
    id: "reliable",
    colors: ["#0E9F6E", "#FF5101"],
    title: "Delivery you can count on at every stage",
    text: "From discovery to launch and support, we keep scope, timelines and budget visible so every sprint moves the product forward.",
  },
];

const feature = {
  label: "Featured project",
  title: "Tour Patron: turning a landmark visit into a guided mobile experience",
  text: "We designed and built an audio-guided tour app that brings a historic cathedral to life, so visitors get the story at their own pace.",
  cta: { label: "Read the case study", href: "/project/tour-patron" },
  cardTitle: "Great software should never make you choose between speed and quality",
};

const servicesIntro = {
  label: "Software services",
  title: "Move first, move fast, and move with confidence",
  paragraphs: [
    "Get access to complete engineering capabilities without sacrificing flexibility or a personal, hands-on service.",
    "Work with one integrated team across design, development and testing that is already thinking five moves ahead.",
  ],
  cta: { label: "Explore our capabilities", href: "/services" },
};

const services = [
  {
    id: "web",
    color: "#FF5101",
    title: "Web Development",
    text: "Fast, scalable websites and web apps built with React, Next.js and modern backends.",
    href: "/services/web-development",
  },
  {
    id: "mobile",
    color: "#D946EF",
    title: "Mobile Apps",
    text: "Polished iOS and Android products, from first prototype to store release and beyond.",
    href: "/services/mobile-apps",
  },
  {
    id: "design",
    color: "#0EA5E9",
    title: "UI/UX Design",
    text: "Research-led interfaces and design systems that are simple to use and easy to extend.",
    href: "/services/ui-ux-design",
  },
  {
    id: "qa",
    color: "#10B981",
    title: "Quality Assurance",
    text: "Manual and automated testing that catches problems early and protects every release.",
    href: "/services/quality-assurance",
  },
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
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
    className={`h-3.5 w-3.5 transition-transform duration-200 ${className}`}
  >
    <path d="M6 3l5 5-5 5" />
  </svg>
);

const DiagonalArrow = ({ color }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 48 48"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-11 w-11 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
  >
    <path d="M10 38L38 10" />
    <path d="M16 10h22v22" />
    <path d="M4 44V28" opacity="0" />
  </svg>
);

const DotPair = ({ colors }) => (
  <span aria-hidden="true" className="flex">
    <span
      className="h-7 w-7 rounded-full"
      style={{ backgroundColor: colors[0] }}
    />
    <span
      className="-ml-1 h-7 w-7 rounded-full"
      style={{ backgroundColor: colors[1] }}
    />
  </span>
);

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

const ServicesShowcase = () => {
  return (
    <section
      aria-labelledby="ss-heading"
      className="relative isolate overflow-hidden border-t border-[#E4E7EE] bg-[#F6F8FC] py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/50 to-transparent"
      />

      <Container>
        {/* 1. Intro ------------------------------------------------- */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <h2
            id="ss-heading"
            className="max-w-md text-2xl font-extrabold uppercase leading-tight text-[#171923] sm:text-3xl"
          >
            {intro.title}
          </h2>

          <div>
            <p className="max-w-xl text-base leading-relaxed text-[#3B4152]">
              {intro.text}
            </p>

            <Link
              href={intro.cta.href}
              className={`group mt-6 inline-flex flex-col text-sm font-semibold text-[#171923] ${focusRing}`}
            >
              <span className="inline-flex items-center gap-1.5">
                {intro.cta.label}
                <Chevron className="group-hover:translate-x-0.5" />
              </span>
              <span
                aria-hidden="true"
                className="mt-1.5 h-0.5 w-full rounded-full bg-gradient-to-r from-[#FF5101] to-[#2D9CFF]"
              />
            </Link>
          </div>
        </div>

        {/* 2. Pillars ---------------------------------------------- */}
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-12">
          {pillars.map((item) => (
            <li key={item.id}>
              <DotPair colors={item.colors} />
              <h3 className="mt-5 text-lg font-bold leading-snug text-[#171923]">
                {item.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#5B6275]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        {/* 3. Feature banner --------------------------------------- */}
        <div className="relative mt-16 lg:mt-28">
          {/* gradient panel */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF5101] via-[#E64500] to-[#B53500] px-6 py-10 text-white sm:px-10 sm:py-14 lg:mr-14 lg:min-h-[300px] lg:rounded-none lg:rounded-bl-2xl lg:rounded-tl-2xl lg:py-16 lg:pl-14 lg:pr-[48%]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
            />
            <p className="text-xs font-semibold text-white/80">
              {feature.label}
            </p>
            <h3 className="mt-3 max-w-xl text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
              {feature.title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90">
              {feature.text}
            </p>
            <Link
              href={feature.cta.href}
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#171923] transition-colors duration-200 hover:bg-[#171923] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E64500]"
            >
              {feature.cta.label}
              <Chevron />
            </Link>
          </div>

          {/* overlapping visual card */}
          <Link
            href={feature.cta.href}
            aria-label={`${feature.cardTitle}. ${feature.cta.label}`}
            className={`group mt-6 block rounded-2xl border border-[#EADFD3] bg-[#FFF3E8] p-6 shadow-[0_24px_60px_-30px_rgba(23,25,35,0.35)] transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none sm:p-8 lg:absolute lg:-top-12 lg:right-0 lg:mt-0 lg:w-[46%] ${focusRing}`}
          >
            <p className="text-center text-xl font-black uppercase leading-tight text-[#171923] sm:text-2xl">
              {feature.cardTitle}
            </p>

            {/* simple UI mock built from shapes, no image needed */}
            <div
              aria-hidden="true"
              className="mx-auto mt-6 w-full max-w-[260px] rounded-xl border border-[#171923]/10 bg-white p-3 shadow-sm"
            >
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FF5101]" />
                <span className="h-2 w-2 rounded-full bg-[#171923]/20" />
                <span className="h-2 w-2 rounded-full bg-[#171923]/20" />
              </div>
              <div className="mt-3 h-2.5 w-2/3 rounded bg-[#171923]" />
              <div className="mt-2 h-2 w-full rounded bg-[#171923]/10" />
              <div className="mt-1.5 h-2 w-4/5 rounded bg-[#171923]/10" />
              <div className="mt-3 flex items-end gap-1.5">
                {[40, 65, 50, 85, 70, 100].map((h, i) => (
                  <span
                    key={i}
                    className="w-full rounded-sm bg-[#FF5101] transition-all duration-300 group-hover:opacity-80"
                    style={{ height: `${h * 0.4}px`, opacity: 0.35 + i * 0.13 }}
                  />
                ))}
              </div>
            </div>
          </Link>
        </div>

        {/* 4. Services --------------------------------------------- */}
        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold text-[#FF5101]">
              {servicesIntro.label}
            </p>
            <h3 className="mt-3 max-w-sm text-2xl font-extrabold uppercase leading-tight text-[#171923] sm:text-3xl">
              {servicesIntro.title}
            </h3>
            {servicesIntro.paragraphs.map((p) => (
              <p
                key={p}
                className="mt-4 max-w-sm text-sm leading-relaxed text-[#5B6275]"
              >
                {p}
              </p>
            ))}
            <Link
              href={servicesIntro.cta.href}
              className={`mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#FF5101] to-[#FF8A3D] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(255,81,1,0.7)] transition-all duration-200 hover:brightness-110 ${focusRing}`}
            >
              {servicesIntro.cta.label}
              <Chevron />
            </Link>
          </div>

          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.href}
                  className={`group flex gap-4 rounded-lg ${focusRing}`}
                >
                  <DiagonalArrow color={s.color} />
                  <span>
                    <span className="inline-flex items-center gap-1 text-base font-bold text-[#171923] transition-colors duration-200 group-hover:text-[#FF5101]">
                      {s.title}
                      <Chevron className="group-hover:translate-x-1" />
                    </span>
                    <span className="mt-1.5 block max-w-[260px] text-sm leading-relaxed text-[#5B6275]">
                      {s.text}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ServicesShowcase;
