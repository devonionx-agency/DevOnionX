"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function OrbitRing() {
  const orbitRef = useRef(null);

  useEffect(() => {
    gsap.to(orbitRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        ref={orbitRef}
        className="h-[280px] w-[620px] rounded-full border-2 border-[#FF5101]/70 shadow-[0_0_40px_rgba(255,81,1,.5)]"
      />
    </div>
  );
}
