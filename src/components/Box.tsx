import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: ReactNode;
  className?: string;
}
const Box: React.FC<BoxProps> = ({ children, className }) => {
  return <div className={twMerge(` h-fit w-full`, className)}>{children}</div>;
};

export default Box;