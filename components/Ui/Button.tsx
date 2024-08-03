import React from "react";
import { TouchableOpacity } from "react-native";

const Button = ({ children }: { children: JSX.Element }) => {
  return <TouchableOpacity className="">{children}</TouchableOpacity>;
};

export default Button;
