import React, { forwardRef } from "react";

function Select({
  options,
  label,
  className = "",
  placeholder = "Select something",
  ...props
}) {
  return (
    <div className="relative">
      {label && <label htmlFor={id} className=""></label>}
      <select
        className="w-64 bg-gray-800 text-gray-400 py-2 px-4 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
        defaultValue=""
        {...props}
        ref={ref}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className={`bg-gray-800 ${className}`}
          >
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

export default forwardRef(Select);
