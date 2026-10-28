"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiCloudinary,
  SiMongodb,
  SiGreensock,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Cloudinary", icon: SiCloudinary },
  { name: "AWS", icon: FaAws },
  { name: "MongoDB", icon: SiMongodb },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Firebase", icon: SiFirebase },
  { name: "GSAP", icon: SiGreensock },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Postman", icon: SiPostman },
];

export default function TechStackHome() {
  return (
    <section className="bg-[#F5F5F2] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#174B3A] sm:text-sm">
            Technology Stack
          </p>

          <h2 className="mx-auto max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#171717] sm:text-5xl lg:text-[60px]">
            Powered by Modern Technologies
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
            We leverage industry-leading technologies to build scalable, secure,
            and high-performance digital products.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6 lg:gap-10">
          {technologies.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex min-h-[155px] flex-col items-center justify-center rounded-[20px] border border-[#DED7C5] bg-white px-3 py-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#174B3A] hover:bg-[#EAE7DB] hover:shadow-[0_12px_24px_rgba(23,23,23,0.08)] sm:min-h-[172px] sm:rounded-[22px] sm:py-8"
            >
              <div className="flex h-14 w-14 items-center justify-center text-[#080808] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                <Icon
                  aria-hidden="true"
                  className="h-11 w-11 sm:h-12 sm:w-12"
                />
              </div>

              <span className="mt-4 text-center text-sm font-medium tracking-[-0.01em] text-[#252525] sm:mt-5 sm:text-base">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
