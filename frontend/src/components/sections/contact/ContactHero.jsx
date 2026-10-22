"use client";

import { useEffect, useRef } from "react";
import { FiArrowDownRight, FiArrowUpRight, FiMessageCircle } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

export default function ContactHero() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const grid = gridRef.current;

    if (!section || !intro || !grid) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        intro.children,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: intro,
            start: "top 88%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      gsap.fromTo(
        grid.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 86%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-white pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-28 lg:pt-32"
    >
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,81,1,0.13) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 75%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-orange-100/70 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[480px] -z-10 h-[340px] w-[340px] rounded-full bg-amber-50 blur-[100px]"
      />

      <Container size="xl">
        {/* Intro */}
        <div
          ref={introRef}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-4 py-2 shadow-[0_4px_18px_-12px_rgba(255,81,1,0.35)] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF5101]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#D94300] sm:text-[11px]">
                Available for new projects
              </span>
            </span>
          </div>

          <SectionHeader
            label="Contact Us"
            text="Let's Build Something Exceptional"
            colorWord="Exceptional"
            className="mb-5"
          />

          <p className="mx-auto max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Have an idea, a project, or a challenge to solve? Tell us what
            you're working on. Let's explore how we can make it happen.
          </p>

          <a
            href="#contact-form"
            className="group mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-50 hover:text-[#E74700] hover:shadow-[0_8px_20px_-14px_rgba(255,81,1,0.65)]"
          >
            <FiMessageCircle
              size={15}
              className="transition-transform duration-300 group-hover:rotate-[-8deg]"
            />
            Start a conversation
            <FiArrowDownRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
        </div>

        {/* Contact layout */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-6"
        >
          <div className="min-w-0 lg:col-span-4">
            <ContactInfo />
          </div>

          <div id="contact-form" className="min-w-0 scroll-mt-24 lg:col-span-8">
            <ContactForm />
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-5 sm:flex-row">
          <p className="text-center text-[11px] leading-5 text-slate-500 sm:text-left">
            Have a quick question? Reach out directly and let's talk.
          </p>

          <a
            href="mailto:devonionx@gmail.com"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 transition-colors hover:text-[#FF5101]"
          >
            Email us
            <FiArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
