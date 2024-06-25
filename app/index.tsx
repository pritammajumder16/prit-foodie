import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import SearchTextInput from "@/components/Shared/SearchTextInput";
import Categories from "@/components/Data/Categories";

const index = () => {
  return (
    <SafeAreaView className="bg-white pt-2 px-4">
      <View className="flex-row items-center space-x-2">
        <Image
          className="h-7 w-7 rounded-full"
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="text-xl font-bold justify-center">
              Current Location
            </Text>
            <ChevronDownIcon size={20} color={"#00CCBB"} />
          </View>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="flex-row items-center pb-2 space-x-2 mt-2">
        <SearchTextInput />
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      <ScrollView>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
