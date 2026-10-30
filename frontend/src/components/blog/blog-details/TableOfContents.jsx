"use client";

import { useEffect, useState, useRef } from "react";
import { BookOpen, ChevronRight, Terminal, ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * TableOfContents — Sticky editorial sidebar with active scrollspy, reading progress tracking,
 * specifications mini-card, and quick consultation module matching the DevOnionX design system.
 */
export default function TableOfContents({
  toc = [],
  specifications = {
    framework: "Next.js 16.2 / Node.js",
    runtime: "V8 Isolates / Redis",
    hydration: "Selective Stream",
  },
  title = "",
  className = "",
}) {
  const [activeId, setActiveId] = useState(toc[0]?.id || "");
  const [readingProgress, setReadingProgress] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isStickyBarOpen, setIsStickyBarOpen] = useState(false);

  // High-precision scrollspy & reading progress engine
  useEffect(() => {
    if (!toc || toc.length === 0) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;

          // 1. Calculate reading progress & hero threshold
          const gridEl = document.getElementById("article-editorial-grid");
          if (gridEl) {
            const gridRect = gridEl.getBoundingClientRect();
            const gridTopAbs = gridRect.top + scrollY;
            const gridHeight = gridEl.offsetHeight;

            // Mount sticky bar when user scrolls near or into editorial grid
            const pastHeroThreshold = gridTopAbs - 180;
            setIsPastHero(scrollY >= pastHeroThreshold);

            // Calculate reading progress % (0% to 100%) through editorial content
            const distanceIntoArticle = scrollY - (gridTopAbs - 180);
            const totalScrollable = gridHeight - viewportHeight * 0.4;
            if (totalScrollable > 0) {
              const pct = Math.min(
                100,
                Math.max(0, Math.round((distanceIntoArticle / totalScrollable) * 100))
              );
              setReadingProgress(pct);
            }
          }

          // 2. High-precision active section detection
          // If at the very bottom of the document, activate the last TOC item
          if (scrollY + viewportHeight >= docHeight - 80) {
            const lastItem = toc[toc.length - 1];
            if (lastItem) setActiveId(lastItem.id);
            ticking = false;
            return;
          }

          // Trigger line for active section (140px from top of viewport, below fixed navbar)
          const triggerOffset = 140;

          let currentActive = "";
          for (let i = 0; i < toc.length; i++) {
            const item = toc[i];
            const el = document.getElementById(item.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= triggerOffset) {
                currentActive = item.id;
              }
            }
          }

          if (currentActive) {
            setActiveId(currentActive);
          } else if (scrollY < 450 && toc.length > 0) {
            // Near the top of the article, default to first item
            setActiveId(toc[0].id);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 110;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsMobileOpen(false);
      setIsStickyBarOpen(false);
    }
  };

  if (!toc || toc.length === 0) return null;

  const currentActiveItem = toc.find((item) => item.id === activeId) || toc[0];
  const currentActiveTitle = currentActiveItem ? currentActiveItem.title : "Table of Contents";

  return (
    <aside className={`h-full ${className}`}>
      {/* ─────────────────────────────────────────────────────────────
          1. MOBILE / TABLET STICKY TRACKING BAR
          Mounts/slides down when scrolling reaches editorial content
      ───────────────────────────────────────────────────────────── */}
      <div
        className={`lg:hidden fixed top-20 inset-x-4 z-40 transition-all duration-300 transform-gpu ${
          isPastHero
            ? "opacity-100 translate-y-0 pointer-events-auto shadow-2xl"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="blog-toc-mobile rounded-xl border backdrop-blur-md overflow-hidden bg-white/95 shadow-xl">
          <div className="p-3 sm:p-3.5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setIsStickyBarOpen((prev) => !prev)}
              className="flex-1 min-w-0 flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
              aria-expanded={isStickyBarOpen}
            >
              <span className="w-7 h-7 rounded-lg bg-[#F77118]/10 text-[#F77118] flex items-center justify-center shrink-0">
                <BookOpen className="w-3.5 h-3.5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#F77118] font-bold">
                    Now Reading
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    • {readingProgress}%
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#17365D] truncate">
                  {currentActiveTitle}
                </p>
              </div>
              <ChevronRight
                className={`blog-toc-toggle-icon w-4 h-4 shrink-0 transition-transform duration-200 text-slate-400 ${
                  isStickyBarOpen ? "rotate-90 text-[#F77118]" : ""
                }`}
              />
            </button>
          </div>

          {/* Reading Progress Line on Sticky Bar */}
          <div className="w-full h-1 bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-[#F77118] transition-all duration-150 rounded-full"
              style={{ width: `${readingProgress}%` }}
            />
          </div>

          {/* Collapsible Section Drawer */}
          {isStickyBarOpen && (
            <nav className="blog-toc-mobile-nav p-3 pt-2 border-t max-h-[60vh] overflow-y-auto flex flex-col gap-1 bg-white">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1 px-2">
                Jump to Section
              </span>
              {toc.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`text-xs sm:text-sm py-2 px-3 rounded-lg transition-all flex items-center justify-between ${
                      isActive
                        ? "blog-toc-link-active border-l-2 font-medium"
                        : "blog-toc-link"
                    }`}
                  >
                    <span className="truncate">{item.title}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F77118] animate-pulse shrink-0 ml-2" />
                    )}
                  </a>
                );
              })}
            </nav>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. INLINE MOBILE DRAWER (At the top of the article on small screens)
      ───────────────────────────────────────────────────────────── */}
      <div className="blog-toc-mobile lg:hidden mb-8 p-4 rounded-xl border">
        <button
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="w-full flex items-center justify-between text-left text-sm font-medium focus:outline-none cursor-pointer"
          aria-expanded={isMobileOpen}
        >
          <span className="blog-toc-toggle-label flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#F77118]" />
            <span>Table of Contents</span>
          </span>
          <div className="flex items-center gap-2">
            {readingProgress > 0 && (
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#F77118]/10 text-[#F77118] font-bold">
                {readingProgress}%
              </span>
            )}
            <ChevronRight
              className={`blog-toc-toggle-icon w-4 h-4 transition-transform duration-200 ${
                isMobileOpen ? "rotate-90" : ""
              }`}
            />
          </div>
        </button>

        {isMobileOpen && (
          <nav className="blog-toc-mobile-nav mt-4 pt-3 border-t flex flex-col gap-1.5">
            {toc.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-xs sm:text-sm py-2 px-3 rounded transition-all flex items-center justify-between ${
                    isActive
                      ? "blog-toc-link-active border-l-2"
                      : "blog-toc-link"
                  }`}
                >
                  <span className="truncate">{item.title}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F77118] animate-pulse shrink-0 ml-2" />
                  )}
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. DESKTOP CONTINUOUS STICKY SIDEBAR (top-28 with full tracking)
      ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:block sticky top-28 space-y-6">
        {/* Box 1: TOC Navigation, Reading Progress & Specifications */}
        <div className="blog-toc-desktop p-5 rounded-xl border shadow-sm transition-all duration-300">
          {/* Header + Live Progress Indicator */}
          <div className="blog-toc-header pb-3 mb-2 border-b">
            <div className="flex items-center justify-between">
              <span className="blog-toc-header-label text-xs font-mono uppercase tracking-wider">
                Table of Contents
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#F77118]/10 text-[#F77118] font-bold">
                  {readingProgress}% READ
                </span>
                <BookOpen className="blog-toc-header-icon w-4 h-4" />
              </div>
            </div>

            {/* Reading Progress Bar Track */}
            <div className="w-full bg-[#E2E8F0] dark:bg-white/10 rounded-full h-1 overflow-hidden mt-3">
              <div
                className="bg-[#F77118] h-1 rounded-full transition-all duration-150"
                style={{ width: `${readingProgress}%` }}
              />
            </div>
          </div>

          {/* Navigation Links with Active Indicator */}
          <nav className="space-y-1 text-sm pt-1">
            {toc.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`py-2 px-3 rounded transition-all text-sm flex items-center justify-between group ${
                    isActive
                      ? "blog-toc-link-active border-l-2 font-medium"
                      : "blog-toc-link"
                  }`}
                >
                  <span className="truncate">{item.title}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F77118] animate-pulse shrink-0 ml-2" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Specifications Mini-Card */}
          {specifications && (
            <div className="blog-specs-divider mt-6 pt-4 border-t space-y-3">
              <div className="blog-specs-label text-xs font-mono uppercase tracking-wider font-semibold text-slate-500">
                Specifications
              </div>
              {specifications.framework && (
                <div className="flex justify-between items-center text-xs sm:text-sm font-mono gap-2">
                  <span className="blog-specs-key text-slate-500">Framework Target:</span>
                  <span className="blog-specs-value font-medium text-[#17365D] dark:text-slate-200">{specifications.framework}</span>
                </div>
              )}
              {specifications.runtime && (
                <div className="flex justify-between items-center text-xs sm:text-sm font-mono gap-2">
                  <span className="blog-specs-key text-slate-500">Edge Runtime:</span>
                  <span className="blog-specs-value font-medium text-[#17365D] dark:text-slate-200">{specifications.runtime}</span>
                </div>
              )}
              {specifications.hydration && (
                <div className="flex justify-between items-center text-xs sm:text-sm font-mono gap-2">
                  <span className="blog-specs-key text-slate-500">Hydration Strategy:</span>
                  <span className="blog-specs-value font-medium text-[#17365D] dark:text-slate-200">{specifications.hydration}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Box 2: Sticky Quick Consultation Module */}
        <div className="blog-toc-cta p-5 sm:p-6 rounded-xl border space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2">
            <Terminal className="blog-toc-cta-icon w-4 h-4 text-[#F77118]" />
            <span className="blog-toc-cta-badge text-xs font-mono uppercase tracking-wider font-semibold text-[#F77118]">
              DevOnionX Labs
            </span>
          </div>
          <h4 className="blog-toc-cta-title font-bold text-base sm:text-lg text-[#17365D] leading-snug">
            Need your stack audited?
          </h4>
          <p className="blog-toc-cta-desc text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Our principal architects provide comprehensive codebase analysis and architecture conversions for enterprise applications.
          </p>
          <a
            href="#consultation"
            onClick={(e) => scrollToSection(e, "consultation")}
            className="blog-toc-cta-link inline-flex items-center gap-1.5 font-mono text-sm font-semibold hover:underline pt-1 text-[#F77118]"
          >
            <span>Schedule Stack Review</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
