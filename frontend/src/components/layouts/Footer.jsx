"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
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
    href: "https://github.com",
    icon: FaGithub,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com",
    icon: FaXTwitter,
  },
];

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center text-sm text-zinc-400 transition-all duration-300 hover:text-white"
    >
      <span>{children}</span>
      <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,81,1,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* CTA SECTION */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Ready to build something exceptional?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                  Let&apos;s discuss your next digital product, SaaS platform,
                  or business website.
                </p>
              </div>

              <div>
                <Link
                  href="/contact"
                  aria-label="Book a Call"
                  className="group inline-flex items-center justify-center rounded-full bg-[#FF5101] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(255,81,1,0.35)]"
                >
                  Book a Call
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN FOOTER */}
        <section className="border-t border-white/10 py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 xl:grid-cols-4 xl:gap-16">
            {/* Brand */}
            <div className="max-w-sm">
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="Devonionx Home"
              >
                <span className="text-2xl font-semibold tracking-tight">
                  Devonionx
                </span>
              </Link>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                We design and develop premium digital experiences for ambitious
                businesses and startups.
              </p>
            </div>

            {/* Company */}
            <div>
              <FooterHeading>Company</FooterHeading>

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
                      <Icon className="mr-3 h-4 w-4" />
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