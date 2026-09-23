"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { FiLayers, FiCode, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import AboutFeature from "@/components/ui/homeabout/AboutFeature";
import EngineeringTerminal from "@/components/ui/homeabout/EngineeringTerminal";
import Container from "@/components/ui/Container";
import Link from "next/link";

const features = [
  {
    icon: FiLayers,
    title: "Think in Systems",
    description:
      "We look beyond the interface and design the product as a whole.",
  },
  {
    icon: FiCode,
    title: "Build with Intent",
    description:
      "Clean architecture, sharp details, and technology chosen for the job.",
  },
  {
    icon: FiTrendingUp,
    title: "Designed to Grow",
    description:
      "A solid foundation today, with room for the product to evolve tomorrow.",
  },
];

const AboutSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      intro
        .from(".about-label", {
          y: 12,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        })
        .from(
          ".engineering-visual",
          {
            x: -35,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".about-content",
          {
            x: 35,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "<",
        )
        .from(
          ".about-feature",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.45",
        );

      gsap.from(".terminal-row", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
        x: -10,
        opacity: 0,
        duration: 0.45,
        stagger: 0.08,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.to(".terminal-cursor", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.55,
        ease: "steps(1)",
      });

      gsap.to(".engineering-visual .system-badge", {
        y: -4,
        repeat: -1,
        yoyo: true,
        duration: 2.2,
        stagger: 0.35,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#f8f7f3] py-5 sm:py-10 lg:py-16 xl:py-20"
    >
      {/* Background ambient light */}
      <div className="pointer-events-none absolute left-[8%] top-[25%] h-[320px] w-[320px] rounded-full bg-[#ff5101]/[0.035] blur-[100px]" />

      <div className="pointer-events-none absolute bottom-[5%] right-[5%] h-[380px] w-[380px] rounded-full bg-orange-100/40 blur-[120px]" />
      <Container size="hero">
        <div className="relative px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 xl:gap-24">
            {/* LEFT */}
            <div className="engineering-visual order-2 min-w-0 lg:order-1">
              <EngineeringTerminal />
            </div>

            {/* RIGHT */}
            <div className="about-content order-1 w-full max-w-[670px] lg:order-2">
              {/* eyebrow */}
              <div className="about-label mb-4 flex items-center gap-3 sm:mb-6">
                <span className="h-px w-6 bg-brand sm:w-8" />

                <span className="font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-[#697689] sm:text-[15px] sm:tracking-[0.24em]">
                  About DevOnionX
                </span>
              </div>

              {/* heading */}
              <h2 className="max-w-[700px] font-geist text-[clamp(1.85rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#122033] sm:leading-[1] sm:tracking-[-0.055em]">
                We turn ambitious ideas into products{" "}
                <span className="relative inline-block text-[#ff5101]">
                  built to move.
                </span>
              </h2>

              {/* description */}
              <p className="mt-5 max-w-[590px] font-inter text-[14px] leading-[1.7] text-[#68778a] sm:mt-8 sm:text-[18px] sm:leading-[1.8]">
                DevOnionX is a digital product engineering studio for teams that
                need more than a website. We design and build thoughtful digital
                products, scalable web experiences, and software that is made to
                perform from day one.
              </p>

              {/* features */}
              <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-0 sm:gap-9">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={
                      index !== 0
                        ? "border-t border-[#dce0e3] pt-6 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0 sm:pt-9"
                        : ""
                    }
                  >
                    <AboutFeature {...feature} />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 sm:mt-12">
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF5101] px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-[0_0_24px_2px_#ff510133] sm:w-auto sm:py-3.5"
                >
                  <span>See How We Work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
