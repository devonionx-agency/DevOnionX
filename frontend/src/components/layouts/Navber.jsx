"use client";

import { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Container from "../ui/Container";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },

  {
    label: "Services",
    href: "/services",
    sections: [
      {
        title: "Services",
        items: [
        { label: "Website & SaaS Engineering", href: "/services/web-saas-development" },
        { label: "Business Systems, ERP & CRM", href: "/services/erp-crm-systems" },
        { label: "AI Integration & Automation", href: "/services/ai-automation" },
        { label: "UI/UX, Maintenance & Support", href: "/services/ui-ux-support" },
      ],
      },
    ],
  },

  {
    label: "Work",
    href: "/work",
  },

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

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header role="banner" className="fixed top-4 left-0 right-0 z-50">
      <nav aria-label="Main navigation" className="w-full">
        <Container size="hero">
          <NavbarDesktop navLinks={navLinks} />

          <NavbarMobile
            navLinks={navLinks}
            isOpen={mobileOpen}
            setIsOpen={setMobileOpen}
          />
        </Container>
      </nav>
    </header>
  );
}
