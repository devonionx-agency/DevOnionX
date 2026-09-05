"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaRocket, FaSmile, FaBoxOpen, FaHandshake } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "@/styles/provesection.module.css";

import ProveBanner from "../../../../public/images/prove/prove-banner.png";
import ProjectImage from "../../../../public/images/prove/project.png";
import ClientImage from "../../../../public/images/prove/client.png";
import ProductionImage from "../../../../public/images/prove/prduction.png";
import LongTermImage from "../../../../public/images/prove/long.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// import Project from "../../../../public/images/prove/project.png"
// import Client from "../../../../public/images/prove/client.png"
// import Production from "../../../../public/images/prove/production.png"
// import Long from "../../../../public/images/prove/long.png"

// Data-driven — nothing below is hard-coded into the markup.
// `icon` is a component reference (react-icons), not a path, so it renders
// as inline SVG — no raster asset, no next/image needed for the badges.
// `value` is optional: cards with a hard number get the big stat line,
// cards that are more of a qualitative badge (Production / Long-Term) skip it.
const stats = [
  {
    icon: FaRocket,
    value: "3+",
    title: "Projects",
    description: "Delivered",
    accent: "orange",
    image: ProjectImage,
  },
  {
    icon: FaSmile,
    value: "100%",
    title: "Client",
    description: "Satisfaction",
    accent: "pink",
    image: ClientImage,
  },
  {
    icon: FaBoxOpen,
    title: "Production",
    description: "Ready Products",
    accent: "purple",
    image: ProductionImage,
  },
  {
    icon: FaHandshake,
    title: "Long-Term",
    description: "Client Relationship",
    accent: "indigo",
    image: LongTermImage,
  },
];

function StatCard({ icon: Icon, value, title, description, accent, image }) {
  return (
    <div
      data-accent={accent}
      className={`${styles.card} gsap-stat-card relative flex flex-col overflow-hidden rounded-2xl p-6`}
    >
      <Image
        src={image}
        alt=""
        width={150}
        height={150}
        className={styles.cardImage}
        data-card-image="true"
        aria-hidden="true"
      />

      <span className={styles.badge}>
        <Icon className={styles.badgeIcon} aria-hidden="true" />
      </span>

      <div className="relative z-[1] mt-6">
        {value ? (
          <p className={`${styles.value} headingThree`}>{value}</p>
        ) : null}
        <p className={`${styles.title} headingFive mt-1`}>{title}</p>
        <p className="para-base para-muted mt-1 text-[#fff]">
          {description}
        </p>
        <span className={styles.underline} aria-hidden="true" />
      </div>
    </div>
  );
}

const ProveSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set([".gsap-prove-header", ".gsap-stat-card"], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        ".gsap-prove-header",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
      ).fromTo(
        ".gsap-stat-card",
        { opacity: 0, y: 50, rotateX: 10, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: "back.out(1.35)",
        },
        "-=0.4",
      );

      const cards = gsap.utils.toArray(".gsap-stat-card");
      const cleanups = cards.map((card) => {
        const image = card.querySelector("[data-card-image]");
        gsap.set(card, { transformPerspective: 900 });

        const onMove = (event) => {
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;

          gsap.to(card, {
            rotateY: x * 10,
            rotateX: y * -10,
            y: -8,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(card, {
            "--glow-x": `${(x + 0.5) * 100}%`,
            "--glow-y": `${(y + 0.5) * 100}%`,
            duration: 0.25,
            overwrite: "auto",
          });
        };

        const onEnter = () => {
          gsap.to(image, { scale: 1.12, x: -5, y: -5, duration: 0.5, ease: "power3.out" });
        };

        const onLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            duration: 0.65,
            ease: "elastic.out(1, 0.5)",
            overwrite: "auto",
          });
          gsap.to(image, { scale: 1, x: 0, y: 0, duration: 0.5, ease: "power3.out" });
        };

        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerenter", onEnter);
        card.addEventListener("pointerleave", onLeave);

        return () => {
          card.removeEventListener("pointermove", onMove);
          card.removeEventListener("pointerenter", onEnter);
          card.removeEventListener("pointerleave", onLeave);
        };
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className={`${styles.section} relative`}>
      <Image
        src={ProveBanner}
        alt=""
        fill
        className={styles.banner}
        aria-hidden="true"
      />

      <Container size="hero">
        <div className="gsap-prove-header relative z-10">
          <SectionHeader
            label="THE PROOF"
            text="Small Team. Big Impact."
            colorWord="Big Impact."
            description="Young agency, real results."
          />
        </div>

        <div className="relative z-10 mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        <svg
          className={styles.arcWrap}
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="prove-arc" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff5a1f" />
              <stop offset="35%" stopColor="#ff2f87" />
              <stop offset="70%" stopColor="#9b3bff" />
              <stop offset="100%" stopColor="#5b3bff" />
            </linearGradient>
          </defs>
          <path
            d="M0,70 Q600,10 1200,70"
            fill="none"
            stroke="url(#prove-arc)"
            strokeWidth="16"
            strokeLinecap="round"
            className={styles.arcGlow}
          />
          <path
            d="M0,70 Q600,10 1200,70"
            fill="none"
            stroke="url(#prove-arc)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Container>
    </section>
  );
};

export default ProveSection;
