"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DirectionalButton from "@/components/common/Directionalbutton";
import Responsive from "@/components/common/Responsive";
import BlogCard from "@/components/ui/BlogCard";
import Container from "@/components/ui/Container";
import { blogData } from "@/helper/blog";
import SectionHeader from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const BlogShowcase = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [loadMoreTrigger, setLoadMoreTrigger] = useState(0);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const animatedIds = useRef(new Set());

  const visibleBlogs = blogData.slice(0, visibleCount);
  const hasMore = visibleCount < blogData.length;

  const cycles = [];
  for (let i = 0; i < visibleBlogs.length; i += 6) {
    cycles.push(visibleBlogs.slice(i, i + 6));
  }

  // ── Header animation ───────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
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

  // ── Initial cards — ScrollTrigger, runs once on mount ─────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const allCards = gsap.utils.toArray("[data-blog-card]");

      allCards.forEach((card, i) => {
        const id = card.dataset.blogId;
        if (animatedIds.current.has(id)) return;
        animatedIds.current.add(id);

        gsap.fromTo(
          card,
          { y: 70, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
            delay: (i % 3) * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    }, sectionRef);
  }, []);

  // ── Load More cards — no ScrollTrigger, instant drop-in ───────────────
  useEffect(() => {
    if (loadMoreTrigger === 0) return;

    const ctx = gsap.context(() => {
      const allCards = gsap.utils.toArray("[data-blog-card]");

      const freshCards = allCards.filter((el) => {
        const id = el.dataset.blogId;
        if (animatedIds.current.has(id)) return false;
        animatedIds.current.add(id);
        return true;
      });

      if (freshCards.length === 0) return;

      // Set initial state immediately (no flash)
      gsap.set(freshCards, { y: 60, opacity: 0, scale: 0.97 });

      // Then animate in with ScrollTrigger so they animate as user scrolls
      freshCards.forEach((card, i) => {
        gsap.to(card, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          delay: i * 0.08,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);
  }, [loadMoreTrigger]);

  // ── Button animation ───────────────────────────────────────────────────
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
      Math.min(prev + LOAD_MORE_COUNT, blogData.length),
    );
    setLoadMoreTrigger((prev) => prev + 1);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <Container>
        <div ref={headerRef}>
          <SectionHeader
            text={"Latest Articles"}
            colorWord={"Articles"}
            className="!p-0 !mb-[60px]"
          />
        </div>

        <div className="space-y-4 sm:space-y-5">
          {cycles.map((cycle, cycleIndex) => (
            <div key={cycleIndex} className="space-y-4 sm:space-y-5">
              {/* Row 1 — col-span-2 | col-span-1 */}
              {cycle.slice(0, 2).length > 0 && (
                <Responsive.Grid cols={{ base: 1, sm: 3 }} gap="md">
                  {cycle.slice(0, 2).map((blog, i) => (
                    <div
                      key={blog.id}
                      data-blog-card
                      data-blog-id={String(blog.id)}
                      className={i === 0 ? "sm:col-span-2" : "sm:col-span-1"}
                    >
                      <BlogCard {...blog} />
                    </div>
                  ))}
                </Responsive.Grid>
              )}

              {/* Row 2 — col-span-1 | col-span-1 */}
              {cycle.slice(2, 4).length > 0 && (
                <Responsive.Grid cols={{ base: 1, sm: 2 }} gap="md">
                  {cycle.slice(2, 4).map((blog) => (
                    <div
                      key={blog.id}
                      data-blog-card
                      data-blog-id={String(blog.id)}
                    >
                      <BlogCard {...blog} />
                    </div>
                  ))}
                </Responsive.Grid>
              )}

              {/* Row 3 — col-span-1 | col-span-2 */}
              {cycle.slice(4, 6).length > 0 && (
                <Responsive.Grid cols={{ base: 1, sm: 3 }} gap="md">
                  {cycle.slice(4, 6).map((blog, i) => (
                    <div
                      key={blog.id}
                      data-blog-card
                      data-blog-id={String(blog.id)}
                      className={i === 1 ? "sm:col-span-2" : "sm:col-span-1"}
                    >
                      <BlogCard {...blog} />
                    </div>
                  ))}
                </Responsive.Grid>
              )}
            </div>
          ))}

          {/* Load More Button */}
          {hasMore && (
            <div ref={buttonRef} className="mt-10 sm:mt-12 text-center">
              <DirectionalButton
                borderColor="#fff"
                textColor="white"
                borderHoverColor="#ff5101"
                label="Load More Articles"
                className="w-[220px] sm:w-[260px] lg:w-[300px] py-5"
                onClick={handleLoadMore}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default BlogShowcase;