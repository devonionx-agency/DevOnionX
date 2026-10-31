"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { TEAM, TEAM_FEATURES } from "@/helper/about";

export default function AboutTeam() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F4] py-20 sm:py-24 lg:py-28">
      <Container size="hero">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-[760px] text-center">
          <SectionHeader
            label="Meet Our Team"
            text="The People Behind DevOnionX"
            colorWord="DevOnionX"
            description="A team of passionate developers, designers, and problem-solvers working together to transform your ideas into impactful digital products."
          />
        </div>

        {/* Feature Cards */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 sm:gap-y-10">
          {TEAM_FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.id} className="group flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: feature.color }}
                >
                  <Icon size={21} style={{ color: feature.iconColor }} />
                </div>

                <div className="pt-0.5">
                  <h3 className="text-[15px] font-bold text-[#252525] transition-colors duration-300 group-hover:text-[#E74700]">
                    {feature.title}
                  </h3>

                  <p className="mt-1.5 max-w-sm text-[13px] leading-6 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Members */}
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {TEAM.map((member, index) => (
              <article
                key={member.number}
                className={`group relative isolate h-[280px] min-w-0 overflow-hidden p-4 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(30,30,30,0.10)] ${
                  index % 2 === 0 ? "rounded-bl-[80px]" : "rounded-br-[80px]"
                }`}
                style={{
                  backgroundColor: member.cardColor,
                }}
              >
                {/* Member Information */}
                <div className="relative z-20">
                  <h3 className="truncate text-[15px] font-semibold leading-tight tracking-tight text-[#172536]">
                    {member.name}
                  </h3>

                  <p className="mt-1.5 text-[12px] font-medium leading-relaxed text-slate-600">
                    {member.role}
                  </p>
                </div>

                {/* Decorative Circle */}
                <div className="pointer-events-none absolute -bottom-20 -right-16 z-0 h-52 w-52 rounded-full border border-white/50 transition-transform duration-700 group-hover:scale-110" />

                {/* Profile Image */}
                <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-[210px] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 220px"
                    className="object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    priority={index < 2}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
