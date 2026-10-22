
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import {
  ABOUT_WHY_STATS,
  ABOUT_WHY_FEATURES,
  ABOUT_WHY_HIGHLIGHT,
} from "@/helper/about";

import SectionHeader from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function AboutWhyChooseUs() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const stats = section.querySelectorAll("[data-why-stat]");
      const features = section.querySelectorAll("[data-why-feature]");
      const featureHeading = section.querySelector("[data-why-feature-heading]");
      const bottom = section.querySelector("[data-why-bottom]");

      if (reduceMotion) {
        gsap.set(
          [...stats, ...features, featureHeading, bottom].filter(Boolean),
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
          }
        );
        return;
      }

      if (stats.length) {
        gsap.fromTo(
          stats,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stats[0],
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (featureHeading) {
        gsap.fromTo(
          featureHeading,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featureHeading,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (features.length) {
        gsap.fromTo(
          features,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.13,
            ease: "power3.out",
            scrollTrigger: {
              trigger: features[0],
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (bottom) {
        gsap.fromTo(
          bottom,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bottom,
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
      className="relative isolate overflow-hidden bg-[#FFF9F3] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-80 w-80 rounded-full bg-orange-200/30 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-orange-100/40 blur-[100px]"
      />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <SectionHeader
          label={ABOUT_WHY_HIGHLIGHT.eyebrow}
          text={`${ABOUT_WHY_HIGHLIGHT.title} ${ABOUT_WHY_HIGHLIGHT.accent}`}
          colorWord={ABOUT_WHY_HIGHLIGHT.accent}
          description={ABOUT_WHY_HIGHLIGHT.description}
          className="mx-auto mb-12 max-w-4xl sm:mb-16"
        />

        {/* Stats */}
        <div className="grid overflow-hidden rounded-[26px] border border-[#E9DED4] bg-white/80 sm:grid-cols-3">
          {ABOUT_WHY_STATS.map((stat, index) => (
            <div
              key={stat.label}
              data-why-stat
              className={`group relative p-6 transition-colors duration-500 ease-out hover:bg-[#FFF4ED] sm:p-7 lg:p-8 ${
                index !== 0
                  ? "border-t border-[#E9DED4] sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-4xl font-semibold tracking-[-0.06em] text-[#E74700] transition-transform duration-500 ease-out group-hover:-translate-y-0.5 sm:text-5xl">
                  {stat.value}
                </p>

                <span className="mt-1 h-2 w-2 rounded-full bg-[#E74700]/40 transition-all duration-500 ease-out group-hover:scale-125 group-hover:bg-[#E74700]" />
              </div>

              <h3 className="mt-4 text-sm font-semibold text-[#191923] sm:text-base">
                {stat.label}
              </h3>

              <p className="mt-1.5 text-xs leading-6 text-[#858087] sm:text-sm">
                {stat.detail}
              </p>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E74700] transition-[width] duration-500 ease-out group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="mt-16 sm:mt-20">
          <div
            data-why-feature-heading
            className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E74700]">
                What makes us different
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.045em] text-[#191923] sm:text-3xl">
                The way we work matters.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#858087]">
              A thoughtful approach to building better digital experiences.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ABOUT_WHY_FEATURES.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  data-why-feature
                  className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[24px] border border-[#E9DED4] bg-white/85 p-6 transition-[transform,border-color,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#E74700]/35 hover:bg-white hover:shadow-[0_18px_45px_-28px_rgba(231,71,0,0.28)] motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
                >
                  {/* Decorative glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-100/0 blur-2xl transition-colors duration-700 ease-out group-hover:bg-orange-200/60"
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="font-mono text-xs text-[#A29AA0] transition-colors duration-500 group-hover:text-[#E74700]">
                      / {feature.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0E7] text-[#E74700] transition-[transform,background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[-4deg] group-hover:bg-[#E74700] group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className="relative mt-8 flex-1">
                    <h4 className="text-xl font-semibold tracking-[-0.04em] text-[#191923] transition-colors duration-500 ease-out group-hover:text-[#E74700]">
                      {feature.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-[#777078]">
                      {feature.description}
                    </p>
                  </div>

                  <div className="relative mt-6 flex items-center justify-between border-t border-[#EEE5DE] pt-4 transition-colors duration-500 group-hover:border-orange-200">
                    <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#E74700]">
                      {feature.tag}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4F0] text-[#8C8585] transition-[transform,background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#E74700] group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing line */}
        <div
          data-why-bottom
          className="mt-10 flex flex-col gap-3 border-t border-[#E8DCD1] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-7 text-[#777078]">
            {ABOUT_WHY_HIGHLIGHT.closing}
          </p>

          <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#E74700]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E74700]" />
            Built together, built to last
          </span>
        </div>
      </div>
    </section>
  );
}
