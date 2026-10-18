"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LuArrowUpRight, LuCheck } from "react-icons/lu";
import { serviceCategories, servicesData } from "@/helper/services/ourServices";
import Container from "@/components/ui/Container";

function OurServices() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-service-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveCategory(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleCategoryClick = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    setActiveCategory(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="our-services"
      className="relative overflow-clip bg-white pb-20 text-[#02090F] sm:pb-24 lg:pb-32"
    >
      <Container size="hero">
        <div className="px-5 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="mb-14 max-w-2xl sm:mb-20">
            <span className="mb-5 inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.22em] text-[#FF5101]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5101]" />
              Our Expertise
            </span>

            <h2 className="text-[30px] font-medium leading-[1.12] tracking-[-0.045em] text-[#171717] sm:text-4xl lg:text-6xl">
              Explore our services.
              <span className="mt-1 block text-[#858585]">
                Built around your goals.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#666666] sm:text-base">
              From high-performance websites to intelligent business systems, we
              build scalable digital solutions that streamline operations,
              strengthen brands, and help businesses grow.
            </p>
          </div>

          {/* Sidebar + Service Content */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-15">
            {/* Category Navigation */}
            <aside className="self-start lg:sticky lg:top-28">
              <p className="text-xs sm:text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-[#48c12a] mb-4">
                Categories
              </p>

              <nav
                aria-label="Service categories"
                className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
              >
                {serviceCategories.map((category) => {
                  const isActive = activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => handleCategoryClick(category.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={`group flex shrink-0 items-center justify-between gap-4 rounded-full px-4 py-2.5 text-left text-xs transition-colors duration-200 lg:w-full lg:rounded-md lg:px-3 ${
                        isActive
                          ? "bg-[#E8FBE8] font-medium text-[#173D20] lg:bg-transparent lg:text-[#02090F] text-2xl sm:text-3xl md:text-[23px] transition-colors duration-200 hover:cursor-pointer"
                          : "bg-black/[0.035] text-black/50 hover:bg-black/[0.06] hover:text-black lg:bg-transparent lg:hover:bg-black/[0.035] text-2xl sm:text-3xl md:text-[23px] transition-colors duration-200 hover:cursor-pointer"
                      }`}
                    >
                      <span>{category.label}</span>

                      <LuArrowUpRight
                        size={14}
                        aria-hidden="true"
                        className={`hidden transition-transform duration-200 lg:block ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Service Sections */}
            <div className="min-w-0">
              {servicesData.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.id}
                    id={service.id}
                    data-service-section
                    className={`scroll-mt-28 ${
                      index !== 0
                        ? "mt-12 border-t border-black/10 pt-10 sm:mt-16 sm:pt-14"
                        : "border-t border-black/10 pt-7"
                    }`}
                  >
                    {/* Service Number + Icon */}
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-[12px] font-medium tracking-[0.18em] text-black/40">
                        {service.number} / {service.eyebrow}
                      </span>

                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-[#FF5101]"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-medium tracking-[-0.035em] sm:text-3xl md:text-[32px]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-[13px] leading-6 text-black/60 sm:text-sm md:text-[18px] sm:leading-7 font-light">
                      {service.description}
                    </p>

                    {/* Project Image */}
                    <div className="relative mt-6 aspect-[16/8.2] w-full overflow-hidden rounded-lg bg-[#F0F2ED] sm:mt-7 sm:rounded-xl">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 75vw"
                        className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                      />
                    </div>

                    {/* Included Services */}
                    <div className="mt-6 sm:mt-7">
                      <p className="mb-4 text-sm md:text-[18px] font-medium uppercase tracking-wide text-black/80">
                        Services Include
                      </p>

                      <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 sm:gap-x-10">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex min-w-0 items-start gap-3 text-base font-light leading-snug text-black/75 sm:text-lg"
                          >
                            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#292929]">
                              <LuCheck
                                size={15}
                                strokeWidth={3}
                                className="text-white"
                                aria-hidden="true"
                              />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OurServices;
