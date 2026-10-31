
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FiArrowUpRight,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

import {
  TEAM,
  TEAM_CONTENT,
  TEAM_FEATURES,
} from "@/helper/about";

const SOCIAL_ICONS = {
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
};

export default function AboutTeam() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F4] py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            label={TEAM_CONTENT.label}
            text={`${TEAM_CONTENT.title} ${TEAM_CONTENT.colorWord}`}
            colorWord={TEAM_CONTENT.colorWord}
            align="center"
          />

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            {TEAM_CONTENT.description}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 sm:gap-y-10">
          {TEAM_FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group flex items-start gap-4"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: feature.color }}
                >
                  <Icon
                    size={21}
                    style={{ color: feature.iconColor }}
                  />
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

          {/* Team Grid */}
          <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {TEAM.map((member, index) => (
              <article
                key={member.number}
                className="
                  group relative isolate
                  h-[220px] min-w-0 overflow-hidden
                  rounded-[12px_28px_58px_28px]
                  p-4
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:shadow-[0_20px_40px_rgba(30,30,30,0.12)]
                "
                style={{
                  backgroundColor: member.cardColor,
                }}
              >

                {/* Member Information */}
                <div className="relative z-20">

                  <div className="flex items-start justify-between gap-1">

                    <div className="min-w-0">
                      <h3 className="truncate text-[13px] font-bold leading-tight tracking-tight text-[#172536]">
                        {member.name}
                      </h3>

                      <p className="mt-1.5 min-h-[16px] max-w-[160px] text-[10px] font-medium leading-relaxed text-slate-600">
                        {member.role}
                      </p>
                    </div>

                    {/* Profile Link */}
                    <Link
                      href={member.slug}
                      aria-label={`View ${member.name}`}
                      className="
                        flex h-7 w-7 shrink-0
                        items-center justify-center
                        rounded-full bg-white/45
                        text-slate-700
                        opacity-0
                        transition-all duration-300
                        hover:rotate-45
                        hover:bg-[#E74700]
                        hover:text-white
                        group-hover:opacity-100
                      "
                    >
                      <FiArrowUpRight size={15} />
                    </Link>

                  </div>

                  {/* Social Links */}
                  <div className="mt-3 flex items-center gap-3">

                    {member.socials?.map((social) => {
                      const Icon = SOCIAL_ICONS[social.platform];

                      if (!Icon) return null;

                      return (
                        <a
                          key={social.id ?? social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} ${social.platform}`}
                          className="
                            flex items-center justify-center
                            text-[#172536]
                            transition-all duration-300
                            hover:-translate-y-0.5
                            hover:text-[#E74700]
                          "
                        >
                          <Icon size={14} />
                        </a>
                      );
                    })}

                  </div>
                </div>

                {/* Decorative Background */}
                <div className="
                  pointer-events-none absolute
                  -bottom-16 -right-12
                  z-0 h-44 w-44
                  rounded-full border border-white/40
                  transition-transform duration-700
                  group-hover:scale-110
                " />

                {/* Profile Image */}
                <div className="
                  pointer-events-none absolute
                  bottom-0 left-1/2 z-10
                  h-[165px] w-full
                  -translate-x-1/2
                  overflow-hidden
                ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 190px"
                    className="
                      object-contain object-bottom
                      transition-transform duration-700
                      ease-out
                      group-hover:scale-[1.06]
                    "
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
