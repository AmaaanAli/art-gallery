import React from "react";

const Button = ({ children, icon, variant, noText }) => {
  const baseStyle =
    "px-4 py-2 rounded font-medium focus:outline-none flex items-center space-x-2";
  const variantStyle =
    variant === "outline"
      ? "border-2 border-white text-white"
      : "bg-teal-600 text-white";

  return (
    <button className={`${baseStyle} ${variantStyle}`}>
      {icon && <span>{icon}</span>}
      {!noText && <span>{children}</span>}
    </button>
  );
};

export default Button;
