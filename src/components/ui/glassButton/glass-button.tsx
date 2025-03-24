import React from "react";
import "./glass.css";

interface ButtonWrapperProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const GlassButton: React.FC<ButtonWrapperProps> = ({
  children,
  ...buttonProps
}) => {
  return (
    <div className="button-wrap">
      <button {...buttonProps}>
        <span>{children}</span>
      </button>
      <div className="button-shadow"></div>
    </div>
  );
};

export default GlassButton;
