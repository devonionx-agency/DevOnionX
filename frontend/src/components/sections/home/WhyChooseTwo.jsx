"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Headphones,
  MessagesSquare,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import BannerImage from "../../../../public/images/whychoose/whyChooseTwo.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const chooseCards = [
  {
    icon: Target,
    title: "Business-First",
    description: "We focus on your goals, not just code.",
    number: "01",
    accent: "#8b5cf6",
  },
  {
    icon: Code2,
    title: "Modern Engineering",
    description: "Clean, scalable and maintainable code.",
    number: "02",
    accent: "#a855f7",
  },
  {
    icon: MessagesSquare,
    title: "Direct Communication",
    description: "Talk with the actual builders.",
    number: "03",
    accent: "#38bdf8",
  },
  {
    icon: Zap,
    title: "Fast & Focused",
    description: "Small team, faster decisions.",
    number: "04",
    accent: "#60a5fa",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description: "Clear updates at every step.",
    number: "05",
    accent: "#c084fc",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description: "We stay with you even after launch.",
    number: "06",
    accent: "#5eead4",
  },
];

function WhyChooseCard({ item }) {
  const Icon = item.icon;

  return (
    <article
      className="why-choose-card group relative min-h-[210px] overflow-hidden rounded-[10px] border border-white/15 bg-[#0b1022]/70 p-5 outline-none backdrop-blur-xl transition-colors duration-300 [--glow-x:50%] [--glow-y:0%] focus-brand:border-white/50 sm:min-h-[230px] lg:min-h-[245px]"
      style={{ "--accent": item.accent }}
      tabIndex={0}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-brand:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--glow-x) var(--glow-y), color-mix(in srgb, var(--accent) 38%, transparent), transparent 38%)",
        }}
        aria-hidden="true"
      />

      <span
        className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-brand:opacity-100"
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,.22), 0 0 36px color-mix(in srgb, var(--accent) 34%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div
          className="mb-9 grid size-12 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white shadow-[0_0_24px_rgba(139,92,246,.35)] transition-transform duration-300 group-hover:scale-105"
          style={{
            color: item.accent,
            background:
              "radial-gradient(circle at 35% 30%, rgba(255,255,255,.22), color-mix(in srgb, var(--accent) 22%, transparent) 42%, rgba(255,255,255,.04))",
          }}
        >
          <Icon size={24} strokeWidth={1.9} aria-hidden="true" />
        </div>

        <h3 className="text-[16px] font-bold leading-tight text-white sm:text-[17px]">
          {item.title}
        </h3>

        <span
          className="mt-3 h-[2px] w-5 rounded-full transition-all duration-300 group-hover:w-9"
          style={{ backgroundColor: item.accent }}
          aria-hidden="true"
        />

        <p className="mt-4 max-w-[170px] text-[13px] leading-5 text-white/66 sm:text-sm">
          {item.description}
        </p>

        <span className="absolute bottom-[-12px] right-[-12px] text-[26px] font-bold leading-none text-white/[0.05] transition-colors duration-300 group-hover:text-white/[0.09]">
          {item.number}
        </span>
      </div>
    </article>
  );
}

