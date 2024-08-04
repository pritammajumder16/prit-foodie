import { IRestaurant } from "@/interfaces/interfaces";
import {
  IRestaurantReducer,
  TDishRow,
  TRestaurantCard,
} from "@/interfaces/types";
import { createSlice } from "@reduxjs/toolkit";
const initialState: { item: IRestaurantReducer } = {
  item: {
    id: "",
    imgUrl: "",
    title: "",
    rating: 0,
    genre: "",
    address: "",
    dishes: [],
    long: 0,
    lat: 0,
    short_description: "",
  },
};
export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.item = action.payload;
    },
  },
});
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: {
  restaurant: { item: TRestaurantCard };
}) => state.restaurant.item;
export default restaurantSlice.reducer;
