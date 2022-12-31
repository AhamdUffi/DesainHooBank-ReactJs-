import React from "react";
import { apple } from "../assets";

const Button = ({ style }) => (
  <button
    className={`w-[104px] min-h-[27px] bg-blue-gradient font-medium rounded-[5px] outline-none p-2 ${style} `}
  >
    Get Started
  </button>
);

export default Button;
