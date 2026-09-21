"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

import Container from "../../ui/Container";
import DirectionalButton from "../../common/Directionalbutton";
import heroSlides from "@/helper/heroSlides";

const HeroSlider = dynamic(() => import("./HeroSlider"), {
  ssr: false,
  loading: () => (
    <Image
      src={heroSlides[0].src}
      alt={heroSlides[0].alt}
      fill
      priority
      fetchPriority="high"
      sizes="(max-width: 1023px) calc(100vw - 48px), 55vw"
      quality={75}
      className="object-cover object-center"
    />
  ),
});

const HeroSectionTwo = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const animatedElements = [
        ".hero-badge",
        ".hero-line-inner",
        ".hero-text",
        ".hero-btns > *",
      ];

      if (prefersReducedMotion) {
        gsap.set(animatedElements, {
          autoAlpha: 1,
          y: 0,
          yPercent: 0,
        });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.15,
      });

      tl.fromTo(
        ".hero-badge",
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.5 },
      )
        .fromTo(
          ".hero-line-inner",
          { yPercent: 110 },
          { yPercent: 0, duration: 0.8, stagger: 0.1 },
          "-=0.2",
        )
        .fromTo(
          ".hero-text",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.35",
        )
        .fromTo(
          ".hero-btns > *",
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative isolate flex min-h-[calc(100svh-116px)] items-center overflow-hidden bg-[#F5F5F2] text-[#171923] pt-16 sm:pt-20 lg:pt-16"
    >
      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/50 to-transparent"
      />

      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(255,81,1,0.07),transparent_45%)]"
      />

      <Container size="hero" className="relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-8 py-16 sm:gap-10 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6 lg:py-16 xl:gap-8">
          {/* LEFT: Content */}
          <div className="relative z-10 min-w-0 max-w-[680px]">
            <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-[#FF5101]/25 bg-[#FF5101]/8 px-4 py-2 text-xs font-medium text-[#C7460A] sm:text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF5101]" />
              Built Around Your Business
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[70px] pt-6 font-extrabold leading-[1.12] tracking-[-0.035em] text-[#171923]">
              <span className="block overflow-hidden">
                <span className="hero-line-inner block">
                  Engineering Digital
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className="hero-line-inner block">Experiences That</span>
              </span>

              <span className="block overflow-hidden">
                <span className="hero-line-inner block bg-gradient-to-r from-[#E94B0C] via-[#FF5101] to-[#F59E0B] bg-clip-text text-transparent">
                  Move Your Business Forward.
                </span>
              </span>
            </h1>

            <p className="hero-text mt-6 max-w-[580px] text-sm leading-relaxed text-[#62646F] sm:text-base">
              DevOnionX helps startups and businesses build modern digital
              products through custom software, web applications, SaaS
              platforms, and scalable web solutions.
            </p>

            <div className="hero-btns mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <DirectionalButton
                href="/contact"
                label="Discuss Your Project"
                size="lg"
                flairColor="#FF5101"
                borderColor="rgba(255,81,1,0.75)"
                borderHoverColor="#FF5101"
                textColor="#171923"
                textHoverColor="#ffffff"
                shadowHover="0 0 24px 2px #ff510133"
                className="py-3.5 font-semibold"
                rightIcon={<ArrowRight size={18} />}
              />

              <DirectionalButton
                href="/work"
                label="Explore Our Work"
                size="lg"
                flairColor="#171923"
                borderColor="rgba(23,25,35,0.2)"
                borderHoverColor="rgba(23,25,35,0.5)"
                textColor="#171923"
                textHoverColor="#ffffff"
                shadowHover={null}
                className="py-3.5 font-medium"
                rightIcon={<ArrowRight size={18} />}
              />
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative order-last w-full min-w-0 lg:order-none lg:-translate-x-6 xl:-translate-x-10">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[680px] overflow-hidden rounded-2xl sm:aspect-[16/10] lg:aspect-[5/4] xl:aspect-[4/3]">
              {/* Image glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-[10%] rounded-full bg-[#FF5101]/[0.08] blur-[70px]"
              />

              <HeroSlider />

              {/* Bottom image overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t from-[#F5F5F2]/30 to-transparent"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSectionTwo;
