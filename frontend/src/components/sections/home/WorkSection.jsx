// src/components/work/WorkSection.jsx
"use client";

import { useMemo, useState } from "react";
import WorkFilters from "@/components/ui/work/WorkFilters";
import WorkFeatured from "@/components/ui/work/WorkFeatured";
import WorkCard from "@/components/ui/work/WorkCard";
import WorkCTA from "@/components/ui/work/WorkCTA";
import { workFilters, workProjects } from "@/helper/homework/workData";
import Container from "@/components/ui/Container";

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return workProjects;
    return workProjects.filter((project) => project.tag === activeFilter);
  }, [activeFilter]);

  const [featuredProject, ...restProjects] = filteredProjects;
  const showFeatured = featuredProject?.featured === true;
  const secondaryProjects = showFeatured ? restProjects : filteredProjects;
  const total = filteredProjects.length;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="px-6 py-10 sm:px-8 lg:px-10 lg:py-10"
      style={{ backgroundColor: "#F5F4F1" }}
    >
      <Container size="hero">
        {/* Header */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span
              className="text-[11px] font-medium tracking-wide"
              style={{ color: "#FF5101" }}
            >
              OUR WORK
            </span>

            <h2
              id="work-heading"
              className="mt-4 text-[32px] font-bold leading-[1.1] sm:text-[42px] lg:text-[52px]"
              style={{ color: "#171A21" }}
            >
              Products we&rsquo;ve engineered{" "}
              <span style={{ color: "#FF5101" }}>
                to move businesses forward.
              </span>
            </h2>

            <p
              className="mt-5 max-w-md text-[15px] leading-[1.6] sm:text-[16px]"
              style={{ color: "#6B7078" }}
            >
              A selection of digital platforms, applications and experiences
              we&rsquo;ve designed and engineered for real-world use.
            </p>
          </div>

          <WorkFilters
            filters={workFilters}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        {/* Projects */}
        {total === 0 ? (
          <p className="mt-20 text-[14px]" style={{ color: "#6B7078" }}>
            No projects in this category yet.
          </p>
        ) : (
          <div className="mt-16 flex flex-col gap-16 lg:mt-20 lg:gap-24">
            {showFeatured && (
              <WorkFeatured project={featuredProject} index={1} total={total} />
            )}

            {secondaryProjects.length > 0 && (
              <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
                {secondaryProjects.map((project, i) => (
                  <WorkCard
                    key={project.id}
                    project={project}
                    index={showFeatured ? i + 2 : i + 1}
                    total={total}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="mt-24 lg:mt-32">
          <WorkCTA />
        </div>
      </Container>
    </section>
  );
}
