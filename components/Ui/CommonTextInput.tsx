import { View, Text, TextInput } from "react-native";
import React from "react";

const CommonTextInput = ({ label }: { label?: string }) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInput className="" />
    </View>
  );
};

export default CommonTextInput;
