"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";

export default function NavbarMobile({ navLinks, isOpen, setIsOpen }) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <div className="flex md:hidden items-center justify-between h-14">
      {/* Logo */}
      <Link href="/" aria-label="DevonionX — Home">
        <Image
          src="/images/logo/navlogo.png"
          alt="DevonionX"
          width={180}
          height={40}
        />
      </Link>

      {/* Menu Toggle */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        className="flex items-center justify-center w-8 h-8 text-white/70 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101]/50 rounded-md"
      >
        <span
          className={`text-black transition-all duration-200 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-180 absolute"}`}
        >
          <IoClose size={20} aria-hidden="true" />
        </span>
        <span
          className={`text-black transition-all duration-200 ${isOpen ? "opacity-0 -rotate-180 absolute" : "opacity-100 rotate-0"}`}
        >
          <RiMenu3Line size={18} aria-hidden="true" />
        </span>
      </button>

      {/* Mobile Panel */}
      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={`fixed inset-0 top-14 z-40 bg-[#02090F]/95 backdrop-blur-2xl flex flex-col px-5 pt-6 pb-8 transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="absolute top-0 left-5 right-5 h-px bg-white/[0.06]" />

        {/* Links */}
        <ul className="flex flex-col gap-1 flex-1" role="list">
          {navLinks.map(({ label, href, submenu }, i) => {
            const isActive = pathname === href;
            return (
              <li
                key={href}
                className={`transition-all duration-300 ease-out ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-3"
                }`}
                style={{ transitionDelay: isOpen ? `${i * 50 + 50}ms` : "0ms" }}
              >
                {submenu ? (
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === label ? null : label)
                    }
                    className="flex items-center justify-between w-full py-3.5 text-[22px] font-semibold tracking-[-0.03em] text-white"
                  >
                    {label}

                    <RiArrowDownSLine
                      size={22}
                      className={`transition-transform duration-200 ${
                        openDropdown === label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={href}
                    className={`flex items-center justify-between w-full py-3.5 text-[22px] font-semibold tracking-[-0.03em] ${
                      isActive
                        ? "text-white"
                        : "text-white/40 hover:text-white/80"
                    }`}
                  >
                    {label}
                  </Link>
                )}
                <div className="h-px bg-white/[0.05]" />
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div
          className={`transition-all duration-300 ease-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: isOpen ? "320ms" : "0ms" }}
        >
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#FF5101] text-white text-[14px] font-semibold tracking-[-0.01em] transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101] focus-visible:ring-offset-2 focus-visible:ring-offset-[#02090F]"
          >
            Start a Project
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
