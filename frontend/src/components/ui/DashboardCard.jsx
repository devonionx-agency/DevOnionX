"use client";

export default function DashboardCard({ revenue = "$450", growth = "+24%" }) {
  return (
    <div className="relative w-[360px] rounded-[32px] border border-white/10 bg-[#050505]/95 p-6 backdrop-blur-xl shadow-[0_0_60px_rgba(255,81,1,.15)]">
      {/* Top Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/80 to-transparent" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-500">Total Revenue</span>

        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
          {growth}
        </span>
      </div>

      {/* Revenue */}
      <h3 className="mt-4 text-4xl font-bold tracking-tight text-white">
        {revenue}
      </h3>

      <p className="mt-1 text-sm text-emerald-400">+18.4% this month</p>

      {/* Chart */}
      <div className="mt-8 h-44 overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-[#1A0900]/80 via-[#100700]/30 to-transparent">
        <svg viewBox="0 0 400 180" className="h-full w-full">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF5101" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FF5101" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area */}
          <path
            d="M10 150 L70 120 L120 130 L180 80 L240 95 L300 50 L380 65 L380 180 L10 180 Z"
            fill="url(#chartGradient)"
          />

          {/* Glow */}
          <path
            d="M10 150 L70 120 L120 130 L180 80 L240 95 L300 50 L380 65"
            fill="none"
            stroke="#FF5101"
            strokeWidth="8"
            opacity="0.15"
            strokeLinecap="round"
          />

          {/* Main Line */}
          <path
            d="M10 150 L70 120 L120 130 L180 80 L240 95 L300 50 L380 65"
            fill="none"
            stroke="#FF5101"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Points */}
          <circle cx="70" cy="120" r="3.5" fill="#FF5101" />
          <circle cx="180" cy="80" r="3.5" fill="#FF5101" />
          <circle cx="300" cy="50" r="3.5" fill="#FF5101" />
        </svg>
      </div>

      {/* Table */}
      <div className="mt-6 space-y-3">
        {["Acme Corp", "Quick Corporation", "Intech"].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-colors duration-300 hover:bg-white/[0.03]"
          >
            <span className="text-sm text-zinc-400">{item}</span>

            <span className="text-sm font-medium text-zinc-300">-$4,200</span>
          </div>
        ))}
      </div>
    </div>
  );
}
