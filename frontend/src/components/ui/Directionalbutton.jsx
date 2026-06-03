"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const variantMap = {
  brand: {
    wrapper: "border border-[#ff5101] bg-transparent",
    flair: "bg-[#ff5101]",
    text: "text-(--text-primary)",
    textHover: "#ffffff",
    textResting: "var(--text-primary)",
    shadowHover: "0 0 18px 2px #ff510133",
    shadowResting: "0 0 0px 0px #ff510100",
  },
  outline: {
    wrapper: "border border-(--border-color) bg-transparent",
    flair: "bg-(--text-primary)",
    text: "text-(--text-primary)",
    textHover: "var(--bg-primary)",
    textResting: "var(--text-primary)",
    shadowHover: "none",
    shadowResting: "none",
  },
  ghost: {
    wrapper: "border border-transparent bg-transparent",
    flair: "bg-(--bg-tertiary)",
    text: "text-(--text-secondary)",
    textHover: "var(--text-primary)",
    textResting: "var(--text-secondary)",
    shadowHover: "none",
    shadowResting: "none",
  },
};

const sizeMap = {
  sm: "px-5 py-2 text-[13px] gap-1.5",
  md: "px-6 py-2 text-[14px] gap-2",
  lg: "px-7 py-3 text-base gap-2.5",
};

export default function DirectionalButton({
  label,
  icon,
  iconPosition = "right",
  variant = "brand",
  size = "md",
  onClick,
  className = "",
}) {
  const btnRef = useRef(null);
  const flairRef = useRef(null);
  const labelRef = useRef(null);

  const v = variantMap[variant];
  const sz = sizeMap[size];

  useEffect(() => {
    const btn = btnRef.current;
    const flair = flairRef.current;
    const labelEl = labelRef.current;

    const setFlairSize = () => {
      const { width, height } = btn.getBoundingClientRect();
      const diagonal = Math.sqrt(width ** 2 + height ** 2) * 2.2;
      gsap.set(flair, {
        width: diagonal,
        height: diagonal,
        xPercent: -50,
        yPercent: -50,
        scale: 0,
      });
    };

    setFlairSize();

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

      activeTl.to(flair, {
        scale: 1,
        duration: 0.75,
        ease: "power3.out",
      });

      activeTl.to(
        labelEl,
        {
          color: v.textHover,
          duration: 0.25,
          ease: "power2.out",
        },
        0,
      );

      // shadow
      if (v.shadowHover !== "none") {
        activeTl.to(
          btn,
          {
            boxShadow: v.shadowHover,
            duration: 0.4,
            ease: "power2.out",
          },
          0,
        );
      }
    };

    const onLeave = (e) => {
      const { x, y } = getPos(e);
      activeTl?.kill();

      gsap.set(flair, { left: x, top: y });

      activeTl = gsap.timeline();

      activeTl.to(flair, {
        scale: 0,
        duration: 0.65,
        ease: "power3.inOut",
      });

      activeTl.to(
        labelEl,
        {
          color: v.textResting,
          duration: 0.2,
          ease: "power2.out",
        },
        0.45,
      );

      if (v.shadowHover !== "none") {
        activeTl.to(
          btn,
          {
            boxShadow: v.shadowResting,
            duration: 0.4,
            ease: "power2.out",
          },
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
  }, [v]);

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className={[
        
        "relative overflow-hidden inline-flex items-center justify-center",
        "rounded-full cursor-pointer outline-none ",
        "transition-[border-color] duration-300 ease-[ease]",
        "[-webkit-tap-highlight-color:transparent]",
        v.wrapper,
        sz,
        className,
      ].join(" ")}
    >
      {/* Flair */}
      <span
        ref={flairRef}
        className={`absolute rounded-full pointer-events-none ${v.flair}`}
      />

      {/* Label */}
      <span
        ref={labelRef}
        className={[
          "relative z-10 inline-flex items-center pointer-events-none",
          "font-(family-name:--font-body) font-medium tracking-[0.01em] leading-none whitespace-nowrap",
          iconPosition === "left" ? "flex-row-reverse" : "flex-row",
          v.text,
          sz,
        ].join(" ")}
      >
        <span>{label}</span>
        {icon && (
          <span className="inline-flex items-center text-[1.1em]">{icon}</span>
        )}
      </span>
    </button>
  );
}
