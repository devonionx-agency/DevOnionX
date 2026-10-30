"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";

import Container from "../ui/Container";
import BreadCrumb from "./BreadCrumb";
import DirectionalButton from "./Directionalbutton";
import { allPageHeroImg } from "@/helper/imageProvider/pageHeroImage";

gsap.registerPlugin(useGSAP);

const { servicesHeroImg } = allPageHeroImg;

/**
 * PageHero — Reusable hero component for agency marketing pages
 *
 * In this design, the hero image (e.g. about-banner.webp, insight-hero.webp, etc.)
 * is the full-section background with a crystal-clear, vibrant aesthetic.
 * No heavy grey wash, no muddy tint.
 */
const PageHero = ({
  // Eyebrow / Label
  eyebrow,
  sectionLabel,

  // Heading props
  titleLines,
  title,
  sectionText,
  accentTitle,
  sectionColorText,

  // Backward compatibility heading toggles
  services = false,
  servicesTextTop,
  servicesTextBottom,

  // Description
  description,
  heroDescription = "We help ambitious businesses turn ideas into powerful digital products built to solve real problems, deliver exceptional experiences, and grow with your business.",

  // Buttons / CTAs
  primaryCta,
  secondaryCta,
  existButton = true,
  buttonLabel,
  buttonHref,

  // Background image (uses the AVIF hero image directly as the full section background)
  bgImage,
  heroImage,
  heroPageImage,
  fallbackImage,
  heroImageAlt = "DevOnionX Digital Showcase Background",

  // Layout & breadcrumbs
  showBreadcrumb = true,
  breadcrumbOverrides,
  className = "",
  children,
}) => {
  const rootRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  // Resolve background image: prioritize bgImage, then heroImage, then heroPageImage, then fallbackImage
  const sectionBgImage =
    bgImage || heroImage || heroPageImage || fallbackImage || servicesHeroImg;

  // Determine active description
  const displayDescription = description || heroDescription;

  // Build structured title lines
  const lines = (() => {
    if (Array.isArray(titleLines) && titleLines.length > 0) {
      return titleLines;
    }
    if (servicesTextTop || servicesTextBottom) {
      return [
        { text: servicesTextTop || "Mobile App", accent: false },
        { text: servicesTextBottom || "Development Services", accent: true },
      ];
    }
    const mainHeading = title || sectionText || "Turning Your Vision Into Digital Success";
    const accent = accentTitle || sectionColorText;

    if (accent && mainHeading.includes(accent)) {
      const parts = mainHeading.split(accent);
      return [
        { text: parts[0].trim(), accent: false },
        { text: accent.trim(), accent: true },
      ].filter((l) => Boolean(l.text));
    }

    return [{ text: mainHeading, accent: false }];
  })();

  // Build resolved CTAs
  const resolvedPrimaryCta =
    primaryCta || (buttonLabel ? { label: buttonLabel, href: buttonHref || "/contact" } : null);
  const resolvedSecondaryCta = secondaryCta || null;
  const showButtons = existButton && (resolvedPrimaryCta || resolvedSecondaryCta);

  // GSAP Entrance Animations
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (breadcrumbRef.current) {
        tl.fromTo(
          breadcrumbRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.05
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current.querySelectorAll("[data-hero-line]"),
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: "expo.out",
          },
          "-=0.3"
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.5"
        );
      }

      if (buttonsRef.current) {
        tl.fromTo(
          buttonsRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.45"
        );
      }
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className={`relative isolate flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#070b14] px-4 pt-32 pb-16 sm:px-6 sm:pt-36 sm:pb-20 lg:px-8 lg:pt-40 lg:pb-24 ${className}`}
    >
      {/* ── Main Section Full Background Image (Outside Container, Spans Entire Section) ── */}
      {sectionBgImage && (
        <Image
          src={sectionBgImage}
          alt={heroImageAlt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="pointer-events-none -z-30 select-none object-cover object-center"
        />
      )}

      {/* ── Linear Gradient Overlay: Top 0% (no overlay), Middle 30%-35%, Bottom 70% ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.32)_60%,rgba(0,0,0,0.50)_100%)]"
      />

      {/* ── Ambient Warm Brand Glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,81,1,0.16),transparent_70%)] blur-3xl"
      />

      {/* ── Top Subtle Brand Accent Line ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/50 to-transparent"
      />

      <Container className="relative z-10 my-auto w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* ── Breadcrumb Navigation: Frosted Glass Capsule Pill ── */}
          {showBreadcrumb && (
            <div ref={breadcrumbRef} className="mb-6 flex justify-center sm:mb-8">
              <BreadCrumb variant="dark" overrides={breadcrumbOverrides} />
            </div>
          )}

          {/* ── Main Section Heading ── */}
          <h1
            ref={headingRef}
            className="font-serif text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            {lines.map((line, index) => (
              <span
                key={`${line.text}-${index}`}
                data-hero-line
                className={`block ${line.accent
                  ? "font-serif italic font-extrabold text-[#FF5101]"
                  : ""
                  }`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          {/* ── Description ── */}
          {displayDescription && (
            <p
              ref={descRef}
              className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg sm:leading-relaxed"
            >
              {displayDescription}
            </p>
          )}

          {/* ── Interactive CTA Buttons ── */}
          {showButtons && (
            <div
              ref={buttonsRef}
              className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:mt-10 sm:gap-4"
            >
              {resolvedPrimaryCta && (
                <DirectionalButton
                  href={resolvedPrimaryCta.href}
                  label={resolvedPrimaryCta.label}
                  size="lg"
                  flairColor="#ea4900"
                  borderColor="#FF5101"
                  borderHoverColor="#FF5101"
                  textColor="#ffffff"
                  textHoverColor="#ffffff"
                  shadowHover="0 0 25px 4px rgba(255,81,1,0.45)"
                  className="!bg-[#FF5101] bg-[#FF5101]! text-white font-semibold shadow-[0_8px_25px_rgba(255,81,1,0.35)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] py-3.5 sm:py-4 px-7 sm:px-8 text-sm sm:text-[15px]"
                  rightIcon={<FiArrowRight className="text-base" />}
                />
              )}

              {resolvedSecondaryCta && (
                <DirectionalButton
                  href={resolvedSecondaryCta.href}
                  label={resolvedSecondaryCta.label}
                  size="lg"
                  flairColor="#FF5101"
                  borderColor="rgba(255,255,255,0.25)"
                  borderHoverColor="#FF5101"
                  textColor="#ffffff"
                  textHoverColor="#ffffff"
                  shadowHover="0 0 25px 2px rgba(255,81,1,0.35)"
                  className="!bg-black/40 bg-black/40! backdrop-blur-md text-white font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] py-3.5 sm:py-4 px-7 sm:px-8 text-sm sm:text-[15px]"
                  rightIcon={<FiArrowRight className="text-base" />}
                />
              )}
            </div>
          )}
        </div>

        {/* Optional Page Children (e.g., custom widgets) */}
        {children && <div className="mt-12 sm:mt-16">{children}</div>}
      </Container>
    </section>
  );
};

export default PageHero;