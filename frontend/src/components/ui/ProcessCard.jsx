"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
  FiFileText,
  FiShield,
  FiTarget,
  FiLayers,
  FiCpu,
  FiMap,
  FiGrid,
  FiPenTool,
  FiCode,
  FiServer,
  FiGitBranch,
  FiUploadCloud,
  FiActivity,
  FiLifeBuoy,
  FiTag,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ORANGE = "#FF5101";
const BLUE = "#2F6FFF";

// tag text theke best-guess icon বের করার জন্য — data file e icon field
// add na kore o automatically icon boshe jabe. Match na hole fallback FiTag.
const TAG_ICON_MAP = [
  { keywords: ["brief"], icon: FiFileText },
  { keywords: ["audit"], icon: FiShield },
  { keywords: ["research"], icon: FiTarget },
  { keywords: ["architecture"], icon: FiLayers },
  { keywords: ["tech stack", "stack"], icon: FiCpu },
  { keywords: ["roadmap"], icon: FiMap },
  { keywords: ["design system"], icon: FiGrid },
  { keywords: ["figma"], icon: FiPenTool },
  { keywords: ["next.js", "next"], icon: FiCode },
  { keywords: ["api"], icon: FiServer },
  { keywords: ["ci/cd", "ci", "cd"], icon: FiGitBranch },
  { keywords: ["deploy"], icon: FiUploadCloud },
  { keywords: ["monitoring"], icon: FiActivity },
  { keywords: ["support"], icon: FiLifeBuoy },
];

function getTagIcon(tag) {
  const lower = tag.toLowerCase();
  const found = TAG_ICON_MAP.find((entry) =>
    entry.keywords.some((keyword) => lower.includes(keyword)),
  );
  return found ? found.icon : FiTag;
}

