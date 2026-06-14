"use client";


import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";


/* ────────────────────────────────────────────────────────────
   Icons
──────────────────────────────────────────────────────────── */


const ArrowLeft = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);


const ContactIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);


/* ────────────────────────────────────────────────────────────
   FlairButton
   A button/link with a radial "flair" that expands from the
   cursor position on hover, mirroring DirectionalButton's
   interaction pattern.
──────────────────────────────────────────────────────────── */


function FlairButton({ href, label, leftIcon, rightIcon, primary = false }) {
  const btnRef = useRef(null);
  const flairRef = useRef(null);
  const labelRef = useRef(null);


  // Static per-variant styling — primary uses brand orange, secondary is neutral.
  const borderColor = primary ? "#FF5101" : "rgba(255,255,255,0.15)";
  const flairColor = primary ? "#FF5101" : "rgba(255,255,255,0.08)";
  const textColor = primary ? "#ffffff" : "#94a3b8";
  const textHoverColor = "#ffffff";
  const shadowHover = primary ? "0 0 18px 2px rgba(255,81,1,0.3)" : "none";


  useEffect(() => {
    const btn = btnRef.current;
    const flair = flairRef.current;
    const label = labelRef.current;


    if (!btn || !flair || !label) return;


    /** Resize the flair circle to comfortably cover the button on hover. */
    const setFlairSize = () => {
      const { width, height } = btn.getBoundingClientRect();
      const diameter = Math.max(width, height) * 2.2;


      gsap.set(flair, {
        width: diameter,
        height: diameter,
        xPercent: -50,
        yPercent: -50,
        scale: 0,
        backgroundColor: flairColor,
        borderRadius: "50%",
      });
    };


    /** Pointer position relative to the button's bounding box. */
    const getRelativePosition = (e) => {
      const rect = btn.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };


    let activeTimeline = null;


    const handleEnter = (e) => {
      const { x, y } = getRelativePosition(e);


      activeTimeline?.kill();
      gsap.set(flair, { left: x, top: y, scale: 0 });


      activeTimeline = gsap.timeline();
      activeTimeline
        .to(flair, { scale: 1, duration: 0.55, ease: "power2.inOut" })
        .to(label, { color: textHoverColor, duration: 0.35, ease: "power2.out" }, 0.1)
        .to(btn, { scale: 1.02, duration: 0.3, ease: "power2.out" }, 0);


      if (shadowHover !== "none") {
        activeTimeline.to(btn, { boxShadow: shadowHover, duration: 0.5, ease: "power2.out" }, 0);
      }
    };


    const handleLeave = (e) => {
      const { x, y } = getRelativePosition(e);


      activeTimeline?.kill();
      gsap.set(flair, { left: x, top: y });


      activeTimeline = gsap.timeline();
      activeTimeline
        .to(flair, { scale: 0, duration: 0.45, ease: "power2.inOut" })
        .to(label, { color: textColor, duration: 0.25, ease: "power2.out" }, 0.3)
        .to(btn, { scale: 1, duration: 0.25, ease: "power2.out" }, 0)
        .to(btn, { boxShadow: "0 0 0px 0px transparent", duration: 0.45, ease: "power2.out" }, 0);
    };


    setFlairSize();
    gsap.set(label, { color: textColor });


    btn.addEventListener("pointerenter", handleEnter);
    btn.addEventListener("pointerleave", handleLeave);
    window.addEventListener("resize", setFlairSize);


    return () => {
      activeTimeline?.kill();
      btn.removeEventListener("pointerenter", handleEnter);
      btn.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("resize", setFlairSize);
    };
  }, [flairColor, textColor, textHoverColor, shadowHover]);


  return (
    <Link
      ref={btnRef}
      href={href}
      className="relative overflow-hidden inline-flex items-center gap-2 rounded-full border px-7 py-3 cursor-pointer outline-none bg-transparent"
      style={{ borderColor, WebkitTapHighlightColor: "transparent" }}
    >
      <span ref={flairRef} className="absolute pointer-events-none" />
      <span
        ref={labelRef}
        className="relative z-10 inline-flex items-center gap-2 font-medium text-[14px] leading-none whitespace-nowrap pointer-events-none"
      >
        {leftIcon}
        {label}
        {rightIcon}
      </span>
    </Link>
  );
}


/* ────────────────────────────────────────────────────────────
   Four04Flair
   Large outlined "404" numeral with the same cursor-driven
   flair fill effect as FlairButton, used as the page's
   centerpiece.
──────────────────────────────────────────────────────────── */


