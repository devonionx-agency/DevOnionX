"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Link from "next/link";

export default function TestimonialCard({ item, index }) {
  const Icon = item.icon;

  // Protic render e notu Array.from() avoid kora hocche
  const stars = useMemo(
    () => Array.from({ length: item.rating }),
    [item.rating],
  );

  return (
    <article className="group relative flex h-full flex-col min-h-[320px] rounded-[32px] border border-white/10 bg-[#0a0a0a] p-7 transition-all duration-500 hover:-translate-y-2">
      {/* Hover Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[32px] border border-orange-500/30" />
        <div className="absolute -bottom-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        {/* Top */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5101]/10">
            <RiDoubleQuotesL className="text-3xl text-[#FF5101]" />
          </div>

          <div className="flex items-center gap-1">
            {stars.map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#FF5101] text-[#FF5101]" />
            ))}
          </div>
        </div>

        {/* Review */}
        <p className="flex-1 text-[15px] leading-8 text-white/80">
          {item.text}
        </p>

        {/* Bottom */}
        <div className="mt-10 flex items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 pt-6">
          <div className="flex items-center gap-4">
            {/* Image */}
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-orange-500/30 bg-black/5 dark:bg-white/5">
              <Image
                src={item.avatar}
                alt={item.name}
                width={64}
                height={64}
                className="object-cover rounded-full"
                // Viewport e first few card visible thakle priority dewa uchit
                // Baakigulo lazy load e thakbe (default)
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>

            {/* Info */}
            <div>
              <h3 className="text-base font-semibold text-black dark:text-white">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-black/45 dark:text-white/45">
                {item.role} · {item.company}
              </p>
            </div>
          </div>

          {/* Icon */}
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-lg text-black/70 dark:text-white/70 transition-all duration-300 group-hover:border-orange-500/30 group-hover:text-orange-400"
          >
            <Icon />
          </Link>
        </div>
      </div>
    </article>
  );
}
