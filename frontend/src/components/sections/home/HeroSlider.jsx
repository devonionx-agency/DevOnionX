"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import heroSlides from "@/helper/heroSlides";



const HeroSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      swiperRef.current?.autoplay?.stop();
    }
  }, []);

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={heroSlides.length > 1}
        allowTouchMove={false}
        className="h-full w-full [&_.swiper-slide]:h-full"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={slide.src}>
            <div className="hero-kenburns relative h-full w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
                sizes="100vw"
                quality={82}
                className="object-[65%_center] lg:object-center object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Cinematic slow zoom-out — subtle, premium */}
      <style jsx global>{`
        @keyframes heroKenBurns {
          0% {
            transform: scale(1.12);
          }
          100% {
            transform: scale(1);
          }
        }
        .hero-kenburns img {
          animation: heroKenBurns 6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default HeroSlider;