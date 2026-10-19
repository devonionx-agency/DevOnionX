
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMove,
} from "react-icons/fi";

const SOCIAL_ICONS = {
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
};

export default function TeamMemberCard({ member, index = 0 }) {
  const isAlternate = index % 2 === 1;

  return (
    <article
      className={`team-member group relative flex min-w-0 flex-col overflow-hidden rounded-[26px] border border-[#E8DED2] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#FF5101]/40 hover:shadow-[0_22px_55px_-35px_rgba(231,71,0,0.3)] sm:p-5 ${
        isAlternate ? "bg-[#F4EDE4]" : "bg-[#FFFCF8]"
      }`}
    >
      {/* Portrait area */}
      <div
        className={`relative isolate flex aspect-[1.12] items-end justify-center overflow-hidden rounded-[20px] ${
          isAlternate ? "bg-[#E9DFD3]" : "bg-[#F1E9E0]"
        }`}
      >
        {/* Decorative rings */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[46%] h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[46%] h-[61%] w-[61%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF5101]/15"
        />

        {/* Soft color wash */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,255,255,0.9),transparent_65%)]"
        />

        {/* Number badge */}
        <span className="absolute left-3 top-3 z-10 flex h-9 min-w-9 items-center justify-center rounded-full border border-white/80 bg-white/75 px-2 text-[10px] font-bold tracking-wider text-[#E74700] backdrop-blur-sm">
          {member.number || String(index + 1).padStart(2, "0")}
        </span>

        {/* Profile link */}
        <Link
          href={member.slug || "#"}
          aria-label={`View ${member.name}'s profile`}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/75 text-[#29241F] transition-all duration-300 hover:rotate-45 hover:border-[#FF5101] hover:bg-[#FF5101] hover:text-white"
        >
          <FiArrowUpRight size={17} />
        </Link>

        {/* Portrait */}
        <div className="relative z-[1] h-[94%] w-[88%] transition-transform duration-700 ease-out group-hover:scale-[1.035]">
          <Image
            src={member.image}
            alt={`${member.name} — ${member.role}`}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 25vw"
            className="object-contain object-bottom"
          />
        </div>

        {/* Floating decorative spark */}
        <span className="absolute bottom-4 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#FF5101] text-white shadow-lg shadow-[#FF5101]/20 transition-transform duration-500 group-hover:rotate-90">
          <FiMove size={13} />
        </span>
      </div>

      {/* Profile details */}
      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold tracking-[-0.05em] text-[#25211E] sm:text-[22px]">
              <Link
                href={member.slug || "#"}
                className="transition-colors duration-300 hover:text-[#E74700]"
              >
                {member.name}
              </Link>
            </h3>

            <p className="mt-1.5 text-xs font-medium text-[#E74700] sm:text-[13px]">
              {member.role}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#FF5101] ring-4 ring-[#FF5101]/10"
          />
        </div>

        <p className="mt-3 min-h-[72px] text-[13px] leading-[1.8] text-[#766D64]">
          {member.bio}
        </p>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {member.expertise?.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#E8DED2] bg-white/75 px-2.5 py-1.5 text-[10px] font-medium text-[#62594F] transition-colors duration-300 group-hover:border-[#FF5101]/30"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#E9E0D6] pt-4 mt-5">
          <div className="flex items-center gap-2">
            {member.socials?.map((social) => {
              const Icon = SOCIAL_ICONS[social.platform];

              if (!Icon || !social.url) return null;

              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on ${social.platform}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E7DDD2] bg-white/80 text-[#5E554D] transition-all duration-300 hover:border-[#FF5101] hover:bg-[#FF5101] hover:text-white"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A0968A]">
            DevOnionX
          </span>
        </div>
      </div>
    </article>
  );
}
