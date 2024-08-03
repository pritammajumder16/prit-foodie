// AuthContext.tsx
import React, { createContext, useContext, useMemo } from "react";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

import { firebaseConfig } from "@/firebaseConfig";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const app = initializeApp(firebaseConfig);
// initialize Firebase Auth for that app immediately
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const AuthContext = createContext(auth);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const authValue = useMemo(() => auth, []);
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
