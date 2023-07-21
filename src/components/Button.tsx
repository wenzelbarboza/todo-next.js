import React from "react";

const Button = ({
  children,
  type,
  ...props
}: {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  className?: string;
}) => {
  return (
    <button type={type} className="border-2 py-2 px-3 border-white rounded-md">
      {children}
    </button>
  );
};

export default Button;
