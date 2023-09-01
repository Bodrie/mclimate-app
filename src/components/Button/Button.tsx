import React from "react";
import { ReactComponent as AddSvg } from "../../assets/add_plus_icon.svg";
import "./Button.css";

interface ButtonProps {
  text: string;
  plusIcon?: boolean | undefined;
}

const Button = ({ text, plusIcon }: ButtonProps) => {
  return (
    <button className="button-primary">
      {plusIcon && <AddSvg />}
      {text}
    </button>
  );
};

export default Button;