export default function ProcessCard({ step }) {
  const cardRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const titleSplit = SplitText.create(titleRef.current, {
        type: "lines",
        mask: "lines",
      });
      gsap.set(titleSplit.lines, { yPercent: 115 });

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
              trigger: cardRef.current,
              start: isMobile ? "top 92%" : "top 85%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          });

          tl.fromTo(
            cardRef.current,
            { autoAlpha: 0, y: 50 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              // 👉 hover:-translate-y-2 pore theke kaj korার jonno essential
              clearProps: "transform",
            },
          )
            .fromTo(
              ".process-number",
              { autoAlpha: 0, x: -16 },
              { autoAlpha: 1, x: 0, duration: 0.5 },
              "-=0.5",
            )
            .fromTo(
              ".process-number-line",
              { scaleX: 0 },
              { scaleX: 1, duration: 0.4, transformOrigin: "left" },
              "-=0.25",
            )
            .fromTo(
              ".process-icon-box",
              { scale: 0, rotate: -12, autoAlpha: 0 },
              {
                scale: 1,
                rotate: 0,
                autoAlpha: 1,
                duration: 0.55,
                ease: "back.out(2.2)",
              },
              "-=0.3",
            )
            .to(
              titleSplit.lines,
              { yPercent: 0, duration: 0.8, stagger: 0.08 },
              "-=0.3",
            )
            .fromTo(
              ".process-title-line",
              { scaleX: 0 },
              { scaleX: 1, duration: 0.5, transformOrigin: "left" },
              "-=0.35",
            )
            .fromTo(
              ".process-desc",
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.6 },
              "-=0.3",
            )
            .fromTo(
              ".process-tag",
              { autoAlpha: 0, y: 10, scale: 0.9 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                stagger: 0.08,
              },
              "-=0.3",
            );

          // ambient flowing wave lines — continuous, GPU-cheap (transform only)
          cardRef.current
            .querySelectorAll(".process-wave-flow")
            .forEach((line, i) => {
              gsap.to(line, {
                strokeDashoffset: -400,
                duration: 8 + i,
                repeat: -1,
                ease: "none",
              });
            });

          // thin echo lines drifting slower, opposite phase — adds parallax depth
          cardRef.current
            .querySelectorAll(".process-wave-echo")
            .forEach((line, i) => {
              gsap.to(line, {
                strokeDashoffset: 320,
                duration: 15 + i * 3,
                repeat: -1,
                ease: "none",
              });
            });

          // drifting aurora glow blob behind the lines
          const aurora = cardRef.current.querySelector(".process-wave-aurora");
          if (aurora) {
            gsap.to(aurora, {
              attr: { cx: 250 },
              duration: 7,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
            gsap.to(aurora, {
              opacity: 0.65,
              duration: 3.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
        },
      );

      return () => mm.revert();
    },
    { scope: cardRef, dependencies: [step] },
  );

  return (
    <div
      ref={cardRef}
      className="group relative h-full rounded-[28px] bg-gradient-to-br from-[#FF5101]/70 via-white/10 to-[#2F6FFF]/70 p-[1px] transition-all duration-500 ease-out hover:-translate-y-2 hover:from-[#FF5101] hover:to-[#2F6FFF] hover:shadow-[0_25px_60px_-15px_rgba(255,81,1,0.35)]"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[27px] bg-gradient-to-b from-[#07070a] to-black px-4 pb-6 pt-7 sm:px-8 sm:pt-9">
        {/* Brand mark — real 3D logo art when `step.image` is provided,
            abstract crossing-beam accent as a fallback when it isn't */}
        <div
          className="pointer-events-none absolute -right-4 top-16 hidden  h-37 w-37 sm:block"
          aria-hidden="true"
        >
          {step.image ? (
            <Image
              src={step.image}
              alt=""
              fill
              sizes="144px"
              className="object-contain object-right-top opacity-90 transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <>
              <span className="absolute right-12 top-2 h-28 w-[3px] rotate-45 bg-gradient-to-b from-[#FF5101] via-[#FF5101]/30 to-transparent opacity-60" />
              <span className="absolute right-4 top-2 h-28 w-[3px] -rotate-45 bg-gradient-to-b from-[#2F6FFF] via-[#2F6FFF]/30 to-transparent opacity-60" />
            </>
          )}
        </div>

        <span className="process-number relative z-10 block text-5xl font-extrabold leading-none text-white sm:text-6xl">
          {step.number}
        </span>
        <span className="process-number-line relative z-10 mt-3 block h-[3px] w-9 origin-left bg-[#FF5101]" />

        <div className="process-icon-box relative z-10 mt-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#FF5101] transition-colors duration-300 group-hover:text-[#2F6FFF] sm:h-[68px] sm:w-[68px]">
          {step.icon}
        </div>

        <h3
          ref={titleRef}
          className="relative z-10 mt-7 text-3xl font-extrabold text-white "
        >
          {step.title}
        </h3>
        <span className="process-title-line relative z-10 mt-3 block h-[3px] w-14 origin-left bg-gradient-to-r from-[#FF5101] to-[#2F6FFF]" />

        <p className="process-desc para-base relative z-10 mt-5 text-white/70">
          {step.description}
        </p>

        {/* All tags start orange; hover shifts to the same blue treatment,
            regardless of tag position */}
        <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-7">
          {step.tags.map((tag) => {
            const TagIcon = getTagIcon(tag);
            const accent = ORANGE;

            return (
              <span
                key={tag}
                className="process-tag group/tag flex items-center gap-1.5 rounded-full border border-[color:var(--tag-border)] bg-[color:var(--tag-bg)] px-3 py-2 text-[13px] font-medium text-white transition-all duration-300 ease-out hover:scale-105 hover:border-[#2F6FFF] hover:bg-[#2F6FFF]/15 hover:shadow-[0_0_16px_-2px_rgba(47,111,255,0.55)]"
                style={{
                  "--tag-border": `${accent}55`,
                  "--tag-bg": `${accent}14`,
                }}
              >
                <TagIcon
                  size={14}
                  className="shrink-0 text-[color:var(--tag-icon)] transition-colors duration-300 group-hover/tag:text-[#2F6FFF]"
                  style={{ "--tag-icon": accent }}
                />
                {tag}
              </span>
            );
          })}
        </div>

        {/* Premium layered wave: soft aurora glow + blurred glow pass +
            crisp foreground lines + faint echo lines for depth */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full opacity-90 transition-opacity duration-500 group-hover:opacity-100"
          viewBox="0 0 400 110"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id={`processWaveOrange-${step.number}`}
              x1="0"
              y1="1"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor={ORANGE} stopOpacity="0" />
              <stop offset="100%" stopColor={ORANGE} stopOpacity="0.85" />
            </linearGradient>
            <linearGradient
              id={`processWaveBlue-${step.number}`}
              x1="1"
              y1="1"
              x2="0"
              y2="0"
            >
              <stop offset="0%" stopColor={BLUE} stopOpacity="0" />
              <stop offset="100%" stopColor={BLUE} stopOpacity="0.85" />
            </linearGradient>
            <radialGradient
              id={`processAurora-${step.number}`}
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop offset="0%" stopColor={ORANGE} stopOpacity="0.4" />
              <stop offset="55%" stopColor={BLUE} stopOpacity="0.2" />
              <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
            </radialGradient>
            <filter
              id={`processGlow-${step.number}`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* drifting aurora glow, blended additively over the dark card */}
          <circle
            className="process-wave-aurora mix-blend-screen"
            cx="180"
            cy="75"
            r="95"
            opacity="0.45"
            fill={`url(#processAurora-${step.number})`}
          />

          {/* blurred glow pass, sits behind the crisp lines */}
          <g filter={`url(#processGlow-${step.number})`} opacity="0.5">
            <path
              d="M0 92 C 90 74, 140 34, 200 22"
              fill="none"
              stroke={`url(#processWaveOrange-${step.number})`}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="14 8"
              vectorEffect="non-scaling-stroke"
              className="process-wave-flow"
            />
            <path
              d="M400 92 C 310 74, 260 34, 200 22"
              fill="none"
              stroke={`url(#processWaveBlue-${step.number})`}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="14 8"
              vectorEffect="non-scaling-stroke"
              className="process-wave-flow"
            />
          </g>

          {/* crisp foreground lines */}
          <path
            d="M0 90 C 90 70, 140 30, 200 20"
            fill="none"
            stroke={`url(#processWaveOrange-${step.number})`}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="14 8"
            vectorEffect="non-scaling-stroke"
            className="process-wave-flow"
          />
          <path
            d="M400 90 C 310 70, 260 30, 200 20"
            fill="none"
            stroke={`url(#processWaveBlue-${step.number})`}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="14 8"
            vectorEffect="non-scaling-stroke"
            className="process-wave-flow"
          />

          {/* faint slow echo lines for extra depth */}
          <path
            d="M0 100 C 100 86, 150 48, 200 36"
            fill="none"
            stroke={ORANGE}
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="6 10"
            vectorEffect="non-scaling-stroke"
            className="process-wave-echo"
          />
          <path
            d="M400 100 C 300 86, 250 48, 200 36"
            fill="none"
            stroke={BLUE}
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="6 10"
            vectorEffect="non-scaling-stroke"
            className="process-wave-echo"
          />
        </svg>
      </div>
    </div>
  );
}