// src/components/ui/work/WorkCTA.jsx
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function WorkCTA() {
  return (
    <section
      className="relative isolate overflow-hidden border-t bg-[#F7F6F2] px-6 py-6 text-center sm:py-7"
      style={{ borderColor: "rgba(23, 26, 33, 0.07)" }}
    >
      {/* Decorative curved lines */}
      <div
        className="pointer-events-none absolute -bottom-[118px] -left-[92px] h-[190px] w-[360px] rounded-[50%] border-t"
        style={{ borderColor: "rgba(255, 81, 1, 0.16)" }}
      />
      <span className="pointer-events-none absolute bottom-[37px] left-[22.5%] h-[7px] w-[7px] rounded-full bg-[#FFB58F]" />

      <div
        className="pointer-events-none absolute -bottom-[118px] -right-[92px] h-[190px] w-[360px] rounded-[50%] border-t"
        style={{ borderColor: "rgba(255, 81, 1, 0.16)" }}
      />
      <span className="pointer-events-none absolute bottom-[37px] right-[22.5%] h-[7px] w-[7px] rounded-full bg-[#FF5101]" />

      {/* Small label */}
      <div className="relative z-10 flex items-center justify-center gap-3">
        <span className="h-px w-7 bg-[#FF5101]/50" />
        <span className="text-[13px] font-semibold tracking-[0.22em] text-[#FF5101]">
          MORE WORK
        </span>
        <span className="h-px w-7 bg-[#FF5101]/50" />
      </div>

      {/* Heading */}
      <h3 className="relative z-10 mt-3 text-[18px] font-semibold leading-[1.15] tracking-[-0.035em] text-[#171A21] sm:text-[19px] lg:text-[35px]">
        Have a project in mind?{" "}
        <span className="text-[#FF5101]">Let&rsquo;s build it together.</span>
      </h3>

      {/* Description */}
      <p className="relative z-10 mx-auto mt-2 max-w-[550px] text-[9px] leading-[1.45] text-[#6B7078] sm:text-[10px] lg:text-[16px] pb-5">
        Whether it&rsquo;s a startup idea or a complex platform, we&rsquo;re
        here to turn your vision into a scalable and high-performing product.
      </p>

      {/* CTA */}
      <Link
        href="/work"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#07111F] hover:bg-[#FF5101] px-10 py-3 font-semibold text-white transition-all duration-300 hover:shadow-[0_0_24px_2px_#ff510133] sm:w-auto sm:py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F2]"
      >
        View all work
        <FiArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
      </Link>
    </section>
  );
}
