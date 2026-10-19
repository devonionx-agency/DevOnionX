
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { MISSION_VISION } from "@/helper/about";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMissionVision() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      // Respect accessibility preferences
      if (reduceMotion) {
        gsap.set("[data-purpose-reveal]", {
          autoAlpha: 1,
          y: 0,
          x: 0,
        });
        gsap.set("[data-purpose-line]", { scaleY: 1 });
        return;
      }

      // Section heading
      gsap.fromTo(
        "[data-purpose-heading]",
        {
          autoAlpha: 0,
          y: 35,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-purpose-heading]",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Editorial philosophy panel
      gsap.fromTo(
        "[data-purpose-intro]",
        {
          autoAlpha: 0,
          x: -45,
          y: 20,
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-purpose-intro]",
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Mission and vision timeline
      gsap.fromTo(
        "[data-purpose-item]",
        {
          autoAlpha: 0,
          y: 45,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-purpose-timeline]",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate the timeline line from top to bottom
      gsap.fromTo(
        "[data-purpose-line]",
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          duration: 1.4,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "[data-purpose-timeline]",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Closing statement
      gsap.fromTo(
        "[data-purpose-footer]",
        {
          autoAlpha: 0,
          y: 25,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-purpose-footer]",
            start: "top 92%",
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
      className="relative overflow-hidden bg-[#FFF9F3] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-orange-200/30 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <div data-purpose-heading data-purpose-reveal>
          <SectionHeader
            label="THE DEVONIONX APPROACH"
            text="Ideas Need Direction."
            colorWord="Direction."
            description="The principles that shape our decisions, our products, and the future we want to create."
            className="mb-14 sm:mb-16"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Editorial introduction */}
          <div
            data-purpose-intro
            data-purpose-reveal
            className="flex flex-col"
          >
            <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[28px] bg-[#E74700] p-7 text-white sm:min-h-[320px] sm:p-9">
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">
                  OUR PHILOSOPHY
                </span>

                <ArrowUpRight
                  size={22}
                  className="transition-transform duration-300 hover:rotate-45"
                />
              </div>

              <div className="relative z-10 mt-10">
                <h3 className="max-w-sm text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-5xl">
                  Good ideas deserve
                  <span className="block text-[#FFD9C8]">
                    great execution.
                  </span>
                </h3>

                <p className="mt-5 max-w-xs text-sm leading-7 text-white/80">
                  We bring strategy, design, and engineering together
                  to turn possibility into progress.
                </p>
              </div>

              {/* Decorative orbit */}
              <div
                aria-hidden="true"
                className="purpose-orbit pointer-events-none absolute -bottom-16 -right-12 h-48 w-48 rounded-full border border-white/20"
              >
                <div className="absolute left-8 top-1 h-3 w-3 rounded-full bg-[#FFD9C8]" />
                <div className="absolute bottom-8 right-2 h-2 w-2 rounded-full bg-white/70" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-b border-[#E7DED5] pb-5">
              <div>
                <p className="text-sm font-semibold text-[#191923]">
                  Thoughtful by design.
                </p>

                <p className="mt-1 text-xs text-[#77747A]">
                  Intentional in every decision.
                </p>
              </div>

              <span className="purpose-drift flex h-11 w-11 items-center justify-center rounded-full border border-[#E7DED5] text-[#E74700]">
                <ArrowDownRight size={20} />
              </span>
            </div>
          </div>

          {/* Mission and vision timeline */}
          <div
            data-purpose-timeline
            className="relative"
          >
            {/* Timeline track */}
            <div
              aria-hidden="true"
              className="absolute bottom-12 left-[19px] top-8 w-px bg-[#E5D9CC] sm:left-[23px]"
            >
              <div
                data-purpose-line
                className="absolute left-0 top-0 h-full w-full origin-top scale-y-0 bg-[#E74700]"
              />
            </div>

            <div className="space-y-12 sm:space-y-14">
              {MISSION_VISION.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.id}
                    data-purpose-item
                    data-purpose-reveal
                    className="group relative pl-14 sm:pl-[68px]"
                  >
                    {/* Timeline marker */}
                    <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#E5D9CC] bg-[#FFF9F3] text-[#E74700] transition-all duration-300 group-hover:scale-110 group-hover:border-[#E74700] group-hover:bg-[#E74700] group-hover:text-white sm:h-12 sm:w-12">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>

                    <div className="border-b border-[#E7DED5] pb-9 transition-all duration-300 group-hover:border-[#E74700]/50 sm:pb-10">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E74700]">
                          {item.eyebrow}
                        </span>

                        <span className="h-px w-7 bg-[#E5D9CC] transition-all duration-300 group-hover:w-12 group-hover:bg-[#E74700]" />

                        <span className="font-mono text-[10px] text-[#969087]">
                          {item.number}
                        </span>
                      </div>

                      <h3 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#191923] transition-colors duration-300 group-hover:text-[#E74700] sm:text-[38px]">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-7 text-[#686873] sm:text-[15px]">
                        {item.description}
                      </p>

                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {item.principles.map((principle) => (
                          <li
                            key={principle}
                            className="flex items-center gap-2 text-xs font-medium text-[#45434B] transition-transform duration-300 group-hover:translate-x-1"
                          >
                            <Check
                              size={15}
                              className="shrink-0 text-[#E74700]"
                            />
                            {principle}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-6 text-xs italic text-[#888179]">
                        {item.closing}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative animations */}
      <style jsx>{`
        .purpose-orbit {
          animation: purpose-orbit 22s linear infinite;
        }

        .purpose-drift {
          animation: purpose-drift 5s ease-in-out infinite;
        }

        @keyframes purpose-orbit {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes purpose-drift {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .purpose-orbit,
          .purpose-drift {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
