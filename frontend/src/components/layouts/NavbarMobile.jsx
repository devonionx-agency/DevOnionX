"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoClose, IoMenu, IoChevronDown } from "react-icons/io5";

export default function NavbarMobile({ navLinks, isOpen, setIsOpen }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    setIsOpen(false);
    setOpenMenu(null);
  }, [pathname, setIsOpen]);

  const toggleMenu = (label) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <div className="flex md:hidden items-center justify-between h-16">
      {/* Logo */}
      <Link href="/" aria-label="DevonionX Home">
        <Image
          src="/images/logo/navlogo.png"
          alt="DevonionX"
          width={180}
          height={43}
          priority
        />
      </Link>

      {/* Menu Button */}
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
          <IoMenu size={22} />
        </span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-black transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-8">
          <ul className="flex-1 overflow-y-auto">
            {navLinks.map((item, index) => {
              const hasDropdown = item.submenu || item.sections;

              return (
                <li
                  key={item.href}
                  className={`transition-all duration-300 ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-3 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMenu(item.label)}
                        className="flex w-full items-center justify-between border-b border-white/10 py-5 text-2xl font-semibold text-white"
                      >
                        <div className="flex items-center gap-2">
                          <span>{item.label}</span>

                          <IoChevronDown
                            size={18}
                            className={`text-white/50 transition-all duration-300 ${
                              openMenu === item.label
                                ? "rotate-180 text-[#FF5101]"
                                : ""
                            }`}
                          />
                        </div>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openMenu === item.label ? "max-h-[600px]" : "max-h-0"
                        }`}
                      >
                        <div className="py-3">
                          {/* SERVICES */}
                          {item.sections &&
                            item.sections.map((section) => (
                              <div key={section.title} className="mb-5">
                                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#FF5101]">
                                  {section.title}
                                </h4>

                                <div className="space-y-1">
                                  {section.items.map((service) => (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      className="block rounded-lg py-2 pl-4 text-sm text-white/70 transition-colors hover:text-[#FF5101]"
                                    >
                                      {service.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}

                          {/* WORK */}
                          {item.submenu &&
                            item.submenu.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block rounded-lg py-3 pl-4 text-sm text-white/70 transition-colors hover:text-[#FF5101]"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between border-b border-white/10 py-5 text-2xl font-semibold text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className="mt-6 flex items-center justify-center rounded-full bg-[#FF5101] py-4 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
