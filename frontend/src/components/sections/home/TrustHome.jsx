"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import TrustCard from "@/components/ui/home/TrustCard.jsx";
import { trustCards, trustIntro } from "@/helper/home/trustgrowth";
import SectionHeader from "@/components/ui/SectionHeader";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TrustHome = () => {
  const rootRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Reduced-motion on thakle kono animation nai, card gula shorashori dekha jabe
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-trust-card]", {
          autoAlpha: 0,
          y: 16,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          clearProps: "all",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="trust"
      aria-labelledby="trust-heading"
      className="overflow-x-clip bg-[#F5F5F2] py-20 lg:py-28"
    >
      <Container size="hero">
        {/* Heading: desktop e left e heading, right e description */}
        <SectionHeader
              label="TRUST & GROWTH"
              text="Built Around Your Business"
              colorWord="Business"
            />

        <ul
          ref={gridRef}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5"
        >
          {trustCards.map((item) => (
            <TrustCard key={item.id} item={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TrustHome;
