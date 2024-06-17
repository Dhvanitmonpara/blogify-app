import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div>
      {label && (
        <label className="leading-7 text-sm text-gray-400" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}
        className={`w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
