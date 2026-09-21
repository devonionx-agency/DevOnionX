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

// Resting 3D tilt for the mockup.
const TILT_X = 6;
const TILT_Y = -3;

export default function FeaturedWorkCard({ project }) {
  const cardRef = useRef(null);
  const mockupRef = useRef(null);

  useGSAP(
    (context) => {
      const card = cardRef.current;
      const mockup = mockupRef.current;

      if (!card || !mockup) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop:
            "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (matchContext) => {
          const { reduced, isDesktop } = matchContext.conditions;

          // Resting 3D position.
          gsap.set(mockup, {
            transformPerspective: 1200,
            transformOrigin: "50% 100%",
            rotateX: TILT_X,
            rotateY: TILT_Y,
          });

          if (reduced) {
            gsap.set(
              card.querySelectorAll(
                ".work-card__badge, .work-card__reveal, .work-card__tech-item",
              ),
              {
                clearProps: "all",
              },
            );

            return;
          }

          const badge = card.querySelector(".work-card__badge");
          const revealElements = card.querySelectorAll(".work-card__reveal");
          const techItems = card.querySelectorAll(".work-card__tech-item");
          const cta = card.querySelector(".work-card__cta");

          const tl = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              once: true,
            },
          });

          tl.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.9,
          })
            .from(
              mockup,
              {
                opacity: 0,
                y: 40,
                rotateX: TILT_X + 22,
                rotateY: TILT_Y - 7,
                scale: 0.92,
                duration: 1.1,
                ease: "power4.out",
              },
              "-=0.6",
            )
            .from(
              badge,
              {
                opacity: 0,
                y: -10,
                scale: 0.85,
                duration: 0.5,
              },
              "-=0.7",
            )
            .from(
              revealElements,
              {
                opacity: 0,
                y: 18,
                duration: 0.6,
                stagger: 0.08,
              },
              "-=0.5",
            )
            .from(
              techItems,
              {
                opacity: 0,
                y: 12,
                duration: 0.4,
                stagger: 0.045,
              },
              "-=0.35",
            )
            .from(
              cta,
              {
                opacity: 0,
                y: 20,
                duration: 0.6,
              },
              "-=0.25",
            );

          // Desktop-only cursor tilt.
          if (isDesktop) {
            let xTo;
            let yTo;

            // Cursor tweens are kept outside the GSAP context.
            context.ignore(() => {
              xTo = gsap.quickTo(mockup, "rotateY", {
                duration: 0.6,
                ease: "power3.out",
              });

              yTo = gsap.quickTo(mockup, "rotateX", {
                duration: 0.6,
                ease: "power3.out",
              });
            });

            const handleMove = (event) => {
              const rect = card.getBoundingClientRect();

              if (!rect.width || !rect.height) return;

              const px = (event.clientX - rect.left) / rect.width - 0.5;

              const py = (event.clientY - rect.top) / rect.height - 0.5;

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

              if (xTo?.tween) {
                xTo.tween.kill();
              }

              if (yTo?.tween) {
                yTo.tween.kill();
              }

              gsap.killTweensOf(mockup);
            };
          }
        },
      );

      return () => {
        mm.revert();
      };
    },
    {
      scope: cardRef,
      dependencies: [],
    },
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
