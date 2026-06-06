"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function DirectionalButton({
  label,
  leftIcon,
  rightIcon,
  borderColor = "#ff5101",
  borderHoverColor = null,
  flairColor = "#ff5101",
  textColor = "var(--text-primary)",
  textHoverColor = "#ffffff",
  shadowHover = "0 0 18px 2px #ff510133",
  size = "md",
  onClick,
  className = "",
  textTypo,
}) {
  const btnRef = useRef(null);
  const flairRef = useRef(null);
  const labelRef = useRef(null);

  const sizeMap = {
    sm: "px-5 py-2 text-[13px] gap-1.5",
    md: "px-6 py-2 text-[14px] gap-2",
    lg: "px-7 py-3 text-base gap-2.5",
  };

  const sz = sizeMap[size] ?? sizeMap.md;
  const shadowResting = "0 0 0px 0px transparent";

  useEffect(() => {
    const btn = btnRef.current;
    const flair = flairRef.current;
    const labelEl = labelRef.current;

    const setFlairSize = () => {
      const { width, height } = btn.getBoundingClientRect();
      const diagonal = Math.sqrt(width ** 2 + height ** 2) * 2.5; // 2.2 → 2.5
      gsap.set(flair, {
        width: diagonal,
        height: diagonal,
        xPercent: -50,
        yPercent: -50,
        scale: 0,
        backgroundColor: flairColor,
      });
    };

    setFlairSize();
    gsap.set(labelEl, { color: textColor });
    gsap.set(btn, { "--btn-border": borderColor }); // ← initial border set

    const getPos = (e) => {
      const rect = btn.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    let activeTl = null;

    const onEnter = (e) => {
      const { x, y } = getPos(e);
      activeTl?.kill();
      gsap.set(flair, { left: x, top: y, scale: 0 });

      activeTl = gsap.timeline();
      activeTl.to(flair, { scale: 1, duration: 0.75, ease: "power3.out" });
      activeTl.to(
        labelEl,
        { color: textHoverColor, duration: 0.25, ease: "power2.out" },
        0,
      );

      if (borderHoverColor) {
        activeTl.to(
          btn,
          {
            "--btn-border": borderHoverColor,
            duration: 0.3,
            ease: "power2.out",
          },
          0,
        );
      }

      if (shadowHover) {
        activeTl.to(
          btn,
          { boxShadow: shadowHover, duration: 0.4, ease: "power2.out" },
          0,
        );
      }
    };

    const onLeave = (e) => {
      const { x, y } = getPos(e);
      activeTl?.kill();
      gsap.set(flair, { left: x, top: y });

      activeTl = gsap.timeline();
      activeTl.to(flair, { scale: 0, duration: 0.65, ease: "power3.inOut" });
      activeTl.to(
        labelEl,
        { color: textColor, duration: 0.2, ease: "power2.out" },
        0.45,
      );

      if (borderHoverColor) {
        activeTl.to(
          btn,
          { "--btn-border": borderColor, duration: 0.3, ease: "power2.out" },
          0.45,
        );
      }

      if (shadowHover) {
        activeTl.to(
          btn,
          { boxShadow: shadowResting, duration: 0.4, ease: "power2.out" },
          0,
        );
      }
    };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", setFlairSize);

    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", setFlairSize);
    };
  }, [
    flairColor,
    textColor,
    textHoverColor,
    shadowHover,
    borderColor,
    borderHoverColor,
    className,
  ]);

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      style={{ "--btn-border": borderColor }}
      className={[
        "relative overflow-hidden inline-flex items-center justify-center",
        "rounded-full cursor-pointer outline-none border bg-transparent",
        "border-[var(--btn-border)]",
        "[-webkit-tap-highlight-color:transparent]",
        sz,
        className,
      ].join(" ")}
    >
      <span
        ref={flairRef}
        className="absolute rounded-full pointer-events-none"
      />

      <span
        ref={labelRef}
        className={[
          "relative z-10 inline-flex items-center gap-[inherit] pointer-events-none",
          "font-(family-name:--font-body) font-medium tracking-[0.01em] leading-none whitespace-nowrap",
        ].join(" ")}
      >
        {leftIcon && (
          <span className="inline-flex items-center text-[1.1em]">
            {leftIcon}
          </span>
        )}
        <span className={`${textTypo}`}>{label}</span>
        {rightIcon && (
          <span className="inline-flex items-center text-[1.1em]">
            {rightIcon}
          </span>
        )}
      </span>
    </button>
  );
}
