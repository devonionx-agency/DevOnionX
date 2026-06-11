import Link from "next/link";
import ServiceIllustration from "./ServiceIllustration";

const ServiceCard = ({ service }) => {
  const isThird = service.layout === "third";
  const isFull = service.layout === "full";

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border border-white/[0.07]
        bg-[#111111] flex flex-col justify-between
        transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/40
        ${isFull ? "flex-row items-center gap-10 p-8" : "p-7"}
        ${isThird ? "min-h-[190px]" : "min-h-[220px]"}
      `}
    >
      {/* Popular Badge */}
      {service.popular && (
        <span className="absolute top-5 right-5 text-[10px] font-semibold uppercase tracking-widest bg-orange-500 text-white px-3 py-1 rounded-full z-10">
          Most Popular
        </span>
      )}

      {/* Main Content */}
      <div className={isFull ? "flex-1" : ""}>
        <p className="text-[11px] text-white/25 tracking-widest font-medium mb-2.5">
          {service.num}
        </p>

        <h3
          className={`
            font-semibold text-white leading-tight mb-2.5 whitespace-pre-line
            ${isFull ? "text-2xl" : isThird ? "text-[17px]" : "text-[21px]"}
          `}
        >
          {service.title}
        </h3>

        <p
          className={`
            text-white/38 leading-relaxed mb-4
            ${isThird ? "text-[12px]" : "text-[13px]"}
            ${isFull ? "max-w-lg" : "max-w-[260px]"}
          `}
        >
          {service.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 text-[11px] text-white/45 bg-white/4 border border-white/[0.07] rounded-full px-2.5 py-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/services/${service.value}`}
          className="inline-flex items-center gap-2 text-[13px] text-white/45 hover:text-orange-500 transition-colors duration-200"
        >
          Explore Service
          <i className="ti ti-arrow-right text-base" aria-hidden="true" />
        </Link>
      </div>

      {/* SVG Illustration */}
      <ServiceIllustration value={service.value} layout={service.layout} />
    </div>
  );
};

export default ServiceCard;