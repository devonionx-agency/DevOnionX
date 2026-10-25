// Ekta trust card. Height shob card e same thakbe, tai h-full + flex-col.
const TrustCard = ({ item }) => {
  const { icon: Icon, badge, title, description } = item;

  return (
    <li
      data-trust-card
      className="flex h-full flex-col rounded-3xl border border-black/10 bg-white p-6 transition-colors duration-300 hover:border-[#FF5101]/40 lg:p-7"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="flex size-12 items-center justify-center rounded-xl border border-black/10 bg-[#F5F5F2] text-[#FF5101]">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="text-sm font-medium text-[#6B6B66]">{badge}</span>
      </div>

      <h3 className="mt-10 text-xl font-semibold tracking-tight text-[#1F1F1D]">
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-[#6B6B66]">
        {description}
      </p>
    </li>
  );
};

export default TrustCard;
