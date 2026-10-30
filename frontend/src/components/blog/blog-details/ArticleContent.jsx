"use client";

import { useState } from "react";
import { Copy, Check, ShieldCheck, CheckCircle2 } from "lucide-react";

/**
 * CodeSnippetBlock — Terminal style code block with numbered lines and copy action
 */
function CodeSnippetBlock({ snippet }) {
  const [copied, setCopied] = useState(false);

  if (!snippet) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = snippet.code.split("\n");

  return (
    <div className="blog-code-block my-6 rounded-lg overflow-hidden border">
      {/* Terminal Header Bar */}
      <div className="blog-code-header flex items-center justify-between px-4 py-2.5 border-b text-xs sm:text-sm font-mono">
        <div className="flex items-center gap-2">
          <span className="blog-code-dots inline-flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full" />
            <span className="w-2.5 h-2.5 rounded-full" />
            <span className="w-2.5 h-2.5 rounded-full" />
          </span>
          <span className="blog-code-filename ml-2 font-mono">
            {snippet.filename || "app/api/cache/route.ts"}
          </span>
        </div>

        <button
          onClick={handleCopy}
          type="button"
          className="blog-code-copy-btn flex items-center gap-1.5 px-3 py-1 rounded border transition-all text-xs font-mono font-medium"
          aria-label="Copy code snippet"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body with line numbers */}
      <pre className="blog-code-pre p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed">
        <code>
          {lines.map((line, index) => (
            <div key={index} className="flex">
              <span className="blog-code-line-number select-none mr-4 w-6 text-right shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="whitespace-pre">{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}

/**
 * TechnicalTable — Matrix comparison table matching reference
 */
function TechnicalTable({ table }) {
  if (!table || !table.rows) return null;

  return (
    <div className="blog-table-container my-6 overflow-x-auto rounded-lg border">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="blog-table-head text-xs font-mono uppercase tracking-wider font-semibold border-b">
          <tr>
            {table.headers.map((h, i) => (
              <th key={i} className="p-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="blog-table-body divide-y">
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx} className="transition-colors">
              <td className="blog-table-strategy p-3 font-mono font-medium">{row.strategy}</td>
              <td className="blog-table-highlight p-3 font-mono">{row.ttfb}</td>
              <td className="p-3 font-mono">{row.hitRatio}</td>
              <td className="blog-table-muted p-3">{row.dbPressure}</td>
              <td className="blog-table-muted p-3">{row.staleness}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * ArticleContent — Editorial long-form article body renderer
 */
export default function ArticleContent({
  dropLead,
  sections = [],
  className = "",
}) {
  return (
    <article className={`blog-article-body space-y-10 text-base sm:text-[17px] leading-[1.8] ${className}`}>
      {/* Drop-Lead / Summary Callout */}
      {dropLead && (
        <div className="blog-drop-lead p-6 rounded-lg border relative overflow-hidden mb-10">
          <div className="blog-drop-lead-bar absolute top-0 left-0 w-1 h-full" />
          <p className="font-medium text-base sm:text-lg leading-relaxed italic">
            &ldquo;{dropLead}&rdquo;
          </p>
        </div>
      )}

      {/* Structured Sections */}
      {sections.map((section, idx) => (
        <section
          key={section.id || idx}
          id={section.id}
          className="space-y-4 scroll-mt-28"
        >
          {/* Section Heading H2 */}
          {section.title && (
            <h2 className="blog-section-heading text-2xl sm:text-[28px] font-semibold tracking-tight pt-2">
              {section.title}
            </h2>
          )}

          {/* Body Paragraphs */}
          {section.content && (
            <div className="blog-body-text space-y-4 text-base sm:text-[17px] leading-[1.8]">
              {section.content.split("\n\n").map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>
          )}

          {/* Highlighted Technical Callout Box */}
          {section.callout && (
            <div className="blog-callout my-6 p-4 rounded-lg border flex items-start gap-3">
              <ShieldCheck className="blog-callout-icon w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <span className="blog-callout-title font-semibold text-sm sm:text-base block mb-1">
                  {section.callout.title || "Architectural Note:"}
                </span>
                <p className="blog-callout-text text-sm sm:text-base leading-relaxed">
                  {section.callout.text}
                </p>
              </div>
            </div>
          )}

          {/* Code Snippet Block */}
          {section.codeSnippet && <CodeSnippetBlock snippet={section.codeSnippet} />}

          {/* Technical Comparison Table */}
          {section.comparisonTable && <TechnicalTable table={section.comparisonTable} />}

          {/* Architectural Bullet Points */}
          {section.highlights && section.highlights.length > 0 && (
            <ul className="space-y-3 my-4 pl-1">
              {section.highlights.map((item, hIdx) => (
                <li key={hIdx} className="blog-highlight-text flex items-start gap-3 text-base sm:text-[17px] leading-relaxed">
                  <CheckCircle2 className="blog-highlight-icon w-4 h-4 shrink-0 mt-1" />
                  <span>
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <>
                        <strong className="blog-highlight-title font-medium mr-1.5">{item.title}</strong>
                        <span>{item.desc}</span>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Editorial Blockquote */}
          {section.quote && (
            <blockquote className="blog-blockquote my-8 p-6 rounded-r-lg border-l-2">
              <p className="blog-blockquote-text text-base sm:text-lg font-medium italic mb-2 leading-relaxed">
                &ldquo;{section.quote.text}&rdquo;
              </p>
              {section.quote.author && (
                <footer className="blog-blockquote-author text-xs sm:text-sm font-mono">
                  — {section.quote.author}
                </footer>
              )}
            </blockquote>
          )}
        </section>
      ))}
    </article>
  );
}
