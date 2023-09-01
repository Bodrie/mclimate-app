import React from "react";

interface HeadingProps {
  children: string | string[];
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ children, variant = 1 }: HeadingProps) => {
  return React.createElement(`h${variant}`, null, children);
};

export default Heading;
