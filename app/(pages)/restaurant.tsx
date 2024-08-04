import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "expo-router";
import { ICategory, IDish } from "@/interfaces/interfaces";
import DishRow from "@/components/Data/DishRow";
import BasketItems from "@/components/Data/BasketItems";
import { useDispatch } from "react-redux";
import { setRestaurant } from "@/redux/reducers/restaurantReducer";
import { db } from "@/firebaseConfig";
import {
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const chunkArray = (array: any[], size: number) => {
  const result = [];
  for (let i = 0; i < array?.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const restaurant = () => {
  const [dishes, setDishes] = useState<IDish[]>([]);

  const [category, setCategory] = useState<ICategory>();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      categoryId,
      address,
      dishesIds,
      long,
      lat,
      short_description,
    },
  } = useRoute<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const categoriesRef = doc(db, "categories", categoryId);
        const docResponse = await getDoc(categoriesRef);
        const category = docResponse.data();
        setCategory(category as ICategory);
        const dishesRef = collection(db, "dishes");
        const chunks = chunkArray(dishesIds, 10);
        const tempDishes: any[] = [];

        for (const chunk of chunks) {
          const dishesResponse = await getDocs(
            query(dishesRef, where(documentId(), "in", chunk))
          );
          dishesResponse.docs.forEach((documentRef) => {
            tempDishes.push({
              ...documentRef.data(),
              id: documentRef.id,
            });
          });
        }

        setDishes(tempDishes);
        const dispatchObject = {
          id,
          imgUrl,
          title,
          rating,
          genre: category?.name,
          address,
          dishes,
          long,
          lat,
          short_description,
        };
        console.log("Dispatch object", dispatchObject);
        dispatch(setRestaurant(dispatchObject));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  const navigation = useNavigation();
  if (!dishes) return null;
  return (
    <>
      <ScrollView>
        <StatusBar translucent barStyle="light-content" />
        <View className=" relative">
          <Image
            className="w-full h-56 p-4 bg-gray-300"
            source={{ uri: imgUrl }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-14 left-5 p-2 rounded-full bg-gray-100"
          >
            <ArrowLeftIcon size={20} color={"#00CCBB"} />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> .{" "}
                  {category?.name}
                </Text>
              </View>
            </View>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="green" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>
            <Text className=" text-gray-500 mt-2 pb-4">
              {short_description}
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={"#00CCBB"} />
          </TouchableOpacity>
        </View>
        <View className="pb-24">
          <Text className="p-4 font-bold text-xl">Menu</Text>
          {dishes?.map((dish: IDish) => {
            return (
              <DishRow
                key={dish.id}
                id={dish.id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            );
          })}
        </View>
      </ScrollView>
      <BasketItems />
    </>
  );
};

export default restaurant;
