"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Container from "../ui/Container";
import ParticlesBackground from "../ui/ParticlesBackground";
import DashboardCard from "../ui/DashboardCard";
import CRMCard from "../ui/CRMCard";
import { ArrowRight } from "lucide-react";
import DirectionalButton from "../common/Directionalbutton";

export default function HomeSection() {
  const heroRef = useRef(null);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    // delay particles load (reduce initial GPU spike)
    const t = setTimeout(() => {
      setShowParticles(true);
    }, 500);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      //  ONE timeline only (important)
      const tl = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "power3.out",
        },
      });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 30,
          },
          "-=0.5",
        )
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 20,
          },
          "-=0.4",
        )
        .from(
          ".hero-btns",
          {
            opacity: 0,
            y: 20,
          },
          "-=0.4",
        )
        .from(
          ".dashboard-card",
          {
            opacity: 0,
            x: 50,
          },
          "-=0.6",
        )
        .from(
          ".crm-card",
          {
            opacity: 0,
            y: 50,
          },
          "-=0.5",
        );

      // GPU hint only (NO infinite animation)
      gsap.set([".dashboard-card", ".crm-card"], {
        willChange: "transform",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Lazy particles (no initial GPU load) */}
      <div className="hidden lg:block">
        {showParticles && <ParticlesBackground />}
      </div>

      {/* Glow (keep static = good for GPU) */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] lg:h-[700px] lg:w-[700px] rounded-full bg-[#FF5101]/20 blur-[120px]" />

      <Container
        size="hero"
        className="relative z-10 lg:min-h-screen flex items-center"
      >
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-2 gap-12 lg:gap-6 xl:gap-10 items-center py-8 lg:py-24 w-full">
          {/* LEFT */}
          <div className="max-w-2xl">
            <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-[#FF5101]/20 bg-[#FF5101]/10 px-4 py-2 text-xs sm:text-sm text-[#FF5101] will-change-transform">
              <span className="h-2 w-2 rounded-full bg-[#FF5101]" />
              Digital Products. Engineered To Scale.
            </div>

            <h1 className="hero-title pt-6 lg:mt-8 headingOne will-change-transform">
              Building Digital Products That
              <br />
              <span className="bg-gradient-to-r from-[#FF5101] via-orange-300 to-white bg-clip-text text-transparent animate-gradient">
                Move Businesses Forward.
              </span>
            </h1>

            <p className="hero-text mt-6 lg:mt-8 max-w-[600px] text-base sm:text-[18px] xl:text-[16px] text-white/80 leading-relaxed will-change-transform">
              We help ambitious startups and businesses build scalable digital
              products and experiences that drive measurable growth.
            </p>

            <div className="hero-btns mt-8 lg:mt-10 flex flex-wrap gap-4 will-change-transform">
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

          {/* RIGHT VISUAL */}
          <div className="hidden lg:block relative h-[600px] xl:h-[720px]">
            <div className="dashboard-card absolute -top-5 -right-5 z-20 will-change-transform scale-[0.65] xl:scale-100 origin-top-right">
              <DashboardCard />
            </div>
            <div className="crm-card absolute top-0 right-[240px] xl:right-[320px] z-10 will-change-transform scale-[0.65] xl:scale-100 origin-top-right">
              <CRMCard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
