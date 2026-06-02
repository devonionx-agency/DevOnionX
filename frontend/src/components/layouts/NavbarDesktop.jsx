"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowDownSLine, RiArrowRightLine } from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";
export default function NavbarDesktop({ navLinks }) {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center justify-between h-16">
      {/* Logo */}{" "}
      <Link href="/" aria-label="DevonionX — Home">
        {" "}
        <Image
          src="/images/logo/navlogo.png"
          alt="DevonionX"
          width={180}
          height={40}
        />{" "}
      </Link>
      {/* Navigation */}
      <ul className="flex items-center gap-4" role="list">
        {navLinks.map(({ label, href, submenu }) => {
          const isActive = pathname === href;

          return (
            <li key={href} className="relative group">
              <Link
                href={href}
                className={`relative flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium tracking-[-0.01em] rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101]/50 ${
                  isActive ? "text-black" : "text-black/60 hover:text-[#FF5101]"
                }`}
              >
                {label}

                {submenu && (
                  <RiArrowDownSLine
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                )}

                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-[#FF5101] transition-all duration-300 ${
                    isActive
                      ? "w-4 opacity-100"
                      : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                  }`}
                />
              </Link>

              {/* Dropdown */}
              {submenu && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible translate-y-2 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100"
                >
                  <div className="w-[340px] rounded-3xl border border-black/[0.06] bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-2">
                    {submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                       className="group/item flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 hover:bg-[#FF5101]/5"
                      >
                        <div>
                          <p className="text-[14px] font-semibold text-black">
                            {item.title}
                          </p>

                          {item.description && (
                            <p className="mt-1 text-[12px] text-black/45">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <span
                        className="text-black/20 transition-all duration-200 group-hover/item:text-[#FF5101] group-hover/item:translate-x-1"
                        >
                          <RiArrowRightLine size={16} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      {/* CTA */}
      <Link
        href="/contact"
        className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF5101] text-white text-[13px] font-semibold tracking-[-0.01em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(255,81,1,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101] focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-0 active:shadow-none"
      >
        Start a Project
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className="opacity-80"
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
  );
}
