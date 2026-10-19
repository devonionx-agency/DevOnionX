
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    const cards = section.querySelectorAll("[data-industry-card]");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(cards, {
        autoAlpha: 1,
        y: 0,
      });

      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          autoAlpha: 0,
          y: 28,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.querySelector("[data-industries-grid]"),
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F4F5F7] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-orange-200/25 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-orange-100/40 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <SectionHeader
          label={INDUSTRIES_CONTENT.label}
          text={INDUSTRIES_CONTENT.title}
          colorWord={INDUSTRIES_CONTENT.colorWord}
          description={INDUSTRIES_CONTENT.description}
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        {/* Industries Grid */}
        <div
          data-industries-grid
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            const isWide = industry.wide;

            return (
              <article
                key={industry.title}
                data-industry-card
                className={`group relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl border border-[#E9E2DC] bg-white/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E74700]/40 hover:bg-white hover:shadow-[0_18px_45px_-25px_rgba(231,71,0,0.22)] sm:min-h-[195px] sm:p-7 ${
                  isWide ? "lg:col-span-2" : ""
                }`}
              >
                {/* Subtle decorative accent */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#E74700]/[0.04] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#E74700]/[0.08]"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0E7] text-[#E74700] transition-all duration-300 group-hover:bg-[#E74700] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <span className="mt-1 h-2 w-2 rounded-full bg-[#E8E2DC] transition-colors duration-300 group-hover:bg-[#E74700]" />
                </div>

                <div className="relative mt-7">
                  <div className="flex items-center justify-between gap-3">
                    <h3
                      className={`font-semibold tracking-[-0.035em] text-[#191923] transition-colors duration-300 group-hover:text-[#E74700] ${
                        isWide
                          ? "text-xl sm:text-2xl"
                          : "text-lg sm:text-xl"
                      }`}
                    >
                      {industry.title}
                    </h3>

                    {isWide && (
                      <span className="hidden text-xs font-medium text-[#E74700]/70 transition-transform duration-300 group-hover:translate-x-1 sm:block">
                        Explore
                      </span>
                    )}
                  </div>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#77747A]">
                    {industry.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-9 flex flex-col gap-3 border-t border-[#E8DED4] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-[#77747A]">
            {INDUSTRIES_CONTENT.closing}
          </p>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#E74700]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E74700]" />
            {INDUSTRIES_CONTENT.footerLabel}
          </div>
        </div>
      </div>
    </section>
  );
}
