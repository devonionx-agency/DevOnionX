"use client";

import React from "react";

const Input = React.forwardRef(
  (
    {
      placeholder,
      type = "text",
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...props}
        className={`w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3.5 text-[14px] text-white placeholder:text-[#475569] focus:border-[#FF5101]/50 focus:bg-[#FF5101]/[0.03] outline-none transition-all duration-300 ${className}`}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;