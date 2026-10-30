"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * BreadCrumb — High-end floating capsule breadcrumb
 *
 * Props:
 *   homeLabel — string (default "Home")
 *   overrides — object, custom labels per slug
 *   className — extra classes on the wrapper
 *   variant   — "dark" | "light" (default "dark")
 */
const BreadCrumb = ({
  homeLabel = "Home",
  overrides = {},
  className = "",
  variant = "dark",
}) => {
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

  const isLight = variant === "light";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 transition-all duration-300 ${isLight
        ? "border border-neutral-300/80 bg-white/85 text-neutral-800 shadow-sm backdrop-blur-md"
        : "border border-white/15 bg-black/45 text-white shadow-[0_4px_24px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        } ${className}`}
    >
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;

        return (
          <span
            key={crumb.href}
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] tracking-wide"
          >
            {/* Minimal slash divider */}
            {i > 0 && (
              <span
                aria-hidden="true"
                className={`${isLight ? "text-neutral-400" : "text-white/30"
                  } select-none font-light text-xs`}
              >
                /
              </span>
            )}

            {isLast ? (
              /* Current page: crisp white with glowing orange indicator */
              <span
                aria-current="page"
                className={`font-semibold flex items-center gap-2 ${isLight ? "text-neutral-900" : "text-white"
                  }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5101] shadow-[0_0_8px_#FF5101]" />
                <span>{crumb.label}</span>
              </span>
            ) : (
              /* Parent page links */
              <Link
                href={crumb.href}
                className={`font-medium transition-colors duration-200 ${isLight
                  ? "text-neutral-600 hover:text-neutral-900"
                  : "text-white/65 hover:text-white"
                  }`}
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
