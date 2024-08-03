import GoogleIcon from "@/assets/staticSvgComponents/google";
import Button from "@/components/Ui/Button";
import CommonTextInput from "@/components/Ui/CommonTextInput";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signUp = () => {
  return (
    <SafeAreaView>
      <View className="px-5 py-10 flex  h-full">
        <View className="flex items-center gap-4">
          <Text className=" text-3xl font-semibold">Sign up</Text>
          <Text className="text-2xl font-semibold">Welcome back</Text>
        </View>
        <View className="flex flex-col gap-5 mt-10">
          <View>
            <CommonTextInput
              placeholder="Enter your email"
              variant={"default"}
              className={""}
            />
          </View>
          <View>
            <CommonTextInput
              textContentType="password"
              placeholder="Enter your Password"
              variant={"default"}
              className={""}
            />
          </View>
        </View>
        <View className="w-fit mt-10 flex items-center">
          <Button variant={"default"} title={""}>
            <Text className="text-primary-500 font-semibold  text-lg">
              Sign up
            </Text>
          </Button>
        </View>
        <Text className="text-center mt-10 text-lg">
          Already have an account?&nbsp;
          <Link href={"/signIn"} className="text-primary-500">
            Sign in!
          </Link>
        </Text>
        <View className="flex flex-row overflow-hidden gap-2 mt-10 items-center">
          <View className="border-t flex-1 border-gray-400" />
          <Text className="text-lg ">Or</Text>
          <View className="border-t flex-1  border-gray-400" />
        </View>
        <TouchableOpacity className="mt-10 flex flex-row items-center mx-auto w-fit border border-gray-400 rounded-md px-3 py-2">
          <GoogleIcon />
          <Text className="text-lg font-semibold">
            &nbsp;Sign in with google
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default signUp;
