"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/ui/Container";
import { techIconMap } from "@/helper/services/iconMap";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack({ items }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-item",
        {
          opacity: 0,
          y: 20,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.06,
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
    <section ref={sectionRef} className="pb-16">
      <Container size="xl">
        <SectionHeader
          label="Technology Ecosystem"
          text="Technologies We Use"
          colorWord="We Use"
        />

        <div className="relative mt-14">
          {/* Glow */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-fuchsia-500/30 via-purple-500/30 to-orange-500/30 blur-3xl" />

          {/* Gradient Border */}
          <div className="relative rounded-[28px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-orange-500 p-[1px]">
            {/* Inner Container */}
            <div className="rounded-[27px] bg-[#050814] px-4 py-5">
              <div className="flex flex-wrap justify-center">
                {items.map((tech, index) => {
                  const Icon = techIconMap[tech.icon];

                  return (
                    <div
                      key={index}
                      className="tech-item group relative flex min-w-[120px] flex-col items-center justify-center gap-3 px-6 py-5 transition-all duration-300"
                    >
                      {/* Divider */}
                      {index !== items.length - 1 && (
                        <div className="absolute right-0 top-1/2 hidden h-12 -translate-y-1/2 bg-white/10 lg:block w-px" />
                      )}

                      {Icon && (
                        <Icon
                          size={34}
                          style={{ color: tech.color }}
                          className="transition-all duration-300 group-hover:scale-110"
                        />
                      )}

                      <span className="text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
                        {tech.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
