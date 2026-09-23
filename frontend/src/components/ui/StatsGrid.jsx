"use client";

import { useRef } from "react";
import Image from "next/image";
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

/**
 * Convert values like:
 * 500+
 * 98%
 * 1,200+
 * 12.5K
 *
 * into animatable numeric data.
 */
function parseStatValue(raw) {
  const value = String(raw ?? "").trim();

  const match = value.match(/^([+-]?[\d,]*\.?\d+)(.*)$/);

  if (!match) {
    return {
      animatable: false,
    };
  }

  const numericString = match[1].replace(/,/g, "");

  return {
    animatable: true,
    target: Number.parseFloat(numericString),
    suffix: match[2],
    hasComma: match[1].includes(","),
    decimals: numericString.includes(".")
      ? numericString.split(".")[1].length
      : 0,
  };
}

/**
 * Format animated number.
 */
function formatNumber(num, { hasComma, decimals }) {
  const fixed = num.toFixed(decimals);

  if (!hasComma) {
    return fixed;
  }

  const [integerPart, decimalPart] = fixed.split(".");

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}

export default function StatsGrid({ items = [] }) {
  const gridRef = useRef(null);

  useGSAP(() => {
    const container = gridRef.current;

    if (!container || !items.length) {
      return;
    }

    // Only select elements inside this component.
    const cards = gsap.utils.toArray(".stat-card", container);
    const icons = gsap.utils.toArray(".stat-icon", container);

    if (!cards.length) {
      return;
    }

    // Respect user's reduced-motion preference.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      gsap.set(cards, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
      });

      gsap.set(icons, {
        scale: 1,
        rotate: 0,
      });

      return;
    }

    const isMobile = window.innerWidth < 640;

    // Main reveal animation.
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 92%" : "top 82%",
        once: true,
      },
    });

    timeline.fromTo(
      cards,
      {
        autoAlpha: 0,
        y: isMobile ? 26 : 42,
        scale: 0.96,
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        clearProps: "transform",
      },
    );

    // Icon animation.
    if (icons.length) {
      timeline.fromTo(
        icons,
        {
          scale: 0,
          rotate: -10,
        },
        {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: "back.out(2.2)",
          stagger: 0.12,
        },
        "<0.1",
      );
    }

    // Count-up animation.
    cards.forEach((card, index) => {
      const valueElement = card.querySelector(".stat-value");

      if (!valueElement) {
        return;
      }

      const parsed = parseStatValue(valueElement.dataset.value);

      // Skip non-numeric values such as "CRO" and "Lead First".
      if (!parsed.animatable) {
        return;
      }

      const counter = {
        value: 0,
      };

      timeline.to(
        counter,
        {
          value: parsed.target,
          duration: 1.2,
          ease: "power2.out",

          onUpdate: () => {
            valueElement.textContent =
              formatNumber(counter.value, parsed) + parsed.suffix;
          },

          onComplete: () => {
            // Make sure the final value is always exact.
            valueElement.textContent =
              formatNumber(parsed.target, parsed) + parsed.suffix;
          },
        },
        index === 0 ? "<0.1" : "<0.08",
      );
    });

    return () => {
      timeline.kill();
    };
  }, [items]);

  if (!items.length) {
    return null;
  }

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
    >
      {items.map((item) => {
        const Icon = iconMap[item.icon] || FiBriefcase;

        return (
          <article
            key={item.id}
            className="stat-card group relative isolate min-h-[360px] overflow-hidden rounded-3xl border border-white/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FF5101]/40 hover:shadow-[0_20px_60px_rgba(255,81,1,0.15)]"
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/50"
            />

            {/* Card Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="stat-icon mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF5101]/20 bg-[#FF5101]/10 transition-all duration-500 group-hover:scale-110">
                <Icon aria-hidden="true" className="text-2xl text-[#FF5101]" />
              </div>

              {/* Value */}
              <h3
                className="stat-value mb-2 text-5xl font-bold tracking-tight text-[#FF5101]"
                data-value={item.value}
              >
                {item.value}
              </h3>

              {/* Title */}
              <h4 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h4>

              {/* Description */}
              <p className="leading-relaxed text-white/60">
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
