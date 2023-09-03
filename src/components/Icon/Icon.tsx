import React from "react";
import Sprite from "../../assets/sprite.svg";

interface IconProps {
  name: string;
  color: string;
  size: number;
  className?: string;
}

const Icon = ({ name, color, size, className }: IconProps) => {
  return (
    <svg width={size} viewBox="0 0 32 32" fill={color} className={className}>
      <use href={Sprite + `#${name}`} />
    </svg>
  );
};

export default Icon;
