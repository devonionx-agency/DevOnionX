"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { trustCards, trustBadges } from "@/helper/home/trustgrowth";
import Container from "@/components/ui/Container";

const RocketIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const Star = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="#facc15"
    aria-hidden="true"
  >
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Card = ({ item }) => {
  if (item.type === "image") {
    return (
      <div
        className={`relative w-full shrink-0 overflow-hidden rounded-3xl bg-gray-100 ${item.height}`}
      >
        <Image
          src={item.src}
          alt={item.alt || ""}
          fill
          sizes="(max-width: 1024px) 33vw, 180px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full shrink-0 overflow-hidden rounded-3xl p-5 ${item.bg} ${item.height}`}
    >
      {/* dotted decoration */}
      <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.8)_1px,transparent_1.5px)] bg-[length:6px_6px] opacity-70" />
      <div className="relative flex h-full flex-col justify-end">
        <h3 className="text-[26px] font-semibold leading-tight text-gray-900">
          {item.value}
        </h3>
        <p className="mt-1 text-sm text-gray-800">{item.label}</p>
      </div>
    </div>
  );
};

const TrustHome = () => {
  const leftRef = useRef(null);

  // Left content intro animation (GSAP)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".trust-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });
    }, leftRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white py-12 lg:py-16">
      <Container size="hero">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div ref={leftRef}>
            <span className="trust-anim inline-block rounded-full bg-[#d4f0a8] px-4 py-2 text-xs font-medium text-gray-900">
              Leading Software Company
            </span>

            <h1 className="trust-anim mt-5 text-4xl font-medium leading-[1.15] tracking-tight text-gray-900 sm:text-5xl lg:text-[50px]">
              We Build High-Performance Software That Drives Business Growth
            </h1>

            <p className="trust-anim mt-6 max-w-[580px] text-base leading-relaxed text-gray-500">
              We design, develop, and scale high-performance digital products
              with expert developer teams, proven delivery frameworks, and
              enterprise-grade architecture.
            </p>

            <div className="trust-anim mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-black"
              >
                Start Your Project <RocketIcon />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-[#fbcc22] px-6 py-4 text-sm font-medium text-gray-900 transition hover:bg-[#f2c010]"
              >
                Hire Dedicated Developers <ArrowIcon />
              </a>
            </div>

            <div className="trust-anim mt-12 flex items-center gap-3">
              <div className="flex -space-x-1">
                {trustBadges.map((b) => (
                  <span
                    key={b.alt}
                    className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gray-100"
                  >
                    <Image
                      src={b.src}
                      alt={b.alt}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </span>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-800">
                  Trusted by 3+ Clients
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - vertical infinite slider (css: global.css) */}
          <div className="trust-slider">
            {trustCards.map((col) => (
              <div key={col.id} className="trust-col">
                <div
                  className="trust-track"
                  style={{
                    "--trust-duration": `${col.duration}s`,
                    "--trust-delay": `${col.delay}s`,
                  }}
                >
                  {/* group 1 + duplicate group (seamless loop) */}
                  {[0, 1].map((g) => (
                    <div key={g} className="trust-group" aria-hidden={g === 1}>
                      {col.items.map((item, i) => (
                        <Card key={`${g}-${i}`} item={item} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustHome;
