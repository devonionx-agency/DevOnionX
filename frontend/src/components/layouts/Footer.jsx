"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import ParticlesBackground from "../ui/ParticlesBackground";

const companyLinks = [
  { name: "About Me", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "SaaS Development", href: "/services/saas-development" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "API Integration", href: "/services/api-integration" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/devonionx-agency",
    icon: FaGithub,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com",
    icon: FaXTwitter,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/01566068310",
    icon: FaWhatsapp,
  },
];

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between text-sm text-zinc-400 transition-all duration-300 hover:text-white"
    >
      <span>{children}</span>
      <ArrowUpRight className=" h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
    </Link>
  );
}

function FooterHeading({ children }) {
  return (
    <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="hidden lg:block">
        <ParticlesBackground />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* CTA SECTION */}
        <section className="py-5 lg:py-10">
          <div className="relative overflow-hidden rounded-[40px] border border-[#FF5101]/30 p-5">
            <div className="relative z-10 grid gap-50 lg:grid-cols-2 lg:items-center">
              <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#FF5101]/10 blur-[140px]" />

              <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[120px]" />
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Have an idea?
                  <br />
                  Let&apos;s turn it into{" "}
                  <span className="bg-gradient-to-r from-[#FF5101] via-pink-500 to-violet-500 bg-clip-text text-transparent">
                    something exceptional.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                  Let&apos;s discuss your next digital product, SaaS platform,
                  or business website.
                </p>
                <Link href="/contact" className="">
                  <div className="">
                    <ArrowUpRight className="mb-2 h-6 w-6" />

                    <span className="text-lg font-medium">Book a Call</span>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col divide-y divide-[#FF5101]/15 rounded-2xl border border-white/8 overflow-hidden">
                {[
                  { num: "15", suffix: "+", label: "Projects delivered" },
                  { num: "4", suffix: "x", label: "Average ROI for clients" },
                  { num: "98", suffix: "%", label: "Client satisfaction" },
                ].map(({ num, suffix, label }) => (
                  <div
                    key={label}
                    className="group py-6 bg-white/[0.03] hover:bg-[#FF5101]/5 transition-colors duration-200"
                  >
                    <div className="text-4xl font-semibold tracking-tight leading-none mb-1.5">
                      {num}
                      <span className="text-[#FF5101]">{suffix}</span>
                    </div>
                    <div className="text-sm text-zinc-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MAIN FOOTER */}
        <section className="border-t border-white/10">
          <div className="grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="Devonionx Home"
              >
                <Image
                  src="/images/logo/navlogo.png"
                  alt="DevonionX"
                  width={180}
                  height={40}
                  className="h-auto"
                />
              </Link>
              <p>
                We design and develop premium digital experiences for ambitious
                businesses and startups.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#FF5101]/30 px-5 py-3 text-sm text-[#FF5101] transition-all duration-300 hover:bg-[#FF5101] hover:text-white"
              >
                Let&apos;s Work Together
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Company */}
            <div>
              <FooterHeading>Our Agency</FooterHeading>

              <nav className="flex flex-col gap-4">
                {companyLinks.map((item) => (
                  <FooterLink key={item.name} href={item.href}>
                    {item.name}
                  </FooterLink>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <FooterHeading>Services</FooterHeading>

              <nav className="flex flex-col gap-4">
                {serviceLinks.map((item) => (
                  <FooterLink key={item.name} href={item.href}>
                    {item.name}
                  </FooterLink>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <FooterHeading>Connect</FooterHeading>

              <div className="flex flex-col gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
                    >
                      <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
                        <Icon className="h-4 w-4" />
                      </div>
                      {item.name}

                      <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM BAR */}

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-sm text-zinc-500">
              © 2026 Devonionx. All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-6 md:justify-end">
              <Link
                href="/privacy-policy"
                className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-service"
                className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
