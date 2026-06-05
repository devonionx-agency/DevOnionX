"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "@/helper/Testimonials";

export default function Testimonials() {
  // Har render e notu object create hoy — Swiper re-init triggor kore
  // useMemo diye same reference rakha hocche
  const autoplayConfig = useMemo(
    () => ({
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }),
    [], // kono dependency nei — ekbar e bane
  );

  const navigationConfig = useMemo(
    () => ({
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
    }),
    [],
  );

  const paginationConfig = useMemo(
    () => ({
      clickable: true,
      el: ".testimonial-pagination",
    }),
    [],
  );

  const breakpointsConfig = useMemo(
    () => ({
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1280: { slidesPerView: 3 },
    }),
    [],
  );

  return (
    <section className="bg-[#02090F] py-10">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <SectionHeader
          label="Testimonials"
          text="What Clients Say About Me"
          colorWord="Say About Me"
        />

        {/* Sub Text */}
        <p className="mx-auto mt-2 mb-16 max-w-2xl text-center text-base leading-8 text-white/80 sm:text-lg">
          Real feedback from people I&apos;ve worked with on frontend projects,
          modern interfaces, and premium web experiences.
        </p>

        {/* Swiper */}
        <div className="overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            speed={1200}
            grabCursor={true}
            spaceBetween={24}
            navigation={navigationConfig}
            pagination={paginationConfig}
            autoplay={autoplayConfig}
            breakpoints={breakpointsConfig}
            className="w-full !py-4"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto !flex">
                <TestimonialCard item={item} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex items-center justify-center gap-5">
          {/* Prev */}
          <button className="testimonial-prev flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white text-whitetransition-all duration-300 hover:border-accent/40 hover:text-accent">
            <HiOutlineArrowLeft className="text-xl" />
          </button>

          {/* Pagination */}
          <div className="testimonial-pagination !w-fit" />

          {/* Next */}
          <button className="testimonial-next flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white text-black transition-all duration-300 hover:border-accent/40 hover:text-accent">
            <HiOutlineArrowRight className="text-xl" />
          </button>
        </div>
      </Container>
    </section>
  );
}
