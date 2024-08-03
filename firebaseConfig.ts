// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5sqqv2SMl0UPKAOM4M_BoyR3Li4BM4Ec",
  authDomain: "prit-foodie.firebaseapp.com",
  projectId: "prit-foodie",
  storageBucket: "prit-foodie.appspot.com",
  messagingSenderId: "280143445792",
  appId: "1:280143445792:web:5d67410737a5d9cc486145",
  measurementId: "G-84L0WV2TBS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
