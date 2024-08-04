import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="allergyfood" options={{ presentation: "modal" }} />
      <Stack.Screen
        name="restaurant"
        options={{ presentation: "containedModal" }}
      />
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
  );
};

export default _layout;
