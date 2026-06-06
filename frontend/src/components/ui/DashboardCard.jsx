"use client";

import { revenueStreams, revenueChartPath } from "@/helper/dashboardData";

export default function DashboardCard({
  revenue = "$48.5K",
  growth = "+142%",
}) {
  return (
    <div className="relative w-[360px] rounded-[32px] border border-white/[0.06] bg-[#050505]/95 p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(255,81,1,.08)]">
      {/* Top Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/70 to-transparent" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-500">Revenue Overview</p>

        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
          {growth}
        </span>
      </div>

      {/* Revenue */}
      <div className="mt-4">
        <h3 className="text-5xl font-bold tracking-tight text-white">
          {revenue}
        </h3>

        <p className="mt-2 text-sm font-medium text-emerald-400">
          +142% vs last month
        </p>
      </div>

      {/* Chart */}
      <div className="mt-8 overflow-hidden rounded-[24px] border border-white/5 bg-gradient-to-b from-[#1A0900]/70 via-[#0E0E0E]/70 to-[#080808]">
        <div className="h-[200px]">
          <svg
            viewBox="0 0 400 180"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF5101" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#FF5101" stopOpacity="0" />
              </linearGradient>

              <filter id="orangeGlow">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Area */}
            <path
              d={`${revenueChartPath} L380 180 L10 180 Z`}
              fill="url(#revenueFill)"
            />

            {/* Glow Line */}
            <path
              d={revenueChartPath}
              fill="none"
              stroke="#FF5101"
              strokeWidth="8"
              opacity="0.12"
              filter="url(#orangeGlow)"
              strokeLinecap="round"
            />

            {/* Main Line */}
            <path
              d={revenueChartPath}
              fill="none"
              stroke="#FF5101"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* End Point */}
            <circle cx="380" cy="40" r="6" fill="#FF5101" />

            <circle cx="380" cy="40" r="14" fill="#FF5101" opacity="0.15" />
          </svg>
        </div>
      </div>

      {/* Revenue Sources */}
      <div className="">
        {revenueStreams.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-white/[0.04] px-3 py-3 transition-all duration-300 hover:bg-white/[0.02]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FF5101]/10 bg-[#FF5101]/5">
                  <Icon className="text-lg text-[#FF5101]" />
                </div>

                <span className="text-sm font-medium text-zinc-300">
                  {item.title}
                </span>
              </div>

              <span className="text-sm font-semibold text-zinc-200">
                {item.amount}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
