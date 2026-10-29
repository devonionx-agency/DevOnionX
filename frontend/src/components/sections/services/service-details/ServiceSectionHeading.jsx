export default function ServiceSectionHeading({
  id,
  eyebrow,
  title,
  accent,
  description,
  light = false,
  align = "left",
}) {
  const centered = align === "center";

  return (
    <div
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} ${
        light ? "text-white" : "text-[#171A21]"
      }`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF5101] sm:text-sm">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-5xl"
      >
        {title} <span className="text-[#FF5101]">{accent}</span>
      </h2>
      <p
        className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${
          centered ? "mx-auto" : ""
        } ${light ? "text-white/65" : "text-[#656A73]"}`}
      >
        {description}
      </p>
    </div>
  );
}
