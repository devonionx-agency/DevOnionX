
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import { PILLARS, WHO_WE_ARE_STEPS } from "@/helper/about";

gsap.registerPlugin(ScrollTrigger);

const PRINCIPLES = [
  "Clear communication at every stage",
  "Clean, maintainable development",
  "User experience and business goals first",
];

const PILLAR_ICONS = [Lightbulb, Code2, TrendingUp];

export default function AboutStory() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Section heading
      gsap.fromTo(
        "[data-reveal='heading']",
        { autoAlpha: 0, y: 42 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-reveal='heading']",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Introduction and principles
      gsap.fromTo(
        "[data-reveal='intro']",
        { autoAlpha: 0, y: 55 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-reveal='intro']",
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3. Pillar cards: reveal one after another
      gsap.fromTo(
        "[data-reveal='pillar']",
        {
          autoAlpha: 0,
          y: 48,
          scale: 0.98,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-reveal='pillars']",
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 4. Process steps
      gsap.fromTo(
        "[data-reveal='step']",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.13,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-reveal='process']",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8F7F4] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div data-reveal="heading">
          <SectionHeader
            label="WHO WE ARE"
            text="We Build Digital Products That Move Businesses Forward"
            colorWord="Digital Products"
            description="A focused team of developers turning ambitious ideas into thoughtful, reliable, and scalable digital experiences."
            className="mx-auto mb-12 max-w-4xl sm:mb-16"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Introduction */}
          <div
            data-reveal="intro"
            className="flex h-full flex-col"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF5101]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5101]">
                A little about us
              </span>
            </div>

            <h3 className="max-w-lg text-3xl font-bold leading-[1.15] tracking-tight text-[#171923] sm:text-4xl">
              Small team.
              <br />
              <span className="bg-gradient-to-r from-[#E74700] via-[#FF5101] to-[#F59E0B] bg-clip-text text-transparent">
                Big-picture thinking.
              </span>
            </h3>

            <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#62646F]">
              <p>
                DevOnionX is a five-member web development agency
                bringing together creativity, technical expertise,
                and a shared passion for building better digital
                experiences.
              </p>

              <p>
                We work across frontend, backend, and full-stack
                development to turn ideas into functional,
                user-focused web solutions. Every project starts
                with understanding the problem—not simply writing
                code.
              </p>

              <p>
                Our approach is straightforward: communicate
                clearly, build thoughtfully, and create solutions
                that are ready to grow with the people who use them.
              </p>
            </div>

            {/* Working Principles */}
            <div className="mt-7 space-y-3">
              {PRINCIPLES.map((item) => (
                <div
                  key={item}
                  className="group flex items-start gap-3"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FF5101]/10 text-[#FF5101] transition-all duration-300 group-hover:rotate-12 group-hover:bg-[#FF5101] group-hover:text-white">
                    <Check size={12} strokeWidth={2.5} />
                  </span>

                  <p className="text-sm font-medium text-[#252936] transition-colors duration-300 group-hover:text-[#E74700]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Optional team note */}
            {/*
            <div className="mt-9 border-t border-[#171923]/10 pt-5">
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#171923] text-white shadow-sm transition-transform duration-300 hover:rotate-[-6deg]">
                  <Layers3 size={21} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#171923]">
                    Five minds. One direction.
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#62646F]">
                    Different strengths, working toward better digital products.
                  </p>
                </div>
              </div>
            </div>
            */}
          </div>

          {/* Pillar Cards */}
          <div
            data-reveal="pillars"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon || PILLAR_ICONS[index];

              return (
                <article
                  data-reveal="pillar"
                  key={pillar.number}
                  className="group relative isolate overflow-hidden rounded-2xl border border-[#E7E5E0] bg-white transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#FF5101]/40 hover:shadow-[0_22px_55px_-30px_rgba(231,71,0,0.30)]"
                >
                  {/* Animated background glow */}
                  <div className="pointer-events-none absolute -right-16 -top-20 -z-10 size-48 rounded-full bg-gradient-to-br from-[#FF5101]/0 via-[#FF5101]/[0.06] to-[#F59E0B]/[0.13] opacity-60 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#E74700] via-[#FF5101] to-[#F59E0B] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  <div className="relative flex gap-4 p-5 sm:gap-5 sm:p-6">
                    {/* Icon Tile */}
                    <div className="relative flex size-[52px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#FF5101]/15 bg-[#FFF5EF] text-[#F04B08] transition-all duration-500 ease-out group-hover:rotate-[-5deg] group-hover:scale-105 group-hover:border-[#FF5101] group-hover:bg-gradient-to-br group-hover:from-[#E74700] group-hover:to-[#F59E0B] group-hover:text-white group-hover:shadow-[0_8px_22px_-8px_rgba(231,71,0,0.55)]">
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                        className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                      />

                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    </div>

                    {/* Card Content */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E74700]">
                          Principle {pillar.number}
                        </span>

                        <span className="size-1 rounded-full bg-[#D6D3CD]" />

                        <span className="text-[10px] font-medium text-[#777984]">
                          {pillar.tag}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold tracking-tight text-[#171923] transition-colors duration-300 group-hover:text-[#E74700] sm:text-xl">
                        {pillar.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-[#62646F]">
                        {pillar.body}
                      </p>

                      {/* Bottom metadata */}
                      <div className="mt-4 flex items-center gap-2">
                        <span className="h-px w-5 bg-[#FF5101]/50 transition-all duration-300 group-hover:w-10 group-hover:bg-[#FF5101]" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#8A8B93] transition-colors group-hover:text-[#E74700]">
                          Our approach
                        </span>
                      </div>
                    </div>

                    {/* Number badge */}
                    <div className="absolute right-5 top-5 flex size-7 items-center justify-center rounded-full border border-[#E7E5E0] bg-[#F8F7F4] text-[10px] font-bold text-[#777984] transition-all duration-300 group-hover:border-[#FF5101]/30 group-hover:bg-[#FF5101]/10 group-hover:text-[#E74700] sm:right-6 sm:top-6">
                      {pillar.number}
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute bottom-5 right-5 flex size-8 translate-x-1 items-center justify-center rounded-full bg-[#F8F7F4] text-[#8A8B93] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:bg-[#FF5101] group-hover:text-white group-hover:opacity-100 sm:bottom-6 sm:right-6">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Corner detail */}
                  <div className="pointer-events-none absolute bottom-0 right-0 size-14 overflow-hidden">
                    <div className="absolute -bottom-7 -right-7 size-14 rotate-45 border border-[#FF5101]/0 transition-all duration-500 group-hover:border-[#FF5101]/30" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Process Strip */}
        <div
          data-reveal="process"
          className="mt-12 overflow-hidden rounded-2xl border border-[#E7E5E0] bg-white sm:mt-16"
        >
          <div className="grid grid-cols-1 divide-y divide-[#E7E5E0] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {WHO_WE_ARE_STEPS.map((step, index) => (
              <div
                data-reveal="step"
                key={step.number}
                className="group relative flex items-center gap-4 overflow-hidden p-5 transition-colors duration-300 hover:bg-[#FFF8F3] sm:p-6"
              >
                <span className="text-3xl font-bold tracking-tight text-[#FF5101]/30 transition-all duration-300 group-hover:scale-110 group-hover:text-[#FF5101]">
                  {step.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-[#171923] transition-colors group-hover:text-[#E74700]">
                    {step.label}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-[#62646F]">
                    {step.description}
                  </p>
                </div>

                {index !== 2 && (
                  <ArrowDownRight
                    size={17}
                    className="shrink-0 text-[#B2B3BA] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#FF5101] sm:hidden"
                  />
                )}

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#E74700] to-[#F59E0B] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
