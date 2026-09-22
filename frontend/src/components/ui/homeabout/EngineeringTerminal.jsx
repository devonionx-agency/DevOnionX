"use client";

import { useEffect, useRef, useState } from "react";
const CANVAS_W = 500;
const CANVAS_H = 600;

export default function EngineeringTerminal() {
  const outerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [showCursor, setShowCursor] = useState(true);

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

  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 600);
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
          {/* ---------- connector lines (behind everything) ---------- */}
          <svg
            className="pointer-events-none absolute left-0 top-0"
            width={CANVAS_W}
            height={CANVAS_H}
            viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
          >
            {/* heading -> terminal top (decorative swoosh) */}
            <path
              d="M148,50 C124,58 118,78 138,86 C154,93 132,95 123,100"
              fill="none"
              stroke="#EA580C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* CI/CD -> terminal top-right */}
            <path
              d="M389,73 C371,76 369,92 384,100"
              fill="none"
              stroke="#EA580C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="389" cy="73" r="3" fill="#EA580C" />
            <circle cx="384" cy="100" r="2.5" fill="#EA580C" />

            {/* Frontend -> terminal left edge */}
            <path
              d="M13,217 C40,214 50,228 56,248"
              fill="none"
              stroke="#EA580C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="13" cy="217" r="3" fill="#EA580C" />
            <circle cx="56" cy="248" r="2.5" fill="#EA580C" />

            {/* Backend -> terminal bottom edge */}
            <path
              d="M198,480 C202,499 172,500 153,515"
              fill="none"
              stroke="#EA580C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="198" cy="480" r="2.5" fill="#EA580C" />
            <circle cx="153" cy="515" r="3" fill="#EA580C" />

            {/* Database -> terminal bottom edge */}
            <path
              d="M344,480 C340,499 370,500 389,515"
              fill="none"
              stroke="#EA580C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="344" cy="480" r="2.5" fill="#EA580C" />
            <circle cx="389" cy="515" r="3" fill="#EA580C" />
          </svg>

          {/* ---------- heading (left) ---------- */}
          <div
            className="absolute flex items-center gap-2 whitespace-nowrap text-[11px] font-medium tracking-[0.16em] text-neutral-500"
            style={{ left: 33, top: 30 }}
          >
            <span className="text-orange-500">✦</span>
            <span>ENGINEERING FOR REAL IMPACT</span>
          </div>

          {/* ---------- CI/CD label (right) ---------- */}
          <div
            className="absolute flex items-center gap-1.5 whitespace-nowrap text-[12px] text-neutral-600"
            style={{ left: 397, top: 66 }}
          >
            <span className="font-medium">CI/CD</span>
            <span className="text-neutral-400">passing</span>
          </div>

          {/* ---------- Frontend badge ---------- */}
          <MiniBadge
            label="Frontend"
            value="ready"
            style={{ left: -55, top: 204 }}
          />

          {/* ---------- Backend badge ---------- */}
          <MiniBadge
            label="Backend"
            value="healthy"
            style={{ left: 141, top: 515 }}
          />

          {/* ---------- Database badge ---------- */}
          <MiniBadge
            label="Database"
            value="connected"
            style={{ left: 378, top: 515 }}
          />

          {/* ---------- terminal window (bড়o kora holo) ---------- */}
          <div
            className="absolute overflow-hidden rounded-2xl border border-black/10 bg-[#12141C] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]"
            style={{ left: 56, top: 100, width: 440, height: 380 }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-1.5 text-[14px] font-medium text-neutral-200">
                  <span className="text-orange-500">▲</span>
                  <span>devonionx</span>
                </div>
              </div>
              <div className="text-[12px] text-neutral-500">~/devonionx</div>
              <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[12px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                online
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-6 font-mono text-[13px] leading-[22px] text-neutral-300">
              <p className="text-neutral-100">
                <span className="text-neutral-500">$</span> system init
                devonionx
              </p>

              <div className="mt-3 space-y-[4px]">
                <Row label="product thinking" dots={50} value="ready" />
                <Row label="architecture" dots={55} value="scalable" />
                <Row label="engineering" dots={55} value="production" />
                <Row label="performance" dots={55} value="monitored" />
              </div>

              <p className="mt-5 text-[#F8F7F3]">
                <span className="text-neutral-500">$</span> ship --status
              </p>

              <div className="mt-3 space-y-[4px]">
                <CheckRow text="build passed" />
                <CheckRow text="production ready" />
              </div>

              <p className="mt-5 flex items-center gap-1 text-[#F8F7F3]">
                <span className="text-neutral-500">&gt;</span>
                <span
                  className={`inline-block h-4 w-[8px] bg-orange-500 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                />
              </p>
            </div>

            {/* Footer bar */}
            <div className="absolute bottom-0 flex w-full items-center justify-between border-t border-white/5 px-5 py-3 text-[12px] text-neutral-500">
              <div className="flex items-center gap-1.5">
                <span>⎇</span>
                <span>main</span>
                <span className="text-neutral-700">|</span>
                <span>v1.0.0</span>
              </div>
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

function Row({ label, dots, value }) {
  return (
    <p className="flex items-baseline gap-2 text-neutral-400">
      <span className="text-neutral-600">&gt;</span>
      <span>{label}</span>
      <span className="flex-1 text-[#A7A9B3]">{".".repeat(dots)}</span>
      <span className="text-orange-400">{value}</span>
    </p>
  );
}

function CheckRow({ text }) {
  return (
    <p className="flex items-center gap-2 text-neutral-400">
      <span className="text-emerald-400">✓</span>
      <span>{text}</span>
    </p>
  );
}

function MiniBadge({ label, value, style }) {
  return (
    <div
      className="absolute flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-black/5 bg-white px-2.5 py-1.5 text-[11px] shadow-sm"
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