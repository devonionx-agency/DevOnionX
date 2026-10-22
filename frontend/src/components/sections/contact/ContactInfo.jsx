"use client";

import {
  FiArrowUpRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "devonionx@gmail.com",
    href: "mailto:devonionx@gmail.com",
    Icon: FiMail,
    note: "Send us an email",
  },
  {
    label: "Phone",
    value: "+880 1870-758677",
    href: "tel:+8801870758677",
    Icon: FiPhone,
    note: "Call us directly",
  },
  {
    label: "WhatsApp",
    value: "+880 1870-758677",
    href: "https://wa.me/8801870758677",
    Icon: FiMessageCircle,
    note: "Chat with our team",
  },
  {
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
    Icon: FiMapPin,
    note: "Working worldwide",
  },
];

export default function ContactInfo() {
  return (
    <aside className="flex h-full flex-col gap-4">
      {/* Contact details */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.045)] sm:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-orange-100/70 blur-3xl"
        />

        <div className="relative">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF2E9] text-[#FF5101]">
              <FiMessageCircle size={19} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF5101]">
                Contact details
              </p>
              <h3 className="mt-1 text-lg font-bold tracking-tight text-slate-900">
                Let&apos;s connect
              </h3>
            </div>
          </div>

          <p className="mb-5 text-[13px] leading-6 text-slate-500">
            Have an idea in mind? Reach out through any of these channels.
            We&apos;re happy to hear about your project.
          </p>

          <div className="space-y-2">
            {CONTACT_ITEMS.map(({ label, value, href, Icon, note }) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-colors duration-200 group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-[#FF5101]">
                    <Icon size={17} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-medium text-slate-500">
                      {label}
                    </span>
                    <span className="mt-1 block break-words text-[13px] font-semibold leading-5 text-slate-800 transition-colors group-hover:text-[#E74700]">
                      {value}
                    </span>
                    <span className="mt-0.5 block text-[11px] text-slate-400">
                      {note}
                    </span>
                  </span>

                  {href && (
                    <FiArrowUpRight
                      size={15}
                      className="shrink-0 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF5101]"
                    />
                  )}
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={label === "WhatsApp" ? "_blank" : undefined}
                  rel={
                    label === "WhatsApp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-transparent p-3 transition-colors duration-200 hover:border-orange-100 hover:bg-orange-50/60"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-transparent p-3"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Response time strip */}
      <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-white p-4 sm:p-5">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-white text-[#FF5101]">
          <FiClock size={18} />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-slate-900">
            Quick response, real people
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            We typically reply within 24 hours.
          </p>
        </div>

        <a
          href="https://wa.me/8801870758677"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-orange-100 bg-white text-[#FF5101] transition-colors hover:bg-[#FF5101] hover:text-white"
        >
          <FiArrowUpRight size={17} />
        </a>
      </div>
    </aside>
  );
}