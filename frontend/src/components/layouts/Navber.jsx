"use client";

import { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { RiArrowDownSLine } from "react-icons/ri";
export const navLinks = [
  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        title: "Frontend Development",
        href: "/services/frontend",
      },
      {
        title: "Backend Development",
        href: "/services/backend",
      },
      {
        title: "Full Stack Development",
        href: "/services/fullstack",
      },
      {
        title: "SaaS Development",
        href: "/services/saas",
      },
      {
        title: "UI/UX Design",
        href: "/services/ui-ux",
      },
    ],
  },

  {
    label: "Work",
    href: "/portfolio",
    submenu: [
      {
        title: "Case Studies",
        href: "/case-studies",
      },
      {
        title: "SaaS Products",
        href: "/portfolio/saas",
      },
      {
        title: "Business Websites",
        href: "/portfolio/websites",
      },
    ],
  },

  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#02090F]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-5 md:px-8"
      >
        <NavbarDesktop navLinks={navLinks} />
        <NavbarMobile
          navLinks={navLinks}
          isOpen={mobileOpen}
          setIsOpen={setMobileOpen}
        />
      </nav>
    </header>
  );
}