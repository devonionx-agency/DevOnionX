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
    const swiper = swiperRef.current;

    if (!swiper) return;

    if (mediaQuery.matches) {
      swiper.autoplay?.stop();
    }

    const handleMotionChange = (event) => {
      if (event.matches) {
        swiper.autoplay?.stop();
      } else {
        swiper.autoplay?.start();
      }
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={heroSlides.length > 1}
        allowTouchMove={false}
        watchSlidesProgress
        className="h-full w-full [&_.swiper-slide]:h-full"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={slide.src}>
            <div className="hero-kenburns relative h-full w-full overflow-hidden">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
                sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 50vw, 600px"
                quality={75}
                className="object-cover object-[75%_center] sm:object-[75%_center] lg:object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        @keyframes heroKenBurns {
          0% {
            transform: scale(1.04);
          }
          100% {
            transform: scale(1);
          }
        }

        .hero-kenburns img {
          animation: heroKenBurns 6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-kenburns img {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSlider;
