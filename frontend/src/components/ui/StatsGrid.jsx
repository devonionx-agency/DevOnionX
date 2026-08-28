"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiBriefcase, FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  briefcase: FiBriefcase,
  target: FiTarget,
  "trending-up": FiTrendingUp,
  users: FiUsers,
};

// Parses "500+", "98%", "1,200+", "12.5K" etc. into an animatable
// number + a static prefix/suffix so counting works for any format.
function parseStatValue(raw) {
  const value = String(raw).trim();
  const match = value.match(/^([+-]?[\d,]*\.?\d+)(.*)$/);
  if (!match) return { animatable: false };

  const numericStr = match[1].replace(/,/g, "");
  return {
    animatable: true,
    target: parseFloat(numericStr),
    suffix: match[2],
    hasComma: match[1].includes(","),
    decimals: numericStr.includes(".") ? numericStr.split(".")[1].length : 0,
  };
}

function formatNumber(num, { hasComma, decimals }) {
  const fixed = num.toFixed(decimals);
  if (!hasComma) return fixed;
  const [int, dec] = fixed.split(".");
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return dec ? `${withCommas}.${dec}` : withCommas;
}

export default function StatsGrid({ items }) {
  const gridRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".stat-card");
      if (!cards.length) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(cards, { autoAlpha: 1, y: 0 });
        return;
      }

      const isMobile = window.innerWidth < 640;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          start: isMobile ? "top 92%" : "top 82%",
          once: true,
        },
      });

      tl.fromTo(
        cards,
        { autoAlpha: 0, y: isMobile ? 26 : 42, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          clearProps: "transform",
        },
      ).fromTo(
        ".stat-icon",
        { scale: 0, rotate: -10 },
        {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: "back.out(2.2)",
          stagger: 0.12,
        },
        "<0.1",
      );

      // Count-up runs alongside the reveal, offset slightly per card
      cards.forEach((card, i) => {
        const valueEl = card.querySelector(".stat-value");
        if (!valueEl) return;

        const parsed = parseStatValue(valueEl.dataset.value);
        if (!parsed.animatable) return;

        const counter = { val: 0 };
        tl.to(
          counter,
          {
            val: parsed.target,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => {
              valueEl.textContent =
                formatNumber(counter.val, parsed) + parsed.suffix;
            },
          },
          i === 0 ? "<0.1" : "<0.08",
        );
      });
    },
    { scope: gridRef, dependencies: [items] },
  );

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
    >
      {items.map((item) => {
        const Icon = iconMap[item.icon] ?? FiBriefcase;

        return (
          <div
            key={item.id}
            className="stat-card group rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FF5101]/40 hover:shadow-[0_20px_60px_rgba(255,81,1,0.15)]"
          >
            <div className="stat-icon mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF5101]/20 bg-[#FF5101]/10 transition-all duration-500 group-hover:scale-110">
              <Icon className="text-2xl text-[#FF5101]" />
            </div>

            <h3
              className="stat-value mb-2 text-5xl font-bold text-[#FF5101]"
              data-value={item.value}
            >
              {item.value}
            </h3>

            <h4 className="mb-3 text-xl font-semibold text-white">
              {item.title}
            </h4>

            <p className="leading-relaxed text-white/60">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
