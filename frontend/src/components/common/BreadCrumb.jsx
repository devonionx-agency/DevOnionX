"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * BreadCrumb — auto-generates from current URL pathname
 *
 * Usage:
 *   <BreadCrumb />
 *   <BreadCrumb homeLabel="DevOnionX" />
 *   <BreadCrumb overrides={{ "case-studies": "Our Work" }} />
 *
 * Props:
 *   homeLabel  — string  (default "Home")
 *   overrides  — object, custom labels per slug
 *   className  — extra classes on the wrapper
 */

const BreadCrumb = ({ homeLabel = "Home", overrides = {}, className = "" }) => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = [
    { label: homeLabel, href: "/" },
    ...segments.map((seg, i) => {
      const href = "/" + segments.slice(0, i + 1).join("/");
      const rawLabel = overrides[seg] ?? seg.replace(/-/g, " ");
      const label = rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1);
      return { label, href };
    }),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-2 ${className}`}
    >
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;

        return (
          <span key={crumb.href} className="flex items-center gap-2">
            {/* dot separator */}
            {i > 0 && (
              <span
                aria-hidden="true"
                className="text-white/50 text-sm select-none leading-none"
              >
                ·
              </span>
            )}

            {isLast ? (
              /* current page — orange pill */
              <span
                aria-current="page"
                className="label-base text-[#ff5101] bg-[#ff5101]/12 border border-[#ff5101]/30 px-5 py-1 rounded-full"
              >
                {crumb.label}
              </span>
            ) : (
              /* parent pages — muted link */
              <Link
                href={crumb.href}
                className="label-base text-white/60 hover:text-white/70 transition-colors duration-200"
              >
                {crumb.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default BreadCrumb;
