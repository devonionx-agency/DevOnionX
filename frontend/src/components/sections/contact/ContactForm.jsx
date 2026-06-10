"use client";

import { useState } from "react";
import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import GlowCard from "@/components/ui/GlowCard";
import Input from "@/components/ui/Input";

import ServiceSelector from "./ServiceSelector";
import BudgetSelector from "./BudgetSelector";

import {
  contactSchema,
  defaultValues,
} from "./contact.schema";

export default function ContactForm() {
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

  const onSubmit = async (data) => {
    try {
      console.log(data);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <GlowCard className="p-6 md:p-8 lg:p-10 lg:col-span-8">
      <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] bg-[#FF5101]/[0.06]" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 flex flex-col gap-5"
      >
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="Full Name"
              {...register("name")}
            />

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

        {/* Company + Phone */}
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
        <ServiceSelector
          selected={selected}
          setSelected={setSelected}
          setValue={setValue}
          error={errors.services}
        />

        {/* Budget */}
        <BudgetSelector
          budget={budget}
          setBudget={setBudget}
          setValue={setValue}
          error={errors.budget}
        />

        {/* Message */}
        <div>
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
        </div>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[12px] text-[#475569]">
            Your information is safe with us. No spam,
            ever.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[14px] font-semibold text-white bg-[#FF5101] rounded-full px-8 py-3.5 hover:bg-[#e04800] hover:-translate-y-0.5 shadow-[0_0_24px_rgba(255,81,1,0.25)] hover:shadow-[0_8px_28px_rgba(255,81,1,0.4)] transition-all duration-300"
          >
            {isSubmitting
              ? "Sending..."
              : "Send Message"}

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
  );
}