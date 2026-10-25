"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

// Title theke anchor id banay — "01. Introduction" -> "introduction"
const toId = (title) =>
  title
    .replace(/^\d+\.\s*/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// "01. Introduction" -> { num: "01", label: "Introduction" }
const splitTitle = (title) => {
  const m = title.match(/^(\d+)\.\s*(.*)$/);
  return m ? { num: m[1], label: m[2] } : { num: "", label: title };
};

/*
  Content format (page.jsx er template string e ei format use hobe):
  ## 01. Section title     -> notun section (sidebar e dekhabe)
  ### Sub heading          -> section er bhitorer heading
  - item                   -> bullet list
  1. item                  -> numbered list
  plain line               -> paragraph (blank line diye alada hoy)
  **bold**  [text](url)    -> inline bold ar link
*/
function parseContent(raw) {
  const sections = [];
  let section = null;
  let prev = "blank"; // blank | text | ul | ol

  for (const line of raw.trim().split("\n")) {
    const t = line.trim();

    if (!t) {
      prev = "blank";
      continue;
    }

    if (t.startsWith("## ")) {
      const title = t.slice(3);
      section = { id: toId(title), title, blocks: [] };
      sections.push(section);
      prev = "blank";
      continue;
    }

    if (!section) continue;
    const blocks = section.blocks;

    if (t.startsWith("### ")) {
      blocks.push({ type: "h3", text: t.slice(4) });
      prev = "blank";
      continue;
    }

    const ul = t.match(/^- (.*)/);
    const ol = t.match(/^\d+\.\s+(.*)/);
    if (ul || ol) {
      const type = ul ? "ul" : "ol";
      const text = (ul || ol)[1];
      if (prev === type) blocks[blocks.length - 1].items.push(text);
      else blocks.push({ type, items: [text] });
      prev = type;
      continue;
    }

    // Porer line o plain hole same paragraph, line break diye
    if (prev === "text") blocks[blocks.length - 1].lines.push(t);
    else blocks.push({ type: "p", lines: [t] });
    prev = "text";
  }

  return sections;
}

const linkClass =
  "font-medium text-[#FF5101] underline decoration-[#FF5101]/30 underline-offset-4 transition-colors hover:decoration-[#FF5101] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5101]";

function Inline({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, i) => {
    if (part.startsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;

    const [, label, href] = m;
    if (href.startsWith("/")) {
      return (
        <Link key={i} href={href} className={linkClass}>
          {label}
        </Link>
      );
    }
    return (
      <a key={i} href={href} className={linkClass} rel="noopener noreferrer">
        {label}
      </a>
    );
  });
}

function Block({ block }) {
  if (block.type === "h3") {
    return (
      <h3 className="pt-4 text-lg font-semibold text-slate-900">
        {block.text}
      </h3>
    );
  }

  if (block.type === "ul" || block.type === "ol") {
    const Tag = block.type;
    return (
      <Tag
        className={`space-y-2.5 pl-5 marker:font-semibold marker:text-[#FF5101] ${
          block.type === "ul" ? "list-disc" : "list-decimal"
        }`}
      >
        {block.items.map((item, i) => (
          <li key={i} className="pl-1">
            <Inline text={item} />
          </li>
        ))}
      </Tag>
    );
  }

  return (
    <p>
      {block.lines.map((l, i) => (
        <span key={i}>
          {i > 0 && <br />}
          <Inline text={l} />
        </span>
      ))}
    </p>
  );
}

export default function LegalLayout({ title, updated, content }) {
  const sections = useMemo(() => parseContent(content), [content]);
  const [active, setActive] = useState(sections[0]?.id);

  // Scroll korle sidebar e current section highlight hobe
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -75% 0px" },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <main className="min-h-screen bg-white text-slate-600">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-28 pt-32 md:pt-40 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-16">
        {/* Desktop sidebar — scroll hoy, tai lamba list hole o screen e fit hobe */}
        <aside className="hidden lg:block">
          <nav
            aria-label="On this page"
            className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5101]">
              On this page
            </p>
            <ul className="mt-5 space-y-0.5">
              {sections.map((s) => {
                const { num, label } = splitTitle(s.title);
                const isActive = active === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex gap-3 rounded-lg px-2.5 py-2 text-[15px] leading-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF5101] ${
                        isActive
                          ? "bg-[#FF5101]/10 font-medium text-[#FF5101]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span
                        className={`w-6 shrink-0 ${
                          isActive ? "text-[#FF5101]" : "text-slate-400"
                        }`}
                      >
                        {num ? `${parseInt(num, 10)}.` : ""}
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
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Last updated:{" "}
            <span className="font-medium text-slate-700">{updated}</span>
          </p>

          {/* Mobile e sidebar er jaygay collapsible list */}
          <details className="mt-8 rounded-xl border border-slate-200 px-4 py-3 text-sm lg:hidden">
            <summary className="cursor-pointer select-none font-medium text-slate-800">
              On this page
            </summary>
            <ul className="mt-3 space-y-2 text-slate-600">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-[#FF5101]">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </details>

          <div className="mt-12 max-w-[72ch]">
            {sections.map((s) => {
              const { num, label } = splitTitle(s.title);
              return (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-28 border-t border-slate-200 pb-12 pt-10 first:border-t-0 first:pt-0"
                >
                  <h2 className="flex items-baseline gap-3 text-2xl font-bold tracking-tight text-slate-900 md:text-[28px]">
                    {num && <span className="text-[#FF5101]">{num}</span>}
                    <span>{label}</span>
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-8">
                    {s.blocks.map((b, i) => (
                      <Block key={i} block={b} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
