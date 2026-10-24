import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

/**
 * Reusable service row.
 * Animation hooks (picked up by GSAP in ServicesHome):
 *   data-service-row      -> the card (scaled back slightly while the next card covers it)
 *   data-reveal="text"    -> text elements that stagger in
 *   data-reveal="image"   -> the image that scales in
 */
export default function ServiceCard({
  number,
  category,
  heading,
  description,
  tags,
  image,
  href,
  tone,
  isLast = false,
}) {
  // Desktop: rounded top corners. Every card except the last gets extra bottom padding equal to the
  // overlap (3.5rem), because the next card slides over that strip. Mobile: plain rounded cards, no overlap.
  const shape = isLast
    ? "md:rounded-b-[3.5rem]"
    : "md:rounded-b-none md:pb-[5.5rem] lg:pb-[6.5rem]";

  return (
    <article
      data-service-row
      className={`rounded-3xl border p-5 sm:p-6 md:rounded-t-[3.5rem] md:p-8 lg:p-10 ${shape} ${tone.row} ${tone.border}`}
    >
      <div className="grid gap-5 md:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,1.05fr)] md:items-center md:gap-8 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
        <span
          data-reveal="text"
          className="text-sm font-semibold tabular-nums text-[#1F1F1D]/45 md:self-start md:pt-2 md:text-base"
        >
          {number}
        </span>

        <div className="flex min-w-0 flex-col items-start gap-4 md:gap-5">
          <p data-reveal="text" className="text-sm font-medium text-[#C4491A]">
            {category}
          </p>
          <h3
            data-reveal="text"
            className="text-2xl font-semibold leading-tight tracking-tight text-[#1F1F1D] sm:text-3xl lg:text-4xl"
          >
            {heading}
          </h3>
          <p
            data-reveal="text"
            className="max-w-md text-base leading-relaxed text-[#1F1F1D]/70"
          >
            {description}
          </p>

          <ul
            data-reveal="text"
            className="flex flex-wrap gap-2"
            aria-label={`${heading} features`}
          >
            {tags.map((tag) => (
              <li
                key={tag}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium text-[#1F1F1D]/80 sm:text-sm ${tone.tag}`}
              >
                {tag}
              </li>
            ))}
          </ul>

          <Link
            data-reveal="text"
            href={href}
            aria-label={`Learn more about ${heading}`}
            className="group relative isolate mt-1 inline-flex min-h-11 items-center gap-3 overflow-hidden rounded-full text-sm font-medium text-[#1F1F1D] transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4491A] before:absolute before:inset-0 before:-z-10 before:origin-right before:scale-x-0 before:bg-[#C4491A] before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100"
          >
            <span className="relative z-10">View service</span>
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C4491A] text-white transition-colors duration-300 group-hover:bg-transparent">
              <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-black/5 bg-white/40">
          <Image
            data-reveal="image"
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 560px, (min-width: 768px) 42vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}
