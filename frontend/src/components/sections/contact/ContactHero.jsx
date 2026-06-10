"use client";

import {
  contactSchema,
  defaultValues,
} from "./contact.schema";




import { useRef, useEffect, useState } from "react";
import gsap from "gsap";


import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTACT_INFO, SERVICES, BUDGETS } from "@/helper/contact";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";


gsap.registerPlugin(ScrollTrigger);





import React from "react";


const Input = React.forwardRef(
  (
    {
      placeholder,
      type = "text",
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...props}
        className={`w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3.5 text-[14px] text-white placeholder:text-[#475569] focus:border-[#FF5101]/50 focus:bg-[#FF5101]/[0.03] outline-none transition-all duration-300 ${className}`}
      />
    );
  }
);


Input.displayName = "Input";


/* ── GlowCard ──
   CSS custom properties (--mx, --my) and radial-gradient with var()
   cannot be expressed in Tailwind — kept as style={} intentionally */
function GlowCard({ children, className = "", style = {} }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty(
      "--mx",
      `${((e.clientX - r.left) / r.width) * 100}%`,
    );
    ref.current.style.setProperty(
      "--my",
      `${((e.clientY - r.top) / r.height) * 100}%`,
    );
  };
  return (
    <div
      ref={ref}
      onMouseMove={move}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] ${className}`}
      style={{ "--mx": "50%", "--my": "50%", ...style }}
    >
      {/* radial-gradient needs CSS var — cannot use Tailwind here */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx) var(--my), rgba(255,81,1,0.06), transparent 55%)",
        }}
      />
      {children}
    </div>
  );
}


export default function ContactHero() {
  const badgeRef = useRef(null);
  const gridRef = useRef(null);


  const [selected, setSelected] = useState([]);
  const [budget, setBudget] = useState("");


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });


  const toggleService = (s) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );


  const onSubmit = async (data) => {
    try {
      console.log(data);


      await new Promise((resolve) => setTimeout(resolve, 1500));


      alert("Message sent successfully");
    } catch (error) {
      alert("Something went wrong");
    }
  };


  useEffect(() => {
    gsap.fromTo(
      badgeRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
    );


    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: isMobile ? 20 : 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: isMobile ? "top 92%" : "top 87%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, gridRef);


    return () => ctx.revert();
  }, []);


  return (
    <section className="bg-[#050505] pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Dot grid — backgroundImage + backgroundSize cannot be Tailwind */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,81,1,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />


      {/* Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[120px] bg-[#FF5101]/[0.09]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full blur-[100px] bg-violet-500/[0.07]" />


      <Container size="xl">
        {/* Badge */}
        <div ref={badgeRef} className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[3px] uppercase text-[#FF5101] border border-[#FF5101]/25 bg-[#FF5101]/[0.07] rounded-full px-5 py-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5101] animate-pulse" />
            Available For New Projects
          </span>
        </div>


        <SectionHeader
          label="Contact Us"
          text="Let's Build Something Exceptional"
          colorWord="Exceptional"
          className="mb-10 md:mb-14"
        />


        {/* Form Grid — gridTemplateColumns repeat(12,1fr) has no Tailwind equivalent */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* ── Left column ── */}
          {/* gridColumn span 4 of 12 has no Tailwind equivalent without config */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <GlowCard className="p-7 flex-1">
              <p className="text-[11px] font-bold tracking-[3px] uppercase text-[#FF5101] mb-6">
                Contact Information
              </p>
              <div className="flex flex-col gap-5">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[#FF5101] bg-[#FF5101]/10 border border-[#FF5101]/20">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[11px] text-[#475569] mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[14px] text-white hover:text-[#FF5101] transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[14px] text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>


            <div className="rounded-2xl p-6 border border-[#FF5101]/15 bg-[#FF5101]/[0.05]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-[13px] font-semibold text-white">
                  We're Online
                </span>
              </div>
              <p className="text-[13px] text-[#64748b] leading-[1.7]">
                Typically reply within{" "}
                <span className="text-[#FF5101] font-semibold">24 hours.</span>{" "}
                For urgent queries, reach us on WhatsApp.
              </p>
            </div>
          </div>


          {/* ── Right column: form ── */}
          <GlowCard className="p-6 md:p-8 lg:p-10 lg:col-span-8">
            <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] bg-[#FF5101]/[0.06]" />


            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative z-10 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Full Name" {...register("name")} />


                  {errors.name && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    {...register("email")}
                  />


                  {errors.email && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Company (Optional)"
                  {...register("company")}
                />
                <div>
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    {...register("phone")}
                  />


                  {errors.phone && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>


              {/* Services */}
              <div>
                <p className="text-[12px] font-bold tracking-[2px] uppercase text-[#FF5101] mb-3">
                  Select Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => {
                    const active = selected.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          const updated = selected.includes(s)
                            ? selected.filter((x) => x !== s)
                            : [...selected, s];


                          setSelected(updated);


                          setValue("services", updated, {
                            shouldValidate: true,
                          });
                        }}
                        className={`text-[12px] font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                          active
                            ? "border-[#FF5101] bg-[#FF5101]/10 text-[#FF5101]"
                            : "border-white/[0.08] bg-white/[0.03] text-[#94a3b8]"
                        }`}
                      >
                       
                        {active ? "✓ " : ""}
                        {s}
                      </button>
                    );
                  })}
                </div>
                {errors.services && (
                          <p className="mt-2 text-xs text-red-400">
                            {errors.services.message}
                          </p>
                        )}
              </div>


              {/* Budget */}
              <div>
                <p className="text-[12px] font-bold tracking-[2px] uppercase text-[#FF5101] mb-3">
                  Budget Range
                </p>
                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map((b) => {
                    const active = budget === b;
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => {
                          setBudget(b);


                          setValue("budget", b, {
                            shouldValidate: true,
                          });
                        }}
                        className={`text-[12px] font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                          active
                            ? "border-[#FF5101] bg-[#FF5101]/10 text-[#FF5101]"
                            : "border-white/[0.08] bg-white/[0.03] text-[#94a3b8]"
                        }`}
                      >
                        {b}
                       
                      </button>
                    );
                  })}
                </div>
                {errors.budget && (
                          <p className="mt-2 text-xs text-red-400">
                            {errors.budget.message}
                          </p>
                        )}
              </div>


              {/* Message */}
              <textarea
                rows={5}
                {...register("message")}
                placeholder="Tell us about your project — what are you building, what's the timeline, any specific requirements?"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-[14px] text-white placeholder:text-[#475569] focus:border-[#FF5101]/50 focus:bg-[#FF5101]/[0.03] outline-none transition-all duration-300 resize-none"
              />
              {errors.message && (
                <p className="mt-2 text-xs text-red-400">
                  {errors.message.message}
                </p>
              )}
              {/* Submit */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[12px] text-[#475569]">
                  Your information is safe with us. No spam, ever.
                </p>


                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[14px] font-semibold text-white bg-[#FF5101] rounded-full px-8 py-3.5 hover:bg-[#e04800] hover:-translate-y-0.5 shadow-[0_0_24px_rgba(255,81,1,0.25)] hover:shadow-[0_8px_28px_rgba(255,81,1,0.4)] transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </GlowCard>
        </div>
      </Container>
    </section>
  );
}
