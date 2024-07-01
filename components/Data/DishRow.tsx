import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "@/services/sanity";
import { formatINR } from "@/utils/formatINR";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { TDishRow } from "@/interfaces/types";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  selectBasketItemWithId,
  selectBasketItems,
} from "@/redux/reducers/basketReducer";

const DishRow = ({ id, name, description, price, image }: TDishRow) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const dispatch = useDispatch();
  const items = useSelector(
    (state: {
      basket: {
        items: TDishRow[];
      };
    }) => selectBasketItemWithId(state, id)
  );
  const addItemToBasket = () => {
    dispatch(addItem({ id, name, description, price, image }));
  };
  const removeItemsFromBasket = () => {
    if (items.length == 0) {
      return;
    }
    dispatch(removeItem({ id }));
  };
  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">{formatINR(price)}</Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className="border border-gray-300 h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className=" bg-white px-4 ">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemsFromBasket}
              disabled={!items.length}
            >
              <MinusCircleIcon
                size={40}
                color={`${items.length ? "#00CCBB" : "gray"}`}
              />
            </TouchableOpacity>

            <Text>{items?.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
