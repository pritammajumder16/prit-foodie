import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "@/services/sanity";

const CategoryCard = ({ imgUrl, title }: { imgUrl: string; title: string }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
        source={{ uri: urlFor(imgUrl).width(200).url() }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-0 w-full text-center text-neutral-50">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
