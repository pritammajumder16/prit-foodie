import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../reducers/basketReducer";
import restaurantReducer from "../reducers/restaurantReducer";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
