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
        title: "Development",
        items: [
          { title: "Custom Web Development", href: "/services/custom-web" },
          { title: "Frontend Development", href: "/services/frontend" },
          { title: "Backend Development", href: "/services/backend" },
          { title: "Full Stack Development", href: "/services/fullstack" },
        ],
      },
      {
        title: "Products",
        items: [
          { title: "SaaS Development", href: "/services/saas" },
          { title: "Dashboard & CRM Systems", href: "/services/dashboard-crm" },
          { title: "E-Commerce Development", href: "/services/ecommerce" },
        ],
      },
      {
        title: "Design & Support",
        items: [
          { title: "UI/UX Design", href: "/services/uiux" },
          { title: "Website Maintenance", href: "/services/maintenance" },
          { title: "Technical Support", href: "/services/support" },
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
    <header
      role="banner"
      className="fixed top-4 left-0 right-0 z-50"
    >
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
