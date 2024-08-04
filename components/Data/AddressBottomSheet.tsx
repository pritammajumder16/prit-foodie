import React, { useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BottomSheet from "../Ui/BottomSheet";

import RadioGroup from "react-native-radio-buttons-group";
import { PlusIcon } from "react-native-heroicons/solid";
import { useRouter } from "expo-router";
const AddressBottomSheet = ({
  displayBottomSheet,
  setDisplayBottomSheet,
}: {
  setDisplayBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  displayBottomSheet: boolean;
}) => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string>();
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Current",
        value: "current",
      },
      {
        id: "2",
        label: "Home",
        value: "home",
      },
    ],
    []
  );
  return (
    <BottomSheet
      isVisible={displayBottomSheet}
      onClose={() => {
        console.log("Sheet closed");
        setDisplayBottomSheet(false);
      }}
    >
      <View className="items-start text-xl ">
        <Text className="text-2xl font-semibold box-border ">Deliver to</Text>
        <TouchableOpacity
          className="flex-row items-center my-5"
          onPress={() => {
            router.push("/addAddress");
          }}
        >
          <PlusIcon color={"#00CCBB"} height={30} width={30} />
          <Text className="text-xl font-medium text-primary-400">
            Add new address
          </Text>
        </TouchableOpacity>
        <RadioGroup
          radioButtons={radioButtons}
          labelStyle={{
            fontSize: 20,
            display: "flex",
            margin: 10,
            padding: 0,
            width: 200,
          }}
          onPress={setSelectedId}
          selectedId={selectedId}
          layout="column"
        />
      </View>
    </BottomSheet>
  );
};

export default AddressBottomSheet;
