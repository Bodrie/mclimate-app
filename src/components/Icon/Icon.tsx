import React from "react";
import Sprite from '../../assets/sprite.svg'

interface IconProps {
  name: string;
  color: string;
  size: number;
}

const Icon = ({ name, color, size }: IconProps) => {
  return (
    <svg
      width={size}
      viewBox="0 0 32 32"
      fill={color}
    >
      <use href={Sprite + `#${name}`} />
    </svg>
  );
};

export default Icon;
