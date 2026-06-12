"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-[#080808]">
      <div className="mx-auto w-full px-3 md:px-5 lg:px-10 max-w-[1280px]">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-sm font-bold uppercase tracking-[4px] mb-4"
            style={{ color: iconColor || "#ff5101" }}
          >
            What We Deliver
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#FF5101] via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="deliver-card group relative rounded-xl border border-white/8 bg-white/3 p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${iconColor || "#ff5101"}18` }}
              >
                <i
                  className={`${item.icon} text-[22px]`}
                  style={{ color: iconColor || "#ff5101" }}
                />
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
          ))}
        </div>
      </div>
    </section>
  );
}
