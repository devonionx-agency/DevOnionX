"use client";
import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W, H, particles = [];
    const COUNT = 130;
    const CONNECT_DIST = 130;

    const rand = (a, b) => a + Math.random() * (b - a);

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const createParticle = () => ({
      x: rand(0, W),
      y: rand(0, H),
      vx: rand(-0.35, 0.35),
      vy: rand(-0.35, 0.35),
      r: rand(0.8, 2.2),
      alpha: rand(0.25, 0.85),
      color: Math.random() > 0.72 ? "#FF5101" : "#ffffff",
    });

    const init = () => {
      resize();
      particles = Array.from({ length: COUNT }, createParticle);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const hex = Math.floor(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + hex;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const op = (1 - dist / CONNECT_DIST) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(255,81,1,${op})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        const mx = mouseRef.current.x, my = mouseRef.current.y;
        const mdx = mx - p.x, mdy = my - p.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 160) {
          const op = (1 - md / 160) * 0.65;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(255,81,1,${op})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const ro = new ResizeObserver(init);
    ro.observe(canvas);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    init();
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none bg-black"
    />
  );
}