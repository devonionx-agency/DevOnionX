"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function buildST(trigger, isMobile) {
  return {
    trigger,
    start: isMobile ? "top 92%" : "top 88%",
    end: "bottom top",
    ...(isMobile
      ? { once: true }
      : { toggleActions: "play none none reverse" }),
  };
}

export default function SectionHeader({
  label,
  text,
  colorWord,
  className = "",
}) {
  const wrapperRef = useRef(null);

  let content;
  if (colorWord) {
    const idx = text.indexOf(colorWord);
    if (idx === -1) {
      content = <>{text}</>;
    } else {
      const before = text.slice(0, idx);
      const after = text.slice(idx + colorWord.length);
      content = (
        <>
          {before}
          <span className="bg-gradient-to-r from-[#FF5101] via-pink-500 to-violet-500 bg-clip-text text-transparent">
            {colorWord}
          </span>
          {after}
        </>
      );
    }
  } else {
    content = <>{text}</>;
  }

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    const ctx = gsap.context(() => {
      gsap.set(wrapperRef.current, { willChange: "transform, opacity" });

      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, y: isMobile ? 18 : 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: buildST(wrapperRef.current, isMobile),
          onComplete: isMobile
            ? () =>
                gsap.set(wrapperRef.current, {
                  clearProps: "willChange,transform",
                })
            : undefined,
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative text-center py-4 sm:py-6 mb-2 ${className}`}
    >
      
      <p className="relative z-10 mb-4 text-[18px] font-bold uppercase tracking-[4px] text-[#FF5101]">
        {label}
      </p>
      <h2 className="relative text-white z-10 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide capitalize">
        {content}
      </h2>
    </div>
  );
}