"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import InsightCard from "@/components/blog/InsightCard";
import TopicPill from "@/components/blog/TopicPill";
import DirectionalButton from "@/components/common/Directionalbutton";
import { blogData, blogTopics } from "@/helper/blog";

gsap.registerPlugin(ScrollTrigger);

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

/**
 * LatestInsights — "Latest Insights / All Articles" section.
 *
 * Features:
 * - Integrated topic filter pills (inline with header)
 * - InsightCard grid with responsive columns
 * - Load More with GSAP stagger animation
 * - Empty state for filtered results
 */
export default function LatestInsights({ className = "" }) {
  const [activeTopic, setActiveTopic] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [loadMoreTrigger, setLoadMoreTrigger] = useState(0);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const buttonRef = useRef(null);
  const animatedIds = useRef(new Set());

  // Filter articles based on active topic
  const filteredBlogs = useMemo(() => {
    if (activeTopic === "all") return blogData;
    const topic = blogTopics.find((t) => t.id === activeTopic);
    if (!topic || !topic.filterKey) return blogData;
    return blogData.filter((blog) => blog.category === topic.filterKey);
  }, [activeTopic]);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBlogs.length;

  // Reset visible count when topic changes
  const handleTopicChange = (topicId) => {
    setActiveTopic(topicId);
    setVisibleCount(INITIAL_COUNT);
    animatedIds.current.clear();

    // Animate grid cards on filter change
    requestAnimationFrame(() => {
      const cards = gsap.utils.toArray("[data-insight-card]");
      if (cards.length === 0) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out",
        },
      );

      cards.forEach((card) => {
        animatedIds.current.add(card.dataset.insightId);
      });
    });
  };

  // Header animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 88%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Initial cards animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const cards = gsap.utils.toArray("[data-insight-card]");

      cards.forEach((card, i) => {
        const id = card.dataset.insightId;
        if (animatedIds.current.has(id)) return;
        animatedIds.current.add(id);

        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: (i % 3) * 0.08,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Load More animation
  useEffect(() => {
    if (loadMoreTrigger === 0) return;

    const ctx = gsap.context(() => {
      const allCards = gsap.utils.toArray("[data-insight-card]");

      const freshCards = allCards.filter((el) => {
        const id = el.dataset.insightId;
        if (animatedIds.current.has(id)) return false;
        animatedIds.current.add(id);
        return true;
      });

      if (freshCards.length === 0) return;

      gsap.set(freshCards, { y: 50, opacity: 0, scale: 0.97 });

      freshCards.forEach((card, i) => {
        gsap.to(card, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          delay: i * 0.06,
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [loadMoreTrigger]);

  // Button animation
  useEffect(() => {
    if (!buttonRef.current) return;

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 92%",
          once: true,
        },
      },
    );
  }, [hasMore]);

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_COUNT, filteredBlogs.length),
    );
    setLoadMoreTrigger((prev) => prev + 1);
  };

  return (
    <section
      ref={sectionRef}
      className={`blog-listing-section blog-insights-section relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 overflow-hidden ${className}`}
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(ellipse_at_30%_80%,rgba(247,113,24,0.04),transparent_60%)]"
        aria-hidden="true"
      />

      {/* Top separator */}
      <div
        aria-hidden="true"
        className="blog-separator pointer-events-none absolute inset-x-0 top-0 h-px"
      />

      <Container size="xl">
        {/* Header + Inline Filter Pills */}
        <div ref={headerRef} className="mb-10 sm:mb-14">
          <SectionHeader
            label="All Articles"
            text="Latest Insights"
            colorWord="Insights"
            description="Deep dives, tutorials, and case studies from the team building the future of digital."
            className="!p-0"
          />

          {/* Inline filter pills */}
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-2.5">
            {blogTopics.map((topic) => {
              const count =
                topic.id === "all"
                  ? blogData.length
                  : blogData.filter((b) => b.category === topic.filterKey)
                      .length;

              return (
                <TopicPill
                  key={topic.id}
                  label={topic.label}
                  accentColor={topic.accentColor || "#F77118"}
                  isActive={activeTopic === topic.id}
                  count={count}
                  onClick={() => handleTopicChange(topic.id)}
                />
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        {visibleBlogs.length > 0 ? (
          <>
            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {visibleBlogs.map((blog) => (
                <div
                  key={blog.id}
                  data-insight-card
                  data-insight-id={String(blog.id)}
                >
                  <InsightCard {...blog} />
                </div>
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div ref={buttonRef} className="mt-12 sm:mt-14 text-center">
                <DirectionalButton
                  borderColor="var(--blog-border)"
                  textColor="var(--blog-heading)"
                  borderHoverColor="#F77118"
                  flairColor="#F77118"
                  textHoverColor="#ffffff"
                  label="Load More Articles"
                  className="w-[220px] sm:w-[260px] lg:w-[300px] py-5 font-semibold"
                  onClick={handleLoadMore}
                />
              </div>
            )}
          </>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-20 sm:py-28 text-center">
            <div className="blog-empty-state-icon w-16 h-16 rounded-2xl border flex items-center justify-center text-2xl mb-5">
              📭
            </div>
            <h4 className="blog-empty-state-title headingFive mb-2">
              No articles found
            </h4>
            <p className="blog-empty-state-desc text-sm sm:text-base max-w-sm">
              We haven&apos;t published any articles in this category yet. Check
              back soon or explore other topics.
            </p>
            <button
              onClick={() => handleTopicChange("all")}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#F77118] text-white hover:bg-[#DD5E0B] transition-colors duration-300 cursor-pointer shadow-md shadow-[#F77118]/25"
            >
              View all articles
            </button>
          </div>
        )}

        {/* Results count */}
        <div className="mt-8 text-center">
          <p className="blog-results-count text-sm font-medium text-slate-500">
            Showing {visibleBlogs.length} of {filteredBlogs.length} articles
            {activeTopic !== "all" && (
              <span>
                {" "}
                in{" "}
                <span className="text-[#F77118] font-medium">
                  {blogTopics.find((t) => t.id === activeTopic)?.label}
                </span>
              </span>
            )}
          </p>
        </div>
      </Container>
    </section>
  );
}
