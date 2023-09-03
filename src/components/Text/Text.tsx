import React from "react";
import { Icon } from "../../components";
import "./Text.css";

interface TextProps {
  children: string | string[];
  icon?: string | undefined;
  iconColor?: string;
  iconSize?: number;
  textColor?: string;
  variant?: "smaller";
}

const Text = ({
  children,
  icon,
  iconColor = "#000",
  iconSize = 0,
  textColor = "inherit",
  variant,
}: TextProps) => {
  return (
    <div className={`text-container ${variant}`}>
      {icon && <Icon name={icon} color={iconColor} size={iconSize} />}
      <p style={{ color: textColor }}>{children}</p>
    </div>
  );
};

export default Text;
