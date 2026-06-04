"use client";

import Image from "next/image";

export default function WhyChooseVisual() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative w-full max-w-[700px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5101]/20 via-purple-500/20 to-transparent blur-3xl" />
        <Image
          src="/images/whychoose/whychoose.png"
          alt="Why Choose Devonionx"
          width={700}
          height={450}
          priority
          className="relative z-10 w-full h-auto"
        />
      </div>
    </div>
  );
}
