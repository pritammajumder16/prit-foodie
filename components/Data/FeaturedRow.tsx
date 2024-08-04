import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { IRestaurant } from "@/interfaces/interfaces";
import { TFeaturedRow } from "@/interfaces/types";
import {
  collection,
  documentId,
  FieldPath,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";

const chunkArray = (array: any[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const FeaturedRow = ({
  title,
  description,
  id,
  categories,
  restaurantIds,
}: TFeaturedRow) => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    (async () => {
      try {
        console.log("restaurantIds", restaurantIds);

        const restaurantRef = collection(db, "restaurants");
        const chunks = chunkArray(restaurantIds, 10);
        const tempRestaurants: any[] = [];

        for (const chunk of chunks) {
          const restaurantsResponse = await getDocs(
            query(restaurantRef, where(documentId(), "in", chunk))
          );
          console.log(restaurantsResponse.docs);
          restaurantsResponse.docs.forEach((documentRef) => {
            tempRestaurants.push({
              ...documentRef.data(),
              id: documentRef.id,
            });
          });
        }

        setRestaurants(tempRestaurants);
        console.log("tempRestaurants[0]", tempRestaurants[0]);
      } catch (error) {
        console.log(error);
      }
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
          const category = categories.find(
            (category) => category.id == restaurant.categoryId
          );
          return (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={Number(restaurant.rating)}
              category={category}
              address={restaurant.address}
              dishesIds={restaurant.dishes || []}
              long={Number(restaurant.long)}
              lat={Number(restaurant.lat)}
              short_description={restaurant.short_description}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
