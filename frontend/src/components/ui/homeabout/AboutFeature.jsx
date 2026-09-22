const AboutFeature = ({ icon: Icon, title, description }) => {
  return (
    <article className="about-feature group relative flex-1 px-0 sm:px-5 first:pl-0 last:pr-0">
      <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl border border-[#ff5101]/10 bg-white shadow-[0_8px_24px_rgba(20,30,40,0.04)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#ff5101]/25 group-hover:shadow-[0_12px_30px_rgba(255,81,1,0.08)]">
        <Icon className="text-[17px] text-[#ff5101]" strokeWidth={1.7} />
      </div>

      <h3 className="font-inter text-[15px] font-bold uppercase tracking-[0.13em] text-[#17263a]">
        {title}
      </h3>

      <p className="mt-3 max-w-[220px] font-inter text-[13px] leading-[1.7] text-[#738095]">
        {description}
      </p>
    </article>
  );
};

export default AboutFeature;
