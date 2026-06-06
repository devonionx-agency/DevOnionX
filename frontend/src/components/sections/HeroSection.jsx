"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Container from "../ui/Container";
import ParticlesBackground from "../ui/ParticlesBackground";
import OrbitRing from "../ui/OrbitRing";
import DashboardCard from "../ui/DashboardCard";
import CRMCard from "../ui/CRMCard";
import { ArrowRight } from "lucide-react";
import { stats } from "@/helper/herohelper";

export default function HomeSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      gsap.from(".hero-title", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.1,
      });

      gsap.from(".hero-text", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
      });

      gsap.from(".hero-btns", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
      });

      gsap.from(".dashboard-card", {
        opacity: 0,
        x: 100,
        duration: 1,
      });

      gsap.from(".crm-card", {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: 0.3,
      });

      gsap.to(".dashboard-card", {
        y: -12,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "power1.inOut",
      });

      gsap.to(".crm-card", {
        y: -5,
        repeat: -1,
        yoyo: true,
        duration: 3.5,
        ease: "power1.inOut",
        delay:1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Desktop Only Particles */}
      <div className="hidden lg:block">
        <ParticlesBackground />
      </div>

      {/* Glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] lg:h-[700px] lg:w-[700px] rounded-full bg-[#FF5101]/20 blur-[120px]" />

      <Container
        size="hero"
        className="relative z-10 lg:min-h-screen flex items-center"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center py-8 lg:py-24 w-full">
          {/* LEFT */}
          <div className="max-w-2xl">
            <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-[#FF5101]/20 bg-[#FF5101]/10 px-4 py-2 text-xs sm:text-sm text-[#FF5101]">
              <span className="h-2 w-2 rounded-full bg-[#FF5101]" />
              Digital Products. Engineered To Scale.
            </div>

            <h1 className="hero-title pt-6 lg:mt-8 headingOne">
              Building Digital Products That
              <br />
              <span className="bg-gradient-to-r from-[#FF5101] via-orange-300 to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                Move Businesses Forward.
              </span>
            </h1>

            <p className="hero-text mt-6 lg:mt-8 max-w-3xl text-base sm:text-lg text-zinc-400 leading-relaxed">
              We help ambitious startups and businesses build scalable digital
              products and experiences that drive measurable growth.
            </p>

            <div className="hero-btns mt-8 lg:mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-full bg-[#FF5101] px-6 py-3 lg:px-7 lg:py-4 font-medium">
                Start Project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <ArrowRight size={18} />
                </span>
              </button>

              <button className="flex items-center gap-2 text-white">
                View Work
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Desktop Visual Only */}
          <div className="hidden lg:block relative h-[720px]">
            <OrbitRing />

            <div className="dashboard-card absolute right- -top-5 z-20">
              <DashboardCard />
            </div>

            <div className="crm-card absolute -right-15 bottom-10 z-20">
              <CRMCard />
            </div>

            {/* <div className="absolute left-[45%] top-[70%] z-30 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-[#FF5101]/20 bg-black shadow-[0_0_60px_rgba(255,81,1,.4)]">
              <span className="text-5xl font-bold text-[#FF5101]">X</span>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
