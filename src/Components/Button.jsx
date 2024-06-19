import React from "react";

function Button({
  children,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      className={`border-0 py-2 px-8 hover:bg focus:outline-none hover:bg-purple-600 rounded text-lg bg-purple-500 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
