import React from "react";

export const Button = (
  children: React.ReactNode,
  onClick?: () => void,
  className?: string
) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};
