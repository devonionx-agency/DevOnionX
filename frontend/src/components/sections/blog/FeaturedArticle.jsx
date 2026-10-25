"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import FeaturedArticleCard from "@/components/blog/FeaturedArticleCard";
import { featuredBlogData } from "@/helper/blog";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedArticle({
  article = featuredBlogData,
  className = "",
}) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(cardRef.current, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`blog-listing-section blog-featured-section relative pt-12 pb-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16 overflow-hidden ${className}`}
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(ellipse_at_50%_0%,rgba(247,113,24,0.06),transparent_65%)]"
        aria-hidden="true"
      />

      <Container size="xl">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <SectionHeader
            label="Curated Insight"
            text="Featured Engineering Story"
            colorWord="Engineering Story"
            description="High-impact architecture breakdowns, technical case studies, and digital craft from the DevOnionX core team."
            className="!p-0"
          />
        </div>

        {/* Featured Card Wrapper with ref */}
        <div ref={cardRef}>
          <FeaturedArticleCard article={article} />
        </div>
      </Container>
    </section>
  );
}
