import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "@/redux/reducers/restaurantReducer";
import {
  removeItem,
  selectBasketItems,
  selectBasketTotal,
} from "@/redux/reducers/basketReducer";
import { TDishRow } from "@/interfaces/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "@/services/sanity";
import { formatINR } from "@/utils/formatINR";

const basket = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItems, setGroupedItems] = useState<{
    [key: string]: TDishRow[];
  }>({});
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);
  useMemo(() => {
    const groupedItems = items.reduce(
      (results: { [key: string]: TDishRow[] }, item) => {
        (results[item.id] = results[item.id] || []).push(item);
        return results;
      },
      {}
    );
    setGroupedItems(groupedItems);
  }, [items]);
  console.log("groupedItems", groupedItems);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="px-5 pb-5 bg-white ">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className=" rounded-full  absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-4 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-primary-400">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className=" divide-y divide-gray-200">
          {Object.entries(groupedItems).map(([key, items]) => {
            return (
              <View
                key={key}
                className="flex-row items-center space-x-3 bg-white py-2 px-5"
              >
                <Text>{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0].image).url() }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0].name}</Text>
                <Text className="text-gray-600">
                  {formatINR(items[0]?.price)}
                </Text>
                <Text
                  className="text-primary-400 text-xs"
                  onPress={() => dispatch(removeItem({ id: key }))}
                >
                  Remove
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-400">{formatINR(basketTotal)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-400">{formatINR(99)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order total</Text>
            <Text className="font-extrabold">
              {formatINR(basketTotal + 99)}
            </Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-primary-400 p-4">
            <Text
              className="text-center w-fit text-white text-lg font-bold"
              onPress={() => navigation.navigate("preparingOrder")}
            >
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default basket;