function Four04Flair() {
  const wrapRef = useRef(null);
  const flairRef = useRef(null);
  const textRef = useRef(null);


  useEffect(() => {
    const wrap = wrapRef.current;
    const flair = flairRef.current;
    const text = textRef.current;


    if (!wrap || !flair || !text) return;


    const setFlairSize = () => {
      const { width, height } = wrap.getBoundingClientRect();
      const diameter = Math.max(width, height) * 1.4;


      gsap.set(flair, {
        width: diameter,
        height: diameter,
        xPercent: -50,
        yPercent: -50,
        scale: 0,
        backgroundColor: "#FF5101",
        borderRadius: "50%",
      });
    };


    const getRelativePosition = (e) => {
      const rect = wrap.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };


    let activeTimeline = null;


    const handleEnter = (e) => {
      const { x, y } = getRelativePosition(e);


      activeTimeline?.kill();
      gsap.set(flair, { left: x, top: y, scale: 0 });


      activeTimeline = gsap.timeline();
      activeTimeline
        .to(flair, { scale: 1, duration: 0.55, ease: "power2.inOut" })
        .to(text, { color: "#ffffff", duration: 0.35, ease: "power2.out" }, 0.1)
        .to(wrap, { scale: 1.02, duration: 0.3, ease: "power2.out" }, 0);
    };


    const handleLeave = (e) => {
      const { x, y } = getRelativePosition(e);


      activeTimeline?.kill();
      gsap.set(flair, { left: x, top: y });


      activeTimeline = gsap.timeline();
      activeTimeline
        .to(flair, { scale: 0, duration: 0.45, ease: "power2.inOut" })
        .to(text, { color: "transparent", duration: 0.25, ease: "power2.out" }, 0.25)
        .to(wrap, { scale: 1, duration: 0.25, ease: "power2.out" }, 0);
    };


    setFlairSize();


    wrap.addEventListener("pointerenter", handleEnter);
    wrap.addEventListener("pointerleave", handleLeave);
    window.addEventListener("resize", setFlairSize);


    return () => {
      activeTimeline?.kill();
      wrap.removeEventListener("pointerenter", handleEnter);
      wrap.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("resize", setFlairSize);
    };
  }, []);


  return (
    <div
      ref={wrapRef}
      className="relative overflow-hidden cursor-default rounded-3xl px-8"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <span ref={flairRef} className="absolute pointer-events-none" />
      <span
        ref={textRef}
        className="relative z-10 block font-bold leading-none"
        style={{
          fontSize: "clamp(100px, 20vw, 200px)",
          letterSpacing: "-4px",
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
        }}
      >
        404
      </span>
    </div>
  );
}


/* ────────────────────────────────────────────────────────────
   NotFound — page-level 404 view
──────────────────────────────────────────────────────────── */


export default function NotFound() {
  const badgeRef = useRef(null);
  const codeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const glowRef = useRef(null);


  useEffect(() => {
    // Ambient glow — slow breathing pulse behind the content.
    const glowTween = gsap.to(glowRef.current, {
      scale: 1.15,
      opacity: 0.6,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });


    // Staggered entrance for the page content.
    const entranceTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    entranceTl
      .fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(codeRef.current, { opacity: 0, y: 40, scale: 0.85 }, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, "-=0.3")
      .fromTo(headingRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
      .fromTo(paraRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.35");


    return () => {
      glowTween.kill();
      entranceTl.kill();
    };
  }, []);


  return (
    <section className="bg-[#050505] min-h-screen flex items-center justify-center relative overflow-hidden">


      {/* Dot grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,81,1,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />


      {/* Vertical edge accents */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#FF5101]/15 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#FF5101]/15 to-transparent" />


      {/* Ambient pulsing glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] bg-[#FF5101]/[0.07]"
      />


      <div className="relative z-10 text-center px-6 max-w-[600px] mx-auto">


        {/* Status badge */}
        <div ref={badgeRef} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[3px] uppercase text-[#FF5101] border border-[#FF5101]/25 bg-[#FF5101]/[0.07] rounded-full px-5 py-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5101] animate-pulse" />
            Error 404
          </span>
        </div>


        {/* Interactive 404 numeral */}
        <div ref={codeRef} className="flex justify-center mb-4">
          <Four04Flair />
        </div>


        {/* Heading */}
        <h1
          ref={headingRef}
          className="font-bold text-white mb-5"
          style={{ fontSize: "clamp(24px, 4vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.5px" }}
        >
          Page{" "}
          <span
            style={{
              background: "linear-gradient(to right, #FF5101, #ec4899, #8b5cf6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Not Found
          </span>
        </h1>


        {/* Supporting copy */}
        <p ref={paraRef} className="text-[16px] text-[#94a3b8] leading-[1.8] mb-10 max-w-[420px] mx-auto">
          Looks like this page took a detour. It may have been moved, deleted,
          or never existed. Let&apos;s get you back on track.
        </p>


        {/* Call-to-action buttons */}
        <div ref={ctaRef} className="flex items-center justify-center gap-4 flex-wrap">
          <FlairButton href="/" label="Back to Home" leftIcon={<ArrowLeft />} primary />
          <FlairButton href="/contact" label="Contact Us" rightIcon={<ContactIcon />} />
        </div>


      </div>
    </section>
  );
}
