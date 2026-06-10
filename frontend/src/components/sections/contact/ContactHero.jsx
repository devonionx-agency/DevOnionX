"use client";

import { contactSchema, defaultValues } from "./contact.schema";

import Input from "@/components/ui/Input";
import GlowCard from "@/components/ui/GlowCard";
import ContactForm from "./ContactForm";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTACT_INFO, SERVICES, BUDGETS } from "@/helper/contact";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

import React from "react";
import ContactInfo from "./ContactInfo";
import ServiceSelector from "./ServiceSelector";
import BudgetSelector from "./BudgetSelector";

export default function ContactHero() {
  const badgeRef = useRef(null);
  const gridRef = useRef(null);




  useEffect(() => {
    gsap.fromTo(
      badgeRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
    );

    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: isMobile ? 20 : 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: isMobile ? "top 92%" : "top 87%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#050505] pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Dot grid — backgroundImage + backgroundSize cannot be Tailwind */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,81,1,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[120px] bg-[#FF5101]/[0.09]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full blur-[100px] bg-violet-500/[0.07]" />

      <Container size="xl">
        {/* Badge */}
        <div ref={badgeRef} className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[3px] uppercase text-[#FF5101] border border-[#FF5101]/25 bg-[#FF5101]/[0.07] rounded-full px-5 py-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5101] animate-pulse" />
            Available For New Projects
          </span>
        </div>

        <SectionHeader
          label="Contact Us"
          text="Let's Build Something Exceptional"
          colorWord="Exceptional"
          className="mb-10 md:mb-14"
        />

        {/* Form Grid — gridTemplateColumns repeat(12,1fr) has no Tailwind equivalent */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* ── Left column ── */}
          {/* gridColumn span 4 of 12 has no Tailwind equivalent without config */}
          <ContactInfo />

          {/* ── Right column: form ── */}
          <ContactForm/>
        </div>
      </Container>
    </section>
  );
}
