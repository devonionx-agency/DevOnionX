"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack({ items, iconColor }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-item",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.4)",
          stagger: 0.07,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-[#080808]">
      <div className="mx-auto w-full px-3 md:px-5 lg:px-10 max-w-[1280px]">

        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm font-bold uppercase tracking-[4px] mb-4"
            style={{ color: iconColor || "#ff5101" }}
          >
            Our Toolkit
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Technologies{" "}
            <span className="bg-gradient-to-r from-[#FF5101] via-pink-500 to-violet-500 bg-clip-text text-transparent">
              We Use
            </span>
          </h2>
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap justify-center gap-4">
          {items.map((tech, i) => (
            <div
              key={i}
              className="tech-item group flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/3 hover:border-white/25 hover:bg-white/6 transition-all duration-300 cursor-default"
            >
              <i
                className={`${tech.icon} text-[26px] transition-transform duration-300 group-hover:scale-110`}
                style={{ color: tech.color }}
              />
              <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
                {tech.label}
              </span>
            </div>
          ))}
        </div>

        {/* bottom divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      </div>
    </section>
  );
}