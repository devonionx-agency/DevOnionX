const sizeMap = {
  full: "max-w-full",

  // Hero Sections
  hero: "max-w-[1440px]",

  // Main Website Sections
  xl: "max-w-[1280px]",

  // Content Sections
  lg: "max-w-[1200px]",

  // Blog / Text Content
  md: "max-w-[1024px]",

  // Small Content Areas
  sm: "max-w-[768px]",
};

export default function Container({
  children,
  size = "xl",
  className = "",
  noPadding = false,
}) {
  return (
    <div
      className={`
        mx-auto w-full
        ${!noPadding ? "px-5 md:px-8 lg:px-10" : ""}
        ${sizeMap[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}