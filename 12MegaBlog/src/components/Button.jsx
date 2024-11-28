import React from "react";

function Button({
  children,
  textColor = "text-white",
  bgColor = "bg-blue-600",
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
