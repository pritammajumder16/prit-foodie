import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { Toast } from "toastify-react-native";
import CustomLogo from "@/assets/staticSvgComponents/logo";
import AuthForm from "@/components/Data/AuthForm";
import { AuthFormProps } from "@/interfaces/types";
const signUp = () => {
  const auth = useAuth();
  const router = useRouter();
  const handleSignUp = async (val: AuthFormProps) => {
    console.log("auth", auth);
    if (auth) {
      try {
        await createUserWithEmailAndPassword(auth, val.email, val.password);
        Toast.success("Successfully created an account", "top");
        router.push("/signIn");
      } catch (error) {
        Toast.error(
          error instanceof Error ? error.message : String(error),
          "top"
        );
      }
    }
  };
  return (
    <SafeAreaView>
      <ScrollView className="px-5 py-10 flex  h-full">
        <View className="w-full flex items-center">
          <CustomLogo />
        </View>
        <View className="flex pt-5 items-center gap-4">
          <Text className=" text-3xl font-semibold text-primary-500">
            Sign up
          </Text>
          <Text className="text-2xl font-semibold  text-primary-500">
            Welcome back
          </Text>
        </View>
        <AuthForm
          type={"Sign up"}
          onSubmit={handleSignUp}
          otherwiseRoute={"/signIn"}
          otherwiseText={"Already have an account?"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default signUp;
