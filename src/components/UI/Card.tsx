import React from "react";

export const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`rounded-2xl shadow-md bg-white ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
