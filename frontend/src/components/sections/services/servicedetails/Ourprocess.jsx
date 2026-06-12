"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurProcess({ steps, iconColor }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-step",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="mx-auto w-full px-3 md:px-5 lg:px-10 max-w-[1280px]">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-bold uppercase tracking-[4px] mb-4"
            style={{ color: iconColor || "#ff5101" }}
          >
            How We Work
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Our Development{" "}
            <span className="bg-gradient-to-r from-[#FF5101] via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* connector line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-white/10" />

          <div className="grid grid-cols-7 gap-2">
            {steps.map((step, i) => (
              <div key={i} className="process-step flex flex-col items-center text-center">
                {/* circle */}
                <div
                  className="relative z-10 w-16 h-16 rounded-full border-2 flex flex-col items-center justify-center mb-5 bg-black transition-all duration-300"
                  style={{ borderColor: `${iconColor || "#ff5101"}60` }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: iconColor || "#ff5101" }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-white/40 text-xs leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet list */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={i} className="process-step flex gap-5 relative">
              {/* vertical line */}
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[19px] top-10 bottom-0 w-px"
                  style={{ background: `${iconColor || "#ff5101"}30` }}
                />
              )}
              {/* circle */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 bg-black"
                style={{ borderColor: `${iconColor || "#ff5101"}80` }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: iconColor || "#ff5101" }}
                >
                  {step.num}
                </span>
              </div>
              {/* content */}
              <div className="pb-8">
                <h3 className="text-white font-semibold text-base mb-1">{step.title}</h3>
                <p className="text-white/45 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}