const WhyChooseTwo = () => {
  const sectionRef = useRef(null);

  useGSAP(
    (context) => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const cards = gsap.utils.toArray(".why-choose-card", sectionRef.current);

      if (!cards.length) {
        return;
      }

      if (reduceMotion) {
        gsap.set(cards, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
        });

        return;
      }

      gsap.set(cards, {
        autoAlpha: 0,
        y: 54,
        scale: 0.94,
        rotateX: 12,
        rotateY: 0,
        transformPerspective: 900,
        transformOrigin: "50% 70%",
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
        onComplete: () => {
          gsap.set(cards, {
            clearProps: "willChange",
          });
        },
      });

      tl.set(cards, {
        willChange: "transform, opacity",
      });

      tl.to(cards, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 0.9,
        stagger: {
          each: 0.08,
          from: "center",
        },
        ease: "back.out(1.25)",
      });

      /*
       * Pointer tilt is intentionally kept outside the GSAP context.
       *
       * useGSAP automatically reverts animations created inside its
       * context. quickTo() creates internal tweens that should instead
       * be manually killed during cleanup. Keeping these interactions
       * outside the context prevents the rotateX/rotateY reset warnings.
       */
      const pointerCleanups = [];

      context.ignore(() => {
        cards.forEach((card) => {
          let rect = card.getBoundingClientRect();
          let rafId = null;

          let pendingX = 0.5;
          let pendingY = 0.5;
          let isPointerInside = false;

          const rotateXTo = gsap.quickTo(card, "rotateX", {
            duration: 0.42,
            ease: "power3.out",
          });

          const rotateYTo = gsap.quickTo(card, "rotateY", {
            duration: 0.42,
            ease: "power3.out",
          });

          const yTo = gsap.quickTo(card, "y", {
            duration: 0.42,
            ease: "power3.out",
          });

          const updatePointer = () => {
            rafId = null;

            if (!isPointerInside) {
              return;
            }

            rotateYTo((pendingX - 0.5) * 12);
            rotateXTo((0.5 - pendingY) * 12);
            yTo(-10);

            card.style.setProperty("--glow-x", `${pendingX * 100}%`);

            card.style.setProperty("--glow-y", `${pendingY * 100}%`);
          };

          const onEnter = () => {
            rect = card.getBoundingClientRect();
            isPointerInside = true;

            card.style.setProperty("will-change", "transform");
          };

          const onMove = (event) => {
            if (!isPointerInside) {
              return;
            }

            pendingX = (event.clientX - rect.left) / rect.width;
            pendingY = (event.clientY - rect.top) / rect.height;

            pendingX = Math.max(0, Math.min(1, pendingX));
            pendingY = Math.max(0, Math.min(1, pendingY));

            if (rafId === null) {
              rafId = window.requestAnimationFrame(updatePointer);
            }
          };

          const onLeave = () => {
            isPointerInside = false;

            if (rafId !== null) {
              window.cancelAnimationFrame(rafId);
              rafId = null;
            }

            rotateXTo(0);
            rotateYTo(0);
            yTo(0);

            card.style.setProperty("--glow-x", "50%");
            card.style.setProperty("--glow-y", "0%");

            card.style.removeProperty("will-change");
          };

          const onResize = () => {
            if (!isPointerInside) {
              return;
            }

            rect = card.getBoundingClientRect();
          };

          card.addEventListener("pointerenter", onEnter);
          card.addEventListener("pointermove", onMove);
          card.addEventListener("pointerleave", onLeave);
          window.addEventListener("resize", onResize);

          pointerCleanups.push(() => {
            card.removeEventListener("pointerenter", onEnter);
            card.removeEventListener("pointermove", onMove);
            card.removeEventListener("pointerleave", onLeave);
            window.removeEventListener("resize", onResize);

            if (rafId !== null) {
              window.cancelAnimationFrame(rafId);
              rafId = null;
            }

            isPointerInside = false;

            /*
             * Kill the quickTo tweens directly instead of creating
             * new tweens during React/GSAP cleanup.
             */
            rotateXTo.tween?.kill();
            rotateYTo.tween?.kill();
            yTo.tween?.kill();

            card.style.removeProperty("will-change");
            card.style.setProperty("--glow-x", "50%");
            card.style.setProperty("--glow-y", "0%");
          });
        });
      });

      return () => {
        pointerCleanups.forEach((cleanup) => cleanup());
      };
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#030611] py-12 sm:py-16 xl:py-[92px]"
    >
      <Image
        src={BannerImage}
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="pointer-events-none -z-20 object-cover opacity-70"
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,.28),transparent_33%),linear-gradient(180deg,rgba(3,6,17,.38),rgba(3,6,17,.95)_88%)]" />

      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <Container size="hero">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            label="WHY BUSINESSES CHOOSE US"
            text="Why Businesses Choose DevonionX"
            colorWord="DevonionX"
            description="A partner who cares about your success."
            className="mb-6 sm:mb-9"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {chooseCards.map((item) => (
              <WhyChooseCard key={item.number} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseTwo;
