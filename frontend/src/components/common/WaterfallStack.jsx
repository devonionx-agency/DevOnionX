"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ─── Defaults ─────────────────────────────────────────────────────────────────
const DEFAULT_PLATES = [
  { label: ".json", color: "#7c3aed", glow: "#a855f7", isBase: true  },
  { label: ".vue",  color: "#818cf8", glow: "#a5b4fc", isBase: false },
  { label: ".tsx",  color: "#c4b5fd", glow: "#ddd6fe", isBase: false },
  { label: ".css",  color: "#38bdf8", glow: "#7dd3fc", isBase: false },
  { label: ".js",   color: "#facc15", glow: "#fde68a", isBase: false },
];

/**
 * Each badge needs:
 *   label  — string shown inside the badge
 *   corner — one of: "TL" | "TR" | "BL" | "BR"
 *   ox     — horizontal offset from that corner (px at scale=1, negative = left)
 *   oy     — vertical   offset from that corner (px at scale=1, negative = up)
 *
 * Second-image layout (three sides):
 *   TL corner → badge extends upper-left   (.css)
 *   BL corner → badge extends lower-left   (.js)
 *   BR corner → badge extends lower-right  (.html)
 */
const DEFAULT_BADGES = [
  // { label: ".css",  corner: "TL", ox: -140, oy: -30 },
  // { label: ".js",   corner: "BL", ox: -110, oy:  55 },
  // { label: ".html", corner: "BR", ox:  120, oy:  55 },
];

// ─── Animation timing (seconds) ───────────────────────────────────────────────
const CONFIG = {
  fallDuration:   1.0,
  stagger:        0.5,
  holdDuration:   0.6,
  fadeDuration:   0.4,
  loopDelay:      0.3,
  floatAmplitude: 3,
  floatSpeed:     0.8,
};

// ─── Geometry constants (designed at scale = 1 → REF_W × REF_H canvas) ───────
const BASE_PW   = 200;
const BASE_PH   = 160;
const BASE_THICK = 22;
const PLATE_THICK = 10;
const BASE_Z    = 0;
const LAND_Z    = BASE_Z + BASE_THICK + 8;
const SPAWN_Z   = LAND_Z + 500;
const ISO_TILT  = 0.52;
const REF_W     = 520;
const REF_H     = 460;

// Badge box geometry (at scale = 1)
const BADGE_W   = 68;
const BADGE_H   = 30;
const BADGE_R   = 8;

// ─── Iso projection ───────────────────────────────────────────────────────────
function iso(x, y, z) {
  return {
    x: (x - y) * Math.cos(ISO_TILT),
    y: (x + y) * Math.sin(ISO_TILT) * 0.5 - z,
  };
}

// ─── Returns the four top-face corners [TL, TR, BR, BL] in canvas space ──────
function getTopFaceCorners(originX, originY, scale) {
  const pw   = BASE_PW * scale;
  const ph   = BASE_PH * scale;
  const topZ = (LAND_Z + BASE_THICK) * scale;
  const raw  = [
    [-pw / 2, -ph / 2],
    [ pw / 2, -ph / 2],
    [ pw / 2,  ph / 2],
    [-pw / 2,  ph / 2],
  ];
  return raw.map(([cx, cy]) => {
    const p = iso(cx, cy, topZ);
    return { x: p.x + originX, y: p.y + originY };
  });
}

