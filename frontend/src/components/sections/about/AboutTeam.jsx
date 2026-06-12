"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { Grid } from "@/components/common/Responsive";
import { TEAM } from "@/helper/about";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

gsap.registerPlugin(ScrollTrigger);


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