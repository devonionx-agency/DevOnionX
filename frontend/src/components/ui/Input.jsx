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
        className={`block w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-[#FF5101] focus:ring-4 focus:ring-orange-500/10 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 ${className}`}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;