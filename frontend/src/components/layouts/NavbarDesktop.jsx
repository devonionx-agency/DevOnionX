"use client";

import Image from "next/image";
import Link from "next/link";
import { RiArrowDownSLine, RiArrowRightLine } from "react-icons/ri";
import DirectionalButton from "../common/Directionalbutton";

export default function NavbarDesktop({ navLinks }) {
  return (
    <div className="hidden lg:flex h-20 items-center justify-between rounded-3xl border border-white/70 bg-white px-9 shadow-[0_18px_50px_rgba(23,25,35,0.10)]">
      {/* Logo */}
      <Link href="/" aria-label="DevonionX Home" className="shrink-0">
        <Image
          src="/images/logo/navlogo.png"
          alt="DevonionX"
          width={300}
          height={57}
          priority
          
        />
      </Link>

      {/* Navigation */}
      <ul className="flex items-center gap-1">
        {navLinks.map(({ label, href, submenu, sections }) => (
          <li key={href} className="relative group">
            <Link
              href={href}
              className="flex items-center gap-1 rounded-lg px-4 py-3 text-[17px] font-medium text-[#62646F] transition-colors duration-200 hover:text-[#FF5101]"
            >
              {label}

              {(submenu || sections) && (
                <RiArrowDownSLine
                  size={18}
                  className="text-[#62646F] transition-all duration-300 group-hover:text-[#FF5101] group-hover:rotate-180"
                />
              )}
            </Link>

            {(submenu || sections) && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                {/* SERVICES MEGA MENU */}
                {label === "Services" && sections && (
                  <div className="w-[calc(100vw-2rem)] max-w-[900px] rounded-3xl border border-[#E5E5E0] bg-white p-6 shadow-[0_20px_60px_rgba(23,25,35,0.12)]">
                    <div className="mb-6 border-b border-[#E5E5E0] pb-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#FF5101]">
                        Services
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-[#171923]">
                        Explore Our Services
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
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
                                className="group/service flex items-center justify-between rounded-xl px-3 py-3 text-[#62646F] transition-all duration-200 hover:bg-[#FFF0E9] hover:text-[#FF5101]"
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
                  <div className="w-[calc(100vw-2rem)] max-w-[900px] rounded-3xl border border-[#E5E5E0] bg-white p-6 shadow-[0_20px_60px_rgba(23,25,35,0.12)]">
                    <div className="mb-6 border-b border-[#E5E5E0] pb-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#FF5101]">
                        Portfolio
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-[#171923]">
                        Explore Our Work
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {submenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group/item rounded-2xl border border-[#E5E5E0] p-4 transition-all duration-300 hover:border-[#FF5101]/30 hover:bg-[#FFF0E9]"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-[#171923]">
                              {item.title}
                            </span>

                            <RiArrowRightLine
                              size={16}
                              className="text-[#62646F] transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-[#FF5101]"
                            />
                          </div>

                          <p className="mt-2 text-sm text-[#62646F]">
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
        className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF5101] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:shadow-[0_0_24px_2px_#ff510133]"
      >
        <span>Book a Free Consultation</span>
      </Link>
    </div>
  );
}
