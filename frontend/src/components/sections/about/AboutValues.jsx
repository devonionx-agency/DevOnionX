
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

import { VALUES } from "@/helper/about";
import SectionHeader from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function AboutValues() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll("[data-value-card]");
      const footer = section.querySelector("[data-values-footer]");

      if (reduceMotion) {
        gsap.set([...cards, footer].filter(Boolean), {
          autoAlpha: 1,
          y: 0,
        });
        return;
      }

      if (cards.length) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (footer) {
        gsap.fromTo(
          footer,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 92%",
              toggleActions: "play none none reverse",
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
      className="relative isolate overflow-hidden bg-[#F4F5F7] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 -z-10 h-80 w-80 rounded-full bg-orange-200/30 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 bottom-10 -z-10 h-80 w-80 rounded-full bg-slate-300/30 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <SectionHeader
          label="THE VALUES WE STAND FOR"
          text="Principles That Shape Everything We Build."
          colorWord="Everything We Build."
          description="Our values guide every decision, every partnership, and every experience we create. They are more than words — they define how we think, collaborate, and deliver meaningful results."
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        {/* Values cards */}
        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {VALUES.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                data-value-card
                className={`group relative flex min-h-[285px] flex-col overflow-hidden rounded-[24px] border p-6 transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out hover:-translate-y-2 hover:border-[#E74700]/60 hover:shadow-[0_22px_55px_-25px_rgba(231,71,0,0.28)] sm:p-7 ${
                  item.featured
                    ? "border-[#E74700] bg-[#E74700] text-white shadow-[0_15px_40px_-22px_rgba(231,71,0,0.6)] hover:border-[#C83D00] hover:bg-[#D94300] hover:shadow-[0_25px_60px_-22px_rgba(231,71,0,0.45)]"
                    : "border-[#E2E4E8] bg-white text-[#191923] hover:bg-white"
                }`}
              >
                {/* Soft hover glow */}
                {!item.featured && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-100/0 blur-3xl transition-colors duration-500 group-hover:bg-orange-200/70"
                  />
                )}

                {/* Card header */}
                <div className="relative flex items-start justify-between">
                  <span
                    className={`font-mono text-xs transition-colors duration-300 ${
                      item.featured
                        ? "text-white/65"
                        : "text-[#999BA4] group-hover:text-[#E74700]"
                    }`}
                  >
                    / {item.number}
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 ${
                      item.featured
                        ? "bg-white/15 text-white group-hover:bg-white group-hover:text-[#E74700]"
                        : "bg-[#FFF0E8] text-[#E74700] group-hover:bg-[#E74700] group-hover:text-white"
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Card content */}
                <div className="relative mt-8 flex-1">
                  <h3
                    className={`text-xl font-semibold tracking-[-0.04em] transition-colors duration-300 sm:text-[22px] ${
                      item.featured
                        ? "text-white"
                        : "text-[#191923] group-hover:text-[#E74700]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 max-w-sm text-sm leading-7 ${
                      item.featured
                        ? "text-white/80"
                        : "text-[#777983]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Card footer */}
                <div
                  className={`relative mt-6 flex items-center justify-between border-t pt-4 ${
                    item.featured
                      ? "border-white/20"
                      : "border-[#ECEDEF] group-hover:border-orange-200"
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                      item.featured
                        ? "text-white/85"
                        : "text-[#E74700]"
                    }`}
                  >
                    {item.tag}
                  </span>

                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      item.featured
                        ? "bg-white/15 text-white group-hover:bg-white group-hover:text-[#E74700]"
                        : "bg-[#F4F5F7] text-[#777983] group-hover:bg-[#E74700] group-hover:text-white"
                    }`}
                  >
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                {/* Featured decoration */}
                {item.featured && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-16 -right-12 h-40 w-40 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-125"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110"
                    />
                  </>
                )}
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div
          data-values-footer
          className="mt-10 flex flex-col gap-4 border-t border-[#DDE0E5] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-7 text-[#70717A]">
            Strong values create better partnerships, thoughtful products,
            and meaningful results.
          </p>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#E74700]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E74700]" />
            Built on purpose
            <MoveUpRight size={14} />
          </div>
        </div>
      </div>
    </section>
  );
}
