import Button from "@/components/Ui/Button";
import CommonTextInput from "@/components/Ui/CommonTextInput";
import React from "react";
import { Text, View } from "react-native";

const signUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <CommonTextInput label="Email" />

      <CommonTextInput label="Password" />
      <Button>
        <Text>Sign up</Text>
      </Button>
    </View>
  );
};

export default signUp;
