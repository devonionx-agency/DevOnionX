"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatIsService({ data, iconColor }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".whatis-left",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".whatis-right",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.15,
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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="mx-auto w-full px-3 md:px-5 lg:px-10 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — visual code block */}
          <div className="whatis-left">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d]">
              {/* window bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-white/30 text-xs font-mono">
                  service.config.js
                </span>
              </div>
              {/* mock code */}
              <div className="p-6 font-mono text-sm leading-7">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">service</span>{" "}
                  <span className="text-white/60">= {"{"}</span>
                </p>
                <p className="pl-6">
                  <span className="text-green-400">quality</span>
                  <span className="text-white/60">:</span>{" "}
                  <span className="text-yellow-300">"premium"</span>
                  <span className="text-white/60">,</span>
                </p>
                <p className="pl-6">
                  <span className="text-green-400">performance</span>
                  <span className="text-white/60">:</span>{" "}
                  <span className="text-yellow-300">"blazing fast"</span>
                  <span className="text-white/60">,</span>
                </p>
                <p className="pl-6">
                  <span className="text-green-400">support</span>
                  <span className="text-white/60">:</span>{" "}
                  <span className="text-yellow-300">"24/7"</span>
                  <span className="text-white/60">,</span>
                </p>
                <p className="pl-6">
                  <span className="text-green-400">accent</span>
                  <span className="text-white/60">: </span>
                  <span style={{ color: iconColor || "#ff5101" }}>
                    "{iconColor || "#ff5101"}"
                  </span>
                  <span className="text-white/60">,</span>
                </p>
                <p className="pl-6">
                  <span className="text-green-400">delivery</span>
                  <span className="text-white/60">:</span>{" "}
                  <span className="text-yellow-300">"on time"</span>
                </p>
                <p>
                  <span className="text-white/60">{"}"}</span>
                </p>
                <p className="mt-3">
                  <span className="text-purple-400">export default</span>
                  <span className="text-white/60"> service</span>
                </p>
              </div>
              {/* glow */}
              <div
                className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full blur-[80px] opacity-20 pointer-events-none"
                style={{ background: iconColor || "#ff5101" }}
              />
            </div>
          </div>

          {/* Right — content */}
          <div className="whatis-right">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              {data.title}
            </h2>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Bullets grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.bullets.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: `${iconColor || "#ff5101"}22` }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M1.5 5L4 7.5L8.5 2.5"
                        stroke={iconColor || "#ff5101"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-white/80 text-sm font-medium">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
