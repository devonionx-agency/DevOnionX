"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
// import FeaturedWorkCard from "../ui/FeaturedWorkCard";
import { featuredWorks } from "@/helper/homeWork";
import FeaturedWorkCard from "../ui/FeaturedWork";

export default function FeaturedWork() {
  return (
    <section className="bg-[#02090F]">
      <Container size="xl">
        <div className="pb-20 text-center">
          <SectionHeader
            label="Our Work"
            text="Projects That Drive Results"
            colorWord="Drive Results"
          />

          <p className="mx-auto max-w-[650px] para-lg text-white/80">
            Explore a selection of SaaS platforms, web applications, and digital
            products we've crafted to help businesses grow and scale.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredWorks.map((project) => (
            <FeaturedWorkCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/work" className="btn3 group">
            <span className="relative z-10 flex items-center gap-3">
              View All Projects
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
