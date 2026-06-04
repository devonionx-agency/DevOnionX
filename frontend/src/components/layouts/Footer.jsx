"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ParticlesBackground from "../ui/ParticlesBackground";
import { companyLinks, serviceLinks, socialLinks } from "@/helper/footer";
import { TbMessageCircleCode } from "react-icons/tb";
import { RiMailSendLine } from "react-icons/ri";
import { LuTimerReset } from "react-icons/lu";
import Container from "../ui/Container";

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
      <Container size="xl">
        <div className="relative  px-6 sm:px-8 lg:px-12">
          {/* CTA SECTION */}
          <section className="py-5">
            <div className="relative overflow-hidden rounded-[40px] border border-[#FF5101]/30 p-5">
              <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#FF5101]/10 blur-[140px]" />

                <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[120px]" />
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    Have an idea?
                    <br />
                    Let&apos;s turn it into{" "}
                    <span className="bg-gradient-to-r from-[#FF5101] via-pink-500 to-violet-500 bg-clip-text text-transparent">
                      something exceptional
                    </span>
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                    Let&apos;s discuss your next digital product, SaaS platform,
                    or business website.
                  </p>
                  <Link href="/contact" className="">
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-medium">Book a Call</span>
                      <ArrowUpRight className="" />
                    </div>
                  </Link>
                </div>
                {/* Right Side Card */}
                <div className="max-w-[480px] relative z-10">
                  <div className="rounded-[32px] border border-white/10 bg-white/3 p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF5101]/20 bg-[#FF5101]/10">
                        <TbMessageCircleCode className="h-6 w-6 text-[#FF5101]" />
                      </div>

                      <h3 className="text-3xl font-semibold">Let's Talk</h3>
                    </div>

                    <p className="mt-4 text-zinc-400 leading-relaxed">
                      Have a project in mind? Let&apos;s discuss your goals,
                      timeline, and requirements.
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        <p className="flex text-[18px] text-[#FF5101]">
                          <RiMailSendLine />
                        </p>
                        <p className="text-white">hello@devonionx.com</p>
                      </div>

                      <div className="flex items-center gap-1">
                        <p className="flex text-[18px] text-[#FF5101]">
                          <LuTimerReset />
                        </p>
                        <p className="text-white">Typically within 24 hours</p>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF5101] px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105"
                    >
                      Schedule a Call
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MAIN FOOTER */}
          <section className="border-t border-white/10">
            <div className="grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
              {/* Brand */}
              <div className="rounded-[28px] border border-white/20 bg-white/3 p-8">
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
                  We design and develop premium digital experiences for
                  ambitious businesses and startups
                </p>
              </div>

              {/* Company */}
              <div>
                <FooterHeading>Our Agency</FooterHeading>

                <nav className="flex flex-col gap-5">
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

                <nav className="flex flex-col gap-5">
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
              <p className="text-sm text-white/50">
                © 2026 Devonion
                <span className="bg-gradient-to-r from-[#FF5101] via-pink-500 to-violet-500 bg-clip-text text-transparent text-[18px] font-bold">
                  X
                </span>
                . All rights reserved.
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
      </Container>
    </footer>
  );
}
