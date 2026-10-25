"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiLoader,
  FiLock,
  FiUser,
} from "react-icons/fi";

import Input from "@/components/ui/Input";
import ServiceSelector from "./ServiceSelector";
import BudgetSelector from "./BudgetSelector";
import {
  contactSchema,
  defaultValues,
} from "@/components/sections/contact/contact.schema";

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        company: data.company || "Not provided",
        phone: data.phone,
        services: data.services?.join(", ") || "Not selected",
        budget: data.budget || "Not selected",
        message: data.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      reset(defaultValues);
      setSelectedServices([]);
      setSelectedBudget("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "block w-full min-w-0 rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-[13px] text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-orange-300 focus:border-[#FF5101] focus:ring-[3px] focus:ring-orange-500/10";

  const labelClass =
    "mb-1.5 block text-xs font-semibold text-slate-700";

  return (
    <div className="group/form relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.045)] transition-all duration-300 hover:border-orange-200 hover:shadow-[0_14px_45px_rgba(255,81,1,0.07)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-orange-100/0 blur-3xl transition-colors duration-500 group-hover/form:bg-orange-100/70"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="relative space-y-5 p-4 sm:p-5 lg:p-6"
      >
        {/* Personal information */}
        <section>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-[#FF5101] transition-all duration-300 group-hover/form:bg-[#FF5101] group-hover/form:text-white">
              <FiUser size={15} />
            </span>

            <h4 className="text-sm font-bold text-slate-900">
              Your information
            </h4>

            <span className="h-px flex-1 bg-slate-100" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="min-w-0">
              <label htmlFor="contact-name" className={labelClass}>
                Full name <span className="text-[#FF5101]">*</span>
              </label>
              <Input
                id="contact-name"
                autoComplete="name"
                placeholder="Your full name"
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              {errors.name && (
                <p role="alert" className="mt-1 text-[11px] text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="min-w-0">
              <label htmlFor="contact-email" className={labelClass}>
                Email address <span className="text-[#FF5101]">*</span>
              </label>
              <Input
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email && (
                <p role="alert" className="mt-1 text-[11px] text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="min-w-0">
              <label htmlFor="contact-company" className={labelClass}>
                Company <span className="font-normal text-slate-400">(Optional)</span>
              </label>
              <Input
                id="contact-company"
                autoComplete="organization"
                placeholder="Company name"
                {...register("company")}
              />
              {errors.company && (
                <p role="alert" className="mt-1 text-[11px] text-red-500">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div className="min-w-0">
              <label htmlFor="contact-phone" className={labelClass}>
                Phone number <span className="text-[#FF5101]">*</span>
              </label>
              <Input
                id="contact-phone"
                type="tel"
                autoComplete="tel"
                placeholder="+880 1XXXXXXXXX"
                aria-invalid={!!errors.phone}
                {...register("phone")}
              />
              {errors.phone && (
                <p role="alert" className="mt-1 text-[11px] text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-t border-slate-100 pt-5">
          <ServiceSelector
            selected={selectedServices}
            setSelected={setSelectedServices}
            setValue={setValue}
            error={errors.services}
          />
        </section>

        {/* Budget */}
        <section className="border-t border-slate-100 pt-5">
          <BudgetSelector
            budget={selectedBudget}
            setBudget={setSelectedBudget}
            setValue={setValue}
            error={errors.budget}
          />
        </section>

        {/* Project details */}
        <section className="border-t border-slate-100 pt-5">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <label
              htmlFor="contact-message"
              className="text-sm font-bold text-slate-900"
            >
              Project details <span className="text-[#FF5101]">*</span>
            </label>
            <span className="text-[10px] text-slate-400">
              Minimum 20 characters
            </span>
          </div>

          <textarea
            id="contact-message"
            rows={4}
            placeholder="Describe your idea, goals, or required features..."
            aria-invalid={!!errors.message}
            className={`${fieldClass} min-h-[112px] resize-y leading-5`}
            {...register("message")}
          />

          {errors.message && (
            <p role="alert" className="mt-1 text-[11px] text-red-500">
              {errors.message.message}
            </p>
          )}
        </section>

        {/* Submit */}
        <section className="border-t border-slate-100 pt-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group/button relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#FF5101] px-5 py-3.5 text-sm font-bold text-white shadow-[0_5px_15px_rgba(255,81,1,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E74700] hover:shadow-[0_9px_24px_rgba(255,81,1,0.28)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/button:translate-x-full"
            />

            <span className="relative">
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <FiLoader className="animate-spin" size={16} />
                  Sending your inquiry...
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  Send project inquiry
                  <FiArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                  />
                </span>
              )}
            </span>
          </button>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <FiLock size={11} className="text-emerald-600" />
              Your information stays private
            </span>

            <span className="inline-flex items-center gap-1.5">
              <FiCheckCircle size={11} className="text-emerald-600" />
              Reply within 24 hours
            </span>
          </div>
        </section>
      </form>
    </div>
  );
}