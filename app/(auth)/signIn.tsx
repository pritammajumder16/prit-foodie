import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Toast } from "toastify-react-native";
import CustomLogo from "@/assets/staticSvgComponents/logo";
import AuthForm from "@/components/Data/AuthForm";
import { AuthFormProps } from "@/interfaces/types";
import { auth } from "@/firebaseConfig";
const signIn = () => {
  const router = useRouter();

  const handlesignIn = async (val: AuthFormProps) => {
    console.log("auth", auth);
    if (auth) {
      try {
        await signInWithEmailAndPassword(auth, val.email, val.password);
        router.push("/");
      } catch (error) {
        Toast.error(
          error instanceof Error ? error.message : String(error),
          "top"
        );
      }
    }
  };
  useEffect(() => {
    router.push("/");
  }, []);
  return (
    <SafeAreaView>
      <ScrollView className="px-5 py-10 flex  h-full">
        <View className="w-full flex items-center">
          <CustomLogo />
        </View>
        <View className="flex pt-5 items-center gap-4">
          <Text className=" text-3xl font-semibold text-primary-500">
            Sign in
          </Text>
          <Text className="text-2xl font-semibold  text-primary-500">
            Welcome back
          </Text>
        </View>
        <AuthForm
          type={"Sign in"}
          onSubmit={handlesignIn}
          otherwiseLabel={"Sign up"}
          otherwiseRoute={"/signUp"}
          otherwiseText={"Don't have an account?"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;
