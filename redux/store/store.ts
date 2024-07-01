import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../reducers/basketReducer";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
