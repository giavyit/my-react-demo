import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button className={`counter ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;
