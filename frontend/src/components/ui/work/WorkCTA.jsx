// src/components/ui/work/WorkCTA.jsx
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function WorkCTA() {
  return (
    <div
      className="flex flex-col items-center border-t pt-16 text-center"
      style={{ borderColor: "rgba(23, 26, 33, 0.08)" }}
    >
      <span
        className="text-[11px] font-medium tracking-wide"
        style={{ color: "#FF5101" }}
      >
        MORE WORK
      </span>

      <h3
        className="mt-4 max-w-lg text-[28px] font-semibold leading-tight sm:text-[32px]"
        style={{ color: "#171A21" }}
      >
        Have a project in mind? Let&rsquo;s build it together.
      </h3>

      <p
        className="mt-4 max-w-md text-[15px] leading-[1.6]"
        style={{ color: "#6B7078" }}
      >
        Whether it&rsquo;s a startup idea or a complex platform, we&rsquo;re
        here to turn your vision into a scalable and high-performing product.
      </p>

      <Link
        href="/work"
        className="
          group mt-8 inline-flex items-center gap-2 rounded-full bg-[#07111F] px-6 py-3
          text-[13.5px] font-medium text-white transition-colors duration-300
          hover:bg-[#FF5101]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101]
          focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F4F1]
        "
      >
        View all work
        <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
      </Link>
    </div>
  );
}
