"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/ui/Container";
import { iconMap } from "@/helper/services/iconMap";
// import { iconMap } from "@/helper/iconMap";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDeliver({ items, iconColor }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".deliver-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10">
      <Container size="xl">
        {/* Header */}
        <SectionHeader
          label="What We Deliver"
          text="Everything You Need to Succeed"
          colorWord="to Succeed"
        />
        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={i}
                className="deliver-card group relative rounded-xl border border-white/8 bg-white/3 p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${iconColor || "#ff5101"}18` }}
                >
                  {Icon && (
                    <Icon size={22} style={{ color: iconColor || "#ff5101" }} />
                  )}
                </div>
                <h3 className="text-white font-semibold text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* subtle glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                  style={{
                    background: `radial-gradient(circle at 0% 0%, ${iconColor || "#ff5101"}12, transparent 60%)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
