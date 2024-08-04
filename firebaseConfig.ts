import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBuFDc_p1PQ-tZqN5m-w2KOPoevYFQEL9c",
  authDomain: "pritam-foodie.firebaseapp.com",
  projectId: "pritam-foodie",
  storageBucket: "pritam-foodie.appspot.com",
  messagingSenderId: "228178905863",
  appId: "1:228178905863:web:4316850ec5939ea23553a2",
  measurementId: "G-G9BZ9YVHTT",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
