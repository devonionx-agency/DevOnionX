"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TbTarget,
  TbPencil,
  TbCode,
  TbShieldCheck,
  TbRocket,
  TbHeadset,
  TbChevronDown,
} from "react-icons/tb";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    number: "01",
    title: "Strategy",
    description: "Understand the business before writing code.",
    Icon: TbTarget,
  },
  {
    number: "02",
    title: "UX / UI Design",
    description: "Make the product simple, intuitive, and user-friendly.",
    Icon: TbPencil,
  },
  {
    number: "03",
    title: "Development",
    description: "Build with modern, scalable, and clean technology.",
    Icon: TbCode,
  },
  {
    number: "04",
    title: "Testing",
    description: "Quality assurance before launch.",
    Icon: TbShieldCheck,
  },
  {
    number: "05",
    title: "Deployment",
    description: "Get your product live and ready for users.",
    Icon: TbRocket,
  },
  {
    number: "06",
    title: "Support",
    description: "We stay with you and keep improving after launch.",
    Icon: TbHeadset,
  },
];

export default function WhatYouGetList() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    const header = headerRef.current;
    const line = lineRef.current;
    const nodes = section
      ? Array.from(section.querySelectorAll("[data-wyg-step]"))
      : [];
    const bottom = bottomRef.current;

    if (!section) return;

    let mm;

    const ctx = gsap.context(() => {
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isCompact: "(max-width: 1023px)",
        },
        (context) => {
          const { isDesktop } = context.conditions;
          const lineStart = isDesktop ? { scaleX: 0 } : { scaleY: 0 };
          const lineEnd = isDesktop ? { scaleX: 1 } : { scaleY: 1 };

          if (line) {
            gsap.fromTo(line, lineStart, {
              ...lineEnd,
              duration: 1,
              ease: "power2.inOut",
              transformOrigin: isDesktop ? "left center" : "top center",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                toggleActions: "play none none none",
              },
            });
          }
        },
      );

      if (nodes.length) {
        gsap.fromTo(
          nodes,
          { opacity: 0, y: 28, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: "top 68%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (bottom) {
        gsap.fromTo(
          bottom,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bottom,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white">
      {/* Header */}
      <div className="mb-4 text-center">
        <div ref={headerRef} className="mt-4 flex justify-center">
          <TbChevronDown
            className="h-5 w-5 animate-bounce text-[#FF5101]"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mt-10 lg:mt-16">
        {/* Connecting line */}
        <div
          ref={lineRef}
          aria-hidden="true"
          className="absolute bottom-2 left-9 top-2 w-[2px] bg-gradient-to-b from-[#FF5101]/0 via-[#FF5101]/30 to-[#FF5101]/0 lg:bottom-auto lg:left-0 lg:right-0 lg:top-9 lg:h-[2px] lg:w-auto lg:bg-gradient-to-r"
        />

        <div className="relative mx-auto grid max-w-xl grid-cols-1 gap-x-6 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-6 lg:gap-y-0">
          {STEPS.map((step) => {
            const { Icon } = step;

            return (
              <div
                key={step.number}
                data-wyg-step
                className="group relative flex flex-row items-start gap-4 text-left lg:flex-col lg:items-center lg:gap-0 lg:text-center"
              >
                {/* Card */}
                <div className="relative z-10 flex min-h-[260px] w-full flex-1 flex-col rounded-3xl border border-[#E5E5E0] bg-[#F5F5F2] p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF5101]/30 group-hover:shadow-[0_12px_30px_rgba(23,25,35,0.07)]">
                  <div className="relative mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#E5E5E0] bg-white">
                    <Icon
                      className="h-7 w-7 text-[#FF5101]"
                      aria-hidden="true"
                    />

                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#FF5101] text-[9px] font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-1 flex-col text-center">
                    <h3 className="mb-2 text-lg font-semibold leading-tight text-[#171923]">
                      {step.title}
                    </h3>

                    <p className="mx-auto max-w-[180px] text-sm leading-6 text-[#62646F]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom text */}
      <div
        ref={bottomRef}
        className="mt-16 flex items-center justify-center gap-3 sm:mt-20 sm:gap-4 lg:mt-24"
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#FF5101]/50 sm:w-16" />
        <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#FF5101]" />
        <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.35em] text-[#62646F] sm:text-xs">
          Partner in Your Success
        </p>
        <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#FF5101]" />
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#FF5101]/50 sm:w-16" />
      </div>
    </section>
  );
}
