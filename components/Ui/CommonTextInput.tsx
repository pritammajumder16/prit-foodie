import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
type VariantType = "default" | "error" | "success";
interface CommonTextInputProps extends TextInputProps {
  label?: string;
  variant: VariantType;
  className?: string;
}

const CommonTextInput = ({
  label,
  variant,
  className,
  ...props
}: CommonTextInputProps) => {
  let initClassNames = "border p-2 border-gray-300 rounded-md";
  if (variant === "error") {
    initClassNames = "border p-2 border-red-500 rounded-md";
  } else if (variant === "success") {
    initClassNames = "border p-2 border-green-500 rounded-md";
  }
  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInput className={`${initClassNames} ${className}`} {...props} />
    </View>
  );
};

export default CommonTextInput;
