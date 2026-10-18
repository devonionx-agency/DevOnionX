"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import Container from "../ui/Container";
import { allPageHeroImg } from "@/helper/imageProvider/pageHeroImage";
import DirectionalButton from "./Directionalbutton";
import { stats } from "@/helper/trustmetrics";
import WaterfallStack from "@/components/common/WaterfallStack";
import StatsGrid from "../ui/StatsGrid";
import BreadCrumb from "./BreadCrumb";
import SectionHeader from "../ui/SectionHeader";

const { pageHero } = allPageHeroImg;

const PageHero = ({
  // ── layout toggles ──
  services = true,
  existButton = true,
  statsGrid = true,

  // ── text content ──
  servicesTextTop = "Mobile App",
  servicesTextBottom = "Development Services",
  sectionText = "About Us",
  sectionLabel = "Welcome",
  sectionColorText = "Us",
  heroDescription = `While others struggle with fragmented development teams, endless
    revisions, and apps that barely work across devices,
    forward-thinking companies partner with AMELA Technology.`,

  // ── button props (defaults tuned for a light background) ──
  buttonLabel = "Explore more",
  buttonBorderColor = "#FF5101",
  buttonBorderHoverColor = "#171923",
  buttonFlairColor = "#171923",
  buttonShadowHover = null,
  buttonTextColor = "#ffffff",
  buttonTextHoverColor = "#ffffff",
  buttonSize = "lg",
  buttonClassName = "w-full sm:w-[240px] lg:w-[260px] justify-center bg-[#FF5101]! text-white! rounded-lg! text-base",
  buttonTextTypo = "font-semibold",
  buttonHref = "/contact",

  // ── waterfall ──
  waterfallPlates = [
    {
      label: ".json",
      color: "#7c3aed",
      glow: "#a855f7",
      isBase: true,
    },
    {
      label: ".react",
      color: "#61dafb",
      glow: "#61dafb",
      isBase: false,
    },
    {
      label: ".next",
      color: "#ffffff",
      glow: "#aaaaff",
      isBase: false,
    },
    {
      label: ".node",
      color: "#84cc16",
      glow: "#84cc16",
      isBase: false,
    },
  ],
  waterfallHeight = 440,

  // ── image ──
  heroPageImage = pageHero,
}) => {
  const sectionRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const waterfallRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Only existing DOM targets, so GSAP never receives null.
    const targets = [
      breadcrumbRef.current,
      headingRef.current,
      descRef.current,
      buttonRef.current,
      waterfallRef.current,
      statsRef.current,
    ].filter(Boolean);

    if (prefersReducedMotion || targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, willChange: "transform, opacity" });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(targets, { clearProps: "willChange,clipPath" });
        },
      });

      if (breadcrumbRef.current) {
        tl.fromTo(
          breadcrumbRef.current,
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.55 },
          0.1,
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 40, clipPath: "inset(110% 0% 0% 0%)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(-10% -10% -10% -10%)",
            duration: 0.95,
            ease: "expo.out",
          },
          0.25,
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.55,
        );
      }

      if (buttonRef.current) {
        tl.fromTo(
          buttonRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55 },
          0.75,
        );
      }

      if (waterfallRef.current) {
        tl.fromTo(
          waterfallRef.current,
          { opacity: 0, x: 48, y: 12 },
          { opacity: 1, x: 0, y: 0, duration: 1, ease: "expo.out" },
          0.35,
        );
      }

      if (statsRef.current) {
        tl.fromTo(
          statsRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.9,
        );
      }
    }, section);

    return () => ctx.revert();
  }, [existButton, statsGrid]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden border-b border-[#E4E7EE] bg-[#F6F8FC] py-12 sm:py-16 lg:py-20"
    >
      {/* Optional photo, kept very faint so the page stays light */}
      <Image
        src={heroPageImage}
        alt=""
        aria-hidden="true"
        fill
        priority
        className="-z-30 object-cover opacity-[0.07]"
      />

      {/* Light wash + fine grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-white/80 via-[#F6F8FC]/90 to-[#F6F8FC]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 [background-image:linear-gradient(to_right,rgba(23,25,35,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,25,35,0.045)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_70%_30%,black_10%,transparent_70%)]"
      />

      {/* Brand glow behind the visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_30%,rgba(255,81,1,0.10),transparent_50%)]"
      />

      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/50 to-transparent"
      />

      <Container>
        {/* breadcrumb */}
        <div ref={breadcrumbRef} className="relative z-20 mb-10 lg:mb-14">
          <BreadCrumb />
        </div>

        {/* main grid */}
        <div className="relative z-20 grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* left: text */}
          <div className="min-w-0 max-w-[680px]">
            <div ref={headingRef}>
              {services ? (
                <div>
                  <h2 className="headingTwo leading-[1.12] tracking-[-0.03em] text-[#171923]">
                    {servicesTextTop}
                  </h2>

                  <h2 className="headingTwo bg-gradient-to-r from-[#E94B0C] via-[#FF5101] to-[#F59E0B] bg-clip-text pb-1 leading-[1.12] tracking-[-0.03em] text-transparent">
                    {servicesTextBottom}
                  </h2>
                </div>
              ) : (
                <SectionHeader
                  label={sectionLabel}
                  text={sectionText}
                  colorWord={sectionColorText}
                  className="!m-0 !p-0 text-start"
                />
              )}
            </div>

            <p
              ref={descRef}
              className="para-base sm:para-lg mt-6 max-w-[600px] leading-relaxed text-[#5B6275]"
            >
              {heroDescription}
            </p>

            {existButton && (
              <div ref={buttonRef} className="mt-8 sm:mt-10">
                <DirectionalButton
                  label={buttonLabel}
                  borderColor={buttonBorderColor}
                  borderHoverColor={buttonBorderHoverColor}
                  flairColor={buttonFlairColor}
                  shadowHover={buttonShadowHover}
                  textColor={buttonTextColor}
                  textHoverColor={buttonTextHoverColor}
                  size={buttonSize}
                  className={buttonClassName}
                  textTypo={buttonTextTypo}
                  href={buttonHref}
                />
              </div>
            )}
          </div>

          {/* right: tech panel, hidden on mobile.
              Dark panel keeps the light-coloured plates readable. */}
          <div
            ref={waterfallRef}
            className="hidden w-full min-w-0 justify-center sm:flex lg:justify-end"
          >
            <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl border border-[#1D2740] bg-[#0A1020] shadow-[0_30px_70px_-25px_rgba(10,16,32,0.45)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,81,1,0.18),transparent_60%)]"
              />
              <div className="relative">
                <WaterfallStack
                  height={waterfallHeight}
                  style={{ backgroundColor: "transparent" }}
                  plates={waterfallPlates}
                  config={{
                    fallDuration: 4,
                    stagger: 2,
                    holdDuration: 0.3,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* stats */}
        {statsGrid && (
          <div
            ref={statsRef}
            className="relative z-20 mt-12 rounded-2xl border border-[#E4E7EE] bg-white p-4 shadow-[0_10px_40px_-20px_rgba(23,25,35,0.15)] sm:mt-14 sm:p-6 lg:mt-16"
          >
            <StatsGrid items={stats} />
          </div>
        )}
      </Container>
    </section>
  );
};

export default PageHero;
