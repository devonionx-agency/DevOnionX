"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function SectionHeader({
  label,
  text,
  colorWord,
  className = "",
}) {
  const wrapperRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);

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

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Reduced motion → text renders normally, no split, no animation needed.
      if (reduceMotion) return;

      const headingSplit = SplitText.create(headingRef.current, {
        type: "lines",
        mask: "lines",
        linesClass: "header-line",
      });

      const labelSplit = SplitText.create(labelRef.current, {
        type: "words",
        mask: "words",
      });

      gsap.set(headingSplit.lines, { yPercent: 115 });
      gsap.set(labelSplit.words, { yPercent: 130, autoAlpha: 0 });

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 639px)",
          isTabletUp: "(min-width: 640px)",
        },
        (context) => {
          const { isMobile } = context.conditions;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: isMobile ? "top 92%" : "top 85%",
              once: true,
            },
            defaults: { ease: "expo.out" },
          });

          tl.to(labelSplit.words, {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.04,
          }).to(
            headingSplit.lines,
            {
              yPercent: 0,
              duration: isMobile ? 0.9 : 1.1,
              stagger: 0.12,
            },
            "-=0.3"
          );

          // matchMedia cleanup handles ScrollTrigger + timeline;
          // SplitText reverts automatically via the GSAP context on unmount.
        }
      );

      return () => mm.revert();
    },
    { scope: wrapperRef, dependencies: [text, colorWord, label] }
  );

  return (
    <div
      ref={wrapperRef}
      className={`relative text-center py-4 sm:py-6 mb-2 ${className}`}
    >
      <p
        ref={labelRef}
        className="relative z-10 mb-4 text-[18px] font-bold uppercase tracking-[4px] text-[#FF5101]"
      >
        {label}
      </p>
      <h2
        ref={headingRef}
        className="relative z-10 text-4xl font-bold capitalize tracking-wide text-white sm:text-5xl md:text-6xl"
      >
        {content}
      </h2>
    </div>
  );
}