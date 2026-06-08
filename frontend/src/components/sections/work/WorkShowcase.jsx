"use client";

import DirectionalButton from "@/components/common/Directionalbutton";
import Responsive from "@/components/common/Responsive";
import Container from "@/components/ui/Container";
import FeaturedWorkCard from "@/components/ui/FeaturedWork";
import SectionHeader from "@/components/ui/SectionHeader";
import { featuredWorkItems, workCategories } from "@/helper/workPage";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const INITIAL_COUNT = 6;
const EXTEND_COUNT = 3;

const WorkShowcase = () => {
  const [showCount, setShowCount] = useState(INITIAL_COUNT);
  const [activeCategory, setActiveCategory] = useState("all");

  const sectionRef = useRef(null);
  const filterRef = useRef(null);
  const gridRef = useRef(null);
  const loadMoreRef = useRef(null);

  // filtering logic
  const filtered = featuredWorkItems.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return p.featured;
    return p.category === activeCategory;
  });

  const visibleItems = filtered.slice(0, showCount);
  const hasMore = showCount < filtered.length;

  const handleIncrease = () => {
    setShowCount((prev) => prev + EXTEND_COUNT);
  };

  const handleProCategory = (value) => {
    setActiveCategory(value);
    setShowCount(INITIAL_COUNT);

    // category change animation
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  };

  // mount animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // filter buttons — stagger fade in
      tl.fromTo(
        filterRef.current?.children ?? [],
        { opacity: 0, y: 24, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.07,
        },
        0.2
      );

      // grid cards — stagger slide up
      tl.fromTo(
        gridRef.current?.children ?? [],
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
        },
        0.4
      );

      // load more button
      if (loadMoreRef.current) {
        tl.fromTo(
          loadMoreRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          1.0
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // grid re-animation on new items load
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;
    const newCards = Array.from(cards).slice(showCount - EXTEND_COUNT);

    if (newCards.length > 0 && showCount > INITIAL_COUNT) {
      gsap.fromTo(
        newCards,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, [showCount]);

  return (
    <section
      ref={sectionRef}
      className="bg-black pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <Container>
        {/* heading */}
        <SectionHeader text="Explore Our Work" colorWord="Our Work" />

        {/* filter buttons */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div ref={filterRef} className="flex flex-wrap gap-2 sm:gap-3">
            {workCategories.map((items) => (
              <DirectionalButton
                borderColor={activeCategory === items.value ? "#ff5101" : "#fff"}
                textColor="white"
                borderHoverColor="#ff5101"
                label={items.label}
                key={items.id}
                onClick={() => handleProCategory(items.value)}
              />
            ))}
          </div>
        </div>

        {/* grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div ref={gridRef}>
            <Responsive.Grid gap="lg" cols={{ base: 1, sm: 2, lg: 3 }}>
              {visibleItems.map((project) => (
                <FeaturedWorkCard project={project} key={project.id} />
              ))}
            </Responsive.Grid>
          </div>

          {/* no results */}
          {visibleItems.length === 0 && (
            <p className="text-center text-white/50 mt-10 para-base">
              No projects found in this category.
            </p>
          )}

          {/* load more */}
          {hasMore && (
            <div ref={loadMoreRef} className="mt-10 sm:mt-12 text-center">
              <DirectionalButton
                borderColor="#fff"
                textColor="white"
                borderHoverColor="#ff5101"
                label="View More Projects"
                className="w-[220px] sm:w-[260px] lg:w-[300px] py-5"
                onClick={handleIncrease}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default WorkShowcase;