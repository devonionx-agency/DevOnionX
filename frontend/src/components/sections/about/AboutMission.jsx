"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VALUES,FlameIcon,ShieldIcon,ZapIcon,TargetIcon,MissionIcon,VisionIcon } from "@/helper/about";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);



/* ── GlowCard ── */
function GlowCard({ children, className = "" }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    ref.current.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:border-[#FF5101]/30 hover:-translate-y-1.5 transition-all duration-300"
      style={{ "--mx": "50%", "--my": "50%" }}
    >
      {/* Mouse follow glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "radial-gradient(380px circle at var(--mx) var(--my), rgba(255,81,1,0.07), transparent 60%)" }}
      />
      {/* Top shine */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-[#FF5101]/60 to-transparent" />
      {/* Corner glow */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full blur-[50px] bg-[#FF5101]/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={className}>{children}</div>
    </div>
  );
}

export default function AboutMission() {
  const missionRef = useRef(null);
  const visionRef  = useRef(null);
  const valuesRef  = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    const ctx = gsap.context(() => {

      gsap.fromTo(missionRef.current,
        { opacity: 0, x: isMobile ? 0 : -40 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: isMobile ? "top 92%" : "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(visionRef.current,
        { opacity: 0, x: isMobile ? 0 : 40 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: isMobile ? "top 92%" : "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        Array.from(valuesRef.current.children),
        { opacity: 0, y: isMobile ? 18 : 28 },
        {
          opacity: 1, y: 0, duration: 0.75, ease: "power3.out", stagger: 0.1,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: isMobile ? "top 92%" : "top 87%",
            toggleActions: "play none none reverse",
          },
        }
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#050505] py-28 relative overflow-hidden">

      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,81,1,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/20 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] bg-[#FF5101]/[0.05]" />
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-40 w-[400px] h-[400px] rounded-full blur-[140px] bg-violet-500/[0.05]" />

      <Container size="xl">

        <SectionHeader
          label="Mission & Vision"
          text="Why We Do What We Do"
          colorWord="What We Do"
          className="mb-16"
        />

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

          {/* Mission */}
          <div
            ref={missionRef}
            className="relative rounded-2xl p-10 overflow-hidden border border-[#FF5101]/20 bg-gradient-to-br from-[#FF5101]/[0.08] to-[#FF5101]/[0.02]"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/60 to-transparent" />
            <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full blur-[80px] bg-[#FF5101]/10" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[#FF5101] bg-[#FF5101]/10 border border-[#FF5101]/25 mb-8">
                <MissionIcon />
              </div>
              <span className="block text-[11px] font-bold tracking-[3px] uppercase text-[#FF5101] mb-4">
                Our Mission
              </span>
              <h3
                className="font-bold text-white mb-5"
                style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.2 }}
              >
                To build digital products that actually move businesses forward.
              </h3>
              <p className="text-[15px] text-[#94a3b8] leading-[1.8]">
                We exist to bridge the gap between ambitious ideas and
                world-class execution. Every project we take on is a chance
                to prove that great software can transform a business — and
                we treat it that way.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div
            ref={visionRef}
            className="relative rounded-2xl p-10 overflow-hidden border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.08] to-violet-500/[0.02]"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
            <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full blur-[80px] bg-violet-500/10" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-violet-400 bg-violet-500/10 border border-violet-500/25 mb-8">
                <VisionIcon />
              </div>
              <span className="block text-[11px] font-bold tracking-[3px] uppercase text-violet-400 mb-4">
                Our Vision
              </span>
              <h3
                className="font-bold text-white mb-5"
                style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.2 }}
              >
                To become the most trusted digital partner for growing businesses.
              </h3>
              <p className="text-[15px] text-[#94a3b8] leading-[1.8]">
                We're building toward a future where every ambitious startup
                has access to the same caliber of engineering and design that
                used to be reserved only for the biggest companies in the world.
              </p>
            </div>
          </div>

        </div>

        {/* Values grid */}
        <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map((v) => (
            <GlowCard key={v.title} className="p-7">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#FF5101] bg-[#FF5101]/10 border border-[#FF5101]/15 mb-5">
                  {v.icon}
                </div>
                <h4 className="text-[15px] font-semibold text-white mb-3 leading-snug">{v.title}</h4>
                <p className="text-[13px] text-[#94a3b8] leading-[1.7]">{v.body}</p>
              </div>
            </GlowCard>
          ))}
        </div>

      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/20 to-transparent" />
    </section>
  );
}