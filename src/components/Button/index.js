import React from "react";

const Button = ({ children, active, click }) => {
  return (
    <button
      className={`p-3 mb-2 last:mb-0 rounded-sm  hover:bg-gray-200 bg-white-600  focus:outline-none focus:ring-1 focus:ring-red-400 active:ring-red-400 ${
        active ? "border border-red-400 bg-white-600" : "border border-gray-600"
      }`}
      onClick={() => click()}
    >
      {children}
    </button>
  );
};

export default Button;
