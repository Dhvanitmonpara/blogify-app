import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "purple",
  textColor = "white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`border-0 py-2 px-8 hover:bg focus:outline-none hover:bg-${bgColor}-600 rounded text-lg bg-${bgColor}-500 text-${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
