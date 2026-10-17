"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";
import { HERO_CONTENT, SERVICES } from "@/helper/services/servicesHero";

gsap.registerPlugin(useGSAP);

const ServiceHero = () => {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from("[data-hero='eyebrow']", { y: 12, opacity: 0, duration: 0.7 })
          .from(
            "[data-hero='word']",
            {
              yPercent: 115,
              rotate: 2,
              opacity: 0,
              duration: 1.2,
              stagger: 0.09,
            },
            "-=0.4",
          )
          .fromTo(
            "[data-hero='fade']",
            { y: 24, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            },
            "-=0.7",
          )
          .fromTo(
            "[data-hero='card']",
            { y: 40, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              stagger: 0.08,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            },
            "-=0.6",
          );
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  const { eyebrow, titleLines, description, primaryCta, secondaryCta } =
    HERO_CONTENT;

  return (
    <section
      ref={rootRef}
      className="relative isolate overflow-hidden bg-[#f6f2ec] px-4 pb-16 pt-[120px] sm:px-6 lg:px-8"
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-orange-100/70 to-transparent blur-2xl"
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        {/* Eyebrow */}
        <p
          data-hero="eyebrow"
          className="mb-6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500"
        >
          <span className="h-px w-3 bg-neutral-400" />
          <span>/</span>
          <span>{eyebrow}</span>
        </p>

        {/* Heading */}
        <h1 className="font-serif text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-[#0f172a] sm:text-6xl lg:text-[4.5rem]">
          {titleLines.map((line) => (
            <span key={line.text} className="block">
              {line.text.split(" ").map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  className="inline-block overflow-hidden px-[0.15em] pb-[0.14em] align-bottom"
                >
                  <span
                    data-hero="word"
                    className={`inline-block will-change-transform ${
                      line.accent
                        ? "italic font-medium text-orange-500 sm:text-7xl lg:text-[5.5rem]"
                        : ""
                    }`}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Description */}
        <p
          data-hero="fade"
          className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-[17px]"
        >
          {description}
        </p>

        {/* CTAs */}
        <div
          data-hero="fade"
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href={primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-lg bg-orange-600 px-7 py-4.5 text-sm font-medium text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-500"
          >
            {primaryCta.label}
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href={secondaryCta.href}
            className="group inline-flex items-center gap-2 rounded-lg border border-neutral-300/80 bg-white/60 px-7 py-4.5 text-sm font-medium text-neutral-900 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-white"
          >
            {secondaryCta.label}
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Service cards */}
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {SERVICES.map(({ id, title, icon: Icon, iconBg, iconColor }) => (
          <div
            key={id}
            data-hero="card"
            className="group relative flex min-h-[140px] flex-col rounded-2xl bg-white/60 p-5 text-left shadow-[0_2px_20px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
          >
            <span
              className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
            >
              <Icon size={18} />
            </span>

            <h3 className="font-serif text-base font-semibold text-neutral-900">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHero;
