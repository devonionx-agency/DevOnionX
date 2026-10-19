
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

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
      const heading = section.querySelectorAll(
        "[data-values-heading]"
      );
      const cards = section.querySelectorAll("[data-value-card]");
      const footer = section.querySelector("[data-values-footer]");
      const line = section.querySelector("[data-values-line]");

      if (reduceMotion) {
        gsap.set(
          [...heading, ...cards, footer, line].filter(Boolean),
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            scaleX: 1,
          }
        );
        return;
      }

      // Heading reveal
      gsap.fromTo(
        heading,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading[0],
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Decorative line animation
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Staggered card reveal
      if (cards.length) {
        gsap.fromTo(
          cards,
          {
            autoAlpha: 0,
            y: 38,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.13,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Closing statement
      if (footer) {
        gsap.fromTo(
          footer,
          { autoAlpha: 0, y: 20 },
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
      className="relative overflow-hidden bg-[#FFF9F3] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-orange-200/25 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-orange-100/40 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-values-heading
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-7 bg-[#E74700]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E74700]">
              The values we stand for
            </span>

            <span className="h-px w-7 bg-[#E74700]" />
          </div>

          <div data-values-heading>
            <SectionHeader
              label=""
              text="Principles That Shape"
              colorWord="Everything We Build."
              description="Our values guide every decision, every partnership, and every experience we create. They're not just words — they're how we work."
              className="mb-0"
            />
          </div>

          <div
            data-values-line
            className="mx-auto mt-8 h-px w-24 bg-[#E74700]"
          />
        </div>

        {/* Values grid */}
        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {VALUES.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                data-value-card
                className={`group relative flex min-h-[270px] flex-col overflow-hidden rounded-[24px] border p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-7 ${
                  item.featured
                    ? "border-[#E74700] bg-[#E74700] text-white"
                    : "border-[#E7DED5] bg-white/80 text-[#191923] hover:border-[#E74700]/50 hover:bg-white"
                }`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between">
                  <span
                    className={`font-mono text-xs ${
                      item.featured
                        ? "text-white/65"
                        : "text-[#98919A]"
                    }`}
                  >
                    / {item.number}
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 ${
                      item.featured
                        ? "bg-white/15 text-white"
                        : "bg-[#FFF0E8] text-[#E74700] group-hover:bg-[#E74700] group-hover:text-white"
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Card content */}
                <div className="mt-8 flex-1">
                  <h3
                    className={`text-xl font-semibold tracking-[-0.04em] sm:text-[22px] ${
                      item.featured
                        ? "text-white"
                        : "text-[#191923]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 max-w-sm text-sm leading-6 ${
                      item.featured
                        ? "text-white/80"
                        : "text-[#77747A]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Card footer */}
                <div
                  className={`mt-6 flex items-center justify-between border-t pt-4 ${
                    item.featured
                      ? "border-white/20"
                      : "border-[#E7DED5]"
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.15em] ${
                      item.featured
                        ? "text-white/80"
                        : "text-[#E74700]"
                    }`}
                  >
                    {item.tag}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      item.featured
                        ? "text-white"
                        : "text-[#A8A0A0] group-hover:text-[#E74700]"
                    }`}
                  />
                </div>

                {/* Featured card decoration */}
                {item.featured && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-16 -right-12 h-40 w-40 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-125"
                  />
                )}
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div
          data-values-footer
          className="mt-10 flex flex-col gap-4 border-t border-[#E7DED5] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-6 text-[#77747A]">
            Strong values create better partnerships, thoughtful
            products, and meaningful results.
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
