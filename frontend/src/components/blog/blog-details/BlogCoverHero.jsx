"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Bookmark, Share2, Network, ChevronRight } from "lucide-react";

/**
 * BlogCoverHero — Technical Editorial Hero & Featured Cover Visual
 *
 * Implements the precision dark editorial styling from DevOnionX design system:
 * - Breadcrumbs with monospace indicators
 * - Category badge & Monospace Spec identifier
 * - Disciplined H1 typography
 * - Lead excerpt
 * - Linear meta bar with author details & actions
 * - 2.4:1 wide editorial cover visual with technical badge overlay & caption
 */
export default function BlogCoverHero({
  compactMetaOnly = false,
  title,
  subtitle,
  category = "Case Study & Architecture",
  specId = "ARCH-SPEC // 049",
  overlayBadge = "ROUTING ARCHITECTURE // v15.0",
  figcaption = "Fig 1.1 — Distributed Edge Routing and Incremental Hydration Topology across Global Regions.",
  readTime = "8 min read",
  date = "Feb 28, 2026",
  coverImage,
  coverAlt = "Article visual",
  author,
  className = "",
}) {
  const [bookmarked, setBookmarked] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const authorName = typeof author === "string" ? author : author?.name || "DevOnionX Team";
  const authorRole = typeof author === "object" ? author?.role : "Principal Systems Architect";
  const authorInitial = authorName.charAt(0);

  const handleShareClick = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  if (compactMetaOnly) {
    return (
      <div className={`mb-10 ${className}`}>
        <div className="blog-meta-bar flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-200 dark:border-white/10 text-sm">
          {/* Left: Author */}
          <div className="flex items-center gap-3">
            <div className="blog-author-avatar w-10 h-10 rounded-full overflow-hidden border flex items-center justify-center font-bold text-sm shrink-0">
              {authorInitial}
            </div>
            <div>
              <div className="blog-author-name-hero font-medium text-sm leading-tight">
                {authorName}
              </div>
              <div className="blog-author-role-hero text-xs text-neutral-500">
                {authorRole}
              </div>
            </div>
          </div>

          {/* Right: Date, Read Time & Controls */}
          <div className="flex items-center gap-5 sm:gap-6 blog-meta-item">
            <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500">
              <Calendar className="blog-meta-icon w-3.5 h-3.5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500">
              <Clock className="blog-meta-icon w-3.5 h-3.5" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setBookmarked((prev) => !prev)}
                aria-label="Bookmark article"
                className={`blog-action-btn p-1.5 rounded transition-colors ${bookmarked ? "blog-bookmarked" : ""
                  }`}
                title={bookmarked ? "Bookmarked" : "Bookmark article"}
              >
                <Bookmark className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleShareClick}
                aria-label="Share article"
                className="blog-action-btn p-1.5 rounded transition-colors relative"
                title="Copy share link"
              >
                <Share2 className="w-4 h-4" />
                {copiedShare && (
                  <span className="absolute -top-7 right-0 text-xs font-mono px-2.5 py-1 rounded bg-[#F77118] text-white whitespace-nowrap shadow-md">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={`pt-6 sm:pt-10 mb-10 sm:mb-14 ${className}`}>
      {/* Editorial Header Block */}
      <header className="max-w-4xl mb-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="blog-breadcrumb flex items-center gap-2 font-mono mb-5 text-xs sm:text-sm"
        >
          <Link href="/" className="transition-colors">
            Home
          </Link>
          <ChevronRight className="blog-breadcrumb-separator w-3.5 h-3.5" />
          <Link href="/blog" className="transition-colors">
            Insights
          </Link>
          <ChevronRight className="blog-breadcrumb-separator w-3.5 h-3.5" />
          <span className="blog-breadcrumb-active truncate max-w-[260px] sm:max-w-none">
            {title}
          </span>
        </nav>

        {/* Category Pill & Monospace Meta Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="blog-category-pill px-3 py-1 rounded text-xs font-mono uppercase tracking-wider font-semibold">
            {category}
          </span>
          <span className="blog-spec-id text-xs font-mono tracking-wider font-medium">
            {specId}
          </span>
        </div>

        {/* H1 Article Title */}
        <h1 className="blog-article-title text-3xl sm:text-4xl md:text-[40px] font-semibold mb-6 tracking-tight leading-[1.2]">
          {title}
        </h1>

        {/* Excerpt */}
        {subtitle && (
          <p className="blog-article-subtitle text-base sm:text-lg leading-relaxed mb-8">
            {subtitle}
          </p>
        )}

        {/* Article Meta Bar */}
        <div className="blog-meta-bar flex flex-wrap items-center justify-between gap-4 py-4 border-y text-sm">
          {/* Left: Author */}
          <div className="flex items-center gap-3">
            <div className="blog-author-avatar w-10 h-10 rounded-full overflow-hidden border flex items-center justify-center font-bold text-sm shrink-0">
              {authorInitial}
            </div>
            <div>
              <div className="blog-author-name-hero font-medium text-sm leading-tight">
                {authorName}
              </div>
              <div className="blog-author-role-hero text-xs sm:text-sm text-neutral-500">
                {authorRole}
              </div>
            </div>
          </div>

          {/* Right: Date, Read Time & Controls */}
          <div className="flex items-center gap-5 sm:gap-6 blog-meta-item">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono">
              <Calendar className="blog-meta-icon w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono">
              <Clock className="blog-meta-icon w-4 h-4" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setBookmarked((prev) => !prev)}
                aria-label="Bookmark article"
                className={`blog-action-btn p-1.5 rounded transition-colors ${bookmarked ? "blog-bookmarked" : ""
                  }`}
                title={bookmarked ? "Bookmarked" : "Bookmark article"}
              >
                <Bookmark className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleShareClick}
                aria-label="Share article"
                className="blog-action-btn p-1.5 rounded transition-colors relative"
                title="Copy share link"
              >
                <Share2 className="w-4 h-4" />
                {copiedShare && (
                  <span className="absolute -top-7 right-0 text-xs font-mono px-2.5 py-1 rounded bg-[#F77118] text-white whitespace-nowrap shadow-md">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ARTICLE COVER VISUAL */}
      <figure className="mb-14">
        <div className="blog-cover-container w-full rounded-xl overflow-hidden border relative group">
          {/* Technical Badge Overlay */}
          <div className="blog-cover-badge absolute top-4 left-4 z-10 px-3 py-1.5 backdrop-blur-md border rounded text-xs font-mono font-medium flex items-center gap-2">
            <span className="blog-cover-dot inline-block w-2 h-2 rounded-full animate-pulse" />
            <span>{overlayBadge}</span>
          </div>

          <div className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] max-h-[500px]">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={coverAlt || title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px, 1280px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
            ) : (
              <div className="blog-cover-fallback w-full h-full flex items-center justify-center font-mono text-xs">
                DevOnionX Systems Visual
              </div>
            )}
          </div>
        </div>

        {figcaption && (
          <figcaption className="blog-figcaption mt-3 text-center sm:text-left font-mono text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-1.5">
            <Network className="blog-figcaption-icon w-4 h-4" />
            <span>{figcaption}</span>
          </figcaption>
        )}
      </figure>
    </section>
  );
}
