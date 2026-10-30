"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Policy bodlale ei key er version (v1 -> v2) bodlaw, tahole sobai abar dekhbe
const STORAGE_KEY = "devonionx-legal-consent-v1";

export default function ConsentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let accepted = false;
    try {
      accepted = localStorage.getItem(STORAGE_KEY) !== null;
    } catch {
      // Private mode e storage block thakle popup dekhabe, crash korbe na
    }
    if (accepted) return;

    // Page load hoye gele halka deri te dekhabe
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      // storage na pele shudhu ei session er jonno bondho hobe
    }
    setOpen(false);
  };

  if (!open) return null;

  const linkClass =
    "underline underline-offset-4 decoration-white/40 transition-colors hover:decoration-[#FF5101] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5101]";

  return (
    <div
      role="dialog"
      aria-label="Terms and privacy notice"
      className="fixed bottom-4 right-4 z-[100] w-[calc(100%-2rem)] max-w-[390px] rounded-lg bg-[#1f1f1f] p-7 text-white shadow-2xl shadow-black/40 transition duration-300 starting:translate-y-3 starting:opacity-0 motion-reduce:transition-none sm:bottom-6 sm:right-6"
    >
      <p className="text-[15px] leading-7 text-white/90">
        We use cookies to keep this site running and to understand how it is
        used. By continuing, you agree to our{" "}
        <Link href="/terms-of-service" className={linkClass}>
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className={linkClass}>
          Privacy Policy
        </Link>
        .
      </p>

      <button
        type="button"
        onClick={handleAccept}
        className="mt-6 w-full rounded-md bg-[#FF5101] py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#e64900] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Accept
      </button>
    </div>
  );
}
