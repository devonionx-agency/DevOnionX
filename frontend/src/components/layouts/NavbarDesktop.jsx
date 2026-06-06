"use client";

import Image from "next/image";
import Link from "next/link";
import { RiArrowDownSLine, RiArrowRightLine } from "react-icons/ri";

export default function NavbarDesktop({ navLinks }) {
  return (
    <div className="hidden md:flex items-center justify-between h-16">
      {/* Logo */}
      <Link href="/" aria-label="DevonionX Home">
        <Image
          src="/images/logo/navlogo.png"
          alt="DevonionX"
          width={180}
          height={43}
        />
      </Link>

      {/* Navigation */}
      <ul className="flex items-center gap-2">
        {navLinks.map(({ label, href, submenu, sections }) => (
          <li key={href} className="relative group">
            <Link
              href={href}
              className="flex items-center gap-1 px-4 py-2 text-[18px] font-medium text-white/80 transition-colors duration-200 hover:text-white"
            >
              {label}

              {(submenu || sections) && (
                <RiArrowDownSLine
                  size={18}
                  className="text-white/50 transition-all duration-300 group-hover:text-[#FF5101] group-hover:rotate-180"
                />
              )}
            </Link>

            {(submenu || sections) && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                {/* SERVICES MEGA MENU */}
                {label === "Services" && sections && (
                  <div className="w-[900px] rounded-3xl border border-white/10 bg-[#0B0B0B] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                    <div className="mb-6 border-b border-white/10 pb-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#FF5101]">
                        Services
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-white">
                        Explore Our Services
                      </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                      {sections.map((section) => (
                        <div key={section.title}>
                          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#FF5101]">
                            {section.title}
                          </h4>

                          <div className="space-y-2">
                            {section.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="group/service flex items-center justify-between rounded-xl px-3 py-3 text-white/75 transition-all duration-200 hover:bg-white/5 hover:text-white"
                              >
                                <span>{item.title}</span>

                                <RiArrowRightLine
                                  size={16}
                                  className="opacity-0 transition-all duration-200 group-hover/service:translate-x-1 group-hover/service:opacity-100"
                                />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* WORK MEGA MENU */}
                {label === "Work" && submenu && (
                  <div className="w-[900px] rounded-3xl border border-white/10 bg-[#0B0B0B] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                    <div className="mb-6 border-b border-white/10 pb-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#FF5101]">
                        Portfolio
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-white">
                        Explore Our Work
                      </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {submenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group/item rounded-2xl border border-white/5 p-4 transition-all duration-300 hover:border-[#FF5101]/20 hover:bg-white/[0.03]"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-white">
                              {item.title}
                            </span>

                            <RiArrowRightLine
                              size={16}
                              className="text-white/30 transition-all duration-300 group-hover/item:text-[#FF5101] group-hover/item:translate-x-1"
                            />
                          </div>

                          <p className="mt-2 text-sm text-white/45">
                            View related projects
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-[#FF5101] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,81,1,0.35)]"
      >
        Start a Project
      </Link>
    </div>
  );
}
