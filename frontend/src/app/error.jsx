"use client";

/**
 * Global error boundary.
 *
 * Next.js renders this automatically whenever an unhandled error
 * is thrown inside a page or nested route segment. It must be a
 * Client Component, and it receives the thrown `error` along with
 * a `reset` function that re-renders the segment to attempt recovery.
 *
 * Notes for production:
 * - We never render `error.message` directly — it can leak internal
 *   details (stack traces, query info, etc.) to end users.
 * - Wire up an error reporting service (Sentry, LogRocket, etc.) in
 *   the effect below instead of just console logging.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const RefreshIcon = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/**
 * Reports the error to the console during development and provides
 * a single integration point for a production monitoring service.
 */
function useErrorReporting(error) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("[error boundary]", error);
      return;
    }

    // Production: send to your monitoring provider here.
    // Example: Sentry.captureException(error);
  }, [error]);
}

export default function Error({ error, reset }) {
  const containerRef = useRef(null);
  const retryButtonRef = useRef(null);

  useErrorReporting(error);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }
    );

    return () => tl.kill();
  }, []);

  // Subtle press feedback on retry — communicates the action is doing something.
  const handleRetry = () => {
    gsap.fromTo(
      retryButtonRef.current,
      { scale: 0.96 },
      { scale: 1, duration: 0.25, ease: "back.out(3)" }
    );
    reset();
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div ref={containerRef} className="max-w-[480px] w-full text-center">

        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 mb-6 text-[11px] font-semibold tracking-[2px] uppercase text-[#94a3b8] border border-white/10 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          Application Error
        </div>

        {/* Heading */}
        <h1 className="text-[28px] sm:text-[34px] font-bold text-white leading-tight mb-3">
          Something went wrong
        </h1>

        {/* Copy — deliberately generic, never exposes error.message */}
        <p className="text-[15px] text-[#94a3b8] leading-relaxed mb-9">
          We hit an unexpected issue loading this page. It&apos;s likely
          temporary — try again, or head back if it keeps happening.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            ref={retryButtonRef}
            type="button"
            onClick={handleRetry}
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-white bg-[#FF5101] rounded-full px-6 py-3 hover:bg-[#e64900] transition-colors duration-200"
          >
            <RefreshIcon />
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#cbd5e1] border border-white/10 rounded-full px-6 py-3 hover:border-white/25 hover:text-white transition-colors duration-200"
          >
            Back to home
            <ArrowRightIcon />
          </Link>
        </div>

        {/* Reference id — helps support trace the report without showing internals */}
        {error?.digest && (
          <p className="mt-8 text-[12px] text-[#475569]">
            Reference: <span className="font-mono">{error.digest}</span>
          </p>
        )}

      </div>
    </section>
  );
}