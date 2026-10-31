"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";

export default function HeroHome() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Video autoplay, muted and loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    const startPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    };

    startPlay();

    video.addEventListener("loadeddata", startPlay);
    video.addEventListener("canplay", startPlay);

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

  // GSAP entrance animations
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set([".hero-badge", ".hero-headline-line", ".hero-subtitle"], {
          autoAlpha: 1,
          y: 0,
          yPercent: 0,
        });
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
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      aria-label="Hero Banner"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#03070c] px-4 pt-28 pb-12 text-white sm:px-6 lg:px-8"
    >
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
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
        />

        {/* Fallback Background */}
        <div className="absolute inset-0 -z-20 bg-[#03070c]" />

        {/* Centered Dark Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#02090F]/45 via-[#02090F]/45 to-[#02090F]/65"
        />
      </div>

      {/* Center Content */}
      <Container size="hero" className="relative z-10 w-full">
        <div className="flex w-full flex-col items-center text-center">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/60 px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[#FF5101]/50 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-[#FF5101] shadow-[0_0_8px_#FF5101]" />
            </span>

            <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-slate-200 sm:text-xs">
              Next-Gen Engineering Studio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-headline mt-7 max-w-[1100px] text-4xl font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[82px]">
            <span className="hero-headline-line block">
              Engineering Digital Solutions
            </span>

            <span className="hero-headline-line block">
              That Drive <span className="text-[#FBCC22]">Business Growth</span>
            </span>
          </h1>

          {/* Description */}
          <p className="hero-subtitle mt-6 max-w-[760px] text-sm font-normal leading-relaxed text-slate-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] sm:text-base md:text-lg">
            DevOnionX helps startups and growing businesses build
            high-performance websites, SaaS platforms, business systems, and
            AI-powered solutions that move businesses forward
          </p>
        </div>
      </Container>
    </section>
  );
}
