"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/ui/Container";
import { techIconMap } from "@/helper/services/iconMap";

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
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pb-10">
      <Container size="xl">
        {/* Header */}
        <SectionHeader
          label="Our Toolkit"
          text="Technologies We Use"
          colorWord="We Use"
        />
        {/* Tech chips */}
        <div className="flex flex-wrap justify-center gap-4">
          {items.map((tech, i) => {
            const Icon = techIconMap[tech.icon];
            return (
              <div
                key={i}
                className="tech-item group flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/3 hover:border-white/25 hover:bg-white/6 transition-all duration-300 cursor-default"
              >
                {Icon && (
                  <Icon
                    size={26}
                    style={{ color: tech.color }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  {tech.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* bottom divider */}
        {/* <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /> */}
      </Container>
    </section>
  );
}
