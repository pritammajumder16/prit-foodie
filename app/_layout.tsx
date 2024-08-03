import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import { AuthProvider } from "./context/AuthContext";
import ToastManager from "toastify-react-native";
const _layout = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ToastManager width={400} textStyle={"width:100%"} />
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(pages)" options={{ headerShown: false }} />
        </Stack>
      </AuthProvider>
    </Provider>
  );
};

export default _layout;
