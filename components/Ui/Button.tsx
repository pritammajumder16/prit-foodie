import React from "react";
import { ButtonProps, TouchableOpacity } from "react-native";
import { twMerge } from "tailwind-merge";

type VariantType = "default" | "error" | "success";
interface CustomButtonProps extends ButtonProps {
  className?: string;
  variant: VariantType;
  children: JSX.Element;
}
const Button = ({
  children,
  className,
  variant,
  ...props
}: CustomButtonProps) => {
  let initClassNames =
    "border px-5 py-2 border-primary-300 rounded-md bg-primary-200 text-primary-500 w-fit";
  if (variant === "error") {
    initClassNames = "border-red-500";
  } else if (variant === "success") {
    initClassNames = "border-green-500";
  }
  return (
    <TouchableOpacity {...props} className={twMerge(className, initClassNames)}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
