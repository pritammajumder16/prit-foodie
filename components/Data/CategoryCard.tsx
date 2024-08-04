import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { TCategoryCard } from "@/interfaces/types";

const CategoryCard = ({ imgUrl, title }: TCategoryCard) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-0 w-full text-center text-neutral-50">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
