'use client';

/**
 * WhatYouGetList.jsx
 * ---------------------------------------------------------------
 * "Process Steps" section — horizontal timeline on large screens,
 * vertical timeline on mobile/tablet. Built with Tailwind CSS +
 * GSAP (ScrollTrigger) for scroll-driven reveal animations.
 *
 * NOTE ON COLORS/TYPOGRAPHY:
 * This is a fresh session, so I didn't have access to the global
 * CSS you mentioned sharing earlier. Colors below (orange/amber on
 * near-black text tones) were matched to your reference screenshot.
 * Swap the `orange-*` / `zinc-*` Tailwind classes for your own
 * theme tokens (or CSS variables) if your global stylesheet defines
 * custom ones — the structure/animation logic won't need to change.
 *
 * No outer container / max-width wrapper or background image is
 * added here, as requested — this section inherits its background
 * from the parent page/layout.
 * ---------------------------------------------------------------
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TbTarget,
  TbPencil,
  TbCode,
  TbShieldCheck,
  TbRocket,
  TbHeadset,
  TbChevronDown,
} from 'react-icons/tb';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    number: '01',
    title: 'Strategy',
    description: 'Understand the business before writing code.',
    Icon: TbTarget,
  },
  {
    number: '02',
    title: 'UX / UI Design',
    description: 'Make the product simple, intuitive, and user-friendly.',
    Icon: TbPencil,
  },
  {
    number: '03',
    title: 'Development',
    description: 'Build with modern, scalable and clean technology.',
    Icon: TbCode,
  },
  {
    number: '04',
    title: 'Testing',
    description: 'Quality assurance before launch.',
    Icon: TbShieldCheck,
  },
  {
    number: '05',
    title: 'Deployment',
    description: 'Get your product live and ready for users.',
    Icon: TbRocket,
  },
  {
    number: '06',
    title: 'Support',
    description: 'We stay with you and keep improving after launch.',
    Icon: TbHeadset,
  },
];

export default function WhatYouGetList() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    const header = headerRef.current;
    const line = lineRef.current;
    const nodes = section
      ? Array.from(section.querySelectorAll('[data-wyg-step]'))
      : [];
    const bottom = bottomRef.current;

    if (!section) return;

    let mm;
    const ctx = gsap.context(() => {
      // Header eyebrow / heading / chevron entrance
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Connecting line — orientation-aware via matchMedia (perf-friendly,
      // one-shot duration animation instead of scroll-scrubbed).
      mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isCompact: '(max-width: 1023px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;
          const lineStart = isDesktop ? { scaleX: 0 } : { scaleY: 0 };
          const lineEnd = isDesktop ? { scaleX: 1 } : { scaleY: 1 };

          if (line) {
            gsap.fromTo(
              line,
              lineStart,
              {
                ...lineEnd,
                duration: 1,
                ease: 'power2.inOut',
                transformOrigin: isDesktop ? 'left center' : 'top center',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 70%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }
        }
      );

      // Step nodes — staggered pop-in
      if (nodes.length) {
        gsap.fromTo(
          nodes,
          { opacity: 0, y: 28, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: 'top 68%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Bottom tagline
      if (bottom) {
        gsap.fromTo(
          bottom,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bottom,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      mm?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full "
    >
      {/* Header */}
      <div className="text-center mb-4">

        <div ref={headerRef} className="wyg-header-anim mt-4 flex justify-center">
          <TbChevronDown
            className="w-5 h-5 text-orange-500 animate-bounce"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mt-10 lg:mt-16">
        {/* Connecting line: vertical on mobile/tablet, horizontal on lg+ */}
        <div
          ref={lineRef}
          aria-hidden="true"
          className="absolute left-9 lg:left-0 right-auto lg:right-0 top-2 lg:top-9 bottom-2 lg:bottom-auto w-[2px] lg:w-auto h-auto lg:h-[2px] bg-gradient-to-b lg:bg-gradient-to-r from-orange-500/0 via-orange-500/60 to-orange-500/0"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-6 gap-y-10 lg:gap-y-0 gap-x-6 max-w-xl lg:max-w-none mx-auto lg:mx-0">
          {STEPS.map((step) => {
            const { Icon } = step;
            return (
              <div
                key={step.number}
                data-wyg-step
                className="group relative flex flex-row lg:flex-col items-start lg:items-center gap-5 lg:gap-0 text-left lg:text-center"
              >
                {/* Icon node */}
                <div className="relative z-10 flex-shrink-0 lg:mb-5">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-orange-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="relative flex items-center justify-center w-[72px] h-[72px] rounded-full bg-zinc-950 border border-orange-500/25 shadow-[0_0_18px_-6px_rgba(255,122,0,0.5)] transition-colors duration-300 group-hover:border-orange-400">
                    <Icon
                      className="w-7 h-7 text-orange-400 transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />
                    <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-300 text-[10px] font-bold text-black">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="pt-1 lg:pt-0">
                  <h3 className="text-white font-semibold text-base lg:text-lg mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed lg:max-w-[170px] lg:mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom text */}
      <div
        ref={bottomRef}
        className="wyg-bottom-anim flex items-center justify-center gap-3 sm:gap-4 mt-16 sm:mt-20 lg:mt-24"
      >
        <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-orange-500/70" />
        <span className="w-1.5 h-1.5 rotate-45 bg-orange-400 flex-shrink-0" />
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-zinc-300 whitespace-nowrap">
          Partner in Your Digital Success
        </p>
        <span className="w-1.5 h-1.5 rotate-45 bg-orange-400 flex-shrink-0" />
        <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-orange-500/70" />
      </div>
    </section>
  );
}