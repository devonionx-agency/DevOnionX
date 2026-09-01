"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  HiArrowRight,
  HiArrowUpRight,
  HiOutlineSquares2X2,
  HiOutlineDocumentText,
} from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

// Resting 3D tilt for the mockup — the permanent "floating dashboard" look.
// Set via gsap.set() (not plain CSS) so .from() tweens interpolate back to
// THIS instead of resetting to a flat 0deg once the reveal finishes.
const TILT_X = 6;
const TILT_Y = -3;

export default function FeaturedWorkCard({ project }) {
  const cardRef = useRef(null);
  const mockupRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduced, isDesktop } = context.conditions;

          // Resting tilt applies always — it's a static look, not motion,
          // so it isn't skipped for prefers-reduced-motion.
          gsap.set(mockupRef.current, {
            transformPerspective: 1200,
            transformOrigin: "50% 100%",
            rotateX: TILT_X,
            rotateY: TILT_Y,
          });

          if (reduced) {
            gsap.set(
              [".work-card__badge", ".work-card__reveal", ".work-card__tech-item"],
              { clearProps: "all" }
            );
            return;
          }

          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 82%",
              once: true,
            },
          });

          tl.from(cardRef.current, { opacity: 0, y: 50, duration: 0.9 })
            .from(
              mockupRef.current,
              {
                opacity: 0,
                y: 40,
                rotateX: TILT_X + 22,
                rotateY: TILT_Y - 7,
                scale: 0.92,
                duration: 1.1,
                ease: "power4.out",
              },
              "-=0.6"
            )
            .from(
              ".work-card__badge",
              { opacity: 0, y: -10, scale: 0.85, duration: 0.5 },
              "-=0.7"
            )
            .from(
              ".work-card__reveal",
              { opacity: 0, y: 18, duration: 0.6, stagger: 0.08 },
              "-=0.5"
            )
            .from(
              ".work-card__tech-item",
              { opacity: 0, y: 12, duration: 0.4, stagger: 0.045 },
              "-=0.35"
            )
            .from(".work-card__cta", { opacity: 0, y: 20, duration: 0.6 }, "-=0.25");

          // Desktop-only cursor tilt — tilts AROUND the resting angle, not
          // back to zero, so it never fights the permanent 3D look.
          if (isDesktop) {
            const card = cardRef.current;
            const xTo = gsap.quickTo(mockupRef.current, "rotateY", {
              duration: 0.6,
              ease: "power3.out",
            });
            const yTo = gsap.quickTo(mockupRef.current, "rotateX", {
              duration: 0.6,
              ease: "power3.out",
            });

            const handleMove = (e) => {
              const rect = card.getBoundingClientRect();
              const px = (e.clientX - rect.left) / rect.width - 0.5;
              const py = (e.clientY - rect.top) / rect.height - 0.5;
              xTo(TILT_Y + px * 10);
              yTo(TILT_X + py * -8);
            };
            const handleLeave = () => {
              xTo(TILT_Y);
              yTo(TILT_X);
            };

            card.addEventListener("mousemove", handleMove);
            card.addEventListener("mouseleave", handleLeave);

            return () => {
              card.removeEventListener("mousemove", handleMove);
              card.removeEventListener("mouseleave", handleLeave);
            };
          }
        }
      );

      return () => mm.revert();
    },
    { scope: cardRef, dependencies: [] }
  );

  const words = project.title.trim().split(" ");
  const lastWord = words.pop();
  const leadingWords = words.join(" ");

  return (
    <article ref={cardRef} className="work-card group relative flex flex-col">
      <div className="work-card__ambient" />

      <div className="work-card__preview">
        <span className="work-card__badge">
          <span className="work-card__badge-icon">
            <HiOutlineSquares2X2 />
          </span>
          <span className="work-card__badge-text">{project.category}</span>
        </span>

        <div ref={mockupRef} className="work-card__mockup">
          <div className="work-card__mockup-frame relative aspect-[16/10]">
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

      <div className="work-card__content flex flex-1 flex-col">
        <div className="work-card__heading flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="work-card__eyebrow work-card__reveal block">
              {project.category}
            </span>
            <h3 className="work-card__title work-card__reveal headingFour">
              {leadingWords && <>{leadingWords} </>}
              <span className="text-brand">{lastWord}</span>
            </h3>
          </div>

          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} case study`}
            className="work-card__arrow-btn work-card__reveal"
          >
            <HiArrowUpRight className="text-xl" />
          </Link>
        </div>

        <p className="work-card__desc work-card__reveal para-base mt-4">
          {project.description}
        </p>

        <div className="work-card__divider work-card__reveal" />

        <div className="work-card__tech-label work-card__reveal">
          <span className="dot" />
          Technology Stack
          <span className="dash" />
        </div>

        <div className="work-card__tech-grid">
          {project.technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.name} className="work-card__tech-item">
                <Icon />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>

        <div className="work-card__cta mt-auto">
          <span className="work-card__cta-icon">
            <HiOutlineDocumentText className="text-xl" />
          </span>
          <div className="work-card__cta-text">
            <p className="work-card__cta-title">Want to see it in action?</p>
            <p className="work-card__cta-desc">
              Explore the full case study to see how {project.title} can
              transform your business.
            </p>
          </div>
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-schedule"
          >
            <span>View Case Study</span>
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
}
