// AllergyInfoScreen.tsx
import { useNavigation } from "expo-router";
import React from "react";
import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";

const AllergyInfoScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView className=" p-4 ">
        <View className="w-fit flex flex-col items-start justify-center">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="p-2 w-fit rounded-full bg-gray-200"
          >
            <ArrowLeftIcon size={20} color={"#00CCBB"} />
          </TouchableOpacity>
        </View>
        <Text className="text-lg font-bold text-primary-500 mb-4">
          Food Allergy Information
        </Text>
        <Text className="text-base text-gray-700 mb-2">
          Food allergies can cause serious and potentially life-threatening
          reactions. It's important to be aware of the common allergens and take
          necessary precautions.
        </Text>
        <Text className="text-base text-primary-400 mb-2">
          Common Food Allergens:
        </Text>
        {[
          "Peanuts",
          "Tree nuts (almonds, walnuts, etc.)",
          "Milk",
          "Eggs",
          "Wheat",
          "Soy",
          "Fish",
          "Shellfish",
        ].map((allergen, index) => (
          <Text key={index} className="text-base text-gray-700 mb-1">
            {index + 1}. {allergen}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllergyInfoScreen;
