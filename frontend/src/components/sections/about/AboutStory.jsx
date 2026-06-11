"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { STATS,PILLARS } from "@/helper/about";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);



function GlowCard({ children, className = "", style = {} }) {
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
      className={`group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(255,81,1,0.3)] hover:-translate-y-1.5 transition-all duration-300 ${className}`}
      style={{ "--mx": "50%", "--my": "50%", ...style }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{ background: "radial-gradient(380px circle at var(--mx) var(--my), rgba(255,81,1,0.08), transparent 60%)" }}
      />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,81,1,0.6), transparent)" }}
      />
      {children}
    </div>
  );
}

export default function AboutStory() {
  const badgeRef   = useRef(null);
  const headingRef = useRef(null);
  const leftRef    = useRef(null);
  const rightRef   = useRef(null);
  const pillarRef  = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    const ctx = gsap.context(() => {

      /* Badge + heading */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: badgeRef.current,
          start: isMobile ? "top 92%" : "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      ).fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );

      /* Left block */
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: isMobile ? 0 : -50 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: isMobile ? "top 92%" : "top 83%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* Right block */
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: isMobile ? 0 : 50 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: isMobile ? "top 92%" : "top 83%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* Pillar cards */
      gsap.fromTo(
        Array.from(pillarRef.current.children),
        { opacity: 0, y: isMobile ? 18 : 32 },
        {
          opacity: 1, y: 0, duration: 0.75, ease: "power3.out", stagger: 0.12,
          scrollTrigger: {
            trigger: pillarRef.current,
            start: isMobile ? "top 92%" : "top 87%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* Progress bars */
      document.querySelectorAll(".stat-bar-fill").forEach((bar) => {
        const target = bar.dataset.width;
        gsap.fromTo(bar,
          { width: "0%" },
          {
            width: `${target}%`, duration: 1.2, ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#0a0a0a] py-28 relative overflow-hidden">

      {/* Background decorations */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,81,1,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,81,1,0.25), transparent)" }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] bg-[#FF5101]/[0.05]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] bg-violet-500/[0.04]" />

      <Container size="xl">

        {/* Heading */}
        <div className="text-center mb-20">
          <div ref={badgeRef}>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[3px] uppercase text-[#FF5101] border border-[rgba(255,81,1,0.25)] bg-[rgba(255,81,1,0.07)] rounded-full px-5 py-2.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5101] animate-pulse" />
              Our Story
            </span>
          </div>
          <h2
            ref={headingRef}
            className="font-bold text-white"
            style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.05, letterSpacing: "-1px" }}
          >
            Where It{" "}
            <span style={{
              background: "linear-gradient(to right, #FF5101, #ec4899, #8b5cf6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>
              All Began
            </span>
          </h2>
        </div>

        {/* Two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">

          {/* Left */}
          <div ref={leftRef}>
            <p className="text-[18px] text-[#cbd5e1] leading-[1.85] mb-5">
              DevonionX was founded by a group of 5 developers and designers
              who shared one belief — that{" "}
              <span className="text-white font-semibold">
                great digital products change businesses.
              </span>
            </p>
            <p className="text-[15px] text-[#94a3b8] leading-[1.85] mb-5">
              We started small, working late nights on projects we cared about.
              Over time, the results spoke louder than any pitch deck ever could.
              Clients came back. Referrals poured in. The agency grew — but the
              obsession never changed.
            </p>
            <p className="text-[15px] text-[#94a3b8] leading-[1.85] mb-10">
              Today we're a lean, focused team shipping products that scale.
              No fluff. No bloat. Just clean systems built to grow with you.
            </p>

            {/* Founded badge */}
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-12 bg-[#FF5101]" />
              <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#FF5101]">
                Founded 2026
              </span>
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className="flex flex-col gap-4">

            {/* Stat card */}
            <div className="relative rounded-2xl border border-[rgba(255,81,1,0.2)] bg-[#111] p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,81,1,0.6), transparent)" }}
              />
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] bg-[#FF5101]/[0.1]" />

              <div className="relative z-10">
                <p className="text-[11px] font-bold tracking-[3px] uppercase text-[#FF5101] mb-7">
                  Since Day One
                </p>
                <div className="flex flex-col gap-6">
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-[13px] text-[#94a3b8]">{s.label}</span>
                        <span
                          className="text-[20px] font-bold"
                          style={{
                            background: "linear-gradient(135deg, #FF5101, #ff8a4c)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          {s.value}
                        </span>
                      </div>
                      <div className="h-[3px] rounded-full bg-[rgba(255,81,1,0.1)] overflow-hidden">
                        <div
                          className="stat-bar-fill h-full rounded-full"
                          data-width={s.bar}
                          style={{ width: "0%", background: "linear-gradient(to right, #FF5101, #ff8a4c)" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Founded card */}
            

          </div>
        </div>

        {/* Three pillars */}
        <div ref={pillarRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PILLARS.map((p) => (
            <GlowCard key={p.number} className="p-8">
              <div className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full blur-[50px] bg-[#FF5101]/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[38px] font-bold leading-none select-none"
                    style={{
                      background: "linear-gradient(135deg, #FF5101, rgba(255,81,1,0.15))",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {p.number}
                  </span>
                  <span className="text-2xl">{p.icon}</span>
                </div>
                <h3 className="text-[17px] font-semibold text-white mb-3 leading-snug">{p.title}</h3>
                <p className="text-[13px] text-[#94a3b8] leading-[1.75]">{p.body}</p>
              </div>
            </GlowCard>
          ))}
        </div>

      </Container>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,81,1,0.2), transparent)" }}
      />
    </section>
  );
}