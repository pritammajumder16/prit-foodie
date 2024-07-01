import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "@/redux/reducers/basketReducer";
import { formatINR } from "@/utils/formatINR";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

const BasketItems = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  if (items.length == 0) return null;
  return (
    <View className="absolute  bottom-5  z-10  w-full items-center">
      <TouchableOpacity
        onPress={() => navigation.navigate("basket")}
        className="mx-5 flex-row items-center space-x-1 p-4 rounded-lg bg-primary-400"
      >
        <Text className="text-white font-extrabold text-lg bg-primary-500 py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-center text-lg">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold ">
          {formatINR(basketTotal)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketItems;
