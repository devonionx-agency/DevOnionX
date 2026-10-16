// src/components/ui/work/WorkCard.jsx
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { techIcons } from "@/helper/homework/techIcons";

export default function WorkCard({ project, index, total }) {
  const number = String(index).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");
  const isWide = project.size === "lg";

  return (
    <article
      className={`group ${isWide ? "md:col-span-2" : ""} ${isWide ? "grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-12" : ""}`}
    >
      <div
        className="relative w-full overflow-hidden rounded-[10px]"
        style={{ border: "1px solid rgba(23, 26, 33, 0.08)" }}
      >
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category} preview`}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          sizes={
            isWide
              ? "(min-width: 768px) 65vw, 100vw"
              : "(min-width: 768px) 40vw, 100vw"
          }
          className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
        />
      </div>

      <div className={isWide ? "" : "mt-5"}>
        <div
          className="flex items-center gap-3 text-[12px] font-medium"
          style={{ color: "#6B7078" }}
        >
          <span>{project.category}</span>
          <span
            aria-hidden="true"
            className="h-px w-6"
            style={{ backgroundColor: "rgba(23, 26, 33, 0.16)" }}
          />
          <span>
            {number} / {totalNumber}
          </span>
        </div>

        <h3
          className="mt-3 text-[20px] font-semibold leading-tight sm:text-[22px]"
          style={{ color: "#171A21" }}
        >
          {project.title}
        </h3>

        <p
          className="mt-2.5 max-w-sm text-[14.5px] leading-[1.6]"
          style={{ color: "#6B7078" }}
        >
          {project.description}
        </p>

        {project.technologies?.length > 0 && (
          <ul
            className="mt-4 flex flex-wrap gap-x-3.5 gap-y-1.5 text-[12.5px]"
            style={{ color: "#6B7078" }}
          >
            {project.technologies.map((tech) => {
              const Icon = techIcons[tech];
              return (
                <li key={tech} className="flex items-center gap-1.5">
                  {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                  {tech}
                </li>
              );
            })}
          </ul>
        )}

        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link relative mt-8 inline-flex items-center gap-1.5 rounded-sm pb-1 text-[15px] font-medium text-[#171A21] transition-colors duration-300 hover:text-[#FF5101] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F4F1]"
        >
          <span className="relative">
            Explore project
            <span className="absolute -bottom-1 left-0 h-0.5 w-1/2 bg-[#FF5101] transition-[width] duration-300 ease-out group-hover/link:w-full motion-reduce:transition-none" />
          </span>

          <FiArrowUpRight className="h-3.5 w-3.5 text-[#FF5101] transition-transform duration-300 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transition-none" />
        </Link>
      </div>
    </article>
  );
}
