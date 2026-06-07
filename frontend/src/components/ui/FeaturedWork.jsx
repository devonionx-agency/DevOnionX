"use client";

import Image from "next/image";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

export default function FeaturedWorkCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <span className="w-fit rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400">
          {project.category}
        </span>

        <h3 className="mt-4 text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 leading-relaxed text-white/70">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"
              >
                <Icon className="text-sm text-white/70" />

                <span className="text-xs text-white/70">{tech.name}</span>
              </div>
            );
          })}
        </div>

        <Link
          href={project.href}
          className="group/link mt-7 inline-flex items-center gap-2 text-sm font-medium text-orange-400 transition-colors hover:text-orange-300"
        >
          View Case Study
          <HiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
