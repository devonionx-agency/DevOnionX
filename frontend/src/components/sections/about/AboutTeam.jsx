
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";

import { TEAM, TEAM_CONTENT } from "@/helper/about";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTeam() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const cardsRef = useRef(null);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;

      // Accessibility: disable animations when reduced motion is preferred
      if (reduceMotion) {
        gsap.set(
          [
            introRef.current,
            ...(cards ? Array.from(cards) : []),
            footerRef.current,
          ].filter(Boolean),
          {
            autoAlpha: 1,
            y: 0,
          }
        );

        return;
      }

      // Section heading animation
      if (introRef.current) {
        gsap.fromTo(
          introRef.current,
          {
            autoAlpha: 0,
            y: 24,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 90%",
              toggleActions: "play none play reverse",
            },
          }
        );
      }

      // Team cards: staggered reveal and reverse animation
      if (cards?.length) {
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
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 88%",
              toggleActions: "play none play reverse",
            },
          }
        );
      }

      // Collaboration footer animation
      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 92%",
              toggleActions: "play none play reverse",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  if (!TEAM?.length) return null;

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#FFF9F3] py-16 sm:py-20 lg:py-28"
    >
      {/* Soft ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-16 -z-10 h-[360px] w-[360px] rounded-full bg-[#FF5101]/[0.07] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-[45%] h-[320px] w-[320px] rounded-full bg-[#E8D8C7]/40 blur-[100px]"
      />

      <Container size="xl">
        {/* Section heading */}
        <div
          ref={introRef}
          className="mb-12 sm:mb-16 lg:mb-[72px]"
        >
          <SectionHeader
            label={TEAM_CONTENT.label}
            text={`${TEAM_CONTENT.title} ${TEAM_CONTENT.colorWord}`}
            colorWord={TEAM_CONTENT.colorWord}
            description={TEAM_CONTENT.description}
            className="mx-auto max-w-4xl"
          />
        </div>

        {/* Team member cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-6 xl:gap-5"
        >
          {TEAM.map((member, index) => (
            <div
              key={member.slug || member.name}
              className={[
                "min-w-0 xl:col-span-2",
                index === 3 ? "xl:col-start-2" : "",
                index === 4 ? "xl:col-start-4" : "",
              ].join(" ")}
            >
              <TeamMemberCard
                member={member}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Collaboration footer */}
        <div
          ref={footerRef}
          className="relative mt-14 overflow-hidden rounded-[26px] border border-[#E7DCD0] bg-[#F4EDE4] p-6 sm:mt-20 sm:p-8 lg:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border border-[#FF5101]/15"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-8 h-32 w-32 rounded-full border border-[#FF5101]/15"
          />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FF5101] text-white shadow-lg shadow-[#FF5101]/15">
                <FiPlus size={22} />
              </span>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E74700]">
                  {TEAM_CONTENT.footerLabel}
                </p>

                <p className="mt-2 max-w-xl text-xl font-semibold leading-snug tracking-[-0.04em] text-[#29241F] sm:text-2xl">
                  {TEAM_CONTENT.footerText}
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-[#24211E] py-2 pl-5 pr-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#FF5101]"
            >
              Let&apos;s work together

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF5101] text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#FF5101]">
                <FiArrowUpRight size={17} />
              </span>
            </a>
          </div>
        </div>

        {/* Section closing text */}
        <div className="mt-6 flex flex-col gap-2 text-[9px] font-medium uppercase tracking-[0.16em] text-[#91867B] sm:flex-row sm:items-center sm:justify-between">
          <span>
            DevOnionX — Better ideas, bigger impact.
          </span>

          <span>
            Thoughtfully built. Collectively delivered.
          </span>
        </div>
      </Container>
    </section>
  );
}
