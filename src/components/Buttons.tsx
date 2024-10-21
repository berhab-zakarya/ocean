import { FC, ReactNode } from "react";

interface ButtonProps {
    variant?:"primary" | "secondary" | "outline";
    isFullSize?:boolean,
    children:ReactNode;
}

const Button: FC<ButtonProps> = ({variant="primary",isFullSize,children}) => {
  return <div className={`
    btn btn-${variant}
  `}>
    {children}
  </div>;
};

export default Button;
