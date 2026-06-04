"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import WhyChooseCard from "../ui/WhyChooseCard";
import WhyChooseVisual from "../ui/WhyChooseVisual";
import { features } from "@/helper/whychoos";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChoose() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const visualRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      gsap.from(visualRef.current, {
        opacity: 0,
        x: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visualRef.current,
          start: "top 85%",
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#02090F]">
      <div className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <Container size="lg">
        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div ref={headerRef}>
            <SectionHeader
              label="Why Choose Devonionx"
              text="We build digital experiences that move businesses forward"
              colorWord="businesses forward"
              className="text-left"
            />

            <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
              We build digital experiences that move businesses forward. By
              combining strategy, design, and engineering, we create products
              that are fast, reliable, and built to support long-term growth.
            </p>
          </div>

          <div ref={visualRef}>
            <WhyChooseVisual />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => {
            return <WhyChooseCard key={feature.id} feature={feature} />;
          })}
        </div>
      </Container>
    </section>
  );
}
