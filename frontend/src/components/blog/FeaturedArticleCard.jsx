"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, Sparkles } from "lucide-react";
import DirectionalButton from "@/components/common/Directionalbutton";

export default function FeaturedArticleCard({
  article,
  className = "",
}) {
  if (!article) return null;

  const {
    badge = "Featured Story",
    category = "Engineering",
    categoryClass = "bg-[#FF5101]",
    readTime = "6 min read",
    title = "Architecting Real-Time Distributed Systems at Scale",
    excerpt = "An engineering deep dive into building production-ready real-time systems with modern architecture, minimal latency, and high fault tolerance.",
    author = {
      name: "Jhulon Kumar",
      role: "Lead Architect",
    },
    date = "Feb 2026",
    tags = ["Next.js", "WebSockets", "Node.js", "Redis"],
    href = "/blog",
    image,
  } = article;

  return (
    <article
      className={`blog-featured-card group relative overflow-hidden rounded-2xl sm:rounded-3xl border shadow-xl hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      {/* Ambient decorative glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#F77118]/8 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#F77118]/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        {/* Left: Image Container */}
        <div className="relative lg:col-span-6 xl:col-span-7 min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden p-3 sm:p-4 lg:p-5">
          <div className="relative w-full h-full min-h-[280px] sm:min-h-[350px] rounded-xl sm:rounded-2xl overflow-hidden">
            {image && (
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            )}

            {/* Gradient Overlays */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-1"
              aria-hidden="true"
            />

            {/* Top Badge Overlay */}
            <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-10 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F77118] text-white shadow-md shadow-[#F77118]/30">
                <Sparkles className="w-3.5 h-3.5" />
                {badge}
              </span>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-md ${categoryClass}`}
              >
                {category}
              </span>
            </div>

            {/* Mobile Read Time Pill */}
            <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-10 sm:hidden">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/70 backdrop-blur-md text-white border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#F77118]" />
                {readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Article Details */}
        <div className="lg:col-span-6 xl:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
          <div className="space-y-4 sm:space-y-5">
            {/* Meta row: Date + Read time */}
            <div className="blog-card-meta flex items-center flex-wrap gap-4 text-xs sm:text-sm font-medium">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#F77118]" />
                {date}
              </span>
              <span className="blog-card-meta-dot w-1 h-1 rounded-full" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F77118]" />
                {readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="blog-card-title headingFour !font-bold transition-colors duration-300">
              <Link href={href} className="hover:underline focus:outline-none">
                {title}
              </Link>
            </h3>

            {/* Excerpt */}
            <p className="blog-card-excerpt para-base line-clamp-3 leading-relaxed">
              {excerpt}
            </p>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="blog-card-tag inline-block text-xs sm:text-sm font-medium px-2.5 py-1 rounded-md border transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Row: Author + CTA */}
          <div className="blog-card-divider pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F77118] to-[#DD5E0B] text-white font-bold flex items-center justify-center text-sm shadow-md shadow-[#F77118]/25 ring-2 ring-white">
                {author?.name ? author.name.charAt(0) : "D"}
              </div>
              <div>
                <p className="blog-card-author-name text-sm font-semibold leading-tight">
                  {author?.name || "DevOnionX Team"}
                </p>
                <p className="blog-card-author-role text-xs sm:text-sm text-slate-500">
                  {author?.role || "Engineering"}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="self-start sm:self-auto">
              <DirectionalButton
                label="Read Article"
                href={href}
                size="sm"
                borderColor="var(--blog-border)"
                textColor="var(--blog-heading)"
                borderHoverColor="#F77118"
                flairColor="#F77118"
                textHoverColor="#ffffff"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
                className="font-semibold shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
