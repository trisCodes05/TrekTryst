import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?:boolean;
};
const Button = ({ type, title, icon, variant ,full}: ButtonProps) => {
  return (
    <button type={type}
    className={`flexCenter gap-3 rounded-full border ${variant} {full && 'w-full'}`}>
      {icon && <Image src={icon} alt='user' height={24} width={24}/>}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
