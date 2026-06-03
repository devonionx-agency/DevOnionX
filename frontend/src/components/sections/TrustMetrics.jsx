"use client";

import React from "react";
import {
  FiBriefcase,
  FiTrendingUp,
  FiUsers,
  FiHeadphones,
} from "react-icons/fi";
import SectionHeader from "../ui/SectionHeader";

const stats = [
  {
    id: 1,
    icon: FiBriefcase,
    value: "15+",
    title: "Projects Completed",
    description: "Successfully delivered projects across multiple industries.",
  },
  {
    id: 2,
    icon: FiTrendingUp,
    value: "99%",
    title: "Client Satisfaction",
    description: "Building long-term partnerships through quality work.",
  },
  {
    id: 3,
    icon: FiUsers,
    value: "5+",
    title: "Expert Team",
    description: "Skilled professionals focused on innovation and growth.",
  },
  {
    id: 4,
    icon: FiHeadphones,
    value: "24/7",
    title: "Support Available",
    description: "Reliable assistance whenever your business needs it.",
  },
];

export default function TrustMetrics() {
  return (
    <section className="relative overflow-hidden bg-[#02090F]">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#FF5101]/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-[#FF5101]/10 blur-[120px]" />

      <div className="container mx-auto px-4">
        <SectionHeader
          label="TRUST & RESULTS"
          text="Trusted by Industry Leaders"
          colorWord="Industry Leaders"
        />

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FF5101]/40 hover:shadow-[0_20px_60px_rgba(255,81,1,0.15)]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF5101]/20 bg-[#FF5101]/10 transition-all duration-500 group-hover:scale-110">
                  <Icon className="text-2xl text-[#FF5]" />
                </div>

                <h3 className="mb-2 text-5xl font-bold text-[#FF5101]">
                  {item.value}
                </h3>

                <h4 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h4>

                <p className="leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
