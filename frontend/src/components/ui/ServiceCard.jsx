"use client";

import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group relative isolate min-h-[300px] overflow-hidden rounded-2xl border border-slate-800/80 bg-[#08111F] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-[0_20px_50px_rgba(8,17,31,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(14,165,233,0.10),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rotate-45 border-l border-t border-sky-500/30 bg-gradient-to-br from-transparent to-sky-500/10 transition-all duration-500 group-hover:-bottom-10 group-hover:-right-10 group-hover:to-sky-500/20" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[1px] w-32 bg-gradient-to-l from-sky-400/70 to-transparent opacity-70" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.08)] transition-all duration-500 group-hover:border-sky-400/60 group-hover:bg-sky-500/20 group-hover:shadow-[0_0_25px_rgba(14,165,233,0.18)]">
          <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
        </div>

        <div>
          <h3 className="text-xl font-semibold leading-tight tracking-tight text-white">
            {service.titleTop}
            <span className="block text-slate-300 transition-colors duration-300 group-hover:text-white">
              {service.titleBottom}
            </span>
          </h3>

          <p className="mt-4 max-w-[310px] text-sm leading-6 text-slate-400">
            {service.description}
          </p>
        </div>

        <div className="mt-auto pt-7">
          <Link
            href={service.link}
            className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 transition-all duration-300 group-hover:gap-3 group-hover:text-sky-300"
          >
            Learn more
            <HiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
