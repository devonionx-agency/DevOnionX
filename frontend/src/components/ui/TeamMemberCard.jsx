
"use client";

import Image from "next/image";

export default function TeamMemberCard({ member, index = 0 }) {
  return (
    <article className="group relative h-full">
      {/* Portrait frame */}
      <div className="relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-[#F1F4F9] p-1.5 transition-all duration-500 group-hover:border-blue-200 group-hover:shadow-[0_22px_50px_-28px_rgba(37,99,235,0.38)] sm:rounded-[26px] sm:p-2">
        <div className="relative aspect-[4/4.15] overflow-hidden rounded-[17px] bg-gradient-to-br from-[#E7EEFA] via-[#F5F7FB] to-[#E9EAF8] sm:rounded-[20px]">
          {/* Soft studio lighting */}
          <div
            aria-hidden="true"
            className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-sky-200/40 blur-[65px] transition-all duration-700 group-hover:translate-x-5 group-hover:bg-blue-200/60"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-indigo-200/40 blur-[65px] transition-transform duration-700 group-hover:scale-125"
          />

          {/* Fine architectural lines */}
          <div
            aria-hidden="true"
            className="absolute right-4 top-4 h-16 w-16 rounded-full border border-white/80 sm:right-5 sm:top-5 sm:h-20 sm:w-20"
          />

          <div
            aria-hidden="true"
            className="absolute right-8 top-8 h-8 w-8 rounded-full border border-blue-200/60 sm:right-10 sm:top-10 sm:h-10 sm:w-10"
          />

          {/* Member portrait */}
          <Image
            src={member.image}
            alt={`${member.name} — ${member.role}`}
            fill
            sizes="(max-width: 639px) 85vw, (max-width: 1023px) 45vw, 310px"
            className="relative z-10 object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          />

          {/* Index label */}
          <div className="absolute left-3 top-3 z-20 flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-2.5 py-1.5 backdrop-blur-md sm:left-4 sm:top-4">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span className="text-[9px] font-semibold tracking-[0.14em] text-slate-600">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Bottom portrait fade */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-slate-900/[0.10] to-transparent"
          />

          {/* Animated bottom line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 z-20 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100"
          />
        </div>
      </div>

      {/* Member information */}
      <div className="px-1 pb-2 pt-4 sm:px-2 sm:pt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="break-words text-lg font-semibold leading-tight tracking-[-0.045em] text-slate-950 transition-colors duration-300 group-hover:text-blue-700 sm:text-xl">
              {member.name}
            </h3>

            <p className="mt-2 text-xs font-medium leading-relaxed text-slate-500 sm:text-sm">
              {member.role}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <path
                d="M5 15 15 5M6 5h9v9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <div className="mt-4 h-px w-full bg-slate-200 transition-colors duration-300 group-hover:bg-blue-200" />
      </div>
    </article>
  );
}
