"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CANVAS_W = 500;
const CANVAS_H = 600;

export default function EngineeringTerminal() {
  const outerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [showCursor, setShowCursor] = useState(true);

  /* --------------------------------
     Responsive canvas scaling
  -------------------------------- */
  useEffect(() => {
    const el = outerRef.current;

    if (!el || typeof ResizeObserver === "undefined") return;

    const ro = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;

      setScale(Math.min(1, width / CANVAS_W));
    });

    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  /* --------------------------------
     Cursor blinking
  -------------------------------- */
  useEffect(() => {
    const id = setInterval(() => {
      setShowCursor((value) => !value);
    }, 600);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full bg-[#F7F4EE]">
      <div
        ref={outerRef}
        className="mx-auto w-full max-w-[500px]"
        style={{ height: CANVAS_H * scale }}
      >
        <div
          className="relative origin-top-left"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(${scale})`,
          }}
        >
          {/* =====================================================
              CONNECTOR LINES
          ====================================================== */}
          <svg
            className="pointer-events-none absolute left-0 top-0"
            width={CANVAS_W}
            height={CANVAS_H}
            viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
            fill="none"
          >
            {/* Heading -> terminal */}
            <path
              d="M148,50 C124,58 118,78 138,86 C154,93 132,95 123,100"
              stroke="#EA580C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* CI/CD -> terminal */}
            <path
              d="M389,73 C371,76 369,92 384,100"
              stroke="#EA580C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <circle cx="389" cy="73" r="3" fill="#EA580C" />
            <circle cx="384" cy="100" r="2.5" fill="#EA580C" />

            {/* Frontend -> terminal */}
            <path
              d="M13,217 C40,214 50,228 56,248"
              stroke="#EA580C"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <circle cx="13" cy="217" r="3" fill="#EA580C" />
            <circle cx="56" cy="248" r="2.5" fill="#EA580C" />

            {/* Backend -> terminal */}
            <path
              d="M198,480 C202,499 172,500 153,515"
              stroke="#EA580C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <circle cx="198" cy="480" r="2.5" fill="#EA580C" />
            <circle cx="153" cy="515" r="3" fill="#EA580C" />

            {/* Database -> terminal */}
            <path
              d="M344,480 C340,499 370,500 389,515"
              stroke="#EA580C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <circle cx="344" cy="480" r="2.5" fill="#EA580C" />
            <circle cx="389" cy="515" r="3" fill="#EA580C" />
          </svg>

          {/* =====================================================
              TOP LABEL
          ====================================================== */}
          <div
            className="absolute flex items-center gap-2 whitespace-nowrap text-[11px] font-medium tracking-[0.16em] text-neutral-500"
            style={{ left: 33, top: 30 }}
          >
            <span className="text-orange-500">✦</span>

            <span>ENGINEERING FOR REAL IMPACT</span>
          </div>

          {/* =====================================================
              CI/CD LABEL
          ====================================================== */}
          <div
            className="absolute flex items-center gap-1.5 whitespace-nowrap text-[12px] text-neutral-600"
            style={{ left: 397, top: 66 }}
          >
            <span className="font-medium">CI/CD</span>

            <span className="text-neutral-400">passing</span>
          </div>

          {/* =====================================================
              FRONTEND BADGE
          ====================================================== */}
          <MiniBadge
            label="Frontend"
            value="ready"
            style={{
              left: -55,
              top: 204,
            }}
          />

          {/* =====================================================
              BACKEND BADGE
          ====================================================== */}
          <MiniBadge
            label="Backend"
            value="healthy"
            style={{
              left: 141,
              top: 515,
            }}
          />

          {/* =====================================================
              DATABASE BADGE
          ====================================================== */}
          <MiniBadge
            label="Database"
            value="connected"
            style={{
              left: 378,
              top: 515,
            }}
          />

          {/* =====================================================
              TERMINAL WINDOW
          ====================================================== */}
          <div
            className="absolute overflow-hidden rounded-2xl border border-black/10 bg-[#12141C] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]"
            style={{
              left: 56,
              top: 100,
              width: 440,
              height: 380,
            }}
          >
            {/* =================================================
                HEADER
            ================================================== */}
            <div className="border-b border-white/5">
              {/* ---------------------------------------------
                  TOP BAR — ONLY THREE DOTS
              ---------------------------------------------- */}
              <div className="flex items-center gap-1.5 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />

                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />

                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              </div>

              {/* ---------------------------------------------
                  SECOND BAR
              ---------------------------------------------- */}
              <div className="relative flex items-center justify-between border-t border-white/5 px-5 py-2.5">
                {/* Logo + brand */}
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/images/logo/sybmel.png"
                    alt="devonionx"
                    width={30}
                    height={30}
                    className="h-[22px] w-[22px] object-contain"
                  />

                  <span className="text-[13px] font-medium text-neutral-200">
                    devonionx
                  </span>
                </div>

                {/* Center path */}
                <div className="absolute left-1/2 -translate-x-1/2 text-[11px] text-neutral-500">
                  ~/devonionx
                </div>

                {/* Online status */}
                <div className="ml-auto flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span>online</span>
                </div>
              </div>
            </div>

            {/* =================================================
                TERMINAL BODY
            ================================================== */}
            <div className="px-6 pt-2 font-mono text-[13px] leading-[20px] text-neutral-300">
              {/* System init */}
              <p className="flex items-center gap-2 text-[#F5F5F5]">
                <span className="text-[#F5F5F5]">$</span>
                <span>system init devonionx</span>
              </p>

              {/* System rows */}
              <div className="mt-3 space-y-[3px]">
                <Row label="product thinking" dots={55} value="ready" />

                <Row label="architecture" dots={60} value="scalable" />

                <Row label="engineering" dots={55} value="production" />

                <Row label="performance" dots={55} value="monitored" />
              </div>

              {/* Ship status */}
              <p className="flex items-center gap-2 mt-4 text-[#F8F7F3]">
                <span className="text-neutral-500">$</span> ship --status
              </p>

              {/* Check rows */}
              <div className="mt-2 space-y-[3px]">
                <CheckRow text="build passed" />

                <CheckRow text="production ready" />
              </div>

              {/* Cursor */}
              <p className="mt-3 flex h-5 items-center gap-1 text-[#F8F7F3]">
                <span className="text-[#FF6900]">&gt;</span>

                <span
                  className={`terminal-cursor inline-block h-4 w-[8px] bg-orange-500 transition-opacity duration-75 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                />
              </p>
            </div>

            {/* =================================================
                FOOTER
            ================================================== */}
            <div className="absolute bottom-0 left-0 z-10 flex h-[44px] w-full items-center justify-between border-t border-white/5 bg-[#12141C] px-5 text-[12px] text-neutral-500">
              {/* Git/version */}
              <div className="flex items-center gap-1.5">
                <span>⎇</span>

                <span>main</span>

                <span className="text-neutral-700">|</span>

                <span>v1.0.0</span>
              </div>

              {/* Deployment */}
              <div className="flex items-center gap-1.5 text-orange-500">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                <span>deployed to production</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TERMINAL ROW
============================================================ */

function Row({ label, dots, value }) {
  return (
    <p className="terminal-row flex items-baseline gap-2 px-5 whitespace-nowrap text-neutral-400">
      {/* Arrow */}
      <span className="text-[#FF6900]">&gt;</span>

      {/* Label */}
      <span className="text-[#A7A9B3]">{label}</span>

      {/* Dotted line */}
      <span className="flex min-w-0 flex-1 items-center gap-[5px] overflow-hidden">
        {Array.from({ length: dots }).map((_, index) => (
          <span
            key={index}
            className="h-[2px] w-[2px] shrink-0 rounded-full bg-[#8B909A]"
          />
        ))}
      </span>

      {/* Value */}
      <span className="text-[#FF6900]">{value}</span>
    </p>
  );
}

/* ============================================================
   CHECK ROW
============================================================ */

function CheckRow({ text }) {
  return (
    <p className="terminal-row flex items-center gap-2 px-5 text-neutral-400">
      <span className="text-emerald-400">✓</span>

      <span>{text}</span>
    </p>
  );
}

/* ============================================================
   MINI BADGE
============================================================ */

function MiniBadge({ label, value, style }) {
  return (
    <div
      className="system-badge absolute flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-black/5 bg-white px-2.5 py-1.5 text-[11px] shadow-sm"
      style={style}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

      <div className="leading-tight">
        <div className="text-neutral-700">{label}</div>

        <div className="text-neutral-400">{value}</div>
      </div>
    </div>
  );
}
