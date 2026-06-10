"use client";

import { useState } from "react";
import {
  FiChevronDown,
  FiTrendingUp,
  FiUserPlus,
  FiTarget,
  FiShare2,
  FiUsers,
} from "react-icons/fi";
import { crmData, performanceStats } from "@/helper/crmData";

export default function CRMCard() {
  const getCurrentMonth = () => {
    return new Date().toLocaleString("en-US", { month: "long" });
  };

  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());

  const currentData = crmData[selectedMonth] || crmData[getCurrentMonth()];

  const icons = {
    Campaigns: FiTarget,
    "Social Media": FiShare2,
    Referrals: FiUsers,
  };

  return (
    <div className="relative w-[380px] rounded-[32px] border border-white/5 bg-[#050505]/95 p-6 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_60px_rgba(255,81,1,.12)]">
      {/* Accent Line */}
      <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/70 to-transparent" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            CRM Dashboard
          </p>
        </div>

        <div className="relative">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 pr-9 text-sm text-white outline-none transition hover:border-white/20"
          >
            {Object.keys(crmData).map((month) => (
              <option key={month} value={month} className="bg-[#111]">
                {month}
              </option>
            ))}
          </select>

          <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500" />
        </div>
      </div>

      {/* Main Metric */}
      <div className="mt-">
        <p className="text-sm text-zinc-500">Total Leads</p>

        <h3 className="mt- text-5xl font-bold tracking-tight text-white">
          {currentData.leads.toLocaleString()}
        </h3>

        <div className="mt- inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
          <FiTrendingUp />
          {currentData.growth}
        </div>
      </div>

      {/* Secondary Metric */}
      <div className="mt- rounded-2xl border border-white/5 bg-white/[0.03] pt-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF5101]/20 bg-[#FF5101]/10">
            <FiUserPlus className="text-xl text-[#FF5101]" />
          </div>

          <div>
            <p className="text-sm text-zinc-500">New Leads</p>

            <h4 className="text-2xl font-semibold text-white">
              {currentData.newLeads}
            </h4>

            <p className="text-sm text-emerald-400">
              {currentData.newLeadsGrowth}
            </p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="rounded-2xl border border-white/5 bg-white/[0.02] ">
        <div className="h-px bg-gradient-to-r from-transparent via-[#FF5101]/50 to-transparent" />

        <div className="relative">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px)",
              backgroundSize: "100% 22px",
            }}
          />

          <div className="relative flex h-[120px] items-end gap-4">
            {currentData.bars.map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-full bg-gradient-to-t from-[#FF5101] to-[#FF7A3D] shadow-[0_0_20px_rgba(255,81,1,.25)] transition-all duration-500 origin-bottom will-change-transform"
                style={{
                  transform: `scaleY(${height / 120})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Month Labels */}
        <div className="mt- flex justify-between px-1 text-xs text-zinc-500">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-white/5" />

      {/* Stats */}
      <div className="space-y-2">
        {performanceStats.map((item) => {
          const Icon = icons[item.label];

          return (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="text-[#FF5101]" />
                  <span className="text-sm text-zinc-400">{item.label}</span>
                </div>

                <span className="text-sm font-medium text-white">
                  {item.value}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#FF5101] to-[#FF7A3D]"
                  style={{
                    width: `${item.value}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
