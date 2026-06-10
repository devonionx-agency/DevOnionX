"use client";

import GlowCard from "@/components/ui/GlowCard";
import { CONTACT_INFO } from "@/helper/contact";

export default function ContactInfo() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:col-span-4">
        <GlowCard className="p-7 flex-1">
          <p className="text-[11px] font-bold tracking-[3px] uppercase text-[#FF5101] mb-6">
            Contact Information
          </p>
          <div className="flex flex-col gap-5">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[#FF5101] bg-[#FF5101]/10 border border-[#FF5101]/20">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[11px] text-[#475569] mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[14px] text-white hover:text-[#FF5101] transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[14px] text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </GlowCard>

        <div className="rounded-2xl p-6 border border-[#FF5101]/15 bg-[#FF5101]/[0.05]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[13px] font-semibold text-white">
              We're Online
            </span>
          </div>
          <p className="text-[13px] text-[#64748b] leading-[1.7]">
            Typically reply within{" "}
            <span className="text-[#FF5101] font-semibold">24 hours.</span> For
            urgent queries, reach us on WhatsApp.
          </p>
        </div>
      </div>
    </>
  );
}
