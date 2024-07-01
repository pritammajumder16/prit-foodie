import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

const _layout = () => {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="restaurant" />
        <Stack.Screen name="basket" options={{ presentation: "modal" }} />
        <Stack.Screen
          name="preparingOrder"
          options={{ presentation: "fullScreenModal" }}
        />
        <Stack.Screen
          name="delivery"
          options={{ presentation: "fullScreenModal" }}
        />
      </Stack>
    </Provider>
  );
};

export default _layout;
