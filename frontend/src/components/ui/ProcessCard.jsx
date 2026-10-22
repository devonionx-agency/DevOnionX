import Image from "next/image";

// Ekta step er card: left e image, right e content.
// Mobile e normal stack hoy, desktop e ProcessHome pin kore ekta jaygay shob card stack kore rakhe.
const ProcessCard = ({ step, priority = false }) => {
  const { number, title, description, timeline, tools, image } = step;

  return (
    <li
      data-card
      className="grid items-stretch gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16 group-data-[pinned=true]/process:h-full"
    >
      {/* Left: project image */}
      <div
        data-media
        className="relative aspect-4/3 overflow-hidden rounded-3xl border border-black/10 bg-white group-data-[pinned=true]/process:aspect-auto"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Right: content */}
      <div data-copy className="flex flex-col self-center">
        <p data-item className="text-base font-medium text-[#FF5101]">
          Step {number}
        </p>
        <h3
          data-item
          className="mt-4 text-3xl font-semibold tracking-tight text-[#1F1F1D] sm:text-4xl"
        >
          {title}
        </h3>
        <p
          data-item
          className="mt-4 max-w-xl text-base leading-relaxed text-[#6B6B66] sm:text-lg"
        >
          {description}
        </p>
        <p data-item className="mt-6 text-sm font-medium text-[#FF5101]">
          {timeline}
        </p>

        {/* Tool icons */}
        <ul data-item className="mt-5 flex flex-wrap gap-3">
          {tools.map(({ name, icon: Icon, color }) => (
            <li
              key={name}
              title={name}
              className="flex size-12 items-center justify-center rounded-xl border border-black/10 bg-white"
            >
              <Icon className="size-6" color={color} aria-hidden="true" />
              <span className="sr-only">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ProcessCard;
