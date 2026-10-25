"use client";

import Link from "next/link";
import { Terminal, ArrowRight } from "lucide-react";

/**
 * ProjectConsultationCTA — System Architecture Consultancy banner matching reference:
 * - Subtle technical grid texture (32px x 32px)
 * - Radial glow backdrop
 * - Monospace category badge with indicator dot
 * - High-precision typography and direct conversion buttons
 */
export default function ProjectConsultationCTA({
  title = "Have a Digital Product in Mind?",
  subtitle = "Let's discuss how we can help turn your ideas into reliable, scalable digital solutions.",
  className = "",
}) {
  return (
    <section
      id="consultation"
      className={`blog-cta-section mt-20 rounded-2xl border p-8 sm:p-14 lg:p-16 relative overflow-hidden text-center flex flex-col items-center justify-center scroll-mt-28 ${className}`}
    >
      {/* Subtle Technical Grid Texture */}
      <div
        className="blog-cta-grid-texture absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Ambient Center Radial Glow Backdrop */}
      <div
        className="blog-cta-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[480px] h-96 sm:h-[480px] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl sm:max-w-3xl mx-auto space-y-5 flex flex-col items-center text-center">
        {/* Monospace Badge */}
        <div className="blog-cta-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono uppercase tracking-wider font-semibold mx-auto">
          <span className="w-2 h-2 rounded-full bg-[#F77118]" />
          <span>System Architecture Consultancy</span>
        </div>

        {/* Heading */}
        <h2 className="blog-cta-heading text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight leading-[1.2] max-w-2xl mx-auto text-center">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="blog-cta-subtitle text-base sm:text-lg leading-relaxed max-w-xl mx-auto text-center">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-3 mx-auto">
          <Link
            href="/contact"
            className="blog-cta-primary font-semibold text-sm sm:text-base px-6 py-3 rounded-lg active:scale-95 transition-all duration-150 inline-flex items-center gap-2 shadow-lg shadow-[#F77118]/20"
          >
            <span>Start a Project</span>
            <Terminal className="w-4 h-4" />
          </Link>

          <Link
            href="/services"
            className="blog-cta-secondary border font-semibold text-sm sm:text-base px-6 py-3 rounded-lg active:scale-95 transition-all duration-150 inline-flex items-center gap-2"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
