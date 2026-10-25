
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { TEAM, TEAM_CONTENT } from "@/helper/about";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

export default function AboutTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  const total = TEAM.length;

  const goTo = useCallback(
    (index) => {
      if (!total) return;
      setActiveIndex((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const previous = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  // Auto-slide every 2 seconds
  useEffect(() => {
    if (total < 2 || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [total, isPaused]);

  // Smoothly position the active card
  useEffect(() => {
    const track = trackRef.current;
    const card = track?.children[activeIndex];

    if (!track || !card) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    track.scrollTo({
      left:
        card.offsetLeft -
        track.offsetLeft -
        (track.clientWidth - card.clientWidth) / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeIndex]);

  // Pause when the page is hidden
  useEffect(() => {
    const handleVisibility = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  if (!total) return null;

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-12 -z-10 h-96 w-96 rounded-full bg-blue-100/60 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-indigo-50/80 blur-[100px]"
      />

      <Container size="xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-4xl sm:mb-12 lg:mb-14">
          <SectionHeader
            label={TEAM_CONTENT.label}
            text={`${TEAM_CONTENT.title} ${TEAM_CONTENT.colorWord}`}
            colorWord={TEAM_CONTENT.colorWord}
            description={TEAM_CONTENT.description}
            className="mx-auto max-w-4xl"
          />
        </div>

        {/* Carousel */}
        <div
          className="mx-auto max-w-5xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          {/* Carousel header */}
          <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-600" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
                The people behind DevOnionX
              </p>
            </div>

            <p className="text-xs tabular-nums text-slate-400">
              <span className="font-semibold text-slate-950">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(total).padStart(2, "0")}
            </p>
          </div>

          {/* Sliding cards */}
          <div
            ref={trackRef}
            aria-label="Our team members"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 lg:gap-6"
          >
            {TEAM.map((member, index) => (
              <div
                key={member.slug || member.name}
                aria-current={index === activeIndex ? "true" : undefined}
                className="w-[86%] shrink-0 snap-center sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <TeamMemberCard member={member} index={index} />
              </div>
            ))}
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-between border-t border-slate-200 pt-4">
            <div className="flex items-center gap-1.5">
              {TEAM.map((member, index) => (
                <button
                  key={member.slug || member.name}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Show ${member.name}`}
                  aria-pressed={activeIndex === index}
                  className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    activeIndex === index
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-slate-200 hover:bg-blue-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous team member"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <FiArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next team member"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition duration-300 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <FiArrowRight size={17} />
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400">
            {isPaused ? "Paused — explore our team" : "Auto-slide · Hover to pause"}
          </p>
        </div>
      </Container>
    </section>
  );
}
