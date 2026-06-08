"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../ui/Container";
import { allPageHeroImg } from "@/helper/imageProvider/pageHeroImage";
import DirectionalButton from "./Directionalbutton";
import { stats } from "@/helper/trustmetrics";
import WaterfallStack from "@/components/common/WaterfallStack";
import StatsGrid from "../ui/StatsGrid";
import BreadCrumb from "./BreadCrumb";
import SectionHeader from "../ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

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
  sectionLabel = "WellCome",
  sectionColorText = "Us",
  heroDescription = `While others struggle with fragmented development teams, endless
    revisions, and apps that barely work across devices,
    forward-thinking companies partner with AMELA Technology.`,

  // ── button props ──
  buttonLabel = "Explore more",
  buttonBorderColor = "#ffffff",
  buttonBorderHoverColor = "#FF5101",
  buttonFlairColor = "#FF5101",
  buttonShadowHover = "0 0 18px 2px #9d717174",
  buttonTextColor = "white",
  buttonTextHoverColor = "#ffffff",
  buttonSize = "lg",
  buttonClassName = "w-[220px] sm:w-[260px] lg:w-[300px] text-base lg:text-lg",
  buttonTextTypo = "font-medium",
  buttonHref = "/contact",

  // ── waterfall ──
  waterfallPlates = [
    { label: ".json", color: "#7c3aed", glow: "#a855f7", isBase: true },
    { label: ".react", color: "#61dafb", glow: "#61dafb", isBase: false },
    { label: ".next", color: "#ffffff", glow: "#aaaaff", isBase: false },
    { label: ".node", color: "#84cc16", glow: "#84cc16", isBase: false },
  ],
  waterfallHeight = 500,

  // ── image ──
  heroPageImage = pageHero,
}) => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const waterfallRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── initial hidden states ──
      gsap.set(
        [
          breadcrumbRef.current,
          headingRef.current,
          descRef.current,
          buttonRef.current,
          waterfallRef.current,
        ],
        { opacity: 0, willChange: "transform, opacity" },
      );

      if (statsGrid && statsRef.current) {
        gsap.set(statsRef.current, { opacity: 0 });
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(
            [
              breadcrumbRef.current,
              headingRef.current,
              descRef.current,
              buttonRef.current,
              waterfallRef.current,
            ],
            { clearProps: "willChange" },
          );
        },
      });

      // 1. overlay — depth reveal
      tl.fromTo(
        overlayRef.current,
        { opacity: 1 },
        { opacity: 0.82, duration: 1.6, ease: "power1.inOut" },
        0,
      );

      // 2. breadcrumb — fade + drop
      tl.fromTo(
        breadcrumbRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" },
        0.25,
      );

      // 3. heading — mask reveal
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 52, clipPath: "inset(110% 0% 0% 0%)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.05,
          ease: "expo.out",
        },
        0.45,
      );

      // 4. description — fade + rise
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0.78,
      );

      // 5. button — spring scale in
      tl.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.82, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.6)" },
        1.0,
      );

      // 6. waterfall — diagonal slide in
      tl.fromTo(
        waterfallRef.current,
        { opacity: 0, x: 70, y: 20 },
        { opacity: 1, x: 0, y: 0, duration: 1.1, ease: "expo.out" },
        0.5,
      );

      // 7. stats — fade + rise
      if (statsGrid && statsRef.current) {
        tl.fromTo(
          statsRef.current,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          1.1,
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [existButton, statsGrid]);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-14 lg:py-15 overflow-hidden"
    >
      <Image
        src={heroPageImage}
        alt="heroPageImage"
        fill
        priority
        className="object-cover z-0"
      />

      <div ref={overlayRef} className="absolute inset-0 bg-black z-5" />

      <Container>
        {/* breadcrumb */}
        <div
          ref={breadcrumbRef}
          className="relative z-20 mb-8 sm:mb-10 lg:mb-12"
        >
          <BreadCrumb />
        </div>

        {/* main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 relative z-20 gap-8 lg:gap-0">
          {/* left — text */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            <div ref={headingRef}>
              {services ? (
                <div>
                  <h2 className="headingTwo text-white leading-tight">
                    {servicesTextTop}
                  </h2>
                  <h2 className="headingTwo bg-gradient-to-r from-[#FF5101] via-pink-500 to-violet-500 bg-clip-text text-transparent leading-tight">
                    {servicesTextBottom}
                  </h2>
                </div>
              ) : (
                <SectionHeader
                  label={sectionLabel}
                  text={sectionText}
                  colorWord={sectionColorText}
                  className="text-start !p-0 !m-0"
                />
              )}
            </div>

            <p
              ref={descRef}
              className="para-base sm:para-lg text-white/80  max-w-[680px]"
            >
              {heroDescription}
            </p>

            <div ref={buttonRef}>
              {existButton && (
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
              )}
            </div>
          </div>

          {/* right — waterfall, hidden on mobile */}
          <div
            ref={waterfallRef}
            className="hidden sm:flex lg:block justify-center"
          >
            <WaterfallStack
              height={waterfallHeight}
              style={{ backgroundColor: "transparent" }}
              plates={waterfallPlates}
              config={{ fallDuration: 4, stagger: 2, holdDuration: 0.3 }}
            />
          </div>
        </div>

        {/* stats */}
        <div
          ref={statsRef}
          className="relative z-20 mt-8 sm:mt-10 lg:mt-[20px]"
        >
          {statsGrid && <StatsGrid items={stats} />}
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
