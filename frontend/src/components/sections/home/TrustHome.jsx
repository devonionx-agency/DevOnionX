"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { trustCards, trustBadges } from "@/helper/home/trustgrowth";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { Rocket, ArrowUpRight, Star } from "lucide-react";

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

            <h1 className="trust-anim mt-5 text-4xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              We Build High-Performance Software That Drives Business Growth
            </h1>

            <p className="trust-anim mt-6 max-w-[580px] text-base leading-relaxed text-gray-500">
              We design, develop, and scale high-performance digital products
              with expert developer teams, proven delivery frameworks, and
              enterprise-grade architecture.
            </p>

            <div className="trust-anim mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-black"
              >
                Start Your Project <Rocket size={16} strokeWidth={1.8} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#fbcc22] px-6 py-4 text-sm font-medium text-gray-900 transition hover:bg-[#f2c010]"
              >
                Explore Our Services
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Link>
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
                    <Star
                      key={i}
                      size={16}
                      fill="#facc15"
                      color="#facc15"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-800">
                  Trusted by 3+ Clients
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - vertical infinite slider */}
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
