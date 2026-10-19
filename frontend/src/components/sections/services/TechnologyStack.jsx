import React from "react";
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
import SectionHeader from "@/components/ui/SectionHeader";

const techs = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

function TechnologyStack() {
  return (
    <section className="bg-[#f5f5f2] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#0f1b3d]">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Our Technology
          </span>
          <SectionHeader
            text="Built With a Modern Stack"
            colorWord="Modern Stack"
            description="We choose technologies based on the problem, not trends. Our stack
            is designed for performance, maintainability, security, and
            long-term scalability."
          />
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {techs.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-slate-300 bg-[#fafaf8] py-7 shadow-[0_1px_2px_rgba(15,27,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="flex h-18 w-18 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${color}1A` }}
              >
                <Icon size={36} color={color} />
              </div>
              <span className="text-base font-semibold text-[#0f1b3d]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologyStack;
