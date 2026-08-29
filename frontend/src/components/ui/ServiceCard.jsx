"use client";

import { useRef } from "react";
import Image from "next/image";
import { HiOutlineChevronRight, HiArrowRight } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Wave from "../../../public/images/servicecard/wave.png";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCard({
  icon: Icon,
  titleTop,
  titleBottom,
  description,
  link = "#",
  index = 0,
}) {
  const cardRef = useRef(null);
  const glowBlueRef = useRef(null);
  const glowOrangeRef = useRef(null);
  const iconBoxRef = useRef(null);
  const arrowBtnRef = useRef(null);
  const waveRef = useRef(null);
  const titleTopRef = useRef(null);
  const titleBottomRef = useRef(null);
  const accentLineRef = useRef(null);
  const descRef = useRef(null);
  const learnMoreRef = useRef(null);
  const spotlightRef = useRef(null);
  const borderGlowRef = useRef(null);

  const quickRotateX = useRef(null);
  const quickRotateY = useRef(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      gsap.set(card, {
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      });

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          full: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduced } = context.conditions;

          // Scroll-triggered entrance — plays once as the card enters the viewport
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
            delay: reduced ? 0 : index * 0.08,
          });

          if (reduced) {
            tl.fromTo(
              card,
              { opacity: 0 },
              { opacity: 1, duration: 0.6, ease: "power2.out" },
            );
            return;
          }

          tl.fromTo(
            card,
            { y: 90, opacity: 0, scale: 0.92, rotateX: 6 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateX: 0,
              duration: 1,
              ease: "power4.out",
            },
          )
            .fromTo(
              iconBoxRef.current,
              { scale: 0, rotate: -55, opacity: 0 },
              {
                scale: 1,
                rotate: 0,
                opacity: 1,
                duration: 0.65,
                ease: "back.out(2.2)",
              },
              "-=0.65",
            )
            .fromTo(
              [titleTopRef.current, titleBottomRef.current],
              { yPercent: 115 },
              { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.09 },
              "-=0.55",
            )
            .fromTo(
              accentLineRef.current,
              { scaleX: 0 },
              { scaleX: 1, duration: 0.55, ease: "power2.out" },
              "-=0.45",
            )
            .fromTo(
              descRef.current,
              { y: 18, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
              "-=0.35",
            )
            .fromTo(
              learnMoreRef.current,
              { y: 14, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" },
              "-=0.4",
            )
            .fromTo(
              arrowBtnRef.current,
              { scale: 0, rotate: -90, opacity: 0 },
              {
                scale: 1,
                rotate: 0,
                opacity: 1,
                duration: 0.55,
                ease: "back.out(2.4)",
              },
              "-=0.5",
            );

          // Ambient breathing glows
          gsap.to(glowBlueRef.current, {
            opacity: 0.35,
            scale: 1.1,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.to(glowOrangeRef.current, {
            opacity: 0.35,
            scale: 1.1,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.5,
          });

          // Wave floating
          gsap.to(waveRef.current, {
            x: 8,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          // Slow rotating gradient ring — always spinning, revealed only on hover
          gsap.to(borderGlowRef.current, {
            rotate: 360,
            duration: 7,
            repeat: -1,
            ease: "none",
          });

          quickRotateX.current = gsap.quickTo(card, "rotateX", {
            duration: 0.6,
            ease: "power3.out",
          });
          quickRotateY.current = gsap.quickTo(card, "rotateY", {
            duration: 0.6,
            ease: "power3.out",
          });
        },
      );

      const refreshId = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        cancelAnimationFrame(refreshId);
        mm.revert();
      };
    },
    { scope: cardRef, dependencies: [index] },
  );

  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMouseEnter = () => {
    const tl = gsap.timeline();

    tl.to(cardRef.current, { y: -8, duration: 0.45, ease: "power2.out" })
      .to(
        glowBlueRef.current,
        { opacity: 0.5, scale: 1.2, duration: 0.45, ease: "power2.out" },
        "<",
      )
      .to(
        glowOrangeRef.current,
        { opacity: 0.5, scale: 1.2, duration: 0.45, ease: "power2.out" },
        "<",
      )
      .to(
        iconBoxRef.current,
        { y: -4, scale: 1.08, duration: 0.4, ease: "back.out(1.7)" },
        "<",
      )
      .to(
        arrowBtnRef.current,
        { x: 4, scale: 1.08, duration: 0.4, ease: "back.out(1.7)" },
        "<",
      );

    if (!prefersReducedMotion()) {
      gsap.to(spotlightRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(borderGlowRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    const tl = gsap.timeline();

    tl.to(cardRef.current, {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    })
      .to(
        glowBlueRef.current,
        { opacity: 0.22, scale: 1, duration: 0.45, ease: "power2.out" },
        "<",
      )
      .to(
        glowOrangeRef.current,
        { opacity: 0.22, scale: 1, duration: 0.45, ease: "power2.out" },
        "<",
      )
      .to(
        iconBoxRef.current,
        { y: 0, scale: 1, duration: 0.4, ease: "power2.out" },
        "<",
      )
      .to(
        arrowBtnRef.current,
        { x: 0, scale: 1, duration: 0.4, ease: "power2.out" },
        "<",
      );

    gsap.to(spotlightRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(borderGlowRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (prefersReducedMotion()) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const relX = x / rect.width - 0.5;
    const relY = y / rect.height - 0.5;

    quickRotateX.current?.(relY * -8);
    quickRotateY.current?.(relX * 8);

    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(480px circle at ${x}px ${y}px, rgba(255,255,255,0.09), transparent 45%)`;
    }
  };

  return (
    <div
      ref={cardRef}
      className="service-card group relative overflow-hidden rounded-[28px] p-8 sm:p-10"
      style={{ willChange: "transform" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Rotating gradient ring — signature premium touch, revealed on hover */}
      <span
        ref={borderGlowRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "1.5px",
          background:
            "conic-gradient(from 0deg, rgba(56,167,255,0) 0%, rgba(56,167,255,0.9) 20%, rgba(255,255,255,0) 45%, rgba(255,146,60,0.9) 70%, rgba(56,167,255,0) 100%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Cursor-tracking spotlight */}
      <span
        ref={spotlightRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Ambient corner glows */}
      <span
        ref={glowBlueRef}
        className="service-card__glow service-card__glow--blue"
        aria-hidden="true"
      />
      <span
        ref={glowOrangeRef}
        className="service-card__glow service-card__glow--orange"
        aria-hidden="true"
      />

      {/* Top row: icon + dots | arrow button */}
      <div className="relative z-10 flex items-start justify-between mb-10">
        <div className="flex items-center gap-3">
          <span className="service-card__dots" aria-hidden="true" />
          <span ref={iconBoxRef} className="service-card__icon-box">
            {Icon && <Icon className="w-6 h-6 text-white" />}
          </span>
        </div>

        <a
          href={link}
          aria-label="Learn more"
          ref={arrowBtnRef}
          className="service-card__arrow-btn"
        >
          <HiOutlineChevronRight className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* Heading — each line masked for a reveal-on-scroll effect */}
      <h3 className="relative z-10 mb-3 font-bold text-[28px] sm:text-[32px] leading-tight">
        <span className="block overflow-hidden">
          <span ref={titleTopRef} className="service-card__title-top block">
            {titleTop}
          </span>
        </span>
        <span className="block overflow-hidden">
          <span ref={titleBottomRef} className="block text-gradient-blue">
            {titleBottom}
          </span>
        </span>
      </h3>

      <span
        ref={accentLineRef}
        className="service-card__accent-line"
        style={{ transformOrigin: "left center" }}
        aria-hidden="true"
      />

      {/* Description */}
      <p
        ref={descRef}
        className="service-card__desc relative z-10 mt-5 mb-12 max-w-[85%] text-[15px] sm:text-base leading-relaxed"
      >
        {description}
      </p>

      {/* Learn more */}
      <a
        href={link}
        ref={learnMoreRef}
        className="service-card__learn-more relative z-10"
      >
        Learn more
        <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      {/* Decorative wave image (bottom-right) */}
      <div
        ref={waveRef}
        className="absolute right-0 bottom-0 w-[85%] sm:w-[75%] max-w-[320px] aspect-[4/3] z-0 pointer-events-none"
      >
        <Image
          src={Wave}
          alt="Wave decoration"
          fill
          className="object-contain object-right-bottom opacity-90"
          sizes="(max-width: 768px) 85vw, 320px"
        />
      </div>
    </div>
  );
}
