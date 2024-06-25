import { View, TextInput } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const SearchTextInput = () => {
  return (
    <View className="flex-row items-center flex-1 p-2 space-x-1 bg-gray-200 rounded">
      <MagnifyingGlassIcon color="gray" />
      <TextInput keyboardType="default" placeholder="Search here" />
    </View>
  );
};

export default SearchTextInput;
