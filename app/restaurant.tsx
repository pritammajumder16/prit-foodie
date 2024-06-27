import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { urlFor } from "@/services/sanity";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const restaurant = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      dishes,
      long,
      lat,
      short_description,
    },
  } = useRoute();
  return (
    <ScrollView>
      <View className="w-full relative">
        <Image className="w-full h-56" source={{ uri: urlFor(imgUrl).url() }} />
        <TouchableOpacity className="">
          <ArrowLeftIcon size={20} color={"#00CCBB"} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default restaurant;
