import React from "react";

import { BTN } from "./button.styes";

export type BTN_T = "primary" | "secondary";

interface ButtonType {
  children: React.ReactNode;
  type?: BTN_T;
  className?: string;
  onClick: (e?: any) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonType> = ({
  children,
  type = "primary",
  className,
  onClick,
  disabled,
}) => {
  return (
    <BTN
      btnType={type}
      className={className || ""}
      onClick={onClick}
      disabled={disabled || false}
    >
      {children}
    </BTN>
  );
};

export default Button;
