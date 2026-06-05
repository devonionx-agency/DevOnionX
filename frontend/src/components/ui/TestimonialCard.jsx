"use client";

import { useMemo } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiGithubFill,
  RiDribbbleFill,
} from "react-icons/ri";

// Component er baaire — module level e ekbar create hoy, bar bar noy
const socialIcons = [
  RiLinkedinFill,
  RiFacebookFill,
  RiTwitterXFill,
  RiGithubFill,
  RiDribbbleFill,
];

export default function TestimonialCard({ item, index }) {
  const Icon = socialIcons[index % socialIcons.length];

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
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-orange-500"
          >
            <path
              d="M10 11H6.5C6.5 14 5 15 3 15V18C7 18 10 15 10 11ZM21 11H17.5C17.5 14 16 15 14 15V18C18 18 21 15 21 11Z"
              fill="currentColor"
            />
          </svg>

          <div className="flex items-center gap-1 text-orange-400">
            {/* useMemo theke cached stars array use kora hocche */}
            {stars.map((_, i) => (
              <FaStar key={i} className="text-sm" />
            ))}
          </div>
        </div>

        {/* Review */}
        <p className="flex-1 text-[15px] leading-8 text-black/80 dark:text-white/80 line-clamp-8">
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
                // Local image hওয়ায় sizes dite hobe না — Next.js নিজেই optimize করবে
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
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-lg text-black/70 dark:text-white/70 transition-all duration-300 group-hover:border-orange-500/30 group-hover:text-orange-400">
            <Icon />
          </div>
        </div>
      </div>
    </article>
  );
}
