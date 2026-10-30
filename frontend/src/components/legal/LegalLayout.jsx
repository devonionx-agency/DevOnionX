"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const toId = (title) =>
  title
    .replace(/^\d+\.\s*/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const splitTitle = (title) => {
  const match = title.match(/^(\d+)\.\s*(.*)$/);

  return match ? { num: match[1], label: match[2] } : { num: "", label: title };
};

function parseContent(raw) {
  const sections = [];
  let section = null;
  let previous = "blank";

  for (const line of raw.trim().split("\n")) {
    const text = line.trim();

    if (!text) {
      previous = "blank";
      continue;
    }

    if (text.startsWith("## ")) {
      const title = text.slice(3);

      section = {
        id: toId(title),
        title,
        blocks: [],
      };

      sections.push(section);
      previous = "blank";
      continue;
    }

    if (!section) continue;

    const blocks = section.blocks;

    if (text.startsWith("### ")) {
      blocks.push({
        type: "h3",
        text: text.slice(4),
      });

      previous = "blank";
      continue;
    }

    const unordered = text.match(/^- (.*)/);
    const ordered = text.match(/^\d+\.\s+(.*)/);

    if (unordered || ordered) {
      const type = unordered ? "ul" : "ol";
      const item = (unordered || ordered)[1];

      if (previous === type && blocks.length) {
        blocks[blocks.length - 1].items.push(item);
      } else {
        blocks.push({ type, items: [item] });
      }

      previous = type;
      continue;
    }

    if (previous === "text" && blocks.length) {
      blocks[blocks.length - 1].lines.push(text);
    } else {
      blocks.push({
        type: "p",
        lines: [text],
      });
    }

    previous = "text";
  }

  return sections;
}

const linkClass =
  "font-medium text-[#D94A0A] underline decoration-[#D94A0A]/30 underline-offset-4 transition-colors hover:decoration-[#D94A0A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF5101]";

function Inline({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (!match) return part;

    const [, label, href] = match;

    if (href.startsWith("/")) {
      return (
        <Link key={index} href={href} className={linkClass}>
          {label}
        </Link>
      );
    }

    return (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {label}
      </a>
    );
  });
}

function ContentBlock({ block }) {
  if (block.type === "h3") {
    return (
      <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
        {block.text}
      </h3>
    );
  }

  if (block.type === "ul" || block.type === "ol") {
    const Tag = block.type;

    return (
      <Tag
        className={`space-y-2.5 pl-6 marker:font-semibold marker:text-[#FF5101] ${
          block.type === "ul" ? "list-disc" : "list-decimal"
        }`}
      >
        {block.items.map((item, index) => (
          <li key={index} className="pl-1">
            <Inline text={item} />
          </li>
        ))}
      </Tag>
    );
  }

  return (
    <p>
      {block.lines.map((line, index) => (
        <span key={index}>
          {index > 0 && " "}
          <Inline text={line} />
        </span>
      ))}
    </p>
  );
}

function LegalHero({ title, description, updated }) {
  return (
    <header className="relative isolate overflow-hidden bg-[#0b1a41] text-white">
      {/* Subtle grid and ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, black, transparent 95%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#FF5101]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 left-[20%] -z-10 h-[360px] w-[520px] rounded-full bg-indigo-500/[0.10] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-[#FF8A52]"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3 20 7 12 11 4 7 12 3Z" />
              <path d="M4 12 12 16 20 12" />
              <path d="M4 17 12 21 20 17" />
            </svg>
            Legal Agreement
          </div>

          <h1 className="mt-7 text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 md:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
            <div className="inline-flex items-center gap-2.5">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-[#FF8A52]"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 10h18" />
              </svg>
              <span>
                Last updated: <time>{updated}</time>
              </span>
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

            <div className="inline-flex items-center gap-2.5">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-[#FF8A52]"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Dhaka, Bangladesh
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function LegalLayout({
  title,
  description = "Clear information about our services, responsibilities, and the terms that guide our work together.",
  updated,
  content,
}) {
  const sections = useMemo(() => parseContent(content), [content]);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!sections.length) return;

    setActive(sections[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <main className="min-h-screen bg-[#F5F6F8] text-slate-600">
      <LegalHero title={title} description={description} updated={updated} />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* items-start remove kora hoyeche, jate aside grid row er full height pay */}
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-10">
          {/* Desktop table of contents */}
          {/* aside ekhon article er soman lomba, tai bhitorer nav sticky hoye scroll er shathe thake */}
          <aside className="hidden lg:block">
            {/* max-h + overflow-y-auto: section beshi hole nav nijei scroll korbe */}
            <nav
              aria-label="On this page"
              className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-slate-200/80 bg-white p-5"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#D94A0A]">
                On this page
              </p>

              <ul className="mt-5 space-y-1">
                {sections.map((section) => {
                  const { num, label } = splitTitle(section.title);
                  const isActive = active === section.id;

                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        aria-current={isActive ? "location" : undefined}
                        className={`flex items-start gap-2.5 rounded-lg px-3 py-2.5 text-[14px] leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5101] ${
                          isActive
                            ? "bg-[#FFF1EA] font-semibold text-[#C94308]"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                        }`}
                      >
                        <span className="w-5 shrink-0 pt-px text-xs tabular-nums opacity-75">
                          {num ? `${Number(num)}.` : ""}
                        </span>
                        <span>{label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0">
            {/* Mobile table of contents */}
            <details className="mb-6 rounded-xl border border-slate-200 bg-white p-4 lg:hidden">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                <span className="flex items-center justify-between gap-3">
                  Browse this document
                  <span aria-hidden="true" className="text-lg text-[#D94A0A]">
                    +
                  </span>
                </span>
              </summary>

              <nav aria-label="Document sections">
                <ul className="mt-4 space-y-1 border-t border-slate-100 pt-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#D94A0A]"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </details>

            {/* Legal document */}
            <article className="rounded-2xl border border-slate-200/80 bg-white px-5 py-7 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="mb-8 border-b border-slate-100 pb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  DevOnionX · Legal document
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Please read the following information carefully. For
                  project-specific terms, refer to your written agreement.
                </p>
              </div>

              <div className="max-w-[76ch]">
                {sections.map((section) => {
                  const { num, label } = splitTitle(section.title);

                  return (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-28 border-t border-slate-200/80 pb-9 pt-8 first:border-t-0 first:pt-0 sm:pb-11 sm:pt-10"
                    >
                      <h2 className="flex items-start gap-3 text-xl font-bold leading-snug tracking-tight text-slate-950 sm:text-2xl">
                        {num && (
                          <span className="shrink-0 text-[#D94A0A]">{num}</span>
                        )}
                        <span>{label}</span>
                      </h2>

                      <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-[1.9] [&_li]:pl-1 [&_p]:break-words">
                        {section.blocks.map((block, index) => (
                          <ContentBlock key={index} block={block} />
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>

              <div className="mt-2 border-t border-slate-100 pt-6">
                <p className="text-xs leading-5 text-slate-400">
                  Last updated {updated}. If you have questions about this
                  document, please contact DevOnionX through the contact details
                  published on our website.
                </p>
              </div>
            </article>

            <div className="mt-6 flex flex-col gap-3 rounded-xl border border-slate-200/80 bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="font-semibold text-slate-900">Have a question?</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Contact our team if you need clarification about this
                  document.
                </p>
              </div>

              <a
                href="mailto:devonionx@gmail.com"
                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-[#FF5101] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E84900] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5101]"
              >
                Contact our team
                <span aria-hidden="true" className="ml-2">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
