const ServiceIllustration = ({ value, layout }) => {
  const positionClass =
    layout === "full"
      ? "relative flex-shrink-0"
      : "absolute right-4 bottom-4 pointer-events-none opacity-90 transition-opacity duration-300 group-hover:opacity-100";

  return (
    <div className={positionClass}>
      <img
        src={`/images/illustrations/${value}.svg`}
        alt=""
        aria-hidden="true"
        draggable={false}
      />
    </div>
  );
};

export default ServiceIllustration;