// ─── Draw helpers ─────────────────────────────────────────────────────────────
function drawFace(ctx, pts, fill, strokeColor, glowColor, glowBlur = 0) {
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  pts.slice(1).forEach((p) => ctx.lineTo(p.x, p.y));
  ctx.closePath();
  if (glowColor) { ctx.shadowColor = glowColor; ctx.shadowBlur = glowBlur; }
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 0.8;
  ctx.stroke();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

// ─── Draw a single plate ──────────────────────────────────────────────────────
function drawPlate(ctx, ox, oy, zBase, color, glow, isThick, label, alpha, scale, isBase) {
  if (alpha <= 0) return;

  const pw = BASE_PW * scale;
  const ph = BASE_PH * scale;
  const d  = (isThick ? BASE_THICK : PLATE_THICK) * scale;
  const sz = zBase * scale;
  const x0 = -pw / 2, y0 = -ph / 2;

  const corners = [
    [x0,      y0     ],
    [x0 + pw, y0     ],
    [x0 + pw, y0 + ph],
    [x0,      y0 + ph],
  ];

  const top = ([cx, cy]) => { const p = iso(cx, cy, sz + d); return { x: p.x + ox, y: p.y + oy }; };
  const bot = ([cx, cy]) => { const p = iso(cx, cy, sz);     return { x: p.x + ox, y: p.y + oy }; };

  const [TL, TR, BR, BL]      = corners.map(top);
  const [TLb, TRb, BRb, BLb] = corners.map(bot);

  ctx.save();
  ctx.globalAlpha = alpha;

  // right face
  drawFace(ctx, [TR, TRb, BRb, BR], color + "28", color + "55", null);
  // left face
  drawFace(ctx, [TL, TLb, BLb, BL], color + "18", color + "44", null);
  // top face
  drawFace(ctx, [TL, TR, BR, BL], color + "1a", color + "99", glow, isBase ? 28 * scale : 14 * scale);

  if (isBase) {
    ctx.beginPath();
    ctx.moveTo(TLb.x, TLb.y);
    ctx.lineTo(TRb.x, TRb.y);
    ctx.lineTo(BRb.x, BRb.y);
    ctx.lineTo(BLb.x, BLb.y);
    ctx.closePath();
    ctx.strokeStyle = glow + "cc";
    ctx.lineWidth   = 2.5 * scale;
    ctx.shadowColor = glow;
    ctx.shadowBlur  = 24 * scale;
    ctx.stroke();
    ctx.shadowBlur  = 0;
  }

  // label on top face
  const fcx = (TL.x + TR.x + BR.x + BL.x) / 4;
  const fcy = (TL.y + TR.y + BR.y + BL.y) / 4;
  const ang = Math.atan2(TR.y - TL.y, TR.x - TL.x);

  ctx.save();
  ctx.translate(fcx, fcy);
  ctx.rotate(ang);
  ctx.shadowColor  = glow;
  ctx.shadowBlur   = 10 * scale;
  ctx.font         = `700 ${Math.round((isThick ? 16 : 13) * scale)}px monospace`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle    = isThick ? "#fff" : color;
  ctx.fillText(label, 0, 0);
  ctx.restore();

  ctx.restore();
}

// ─── Draw all badges + their connector lines ──────────────────────────────────
function drawBadges(ctx, ox, oy, badges, scale) {
  const face      = getTopFaceCorners(ox, oy, scale);
  const cornerMap = { TL: face[0], TR: face[1], BR: face[2], BL: face[3] };

  const bw = BADGE_W * scale;
  const bh = BADGE_H * scale;
  const br = BADGE_R * scale;

  badges.forEach((badge) => {
    const anchor = cornerMap[badge.corner];
    if (!anchor) return;

    // Badge centre position — offset scaled proportionally
    const bx = anchor.x + badge.ox * scale;
    const by = anchor.y + badge.oy * scale;

    // ── Connector line (drawn first, under the badge) ──────────────────────
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(anchor.x, anchor.y);
    ctx.lineTo(bx, by);
    ctx.strokeStyle = "#7c3aed99";
    ctx.lineWidth   = 1 * scale;
    ctx.stroke();

    // Dot at the plate corner anchor
    ctx.beginPath();
    ctx.arc(anchor.x, anchor.y, 2.8 * scale, 0, Math.PI * 2);
    ctx.fillStyle   = "#9d6fff";
    ctx.shadowColor = "#a855f7";
    ctx.shadowBlur  = 8 * scale;
    ctx.fill();
    ctx.shadowBlur  = 0;
    ctx.restore();

    // ── Badge box ──────────────────────────────────────────────────────────
    ctx.save();

    // outer box
    roundRect(ctx, bx - bw / 2, by - bh / 2, bw, bh, br);
    ctx.fillStyle   = "#100e1e";
    ctx.strokeStyle = "#7c3aed";
    ctx.lineWidth   = 1.3 * scale;
    ctx.shadowColor = "#a855f7";
    ctx.shadowBlur  = 18 * scale;
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur  = 0;

    // inner highlight ring
    ctx.globalAlpha = 0.3;
    roundRect(ctx, bx - bw / 2 + 1.2 * scale, by - bh / 2 + 1.2 * scale, bw - 2.4 * scale, bh - 2.4 * scale, br * 0.7);
    ctx.strokeStyle = "#c4b5fd";
    ctx.lineWidth   = 0.7 * scale;
    ctx.stroke();

    // label
    ctx.globalAlpha  = 1;
    ctx.font         = `700 ${Math.round(11.5 * scale)}px monospace`;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle    = "#e9d5ff";
    ctx.shadowColor  = "#c4b5fd";
    ctx.shadowBlur   = 5 * scale;
    ctx.fillText(badge.label, bx, by);
    ctx.shadowBlur   = 0;

    ctx.restore();
  });
}

// ─── Floating background particles ────────────────────────────────────────────
function drawParticles(ctx, t, W, H, plates) {
  for (let i = 0; i < 12; i++) {
    const px = (Math.sin(t * 0.3 + i * 137.5) * 0.42 + 0.5) * W;
    const py = (Math.cos(t * 0.2 + i * 97.3)  * 0.42 + 0.5) * H;
    ctx.beginPath();
    ctx.arc(px, py, Math.sin(t + i) * 0.5 + 0.7, 0, Math.PI * 2);
    ctx.fillStyle = plates[i % plates.length].color + "16";
    ctx.fill();
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function WaterfallStack({
  plates    = DEFAULT_PLATES,
  badges    = DEFAULT_BADGES,
  height    = 520,
  config    = {},
  className = "",
  style     = {},
}) {
  const canvasRef = useRef(null);
  const wrapRef   = useRef(null);
  const stateRef  = useRef({ slots: [], gsapTl: null, loopTimer: null, scale: 1 });
  const rafRef    = useRef(null);

  const cfg = { ...CONFIG, ...config };

  const basePlate    = plates.find((p) => p.isBase) ?? plates[0];
  const fallingPlates = plates.filter((p) => !p.isBase);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap   = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    let W = 0, H = 0;

    // ── Resize: keeps pixel-perfect sharpness on all DPRs ─────────────────
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = wrap.clientWidth;
      H = wrap.clientHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Use the smaller ratio so the plate always fits inside the canvas
      stateRef.current.scale = Math.min(W / REF_W, H / REF_H);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // ── GSAP waterfall loop ────────────────────────────────────────────────
    function buildWaterfall() {
      const slots = fallingPlates.map((p) => ({
        z: SPAWN_Z, alpha: 0, def: p,
      }));
      stateRef.current.slots = slots;

      const tl = gsap.timeline({
        onComplete: () => {
          stateRef.current.loopTimer = gsap.delayedCall(cfg.loopDelay, buildWaterfall);
        },
      });
      stateRef.current.gsapTl = tl;

      slots.forEach((slot, i) => {
        const t0 = i * cfg.stagger;
        tl.to(slot, { z: LAND_Z, duration: cfg.fallDuration, ease: "power2.out" }, t0);
        tl.to(slot, { alpha: 1,  duration: cfg.fallDuration * 0.5, ease: "power1.out" }, t0);
        tl.to(slot, { alpha: 0,  duration: cfg.fadeDuration, ease: "power2.in" },
              t0 + cfg.fallDuration + cfg.holdDuration);
      });
    }

    buildWaterfall();

    // ── Render loop ────────────────────────────────────────────────────────
    const t0ref = performance.now();

    function render() {
      const t     = (performance.now() - t0ref) * 0.001;
      const scale = stateRef.current.scale;
      const ox    = W * 0.5;
      const oy    = H * 0.52;

      ctx.clearRect(0, 0, W, H);
      drawParticles(ctx, t, W, H, plates);

      // Base plate with gentle float
      const baseFloat = Math.sin(t * cfg.floatSpeed) * cfg.floatAmplitude;
      drawPlate(ctx, ox, oy, BASE_Z + baseFloat, basePlate.color, basePlate.glow,
                true, basePlate.label, 1, scale, true);

      // Falling plates
      stateRef.current.slots.forEach((slot) => {
        drawPlate(ctx, ox, oy, slot.z, slot.def.color, slot.def.glow,
                  false, slot.def.label, slot.alpha, scale, false);
      });

      // Badges + connectors
      drawBadges(ctx, ox, oy, badges, scale);

      rafRef.current = requestAnimationFrame(render);
    }

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      stateRef.current.gsapTl?.kill();
      stateRef.current.loopTimer?.kill();
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plates, badges]);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height,
        background: "#0c0c12",
        borderRadius: 16,
        overflow: "hidden",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}