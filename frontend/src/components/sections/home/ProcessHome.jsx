"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import ProcessCard from "@/components/ui/ProcessCard";
import { processIntro, processSteps } from "@/helper/ourprocess";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Navbar er height onujayi eta change korio
const NAV_OFFSET = 96;
// Ek step er jonno koto viewport height scroll hobe
const SCROLL_PER_STEP = 0.7;
// Pin shudhu boro screen e, reduced-motion off thakle
const PIN_QUERY =
  "(min-width: 1024px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)";

const ProcessHome = () => {
  const rootRef = useRef(null);
  const stageRef = useRef(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const mm = gsap.matchMedia();

      mm.add(PIN_QUERY, () => {
        const cards = gsap.utils.toArray("[data-card]", root);
        const media = cards.map((c) => c.querySelector("[data-media]"));
        const copy = cards.map((c) => c.querySelector("[data-copy]"));
        const items = copy.map((c) => c.querySelectorAll("[data-item]"));
        const allItems = gsap.utils.toArray("[data-item]", root);
        const labels = gsap.utils.toArray("[data-indicator]", root);
        const fills = labels.map((l) => l.querySelector("[data-fill]"));
        const total = cards.length;

        let current = 0;
        let tl = null;

        // Pinned layout CSS er jonno flag
        root.dataset.pinned = "true";

        gsap.set(fills, { scaleX: 0, transformOrigin: "0% 50%" });
        const setFill = fills.map((f) => gsap.quickSetter(f, "scaleX"));

        const indexFrom = (progress) =>
          Math.min(total - 1, Math.floor(progress * total));

        // Timeline indicator scroll er shathe smooth vabe vore
        const paintFills = (progress) => {
          const p = progress * total;
          setFill.forEach((fn, k) => fn(gsap.utils.clamp(0, 1, p - k)));
        };

        const setLabels = (i) => {
          labels.forEach((l, k) => {
            l.dataset.active = String(k === i);
            if (k === i) l.setAttribute("aria-current", "step");
            else l.removeAttribute("aria-current");
          });
        };

        // Animation charai direct step dekhano (initial load / refresh er jonno)
        const showInstant = (i) => {
          tl?.kill();
          media.forEach((m, k) =>
            gsap.set(m, { autoAlpha: k === i ? 1 : 0, y: 0 }),
          );
          copy.forEach((c, k) => gsap.set(c, { autoAlpha: k === i ? 1 : 0 }));
          gsap.set(items[i], { autoAlpha: 1, y: 0 });
          current = i;
          setLabels(i);
        };

        const goTo = (next) => {
          const out = current;
          const dir = next > out ? 1 : -1;
          current = next;
          setLabels(next);
          tl?.kill();

          // Beshi druto scroll korle jei card gula majhkhane ache segulo fade kore dao
          const others = [];
          cards.forEach((_, k) => {
            if (k !== out && k !== next) others.push(media[k], copy[k]);
          });

          tl = gsap.timeline({ defaults: { ease: "power2.out" } });
          tl.to(others, { autoAlpha: 0, duration: 0.2, overwrite: "auto" }, 0)
            // Image crossfade, halka movement shoho
            .to(
              media[out],
              { autoAlpha: 0, duration: 0.5, ease: "power1.inOut" },
              0,
            )
            .fromTo(
              media[next],
              { autoAlpha: 0, y: 16 * dir },
              { autoAlpha: 1, y: 0, duration: 0.6 },
              0,
            )
            // Text age fade out hoye tarpor notun text ashe, jate overlap na hoy
            .to(
              copy[out],
              { autoAlpha: 0, duration: 0.2, ease: "power1.in" },
              0,
            )
            .set(copy[next], { autoAlpha: 1 }, 0.2)
            .fromTo(
              items[next],
              { autoAlpha: 0, y: 14 * dir },
              { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.06 },
              0.22,
            );
        };

        showInstant(0);

        ScrollTrigger.create({
          trigger: stageRef.current,
          start: `top ${NAV_OFFSET}px`,
          end: () => `+=${total * window.innerHeight * SCROLL_PER_STEP}`,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: (self) => {
            // Page reload / resize e jei step e achi shetai dekhao
            const idx = indexFrom(self.progress);
            if (idx !== current) showInstant(idx);
            paintFills(self.progress);
          },
          onUpdate: (self) => {
            paintFills(self.progress);
            const idx = indexFrom(self.progress);
            if (idx !== current) goTo(idx);
          },
        });

        // Breakpoint bodlale ba unmount e shob inline style poriskar
        return () => {
          tl?.kill();
          gsap.set([...media, ...copy, ...allItems, ...fills], {
            clearProps: "all",
          });
          delete root.dataset.pinned;
        };
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="process"
      aria-labelledby="process-heading"
      className="group/process overflow-x-clip bg-[#F5F5F2] py-20 lg:py-28"
    >
      <Container size="hero">
        {/* Heading area */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6B6B66]">
            {processIntro.eyebrow}
          </p>
          <h2
            id="process-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-balance text-[#1F1F1D] sm:text-5xl lg:text-6xl"
          >
            {processIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-[#6B6B66] sm:text-lg">
            {processIntro.description}
          </p>
        </div>

        {/* Pin hobe ei stage ta */}
        <div
          ref={stageRef}
          className="mt-14 group-data-[pinned=true]/process:mt-12 group-data-[pinned=true]/process:flex group-data-[pinned=true]/process:h-[min(44rem,calc(100svh-9rem))] group-data-[pinned=true]/process:flex-col lg:mt-16"
        >
          <ol className="flex flex-col gap-16 md:gap-20 group-data-[pinned=true]/process:grid group-data-[pinned=true]/process:min-h-0 group-data-[pinned=true]/process:flex-1 group-data-[pinned=true]/process:grid-cols-1 group-data-[pinned=true]/process:grid-rows-[minmax(0,1fr)] group-data-[pinned=true]/process:gap-0 [&>li]:group-data-[pinned=true]/process:[grid-area:1/1]">
            {processSteps.map((step, index) => (
              <ProcessCard key={step.id} step={step} priority={index === 0} />
            ))}
          </ol>

          {/* Timeline indicator, shudhu pinned mode e dekha jay */}
          <ol className="mt-8 hidden shrink-0 grid-cols-6 gap-3 group-data-[pinned=true]/process:grid">
            {processSteps.map((step, index) => (
              <li
                key={step.id}
                data-indicator
                data-active={index === 0}
                className="group/step"
              >
                <span className="block h-0.5 w-full overflow-hidden bg-black/10">
                  <span
                    data-fill
                    className="block h-full w-full bg-[#FF5101]"
                  />
                </span>
                <span className="mt-3 flex gap-2 text-xs font-medium text-[#8A8A84] transition-colors duration-300 group-data-[active=true]/step:text-[#1F1F1D]">
                  <span className="group-data-[active=true]/step:text-[#FF5101]">
                    {step.number}
                  </span>
                  {step.title}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
};

export default ProcessHome;
