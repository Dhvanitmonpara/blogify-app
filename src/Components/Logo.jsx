import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <span className="text-xl font-medium text-gray-100 transition-all hover:text-white hover:font-serif">Blogify</span>
    </div>
  );
}

export default Logo;
