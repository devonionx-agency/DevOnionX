
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiArrowUpRight,
  FiCheck,
  FiLayers,
} from "react-icons/fi";

import {
  INDUSTRIES,
  INDUSTRIES_CONTENT,
} from "@/helper/about";

import SectionHeader from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function AboutIndustries() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll(
        "[data-industry-card]"
      );

      const closing = section.querySelector(
        "[data-industries-closing]"
      );

      const topLabel = section.querySelector(
        "[data-industries-label]"
      );

      if (reduceMotion) {
        gsap.set(
          [cards, closing, topLabel],
          { autoAlpha: 1, y: 0 }
        );

        return;
      }

      // Industry label animation
      if (topLabel) {
        gsap.fromTo(
          topLabel,
          {
            autoAlpha: 0,
            y: 14,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: topLabel,
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      // Industry cards stagger animation
      if (cards.length) {
        gsap.fromTo(
          cards,
          {
            autoAlpha: 0,
            y: 28,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section.querySelector(
                "[data-industries-grid]"
              ),
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Closing statement animation
      if (closing) {
        gsap.fromTo(
          closing,
          {
            autoAlpha: 0,
            y: 22,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: closing,
              start: "top 92%",
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#F8F6F2] px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-10 -z-10 h-64 w-64 rounded-full bg-[#FF5101]/[0.07] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-0 -z-10 h-64 w-64 rounded-full bg-[#E7DCCF]/50 blur-[90px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading — unchanged */}
        <SectionHeader
          label={INDUSTRIES_CONTENT.label}
          text={INDUSTRIES_CONTENT.title}
          colorWord={INDUSTRIES_CONTENT.colorWord}
          description={INDUSTRIES_CONTENT.description}
          className="mx-auto mb-9 max-w-4xl sm:mb-12"
        />

        {/* Compact top label */}
        <div
          data-industries-label
          className="mb-4 flex items-center justify-between gap-3 border-b border-[#E5DDD4] pb-3"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25211E] text-white">
              <FiLayers size={14} />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#39332D] sm:text-[11px]">
              Areas of expertise
            </span>
          </div>

          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#93877C]">
            {String(INDUSTRIES.length).padStart(2, "0")} Industries
          </span>
        </div>

        {/* Compact industries grid */}
        <div
          data-industries-grid
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
        >
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            const isWide = Boolean(industry.wide);
            const isFeatured = index === 0;

            return (
              <article
                key={industry.title}
                data-industry-card
                className={[
                  "group relative isolate flex min-h-[190px] flex-col overflow-hidden rounded-[20px] border p-4 transition-all duration-500 sm:min-h-[205px] sm:p-5",
                  isWide ? "lg:col-span-2" : "lg:col-span-1",
                  isFeatured
                    ? "border-[#28231F] bg-[#28231F] text-white"
                    : "border-[#E8DED4] bg-[#FFFCF8] text-[#25211E] hover:-translate-y-1 hover:border-[#FF5101]/40 hover:shadow-[0_18px_40px_-28px_rgba(60,35,18,0.28)]",
                ].join(" ")}
              >
                {/* Decorative circles */}
                <div
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border transition-transform duration-700 group-hover:scale-125",
                    isFeatured
                      ? "border-white/[0.09]"
                      : "border-[#E9DED5]",
                  ].join(" ")}
                />

                <div
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full border transition-transform duration-700 group-hover:scale-125",
                    isFeatured
                      ? "border-[#FF5101]/30"
                      : "border-[#FF5101]/15",
                  ].join(" ")}
                />

                {/* Card top */}
                <div className="relative flex items-start justify-between">
                  <span
                    className={[
                      "text-[10px] font-semibold tracking-[0.16em]",
                      isFeatured
                        ? "text-[#FF713B]"
                        : "text-[#A69A8D]",
                    ].join(" ")}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={[
                      "flex h-10 w-10 items-center justify-center rounded-[13px] transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-105",
                      isFeatured
                        ? "bg-[#FF5101] text-white"
                        : "bg-[#FFF0E7] text-[#E74700] group-hover:bg-[#FF5101] group-hover:text-white",
                    ].join(" ")}
                  >
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                </div>

                {/* Card content */}
                <div className="relative mt-auto pt-5">
                  <h3 className="text-lg font-semibold tracking-[-0.04em] text-inherit transition-colors duration-300 group-hover:text-[#FF5101] sm:text-xl">
                    {industry.title}
                  </h3>

                  <p
                    className={[
                      "mt-2 text-[12px] leading-[1.7] sm:text-[13px]",
                      isFeatured
                        ? "text-white/65"
                        : "text-[#7B7269]",
                    ].join(" ")}
                  >
                    {industry.description}
                  </p>
                </div>

                {/* Bottom interaction */}
                <div
                  className={[
                    "relative mt-3 flex items-center justify-between border-t pt-3",
                    isFeatured
                      ? "border-white/15"
                      : "border-[#EAE2D9]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "text-[9px] font-semibold uppercase tracking-[0.14em]",
                      isFeatured
                        ? "text-white/50"
                        : "text-[#9B8F83]",
                    ].join(" ")}
                  >
                    What we do
                  </span>

                  <span
                    className={[
                      "flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45",
                      isFeatured
                        ? "bg-white/10 text-white group-hover:bg-[#FF5101]"
                        : "bg-[#F1EBE4] text-[#51463D] group-hover:bg-[#FF5101] group-hover:text-white",
                    ].join(" ")}
                  >
                    <FiArrowUpRight size={15} />
                  </span>
                </div>

                {/* Hover accent */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-5 right-5 h-[2px] origin-left scale-x-0 bg-[#FF5101] transition-transform duration-500 group-hover:scale-x-100"
                />
              </article>
            );
          })}
        </div>

        {/* Compact closing statement */}
        <div
          data-industries-closing
          className="mt-6 rounded-[18px] border border-[#E7DED4] bg-[#F0E9E0] p-4 sm:mt-7 sm:p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#E74700]">
                <FiCheck size={16} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[#29241F]">
                  Built around your industry.
                </p>

                <p className="mt-1 text-[12px] leading-5 text-[#786E64] sm:text-[13px]">
                  {INDUSTRIES_CONTENT.closing}
                </p>
              </div>
            </div>

            <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#E2D5C8] bg-white/70 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.13em] text-[#E74700]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5101]" />
              {INDUSTRIES_CONTENT.footerLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
