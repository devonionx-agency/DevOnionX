// ProblemCard.jsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { FaUser, FaFaceFrown } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ProblemCard({
  icon: Icon = FaUser,
  emoji,
  reactionIcon: ReactionIcon = FaFaceFrown,
  title,
  colorWord,
  description,
  className = "",
}) {
  const cardRef = useRef(null);
  const headingRef = useRef(null);

  let content;
  if (colorWord) {
    const idx = title.indexOf(colorWord);
    if (idx === -1) {
      content = <>{title}</>;
    } else {
      const before = title.slice(0, idx);
      const after = title.slice(idx + colorWord.length);
      content = (
        <>
          {before}
          <span className="text-[#FF5101]">{colorWord}</span>
          {after}
        </>
      );
    }
  } else {
    content = <>{title}</>;
  }

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const headingSplit = SplitText.create(headingRef.current, {
        type: "lines",
        mask: "lines",
      });
      gsap.set(headingSplit.lines, { yPercent: 115 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        cardRef.current,
        { autoAlpha: 0, y: 44 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          // 👉 GSAP এর inline transform mucche dey animation shesh e,
          // tai Tailwind er hover:-translate-y-2 abar normally kaj korte pare
          clearProps: "transform",
        },
      )
        .fromTo(
          ".problem-icon",
          { scale: 0, rotate: -15, autoAlpha: 0 },
          {
            scale: 1,
            rotate: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "back.out(2.4)",
          },
          "-=0.5",
        )
        .fromTo(
          ".problem-reaction",
          { scale: 0, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0.55, ease: "back.out(2.4)" },
          "-=0.4",
        )
        .to(
          headingSplit.lines,
          { yPercent: 0, duration: 0.8, stagger: 0.08 },
          "-=0.35",
        )
        .fromTo(
          ".problem-underline",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.5, transformOrigin: "left" },
          "-=0.3",
        )
        .fromTo(
          ".problem-desc",
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.25",
        );

      const flowLine = cardRef.current.querySelector(".problem-wave-flow");
      if (flowLine) {
        gsap.to(flowLine, {
          strokeDashoffset: -400,
          duration: 7,
          repeat: -1,
          ease: "none",
        });
      }
    },
    { scope: cardRef, dependencies: [title, colorWord, description, emoji] },
  );

  return (
    <div
      ref={cardRef}
      className={`problem-card group relative overflow-hidden rounded-3xl border border-[#FF5101]/20 bg-gradient-to-b from-[#0d0704] to-black p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#FF5101]/45 hover:shadow-brand sm:p-9 ${className}`}
    >
      <div
        className="absolute left-7 top-6 grid grid-cols-5 gap-1.5 opacity-40 sm:left-9"
        aria-hidden="true"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="h-[3px] w-[3px] rounded-full bg-[#FF5101]" />
        ))}
      </div>

      {/* <div
        className="problem-reaction absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#FF5101]/40 shadow-[0_0_30px_rgba(255,81,1,0.35)] sm:right-8 sm:top-8 sm:h-16 sm:w-16"
        aria-hidden="true"
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#ffb648] to-[#FF5101]">
          <ReactionIcon className="h-6 w-6 text-black/70 sm:h-7 sm:w-7" />
        </div>
      </div> */}

      <div className="problem-icon relative z-10 mb-8 mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#FF5101]/35 bg-[#FF5101]/10 sm:h-16 sm:w-16">
        {emoji ? (
          <span
            className="text-2xl leading-none sm:text-3xl"
            role="img"
            aria-label={title}
          >
            {emoji}
          </span>
        ) : (
          <Icon className="h-6 w-6 text-[#FF5101] sm:h-7 sm:w-7" />
        )}
      </div>

      <h3
        ref={headingRef}
        className="headingFour relative z-10 font-bold text-white"
      >
        {content}
      </h3>

      <span className="problem-underline relative z-10 mt-4 block h-[3px] w-10 origin-left bg-[#FF5101]" />

      <p className="problem-desc para-lg relative z-10 mt-4 max-w-[280px]">
        {description}
      </p>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full"
        viewBox="0 0 600 260"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="problemWaveGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF5101" stopOpacity="0" />
            <stop offset="55%" stopColor="#FF5101" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FF5101" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {[0, 18, 36, 54, 72, 90].map((offset, i) => (
          <path
            key={offset}
            d={`M0 ${260 - offset} C 180 ${220 - offset}, 260 ${40 - offset}, 600 ${10 - offset}`}
            fill="none"
            stroke="url(#problemWaveGrad)"
            strokeWidth={i === 3 ? 1.6 : 1}
            strokeLinecap="round"
            opacity={0.15 + i * 0.06}
            vectorEffect="non-scaling-stroke"
            strokeDasharray={i === 3 ? "16 10" : undefined}
            className={i === 3 ? "problem-wave-flow" : ""}
          />
        ))}
      </svg>
    </div>
  );
}
