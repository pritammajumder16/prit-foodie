import { GoogleIcon } from "@/assets";
import CommonTextInput from "@/components/Ui/CommonTextInput";
import React from "react";
import { Image, Text, View } from "react-native";

const signIn = () => {
  return (
    <View>
      <Text>Sign In</Text>
      <CommonTextInput label="Email" />

      <CommonTextInput label="Password" />
      <Text>Or</Text>
      <View>
        <Image source={{ uri: GoogleIcon }} />
        <Text>Sign in with google</Text>
      </View>
    </View>
  );
};

export default signIn;
