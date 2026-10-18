"use client";

import React, { memo, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { LuSearch, LuClipboardList, LuRocket } from "react-icons/lu";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import { COLORS, HEADER, SHAPES, STEPS } from "@/helper/services/howWeWork";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ---------- Icons (module level, re-create hoy na) ---------- */
const ICON_CLASS = "h-9 w-9";

const ICONS = {
  search: () => <LuSearch className={ICON_CLASS} strokeWidth={2} />,
  plan: () => <LuClipboardList className={ICON_CLASS} strokeWidth={1.8} />,
  launch: () => <LuRocket className={ICON_CLASS} strokeWidth={1.8} />,
  build: () => (
    <div className="relative flex items-center justify-center">
      <FiChevronLeft className={ICON_CLASS} strokeWidth={1.8} />
      <span
        className="absolute h-8 w-[3px] rotate-[20deg] rounded-full"
        style={{ background: COLORS.orange }}
      />
      <FiChevronRight className={ICON_CLASS} strokeWidth={1.8} />
    </div>
  ),
};

/* ---------- Single step (static, tai memo -- kokhono re-render hobe na) ---------- */
const Step = memo(function Step({ step }) {
  const shape = SHAPES[step.shape];
  const Icon = ICONS[step.icon];

  return (
    <div
      data-step
      className="w-full cursor-default"
      style={{ maxWidth: shape.width }}
    >
      <div data-lift className="relative">
        <svg
          viewBox={shape.viewBox}
          className="h-auto w-full"
          fill="none"
          strokeWidth="2"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* base outline */}
          <path data-base d={shape.d} pathLength="1" stroke={COLORS.navy} />
          {/* hover-e orange outline draw hoy */}
          <path
            data-trace
            d={shape.d}
            pathLength="1"
            stroke={COLORS.orange}
            strokeDasharray="1 1"
            strokeDashoffset="1"
          />
        </svg>

        <div
          className="absolute top-1/2 flex -translate-y-1/2 flex-col items-center"
          style={{
            left: step.centerShift
              ? `calc(50% - ${step.centerShift}px)`
              : "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            data-badge
            className="flex h-[130px] w-[130px] items-center justify-center rounded-full"
            style={{ background: COLORS.peach, color: COLORS.navy }}
          >
            <div data-icon>
              <Icon />
            </div>
          </div>
          <span
            data-no
            className="mt-2 text-[25px] font-bold tracking-wide"
            style={{ color: COLORS.orange }}
          >
            {step.no}
          </span>
        </div>
      </div>

      <div data-text>
        <h3
          className="mt-10 text-[28px] font-bold leading-tight"
          style={{ color: COLORS.navy }}
        >
          {step.title}
        </h3>
        <p
          className="mt-3 max-w-[260px] text-[17px] leading-relaxed"
          style={{ color: COLORS.slate }}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
});

/* ---------- Section ---------- */
function HowWeWork() {
  const rootRef = useRef(null);

  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const q = gsap.utils.selector(root);
    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        canHover: "(hover: hover) and (pointer: fine)",
      },
      (ctx) => {
        const { motion, canHover } = ctx.conditions;
        // reduced-motion hole kono animation nai, content shoja visible
        if (!motion) return;

        const heads = q("[data-head]");
        const cards = q("[data-step]");
        const bases = q("[data-base]");
        const badges = q("[data-badge]");
        const nums = q("[data-no]");
        const texts = q("[data-text]");
        const arrows = q("[data-arrow]");

        /* ---- Intro: ekbar-i, scroll-e viewport-e ashle ---- */
        gsap.set(heads, { y: 24, autoAlpha: 0 });
        gsap.set(bases, { strokeDasharray: "1 1", strokeDashoffset: 1 });
        gsap.set(badges, { scale: 0.6, autoAlpha: 0 });
        gsap.set(nums, { y: 8, autoAlpha: 0 });
        gsap.set(texts, { y: 20, autoAlpha: 0 });
        gsap.set(arrows, {
          scaleX: 0,
          autoAlpha: 0,
          transformOrigin: "0% 50%",
        });

        const intro = gsap
          .timeline({ paused: true, defaults: { ease: "power3.out" } })
          .to(heads, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1 }, 0)
          .to(
            bases,
            {
              strokeDashoffset: 0,
              duration: 1.1,
              ease: "power2.inOut",
              stagger: 0.14,
            },
            0.25,
          )
          .to(
            badges,
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.6,
              ease: "back.out(1.6)",
              stagger: 0.14,
            },
            0.65,
          )
          .to(nums, { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.14 }, 0.8)
          .to(texts, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.12 }, 0.85)
          .to(
            arrows,
            { scaleX: 1, autoAlpha: 1, duration: 0.5, stagger: 0.14 },
            1,
          )
          // intro shesh -- dash remove, tahole outline fully solid thake
          .set(bases, { clearProps: "strokeDasharray,strokeDashoffset" });

        const io = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;
            intro.play();
            io.disconnect();
          },
          { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
        );
        io.observe(root);

        const cleanups = [() => io.disconnect()];

        /* ---- Hover: card-per ekta timeline, ekbar-i banano, play/reverse ---- */
        if (canHover) {
          cards.forEach((card, i) => {
            const cfg = STEPS[i];
            const lift = card.querySelector("[data-lift]");
            const trace = card.querySelector("[data-trace]");
            const badge = card.querySelector("[data-badge]");
            const icon = card.querySelector("[data-icon]");
            const title = card.querySelector("h3");

            gsap.set(trace, { strokeDashoffset: 1 });

            const tl = gsap
              .timeline({
                paused: true,
                defaults: { ease: "power3.out", duration: 0.55 },
                onReverseComplete: () => {
                  lift.style.willChange = "auto";
                },
              })
              .to(lift, { y: -6 }, 0)
              .to(
                trace,
                { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" },
                0,
              )
              .to(badge, { scale: 1.07 }, 0)
              .to(icon, { ...cfg.motion, ease: "back.out(2)" }, 0.05)
              .to(title, { x: 4, duration: 0.4 }, 0);

            const enter = () => {
              lift.style.willChange = "transform"; // sudhu hover-er shomoy
              tl.timeScale(1).play();
            };
            const leave = () => tl.timeScale(1.5).reverse();

            card.addEventListener("pointerenter", enter);
            card.addEventListener("pointerleave", leave);
            cleanups.push(() => {
              card.removeEventListener("pointerenter", enter);
              card.removeEventListener("pointerleave", leave);
              tl.kill();
            });
          });
        }

        return () => cleanups.forEach((fn) => fn());
      },
      root,
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="w-full px-6 py-20 md:px-12 lg:py-28 bg-white"
    >
      <div className="mx-auto max-w-[1470px]">
        <div data-head className="flex items-center gap-3">
          <span className="h-[2px] w-9" style={{ background: COLORS.orange }} />
          <span
            className="text-[15px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: COLORS.orange }}
          >
            {HEADER.eyebrow}
          </span>
        </div>

        <h2
          data-head
          className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-[56px]"
          style={{ color: COLORS.navy }}
        >
          {HEADER.title}
          <span style={{ color: COLORS.orange }}>.</span>
        </h2>

        <p
          data-head
          className="mt-4 max-w-2xl text-lg md:text-[22px]"
          style={{ color: COLORS.slate }}
        >
          {HEADER.subtitle}
        </p>

        <div className="mt-16 flex flex-col items-start gap-14 sm:grid sm:grid-cols-2 sm:gap-x-10 lg:mt-20 lg:flex lg:flex-row lg:items-start lg:gap-0">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.id}>
              <Step step={step} />
              {i < STEPS.length - 1 && (
                <div className="hidden h-[240px] flex-1 items-center justify-center px-3 lg:flex">
                  <HiArrowLongRight
                    data-arrow
                    className="h-12 w-16"
                    style={{ color: COLORS.orange }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
