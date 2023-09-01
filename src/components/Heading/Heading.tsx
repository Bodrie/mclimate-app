import React from "react";

interface HeadingProps {
  children: string | string[];
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "left" | "center" | "right";
  color?: string;
}

const Heading = ({
  children,
  variant = 1,
  align,
  color = "#000",
}: HeadingProps) => {
  return React.createElement(
    `h${variant}`,
    { style: { textAlign: align, color } },
    children
  );
};

export default Heading;
