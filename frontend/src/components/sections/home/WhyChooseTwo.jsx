"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaUsers,
  FaRocket,
  FaChartLine,
  FaClock,
  FaHandshakeSimple,
  FaArrowRight,
  FaCircleCheck,
} from "react-icons/fa6";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// public folder theke serve hoy URL hisebe, JS import hisebe na
const orbitImage = "/images/whychoose/orbit.png";

const impactStats = [
  {
    icon: FaUsers,
    title: "Small, Senior Team",
    desc: "No juniors learning on your budget — only experienced hands.",
    number: "01",
    color: "orange",
  },
  {
    icon: FaRocket,
    title: "Fast Shipping",
    desc: "Lean team means fewer meetings, faster decisions, quicker launches.",
    number: "02",
    color: "blue",
  },
  {
    icon: FaChartLine,
    title: "Real Growth",
    desc: "Every project is measured against business outcomes, not just delivery.",
    number: "03",
    color: "orange",
  },
  {
    icon: FaClock,
    title: "On-Time, Every Time",
    desc: "Clear timelines, no surprises — we respect your deadlines.",
    number: "04",
    color: "blue",
  },
  {
    icon: FaHandshakeSimple,
    title: "Long-Term Partnership",
    desc: "We stick around after launch — your growth is our growth.",
    number: "05",
    color: "orange",
  },
];

const WhyChooseTwo = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // reduced-motion respect kore — accessibility + performance
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const cards = cardsRef.current.filter(Boolean);

        gsap.set([leftRef.current, rightRef.current, ...cards], {
          willChange: "transform, opacity",
        });

        gsap.fromTo(
          leftRef.current,
          { xPercent: -15, opacity: 0 },
          {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          rightRef.current,
          { xPercent: 15, opacity: 0 },
          {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          cards,
          { y: 26, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.72,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightRef.current,
              start: "top 78%",
              once: true,
            },
          },
        );
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="bg-black overflow-hidden py-16 md:py-24">
      <Container size="hero">
        <SectionHeader
          label="THE PROOF"
          text="Small Team. Big Impact."
          colorWord="Big Impact."
          description="Young agency, real results."
        />

        <div
          ref={sectionRef}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {/* Left: Orbit visual panel */}
          <div
            ref={leftRef}
            className="relative h-[380px] overflow-hidden rounded-3xl border border-orange-500/30 bg-black shadow-[0_0_35px_rgba(255,81,1,0.12),inset_0_0_45px_rgba(0,70,255,0.08)] sm:h-[440px] md:h-[520px]"
          >
            <Image
              src={orbitImage}
              alt="Orbit visual"
              width={520}
              height={520}
              priority
              className="absolute right-[-18px] top-[-12px] z-0 h-[430px] w-[430px] max-w-none object-cover opacity-90 sm:h-[500px] sm:w-[500px] md:right-[-28px] md:top-[-18px] md:h-[570px] md:w-[570px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/15" />

            <div className="relative z-10 flex h-full max-w-[58%] flex-col justify-end p-6 sm:max-w-[55%] sm:p-8 md:max-w-[54%] md:p-10">
              <div className="mb-5 flex items-center gap-3 sm:mb-7">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-orange-500 sm:text-xs">
                  OUR APPROACH
                </span>
                <span className="h-px w-10 bg-gradient-to-r from-orange-500 to-blue-500" />
              </div>
              <h3 className="mb-4 text-3xl font-extrabold leading-[0.98] text-white sm:text-4xl md:text-5xl">
                Built for <span className="block text-orange-500">Business</span>
              </h3>
              <p className="mb-5 max-w-[280px] text-xs leading-relaxed text-gray-300 sm:text-sm md:text-base">
                We don&apos;t just build websites or apps. We build digital
                solutions that help your business grow, scale and succeed.
              </p>

              <ul className="mb-6 space-y-2 text-xs text-gray-300 sm:text-sm">
                {["Growth Mindset", "Scalable Solutions", "Real Business Impact"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <FaCircleCheck className="h-3 w-3 shrink-0 text-orange-500 sm:h-3.5 sm:w-3.5" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>

              <a
                href="#contact"
                className="group inline-flex w-fit items-center gap-2 border-b border-orange-500 pb-2 text-xs font-semibold text-white transition-colors hover:text-orange-400 sm:text-sm"
              >
                Let&apos;s Build Together
                <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
              </a>
            </div>

            <div className="absolute bottom-8 right-5 z-10 hidden border-l border-white/15 pl-4 text-[9px] leading-[1.8] tracking-widest text-gray-400 md:block">
              <span className="block">PLAN</span>
              <span className="block">BUILD</span>
              <span className="block">GROW</span>
              <span className="mt-3 block h-px w-7 bg-orange-500" />
            </div>
          </div>

          {/* Right: Impact stat cards */}
          <div ref={rightRef} className="flex flex-col gap-4">
            {impactStats.map((item, index) => {
              const Icon = item.icon;
              const isOrange = item.color === "orange";
              return (
                <div
                  key={item.number}
                  ref={(node) => {
                    cardsRef.current[index] = node;
                  }}
                  onMouseEnter={(event) => {
                    const card = event.currentTarget;
                    const glow = card.querySelector("[data-card-glow]");
                    const icon = card.querySelector("[data-card-icon]");
                    const arrow = card.querySelector("[data-card-arrow]");

                    gsap.to(card, {
                      y: -5,
                      scale: 1.012,
                      duration: 0.4,
                      ease: "power3.out",
                      overwrite: "auto",
                    });
                    gsap.to([glow, icon, arrow], {
                      opacity: 1,
                      scale: 1.05,
                      duration: 0.35,
                      ease: "power2.out",
                      overwrite: "auto",
                    });
                  }}
                  onMouseLeave={(event) => {
                    const card = event.currentTarget;
                    const glow = card.querySelector("[data-card-glow]");
                    const icon = card.querySelector("[data-card-icon]");
                    const arrow = card.querySelector("[data-card-arrow]");

                    gsap.to(card, {
                      y: 0,
                      scale: 1,
                      duration: 0.55,
                      ease: "elastic.out(1, 0.55)",
                      overwrite: "auto",
                    });
                    gsap.to([glow, icon, arrow], {
                      opacity: 0.82,
                      scale: 1,
                      duration: 0.4,
                      ease: "power2.out",
                      overwrite: "auto",
                    });
                  }}
                  className={`group relative isolate flex items-center gap-4 overflow-hidden rounded-2xl border p-4 backdrop-blur-xl transition-colors duration-300 sm:p-5 ${
                    isOrange ? "border-orange-500/30" : "border-blue-500/30"
                  } bg-white/[0.035] hover:bg-white/[0.075]`}
                >
                  <span
                    data-card-glow
                    aria-hidden="true"
                    className={`pointer-events-none absolute -inset-12 -z-10 rounded-full opacity-80 blur-2xl transition-opacity ${
                      isOrange ? "bg-orange-500/15" : "bg-blue-500/15"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-70 ${
                      isOrange ? "via-orange-400" : "via-blue-400"
                    }`}
                  />
                  <div
                    data-card-icon
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${
                      isOrange
                        ? "bg-orange-500/10 text-orange-500"
                        : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-white sm:text-base">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-gray-400 sm:text-sm">
                      {item.desc}
                    </p>
                  </div>

                  <div className="hidden items-center gap-3 border-l border-white/10 pl-3 sm:flex">
                    <span className="text-xs text-gray-500">{item.number}</span>
                    <FaArrowRight
                      data-card-arrow
                      className={`h-4 w-4 ${
                        isOrange ? "text-orange-500" : "text-blue-500"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseTwo;
