"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function NavbarMobile({ navLinks, isOpen, setIsOpen }) {
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <div className="flex md:hidden items-center justify-between h-16">
      {/* Logo */}
      <Link href="/" aria-label="DevonionX Home">
        <Image
          src="/images/logo/navlogo.png"
          alt="DevonionX"
          width={180}
          height={40}
          priority
        />
      </Link>

      {/* Menu Toggle */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="relative flex h-9 w-9 items-center justify-center text-white"
      >
        <span
          className={`absolute transition-all duration-200 ${
            isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
        >
          <IoClose size={22} />
        </span>

        <span
          className={`absolute transition-all duration-200 ${
            isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
          }`}
        >
          <RiMenu3Line size={22} />
        </span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-black transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-8">
          <ul className="flex flex-1 flex-col">
            {navLinks.map((item, index) => (
              <li
                key={item.href}
                className={`transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-3"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-between border-b border-white/10 py-5 text-2xl font-semibold text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="flex items-center justify-center rounded-full bg-[#FF5101] py-4 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
