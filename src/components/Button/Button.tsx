import React from "react";
import { Icon } from "../../components";
import "./Button.css";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary" | "tertiary";
  icon?: string | undefined;
  iconColor?: string;
  iconSize?: number;
  onClick?: () => void;
}

const Button = ({
  text,
  icon,
  iconColor = "#000",
  iconSize = 0,
  variant,
  onClick,
}: ButtonProps) => {
  return (
    <button className={`button-${variant}`} onClick={onClick}>
      {icon && <Icon name={icon} color={iconColor} size={iconSize} />}
      {text}
    </button>
  );
};

export default Button;
