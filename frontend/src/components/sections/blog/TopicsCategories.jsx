"use client";

import { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import TopicPill from "@/components/blog/TopicPill";
import { blogTopics, blogData } from "@/helper/blog";

gsap.registerPlugin(ScrollTrigger);

/**
 * TopicsCategories — Blog section displaying interactive topic pills.
 *
 * @param {string}   activeTopic – Currently selected topic id
 * @param {function} onTopicChange – Callback when a topic is clicked
 * @param {string}   className – Additional wrapper classes
 */
export default function TopicsCategories({
  activeTopic = "all",
  onTopicChange,
  className = "",
}) {
  const sectionRef = useRef(null);
  const pillsRef = useRef(null);

  // Calculate article count per category from blogData
  const countMap = useMemo(() => {
    const map = { all: blogData.length };
    blogData.forEach((blog) => {
      const cat = blog.category;
      map[cat] = (map[cat] || 0) + 1;
    });
    return map;
  }, []);

  // Get count for a given topic
  const getCount = (topic) => {
    if (topic.id === "all") return countMap.all;
    return countMap[topic.filterKey] || 0;
  };

  // Animate pills on mount with stagger
  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const pills = gsap.utils.toArray("[data-topic-pill]");

      if (pills.length === 0) return;

      gsap.fromTo(
        pills,
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pillsRef.current,
            start: "top 90%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleClick = (topicId) => {
    if (onTopicChange) {
      onTopicChange(topicId);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative bg-black py-10 sm:py-14 lg:py-16 overflow-hidden ${className}`}
    >
      {/* Subtle grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      {/* Top separator line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <Container size="xl">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <SectionHeader
            label="Explore"
            text="Topics & Categories"
            colorWord="Categories"
            description="Explore articles across the full spectrum of what we build, design, and ship at DevOnionX."
            className="!p-0"
          />
        </div>

        {/* Pills Grid */}
        <div
          ref={pillsRef}
          className="flex flex-wrap gap-2.5 sm:gap-3"
        >
          {blogTopics.map((topic) => (
            <div key={topic.id} data-topic-pill>
              <TopicPill
                label={topic.label}
                accentColor={topic.accentColor}
                isActive={activeTopic === topic.id}
                count={getCount(topic)}
                onClick={() => handleClick(topic.id)}
              />
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom separator line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </section>
  );
}
