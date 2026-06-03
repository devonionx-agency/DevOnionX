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
          height={40}
          className="h-auto"
        />
      </Link>

      {/* Navigation */}
      <ul className="flex items-center gap-2">
        {navLinks.map(({ label, href, submenu }) => (
          <li key={href} className="relative group">
            <Link
              href={href}
              className="flex items-center gap-1 px-4 py-2 text-[18px] font-medium text-white/80 hover:text-[var(--text-inverted)] transition-colors duration-200"
            >
              {label}

              {submenu && (
                <RiArrowDownSLine
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              )}
            </Link>

            {/* Dropdown */}
            {submenu && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="w-[320px] rounded-3xl border border-white/10 bg-[#0B0B0B] shadow-[0_20px_80px_rgba(0,0,0,0.5)] p-2">
                  {submenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item flex items-center justify-between rounded-2xl px-4 py-3 hover:bg-white/5 transition-colors"
                    >
                      <span className="text-sm font-medium text-white">
                        {item.title}
                      </span>

                      <RiArrowRightLine
                        size={16}
                        className="text-white/30 transition-all duration-200 group-hover/item:text-[#FF5101] group-hover/item:translate-x-1"
                      />
                    </Link>
                  ))}
                </div>
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
