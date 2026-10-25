"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * TopicPill — Reusable pill/chip button for blog categories.
 *
 * Can be used as a filter button (onClick) or a navigation link (href).
 * Supports active state styling consistent with DevOnionX brand.
 *
 * @param {string}  label       – Display text for the pill
 * @param {string}  icon        – Emoji or React node shown before the label
 * @param {string}  accentColor – Hex color for the active/hover accent
 * @param {boolean} isActive    – Whether this pill is currently selected
 * @param {number}  count       – Optional article count badge
 * @param {function} onClick    – Click handler (filter mode)
 * @param {string}  href        – Optional link (navigation mode)
 * @param {string}  className   – Additional classes
 */
export default function TopicPill({
  label,
  icon,
  accentColor = "#FF5101",
  isActive = false,
  count,
  onClick,
  href,
  className = "",
}) {
  const pillRef = useRef(null);

  // Subtle scale pop on mount via GSAP
  useGSAP(() => {
    if (!pillRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    // Micro hover interaction
    const el = pillRef.current;

    const onEnter = () => {
      gsap.to(el, {
        scale: 1.04,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const baseClasses = [
    "inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5",
    "rounded-xl border text-sm font-semibold",
    "transition-all duration-300 cursor-pointer select-none",
    "transform-gpu will-change-transform",
    className,
  ].join(" ");

  const activeClasses = "text-white shadow-lg";
  const inactiveClasses = [
    "blog-topic-pill-inactive bg-white/5 border-white/10 text-slate-300",
    "hover:border-white/25 hover:bg-white/[0.08] hover:text-white",
  ].join(" ");

  const style = isActive
    ? {
        backgroundColor: accentColor,
        borderColor: accentColor,
        boxShadow: `0 4px 20px ${accentColor}33`,
      }
    : {};

  const content = (
    <>
      <span>{label}</span>
      {typeof count === "number" && (
        <span
          className={`ml-0.5 inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-md text-xs font-bold ${
            isActive
              ? "bg-white/25 text-white"
              : "blog-topic-count-inactive bg-white/10 text-slate-400"
          }`}
        >
          {count}
        </span>
      )}
    </>
  );

  // If href is provided, render as Link; otherwise as button
  if (href) {
    return (
      <Link
        ref={pillRef}
        href={href}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        style={style}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={pillRef}
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      style={style}
    >
      {content}
    </button>
  );
}
