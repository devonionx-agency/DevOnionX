"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Container from "../../ui/Container";
import DirectionalButton from "../../common/Directionalbutton";
import { ArrowRight } from "lucide-react";
import heroSlides from "@/helper/heroSlides";

// Swiper is heavy — code-split it and keep a static image as fallback
// so the LCP image still renders instantly before JS hydrates.
const HeroSlider = dynamic(() => import("./HeroSlider"), {
  ssr: false,
  loading: () => (
    <div className="relative h-full w-full">
      <Image
        src={heroSlides[0].src}
        alt={heroSlides[0].alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={82}
        className="object-[65%_center] lg:object-center object-cover"
      />
    </div>
  ),
});

const HeroSectionTwo = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [".hero-badge", ".hero-line-inner", ".hero-text", ".hero-btns > *"],
          { autoAlpha: 1, y: 0, yPercent: 0 },
        );
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.2,
      });

      tl.fromTo(
        ".hero-badge",
        { autoAlpha: 0, y: -16 },
        { autoAlpha: 1, y: 0, duration: 0.7 },
      )
        .fromTo(
          ".hero-line-inner",
          { yPercent: 115 },
          { yPercent: 0, duration: 1.1, stagger: 0.12 },
          "-=0.35",
        )
        .fromTo(
          ".hero-text",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=0.55",
        )
        .fromTo(
          ".hero-btns > *",
          { autoAlpha: 0, y: 20, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12 },
          "-=0.45",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative isolate overflow-hidden min-h-[100svh] flex items-center bg-gradient-to-b from-[#0a0a0d] to-black"
    >
      {/* Slim accent line — visually separates navbar (#000) from hero */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/50 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <HeroSlider />
      </div>

      {/* Tuned overlay — image stays visible, text stays readable */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/55 to-transparent lg:to-black/5" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/65 via-transparent to-black/25" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_80%_75%,rgba(255,81,1,0.16),transparent_55%)]" />

      <Container className="relative z-20">
        <div className="max-w-[650px] py-24 sm:py-28 lg:py-0">
          <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-[#FF5101]/20 bg-[#FF5101]/10 px-4 py-2 text-xs sm:text-sm text-[#FF5101] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#FF5101]" />
            Digital Products. Engineered To Scale.
          </div>

          <h1 className="hero-title pt-6 lg:mt-8 headingOne text-white">
            <span className="block overflow-hidden">
              <span className="hero-line-inner block">
                Building Digital Products That
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line-inner block bg-gradient-to-r from-[#FF5101] via-orange-300 to-white bg-clip-text text-transparent animate-gradient">
                Move Businesses Forward.
              </span>
            </span>
          </h1>

          <p className="hero-text mt-6 lg:mt-8 max-w-[600px] text-base sm:text-[18px] xl:text-[16px] text-white/80 leading-relaxed">
            We help ambitious startups and businesses build scalable digital
            products and experiences that drive measurable growth.
          </p>

          <div className="hero-btns mt-8 lg:mt-10 flex flex-wrap gap-4">
            <DirectionalButton
              href="/contact"
              label="Start a Project"
              flairColor="#FF5101"
              borderColor="rgba(255,81,1,0.8)"
              textColor="#ffffff"
              className="font-semibold py-3 shadow-lg shadow-orange-500/20"
              rightIcon={<ArrowRight size={18} />}
            />
            <DirectionalButton
              href="/work"
              label="View Work"
              flairColor="transparent"
              borderColor="rgba(255,255,255,0.2)"
              textColor="#ffffff"
              className="font-medium py-3 hover:border-white/5 transition"
              rightIcon={<ArrowRight size={18} />}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSectionTwo;
