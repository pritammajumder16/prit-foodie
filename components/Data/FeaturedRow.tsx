import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { getOneFeaturedRow } from "@/services/sanity";
import { IRestaurant } from "@/interfaces/interfaces";
import { TFeaturedRow } from "@/interfaces/types";

const FeaturedRow = ({ title, description, id }: TFeaturedRow) => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  useEffect(() => {
    (async () => {
      const response = await getOneFeaturedRow(id);
      setRestaurants(response.restaurants);
    })();
  }, [id]);
  return (
    <View>
      <View className="flex-row mt-4 items-center">
        <Text className="font-bold text-lg flex-1">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-gray-500 text-xs">{description}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {restaurants?.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type.name}
              address={restaurant.address}
              dishes={restaurant.dishes || []}
              long={restaurant.long}
              lat={restaurant.lat}
              short_description={restaurant.short_description}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
