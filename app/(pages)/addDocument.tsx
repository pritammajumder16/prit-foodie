import { View, Text } from "react-native";
import React, { useState } from "react";
import Button from "@/components/Ui/Button";
import CommonTextInput from "@/components/Ui/CommonTextInput";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { SafeAreaView } from "react-native-safe-area-context";

const addDocument = () => {
  const [dish, setDish] = useState({
    name: "",
    price: 0,
    short_description: "",
    image: "",
  });
  const handleSubmit = async () => {
    try {
      if (!dish.name || !dish.price || !dish.short_description || !dish.image) {
        return;
      }
      await addDoc(collection(db, "dishes"), {
        name: dish.name,
        price: dish.price,
        short_description: dish.short_description,
        image: dish.image,
      });
      setDish({
        name: "",
        price: 0,
        short_description: "",
        image: "",
      });
    } catch (error) {
      console.log("Error ", error);
    }
  };
  return (
    <SafeAreaView>
      <Text>Dish</Text>

      <CommonTextInput
        variant={"default"}
        placeholder="name"
        value={dish.name}
        onChangeText={(text) => {
          setDish({ ...dish, name: text });
        }}
      />

      <CommonTextInput
        variant={"default"}
        placeholder="price"
        value={String(dish.price)}
        onChangeText={(text) => {
          setDish({ ...dish, price: Number(text) });
        }}
      />

      <CommonTextInput
        variant={"default"}
        placeholder="short_description"
        value={dish.short_description}
        onChangeText={(text) => {
          setDish({ ...dish, short_description: text });
        }}
      />
      <CommonTextInput
        variant={"default"}
        value={dish.image}
        placeholder="image"
        onChangeText={(text) => {
          setDish({ ...dish, image: text });
        }}
      />
      <Button onPress={() => handleSubmit()} variant={"default"} title={""}>
        <Text>Submit</Text>
      </Button>
    </SafeAreaView>
  );
};

export default addDocument;
