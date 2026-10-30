"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";

/**
 * InsightCard — Compact horizontal blog card for the "Latest Insights" grid.
 *
 * Designed as a modern, editorial-style card with:
 * - Prominent image with hover zoom
 * - Category pill with accent color
 * - Title, excerpt, meta (author, date, read time)
 * - Tags row
 * - Smooth transitions and brand-consistent styling
 *
 * Reusable across blog listing, related articles, sidebar, etc.
 */
export default function InsightCard({
  id,
  category = "Engineering",
  categoryClass = "bg-[#FF5101]",
  readTime = "5 min read",
  title = "Building Modern Web Applications",
  excerpt = "A comprehensive guide to modern web development practices and patterns.",
  author = "DevOnionX Team",
  date = "2026",
  tags = [],
  href = "/blog",
  image,
  className = "",
}) {
  return (
    <article
      className={`blog-insight-card group relative flex flex-col h-full overflow-hidden rounded-2xl border transition-all duration-400 ${className}`}
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Category pill */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${categoryClass}`}
          >
            {category}
          </span>
        </div>

        {/* Read time pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-white/90 border border-white/10">
            <Clock className="w-3.5 h-3.5 text-[#F77118]" />
            {readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3">
        {/* Title */}
        <h4 className="blog-ic-title text-base sm:text-lg font-bold leading-snug line-clamp-2 transition-colors duration-300">
          <Link href={href} className="focus:outline-none">
            {title}
          </Link>
        </h4>

        {/* Excerpt */}
        <p className="blog-ic-excerpt text-sm line-clamp-2 leading-relaxed flex-1">
          {excerpt}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="blog-ic-tag inline-block text-xs font-medium px-2.5 py-1 rounded-md border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Bottom meta row */}
        <div className="blog-ic-meta-border pt-3 mt-auto border-t flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Author avatar */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F77118] to-[#DD5E0B] text-white font-bold flex items-center justify-center text-xs shrink-0 ring-1 ring-black/5">
              {typeof author === "string" ? author.charAt(0) : "D"}
            </div>
            <div className="min-w-0">
              <p className="blog-ic-author-name text-sm font-semibold truncate">
                {typeof author === "string" ? author : author?.name}
              </p>
              <p className="blog-ic-author-date text-xs flex items-center gap-1 text-slate-500">
                <Calendar className="w-3 h-3" />
                {date}
              </p>
            </div>
          </div>

          {/* Read link */}
          <Link
            href={href}
            className="blog-ic-read-link shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 group/arrow"
            aria-label={`Read ${title}`}
          >
            <ArrowUpRight className="w-4 h-4 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </article>
  );
}
