import React from "react";
import "./glass.css";
import { useNavigate } from "react-router";

interface ButtonWrapperProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const GlassButton: React.FC<ButtonWrapperProps> = ({
  children,
  ...buttonProps
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/explore");
  };
  return (
    <div className="button-wrap">
      <button {...buttonProps} className="button" onClick={handleClick}>
        <span>{children}</span>
      </button>
      <div className="button-shadow"></div>
    </div>
  );
};

export default GlassButton;
