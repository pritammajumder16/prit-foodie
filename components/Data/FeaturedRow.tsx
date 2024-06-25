import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: string;
}) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center">
        <Text className="font-bold text-lg flex-1">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-gray-500 text-xs">{description}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main st"
          dishes={[]}
          long={10}
          lat={20}
          short_description="My short test description"
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main st"
          dishes={[]}
          long={10}
          lat={20}
          short_description="My short test description"
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main st"
          dishes={[]}
          long={10}
          lat={20}
          short_description="My short test description"
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main st"
          dishes={[]}
          long={10}
          lat={20}
          short_description="My short test description"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
