"use client";

import { useRef, useEffect } from "react";
import DirectionalButton from "@/components/common/Directionalbutton";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";

export default function HeroHome() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Video performance, sound off (muted), and infinite loop handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict sound off (muted) & loop configuration
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    const startPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser policy delays autoplay
        });
      }
    };

    startPlay();
    video.addEventListener("loadeddata", startPlay);
    video.addEventListener("canplay", startPlay);

    // Performance optimization: Pause video when scrolled out of view to save CPU/GPU/battery
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      video.removeEventListener("loadeddata", startPlay);
      video.removeEventListener("canplay", startPlay);
      observer.disconnect();
    };
  }, []);

  // GSAP entrance animations with reduced motion support
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".hero-badge",
            ".hero-headline-line",
            ".hero-subtitle",
            ".hero-cta-wrap",
            ".hero-hud-badge",
          ],
          { autoAlpha: 1, y: 0, yPercent: 0 },
        );
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.2,
      });

      tl.fromTo(
        ".hero-badge",
        { autoAlpha: 0, y: -16 },
        { autoAlpha: 1, y: 0, duration: 0.6 },
      )
        .fromTo(
          ".hero-headline-line",
          { yPercent: 110, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 0.9, stagger: 0.12 },
          "-=0.3",
        )
        .fromTo(
          ".hero-subtitle",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          ".hero-cta-wrap",
          { autoAlpha: 0, y: 16, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 },
          "-=0.3",
        )
        .fromTo(
          ".hero-hud-badge",
          { autoAlpha: 0, y: 24, scale: 0.92 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.7 },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      aria-label="Hero Banner"
      className="relative isolate min-h-[100svh] w-full flex flex-col justify-end overflow-hidden bg-[#03070c] text-white pt-28 pb-10 sm:pb-12 lg:pb-16"
    >
      {/* ============================================================
          BACKGROUND LAYER: VIDEO (NO GRID, NO HEAVY BLACK COVERS)
      ============================================================ */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        {/* Crystal-clear background video */}
        <video
          ref={videoRef}
          src="/videos/home-hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/videos/home-hero-video.mp4" type="video/mp4" />
          <source src="/video/home-hero-video.mp4" type="video/mp4" />
        </video>

        {/* Base fallback background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#03070c] -z-20"
        />

        {/* Soft subtle gradient on the left to ensure crisp text contrast without darkening video */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none"
        />
      </div>

      {/* ============================================================
          MAIN CONTENT LAYER: POSITIONED AT THE BOTTOM OF HERO BANNER
      ============================================================ */}
      <Container size="hero" className="relative z-10 w-full">
        <div className="relative w-full">
          {/* Main Typography Column */}
          <div className="max-w-[720px]">
            {/* Tag Badge */}
            <div className="hero-badge inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 backdrop-blur-md transition-all duration-300 hover:border-[#FF5101]/60 hover:bg-black/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10 pointer-events-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF5101] shadow-[0_0_8px_#FF5101]" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-slate-200 select-none">
                Next-Gen Engineering Studio
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-[-0.03em] leading-[1.08] text-white">
              <span className="block overflow-hidden pb-1">
                <span className="hero-headline-line block">
                  Turn your business vision into a platform
                </span>
              </span>
              <span className="block overflow-hidden mt-1 sm:mt-2 pb-2">
                <span className="hero-headline-line block">that grows</span>
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="hero-subtitle mt-5 max-w-[560px] text-sm sm:text-base md:text-lg font-normal leading-relaxed text-slate-200/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Startup ar growing business-er jonno high-performance website, web
              app, SaaS, ERP/CRM ar AI automation banai. Strategy meeting theke
              launch ar support porjonto, ekta team, clear timeline
            </p>
          </div>

          {/* ============================================================
              BOTTOM ITEMS ROW:
              View Projects (Left) & Active Deployments (Right)
              Always positioned together at the bottom of the main content
          ============================================================ */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 w-full">
            {/* View Projects CTA Button */}
            <div className="hero-cta-wrap flex flex-wrap items-center gap-5">
              {/* Primary: solid orange, hover e white fill */}
              <DirectionalButton
                href="/contact"
                label="Start Your Project"
                size="lg"
                flairColor="#ffffff"
                borderColor="#FF5101"
                borderHoverColor="#ffffff"
                textColor="#ffffff"
                textHoverColor="#0a0a0a"
                shadowHover="0 0 25px 4px rgba(255,81,1,0.45)"
                className="!bg-[#FF5101] !rounded-[5px] font-semibold shadow-[0_8px_25px_rgba(255,81,1,0.35)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 py-3.5 sm:py-4 px-7 sm:px-8"
                rightIcon={<ArrowRight size={18} />}
              />

              {/* Secondary: transparent outline, hover e orange fill */}
              <DirectionalButton
                href="/work"
                label="See Our Work"
                size="lg"
                flairColor="#FF5101"
                borderColor="rgba(255,255,255,0.55)"
                borderHoverColor="#FF5101"
                textColor="#ffffff"
                textHoverColor="#ffffff"
                shadowHover="0 0 25px 4px rgba(255,81,1,0.35)"
                className="!bg-black/50 backdrop-blur-md !rounded-[5px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 py-3.5 sm:py-4 px-7 sm:px-8"
                rightIcon={<ArrowRight size={18} />}
              />
            </div>

            {/* Cyber HUD Badge: Active Deployments */}
            <div className="hero-hud-badge group relative inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black/70 px-4 py-2.5 sm:px-5 sm:py-3 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-[#FF5101]/50 hover:bg-black/85">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-emerald-500/15 via-transparent to-[#FF5101]/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <span className="font-mono text-slate-500 text-sm sm:text-base select-none">
                [
              </span>

              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981]" />
              </span>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-wide">
                <span className="text-slate-300">Active Deployments:</span>
                <span className="font-semibold text-white">10+</span>
              </div>

              <span className="font-mono text-slate-500 text-sm sm:text-base select-none">
                ]
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
