"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import SERVICES from "@/helper/home/servicesHome";


gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ------------------------------------------------------------------ */
/* EDIT HERE: stacking setup (desktop only)                            */
/* STACK_TOP  = distance from viewport top where the first card pins   */
/*              (set to your fixed navbar height + a little breathing) */
/* STACK_STEP = how much of each covered card peeks out above the next */
/* ------------------------------------------------------------------ */
const STACK_TOP = 88;
const STACK_STEP = 18;
const COVERED_SCALE = 0.95;

export default function ServicesHome() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop only: >= 768px (Tailwind md), enough viewport height for a pinned card, motion allowed.
      // Anything else (mobile, short screens, reduced motion) gets no GSAP at all, just the normal layout.
      mm.add(
        "(min-width: 768px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.from("[data-head]", {
            opacity: 0,
            y: 28,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-head]",
              start: "top 85%",
              once: true,
            },
          });

          const items = gsap.utils.toArray("[data-service-item]");
          const pinTop = (i) => STACK_TOP + i * STACK_STEP;
          const lastIndex = items.length - 1;

          items.forEach((item, i) => {
            const card = item.querySelector("[data-service-row]");

            // Content reveal when the card slides into view.
            gsap
              .timeline({
                defaults: { ease: "power3.out" },
                scrollTrigger: { trigger: item, start: "top 80%", once: true },
              })
              .from(item.querySelectorAll("[data-reveal='text']"), {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.08,
              })
              .from(
                item.querySelector("[data-reveal='image']"),
                { opacity: 0, scale: 1.08, duration: 1.1 },
                "-=0.7",
              );

            if (i === lastIndex) return;

            // Pin this card at its own offset. It stays pinned until the LAST card reaches its slot,
            // so every later card slides up over it. pinSpacing is off because the next cards are
            // already in the normal flow right after this one (no fake spacers needed).
            ScrollTrigger.create({
              trigger: item,
              start: `top ${pinTop(i)}px`,
              endTrigger: items[lastIndex],
              end: `top ${pinTop(lastIndex)}px`,
              pin: true,
              pinSpacing: false,
              anticipatePin: 1,
            });

            // Depth: while the next card travels up to its slot, this card settles back slightly.
            gsap.to(card, {
              scale: COVERED_SCALE,
              transformOrigin: "50% 0%",
              ease: "none",
              scrollTrigger: {
                trigger: items[i + 1],
                start: "top bottom",
                end: `top ${pinTop(i + 1)}px`,
                scrub: true,
              },
            });
          });
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="overflow-x-clip bg-[#F5F5F2] pt-16 md:pt-24 lg:pt-28"
    >
      <Container size="hero">
        <div data-head>
          <SectionHeader
            label="OUR SERVICES"
            text="Web Systems Engineering"
            colorWord="Engineering"
            description="From custom websites to scalable web platforms, we build reliable digital experiences tailored to your business needs, with a focus on performance, security, and long-term growth."
          />
        </div>

        <ol className="mt-10 flex list-none flex-col gap-4 p-0 md:mt-14 md:gap-0">
          {SERVICES.map((service, index) => (
            <li
              key={service.id}
              data-service-item
              style={{ zIndex: index + 1 }}
              className={`relative ${index === 0 ? "" : "md:-mt-14"}`}
            >
              <ServiceCard
                number={service.number}
                category={service.category}
                heading={service.heading}
                description={service.description}
                tags={service.tags}
                image={service.image}
                href={service.href}
                tone={service.tone}
                isLast={index === SERVICES.length - 1}
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
