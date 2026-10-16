// src/components/ui/work/WorkFeatured.jsx
import { techIcons } from "@/helper/homework/techIcons";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function WorkFeatured({ project, index, total }) {
  const number = String(index).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  return (
    <article className="group grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14 lg:items-center">
      <div
        className="relative w-full overflow-hidden rounded-[10px]"
        style={{ border: "1px solid rgba(23, 26, 33, 0.08)" }}
      >
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category} preview`}
          width={project.imageWidth}
          height={project.imageHeight}
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
        />
      </div>

      <div>
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
          className="mt-4 text-[28px] font-semibold leading-tight sm:text-[32px]"
          style={{ color: "#171A21" }}
        >
          {project.title}
        </h3>

        <p
          className="mt-4 max-w-md text-[15.5px] leading-[1.6]"
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
