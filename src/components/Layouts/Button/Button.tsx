import React from "react";

import { BTN } from "./button.styes";

export type BTN_T = "primary" | "secondary";

interface ButtonType {
  children: React.ReactNode;
  type?: BTN_T;
  className?: string;
  onClick: (e?: any) => void;
}

const Button: React.FC<ButtonType> = ({
  children,
  type = "primary",
  className,
  onClick,
}) => {
  return (
    <BTN btnType={type} className={className || ""} onClick={onClick}>
      {children}
    </BTN>
  );
};

export default Button;
