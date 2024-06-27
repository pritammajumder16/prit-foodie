import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import SearchTextInput from "@/components/Shared/SearchTextInput";
import Categories from "@/components/Data/Categories";
import FeaturedRow from "@/components/Data/FeaturedRow";
import { getFullFeaturedRows } from "@/services/sanity";
import { IFeaturedRow } from "@/interfaces/interfaces";
import { useFocusEffect } from "expo-router";

const index = () => {
  const [featuredRows, setFeaturedRows] = useState<IFeaturedRow[]>([]);

  useEffect(() => {
    getFullFeaturedRows().then((data) => {
      setFeaturedRows(data);
    });
  }, []);
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("dark-content"); // 'light-content' is also available
      StatusBar.setBackgroundColor("white"); //add color code
    }, [])
  );
  return (
    <SafeAreaView className="flex-1">
      <View className="bg-white  pt-2 px-4">
        <View className="flex-row items-center space-x-2">
          <Image
            className="h-7 w-7 rounded-full"
            source={{ uri: "https://links.papareact.com/wru" }}
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
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
      </View>
      <ScrollView
        className="pt-2 px-4 mb-4"
        showsVerticalScrollIndicator={false}
      >
        <Categories />
        {featuredRows?.map((featuredRow: IFeaturedRow) => {
          return (
            <FeaturedRow
              key={featuredRow._id}
              id={featuredRow._id}
              title={featuredRow.name}
              description={featuredRow.short_description}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
