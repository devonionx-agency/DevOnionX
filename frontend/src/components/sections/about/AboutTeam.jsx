"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { Grid } from "@/components/common/Responsive";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  {
    name: "Al Mahmud",
    role: "Frontend Engineer",
    bio: "Architects clean, scalable systems from database to UI. Obsessed with performance and shipping things that last.",
    image: "/images/about/mahmud.jpg",
    slug: "/team/al-mahmud",
    yearsOfExperience: 3,
    expertise: ["React", "Next.js", "Tailwind"],
    socials: [
      { id: 1, platform: "LinkedIn", url: "https://linkedin.com/in/username" },
      { id: 2, platform: "GitHub",   url: "https://github.com/username" },
    ],
  },
  {
    name: "Jihad M.",
    role: "Frontend Engineer",
    bio: "Turns complex problems into intuitive interfaces. Every screen he designs feels inevitable.",
    image: "/images/about/jihad.png",
    slug: "/team/jihad-mahmud",
    yearsOfExperience: 2,
    expertise: ["React", "GSAP", "Figma"],
    socials: [
      { id: 1, platform: "LinkedIn", url: "https://linkedin.com/in/username" },
      { id: 2, platform: "GitHub",   url: "https://github.com/username" },
    ],
  },
  {
    name: "Hamim A.",
    role: "Backend Developer",
    bio: "Builds APIs and infrastructure that scale silently. Rock-solid systems, zero drama.",
    image: "/images/about/hamim.jpg",
    slug: "/team/hamim-ahmed",
    yearsOfExperience: 3,
    expertise: ["Node.js", "PostgreSQL", "DevOps"],
    socials: [
      { id: 1, platform: "LinkedIn", url: "https://linkedin.com/in/username" },
      { id: 2, platform: "GitHub",   url: "https://github.com/username" },
    ],
  },
  {
    name: "Nadil H.",
    role: "Full-Stack Developer",
    bio: "Brings designs to life with pixel-perfect precision. If it moves on screen, he made it feel right.",
    image: "/images/about/nadil.jpg",
    slug: "/team/nadil-hossain",
    yearsOfExperience: 2,
    expertise: ["React", "Node.js", "MongoDB"],
    socials: [
      { id: 1, platform: "LinkedIn", url: "https://linkedin.com/in/username" },
      { id: 2, platform: "GitHub",   url: "https://github.com/username" },
    ],
  },
  {
    name: "Jhulon K.",
    role: "Frontend Engineer",
    bio: "Builds smooth, performant UIs that feel genuinely native. Fast, precise, always on time.",
    image: "/images/about/jhulon.jpg",
    slug: "/team/jhulon-kumar-roy",
    yearsOfExperience: 2,
    expertise: ["React", "TypeScript", "Tailwind"],
    socials: [
      { id: 1, platform: "LinkedIn", url: "https://linkedin.com/in/username" },
      { id: 2, platform: "GitHub",   url: "https://github.com/username" },
    ],
  },
];

export default function AboutTeam() {
  const gridRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(gridRef.current.children),
        { opacity: 0, y: isMobile ? 20 : 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8, ease: "power3.out", stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: isMobile ? "top 92%" : "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#0a0a0a] py-28 relative overflow-hidden">

      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,81,1,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/20 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[120px] bg-[#FF5101]/[0.04]" />

      <Container size="xl">

        <SectionHeader
          label="The Team"
          text="People Behind the Work"
          colorWord="Behind the Work"
          className="mb-14"
        />

        <div ref={gridRef}>
          <Grid cols={{ base: 1, sm: 2, lg: 3, xl: 5 }} gap="sm">
            {TEAM.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </Grid>
        </div>

      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5101]/20 to-transparent" />
    </section>
  );
}