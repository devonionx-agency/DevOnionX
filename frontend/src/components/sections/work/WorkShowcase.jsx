"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import DirectionalButton from "@/components/common/Directionalbutton";
import Responsive from "@/components/common/Responsive";
import Container from "@/components/ui/Container";
import FeaturedWorkCard from "@/components/ui/FeaturedWork";
import SectionHeader from "@/components/ui/SectionHeader";
import { featuredWorkItems, workCategories } from "@/helper/workPage";

gsap.registerPlugin(ScrollTrigger);

const INITIAL_COUNT = 6;
const EXTEND_COUNT = 3;

const matchesCategory = (project, value) => {
  if (value === "all") return true;
  if (value === "featured") return Boolean(project.featured);
  return project.category === value;
};

const WorkShowcase = () => {
  const [showCount, setShowCount] = useState(INITIAL_COUNT);
  const [activeCategory, setActiveCategory] = useState("all");

  const sectionRef = useRef(null);
  const filterRef = useRef(null);

  // Filtering
  const filtered = useMemo(
    () => featuredWorkItems.filter((p) => matchesCategory(p, activeCategory)),
    [activeCategory],
  );

  const counts = useMemo(
    () =>
      Object.fromEntries(
        workCategories.map((c) => [
          c.value,
          featuredWorkItems.filter((p) => matchesCategory(p, c.value)).length,
        ]),
      ),
    [],
  );

  const visibleItems = filtered.slice(0, showCount);
  const hasMore = showCount < filtered.length;

  const handleCategory = (value) => {
    if (value === activeCategory) return;
    setActiveCategory(value);
    setShowCount(INITIAL_COUNT);
  };

  const handleLoadMore = () => setShowCount((prev) => prev + EXTEND_COUNT);

  // Entrance animation for the filter bar only.
  // Each card animates itself (FeaturedWorkCard has its own ScrollTrigger),
  // so animating the cards here as well would fight with that animation.
  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced || !filterRef.current) return;

      gsap.from(filterRef.current.querySelectorAll(".ws-filter-btn"), {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [] },
  );

  // Item count / height changes shift every trigger position below.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [activeCategory, showCount]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden border-t border-[#E4E7EE] bg-[#F6F8FC] py-16 sm:py-20 lg:py-24"
    >
      {/* Fine grid + brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgba(23,25,35,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,25,35,0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_0%,black_10%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,81,1,0.08),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/50 to-transparent"
      />

      <Container>
        {/* heading */}
        <SectionHeader text="Explore Our Work" colorWord="Our Work" />

        {/* filters */}
        <div
          ref={filterRef}
          role="group"
          aria-label="Filter projects by category"
          className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3"
        >
          {workCategories.map((item) => {
            const isActive = activeCategory === item.value;

            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleCategory(item.value)}
                className={`ws-filter-btn inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F8FC] ${
                  isActive
                    ? "border-[#171923] bg-[#171923] text-white"
                    : "border-[#D8DCE6] bg-white text-[#3B4152] hover:border-[#FF5101] hover:text-[#FF5101]"
                }`}
              >
                {item.label}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "bg-[#F1F3F8] text-[#5B6275]"
                  }`}
                >
                  {counts[item.value] ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* result status */}
        <p
          aria-live="polite"
          className="mt-6 text-center text-sm text-[#5B6275] sm:mt-8"
        >
          {filtered.length === 0
            ? "No projects to show"
            : `Showing ${visibleItems.length} of ${filtered.length} projects`}
        </p>

        {/* grid: keyed by category so every card remounts and plays its own entrance */}
        <div className="mt-8 sm:mt-10">
          <div key={activeCategory}>
            <Responsive.Grid gap="lg" cols={{ base: 1, sm: 2, lg: 3 }}>
              {visibleItems.map((project) => (
                <FeaturedWorkCard project={project} key={project.id} />
              ))}
            </Responsive.Grid>
          </div>

          {/* empty state */}
          {visibleItems.length === 0 && (
            <div className="mx-auto max-w-md rounded-2xl border border-dashed border-[#D8DCE6] bg-white px-6 py-10 text-center">
              <p className="para-base text-[#5B6275]">
                No projects found in this category yet.
              </p>
              <button
                type="button"
                onClick={() => handleCategory("all")}
                className="mt-4 text-sm font-semibold text-[#FF5101] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101] focus-visible:ring-offset-2"
              >
                Show all projects
              </button>
            </div>
          )}

          {/* load more */}
          {hasMore && (
            <div className="mt-12 flex justify-center sm:mt-14">
              <DirectionalButton
                label="View more projects"
                size="lg"
                flairColor="#171923"
                borderColor="rgba(23,25,35,0.25)"
                borderHoverColor="#171923"
                textColor="#171923"
                textHoverColor="#ffffff"
                shadowHover={null}
                className="w-full max-w-[300px] justify-center rounded-lg! py-5 font-medium sm:w-[260px] lg:w-[300px]"
                onClick={handleLoadMore}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default WorkShowcase;
