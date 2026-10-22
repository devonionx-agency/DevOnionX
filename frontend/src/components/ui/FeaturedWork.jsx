"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HiArrowUpRight, HiOutlineSquares2X2 } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

// Resting 3D tilt for the mockup.
const TILT_X = 6;
const TILT_Y = -3;

export default function FeaturedWorkCard({ project }) {
  const cardRef = useRef(null);
  const mockupRef = useRef(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      const mockup = mockupRef.current;
      if (!card || !mockup) return;

      const mm = gsap.matchMedia();

      // Conditions cover every case, so setup runs on mobile too.
      mm.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          canHover:
            "(min-width: 768px) and (hover: hover) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const { reduced, canHover } = ctx.conditions;

          // Resting 3D position.
          gsap.set(mockup, {
            transformPerspective: 1200,
            transformOrigin: "50% 100%",
            rotateX: TILT_X,
            rotateY: TILT_Y,
          });

          if (reduced) return;

          const badge = card.querySelector(".wc-badge");
          const reveal = card.querySelectorAll(".wc-reveal");

          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: card, start: "top 82%", once: true },
          });

          tl.from(card, { opacity: 0, y: 40, duration: 0.8 })
            .from(
              mockup,
              {
                opacity: 0,
                y: 40,
                rotateX: TILT_X + 18,
                rotateY: TILT_Y - 6,
                duration: 1,
                ease: "power4.out",
              },
              "-=0.55",
            )
            .from(badge, { opacity: 0, y: -8, duration: 0.45 }, "-=0.7")
            .from(
              reveal,
              { opacity: 0, y: 16, duration: 0.55, stagger: 0.08 },
              "-=0.5",
            );

          // Desktop cursor tilt (quickTo tweens are reverted with matchMedia).
          let handleMove;
          let handleLeave;

          if (canHover) {
            const xTo = gsap.quickTo(mockup, "rotateY", {
              duration: 0.6,
              ease: "power3.out",
            });
            const yTo = gsap.quickTo(mockup, "rotateX", {
              duration: 0.6,
              ease: "power3.out",
            });

            handleMove = (event) => {
              const rect = card.getBoundingClientRect();
              if (!rect.width || !rect.height) return;
              const px = (event.clientX - rect.left) / rect.width - 0.5;
              const py = (event.clientY - rect.top) / rect.height - 0.5;
              xTo(TILT_Y + px * 10);
              yTo(TILT_X + py * -8);
            };

            handleLeave = () => {
              xTo(TILT_Y);
              yTo(TILT_X);
            };

            card.addEventListener("mousemove", handleMove);
            card.addEventListener("mouseleave", handleLeave);
          }

          return () => {
            if (handleMove) card.removeEventListener("mousemove", handleMove);
            if (handleLeave) card.removeEventListener("mouseleave", handleLeave);
          };
        },
      );

      return () => mm.revert();
    },
    { scope: cardRef, dependencies: [] },
  );

  return (
    <article
      ref={cardRef}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E4E7EE] bg-white shadow-[0_10px_40px_-20px_rgba(23,25,35,0.18)] transition-[box-shadow,border-color] duration-300 focus-within:ring-2 focus-within:ring-[#FF5101] focus-within:ring-offset-2 hover:border-[#FF5101]/30 hover:shadow-[0_24px_60px_-24px_rgba(23,25,35,0.28)]"
    >
      {/* ── Preview ── */}
      <div className="relative h-[240px] overflow-hidden border-b border-[#E4E7EE] bg-gradient-to-b from-[#EEF2F9] to-[#F6F8FC] px-6 pt-14 sm:h-[280px] sm:px-8">
        {/* soft grid + brand glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(23,25,35,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,25,35,0.05)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_50%_30%,black_20%,transparent_75%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,81,1,0.12),transparent_60%)]"
        />

        <span className="wc-badge absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-[#E4E7EE] bg-white px-3 py-1.5 text-xs font-medium text-[#171923] shadow-sm sm:left-5 sm:top-5">
          <HiOutlineSquares2X2 className="text-[#FF5101]" aria-hidden="true" />
          {project.category}
        </span>

        {/* Browser-style mockup, cropped at the bottom */}
        <div ref={mockupRef} className="relative mx-auto w-full max-w-[560px]">
          <div className="overflow-hidden rounded-t-xl border border-b-0 border-[#D8DCE6] bg-white shadow-[0_30px_60px_-20px_rgba(10,16,32,0.35)]">
            <div
              aria-hidden="true"
              className="flex h-7 items-center gap-1.5 border-b border-[#E4E7EE] bg-[#F6F8FC] px-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#D8DCE6]" />
              <span className="h-2 w-2 rounded-full bg-[#D8DCE6]" />
              <span className="h-2 w-2 rounded-full bg-[#D8DCE6]" />
            </div>

            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="wc-reveal headingFour min-w-0 leading-tight text-[#171923]">
            {project.title}
          </h3>

          {/* Stretched link: the whole card is clickable via the ::after overlay */}
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} case study`}
            className="wc-reveal flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E4E7EE] bg-white text-[#171923] transition-colors duration-200 after:absolute after:inset-0 after:content-[''] group-hover:border-[#FF5101] group-hover:bg-[#FF5101] group-hover:text-white focus-visible:outline-none"
          >
            <HiArrowUpRight className="text-lg" aria-hidden="true" />
          </Link>
        </div>

        <p className="wc-reveal para-base mt-3 max-w-[60ch] leading-relaxed text-[#5B6275]">
          {project.description}
        </p>
      </div>
    </article>
  );
}
