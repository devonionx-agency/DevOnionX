"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Prevent mobile address-bar show/hide from re-triggering ScrollTrigger
ScrollTrigger.config({ ignoreMobileResize: true });

export default function SectionHeader({
  label,
  text,
  colorWord,
  description,
  className = "",
}) {
  const wrapperRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);

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
          <span className="bg-gradient-to-r from-[#E74700] via-[#FF5101] to-[#F59E0B] bg-clip-text text-transparent">
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
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      let headingSplit;
      let labelSplit;
      let descSplit;
      let mm;
      let cancelled = false;

      // ✅ Wait for fonts to load before splitting text.
      // Splitting before fonts load causes line-breaks to shift later,
      // which is the #1 reason animations feel jumpy/unsmooth.
      document.fonts.ready.then(() => {
        if (cancelled) return;

        headingSplit = SplitText.create(headingRef.current, {
          type: "lines",
          mask: "lines",
          linesClass: "header-line",
        });

        labelSplit = SplitText.create(labelRef.current, {
          type: "words",
          mask: "words",
        });

        descSplit = descRef.current
          ? SplitText.create(descRef.current, {
              type: "lines",
              mask: "lines",
              linesClass: "header-desc-line",
            })
          : null;

        gsap.set(headingSplit.lines, {
          yPercent: 115,
          force3D: true,
        });

        gsap.set(labelSplit.words, {
          yPercent: 130,
          autoAlpha: 0,
          force3D: true,
        });

        if (descSplit) {
          gsap.set(descSplit.lines, {
            yPercent: 100,
            autoAlpha: 0,
            force3D: true,
          });
        }

        mm = gsap.matchMedia();

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
              defaults: {
                ease: "power4.out", // smoother than expo.out, less "snap"
                force3D: true,
              },
            });

            tl.to(labelSplit.words, {
              yPercent: 0,
              autoAlpha: 1,
              duration: 0.7,
              stagger: 0.04,
            }).to(
              headingSplit.lines,
              {
                yPercent: 0,
                duration: isMobile ? 1 : 1.2,
                stagger: 0.12,
              },
              "-=0.4",
            );

            if (descSplit) {
              tl.to(
                descSplit.lines,
                {
                  yPercent: 0,
                  autoAlpha: 1,
                  duration: 0.8,
                  stagger: 0.08,
                },
                "-=0.5",
              );
            }

            return () => tl.kill();
          },
        );

        // Recalculate positions once everything (fonts + splits) has
        // settled, so ScrollTrigger start points are accurate.
        ScrollTrigger.refresh();
      });

      return () => {
        cancelled = true;
        mm?.revert();
        headingSplit?.revert();
        labelSplit?.revert();
        descSplit?.revert();
      };
    },
    {
      scope: wrapperRef,
      dependencies: [text, colorWord, label, description],
    },
  );

  return (
    <div
      ref={wrapperRef}
      className={`relative mb-2 py-4 text-center sm:py-6 ${className}`}
      style={{ willChange: "transform" }}
    >
      {/* Section Label */}
      <p
        ref={labelRef}
        className="relative z-10 mb-4 text-[18px] font-bold uppercase tracking-[4px] text-[#FF5101]"
      >
        {label}
      </p>

      {/* Section Heading */}
      <h2
        ref={headingRef}
        className="relative z-10 text-4xl font-bold capitalize tracking-[-0.025em] text-[#171923] sm:text-5xl md:text-6xl"
      >
        {content}
      </h2>

      {/* Section Description */}
      {description ? (
        <p
          ref={descRef}
          className="para-lg relative z-10 mx-auto mt-4 max-w-[800px] text-[#62646F] sm:mt-5"
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
