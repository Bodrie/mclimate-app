import React from "react";
import { Icon } from "../../components";
import "./Button.css";

interface ButtonProps {
  text: string;
  icon?: string | undefined;
  iconColor?: string;
  iconSize?: number;
  variant: "primary" | "secondary" | "tertiary"
}

const Button = ({
  text,
  icon,
  iconColor = "#000",
  iconSize = 0,
  variant
}: ButtonProps) => {
  return (
    <button className={`button-${variant}`}>
      {icon && <Icon name={icon} color={iconColor} size={iconSize} />}
      {text}
    </button>
  );
};

export default Button;
