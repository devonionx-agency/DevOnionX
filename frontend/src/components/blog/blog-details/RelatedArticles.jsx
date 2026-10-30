"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * RelatedArticles — Technical editorial related insights section matching reference:
 * - "Further Architecture Notes" monospace orange tag
 * - "Related Engineering Insights" H2
 * - 3-column card grid with 176px image, overlay badge, read time, clean H3, and trailing link
 */
export default function zRelatedArticles({
  articles = [],
  className = "",
}) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className={`blog-related-section mt-20 pt-12 border-t ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="blog-related-label text-xs font-mono uppercase tracking-wider font-semibold text-[#F77118]">
            Further Architecture Notes
          </span>
          <h2 className="blog-related-heading text-2xl sm:text-3xl font-semibold mt-1 tracking-tight">
            Related Engineering Insights
          </h2>
        </div>

        <Link
          href="/blog"
          className="blog-related-view-all text-sm font-mono font-medium flex items-center gap-1.5 transition-colors group"
        >
          <span>View all research papers</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, idx) => {
          const articleSlug = article.href?.replace("/blog/", "") || String(article.id);
          const href = article.href || `/blog/${articleSlug}`;
          const badgeType =
            idx === 0 ? "BENCHMARK" : idx === 1 ? "STRATEGY" : "CASE STUDY";

          return (
            <article
              key={article.id || articleSlug}
              className="blog-related-card rounded-xl overflow-hidden border transition-all duration-200 flex flex-col group hover:border-[#DD5E0B]"
            >
              {/* Card Image */}
              <div className="blog-related-card-image w-full h-44 relative overflow-hidden">
                {article.image && (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {/* Badge Overlay */}
                <div className="blog-related-card-badge absolute top-3 left-3 px-2.5 py-1 rounded backdrop-blur text-xs font-mono font-medium border">
                  {article.category?.toUpperCase() || badgeType}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <div className="blog-related-card-meta flex items-center gap-2 text-xs font-mono mb-2">
                    <span>{article.readTime || "5 min read"}</span>
                    <span>•</span>
                    <span>{article.category || "Engineering"}</span>
                  </div>

                  <h3 className="blog-related-card-title text-base sm:text-lg font-semibold transition-colors leading-snug line-clamp-2">
                    <Link href={href}>
                      {article.title}
                    </Link>
                  </h3>
                </div>

                <Link
                  href={href}
                  className="blog-related-card-link text-xs sm:text-sm font-mono font-semibold flex items-center gap-1.5 mt-auto pt-2 transition-colors"
                >
                  <span>Read article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
