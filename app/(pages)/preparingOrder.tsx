import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
const preparingOrder = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("delivery");
    }, 4000);
  }, []);
  return (
    <SafeAreaView className="bg-primary-400 flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../../assets/images/waiting_img.gif")}
        iterationCount={1}
        className="h-96 w-96"
        animation="slideInUp"
      />
      <Animatable.Text
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
        animation="slideInUp"
      >
        Waiting for Restaurant to accept your order
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default preparingOrder;
