// src/components/ui/work/WorkFeatured.jsx
import { techIcons } from "@/helper/homework/techIcons";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function WorkFeatured({ project, index, total }) {
  const number = String(index).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  return (
    <article className="group grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:items-center">
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px]"
        style={{ border: "1px solid rgba(23, 26, 33, 0.08)" }}
      >
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category} preview`}
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="
            object-cover transition-transform duration-500 ease-out
            group-hover:scale-[1.02] motion-reduce:transition-none
          "
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
          className="
            group/link mt-8 inline-flex items-center gap-1.5 text-[13.5px] font-medium
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101]
            focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F4F1] rounded-sm
        "
          style={{ color: "#171A21" }}
        >
          Explore project
          <FiArrowUpRight
            className="
              h-4 w-4 transition-transform duration-300 ease-out
              group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5
              motion-reduce:transition-none
            "
            style={{ color: "#FF5101" }}
          />
        </Link>
      </div>
    </article>
  );
}
