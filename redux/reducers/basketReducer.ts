import { TDishRow } from "@/interfaces/types";
import { createSlice } from "@reduxjs/toolkit";
const initialState: { items: TDishRow[] } = {
  items: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) => {
      const itemIndx = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndx >= 0) {
        state.items.splice(itemIndx, 1);
      }
      return state;
    },
  },
});
export const { addItem, removeItem } = basketSlice.actions;

export const selectBasketItems = (state: { basket: { items: TDishRow[] } }) => {
  return state.basket.items;
};
export const selectBasketItemWithId = (
  state: { basket: { items: TDishRow[] } },
  id: string
) => {
  return state.basket.items.filter((item: TDishRow) => item.id == id);
};

export const selectBasketTotal = (state: { basket: { items: TDishRow[] } }) =>
  state.basket.items.reduce(
    (total: number, item: TDishRow) => (total += item.price),
    0
  );
export default basketSlice.reducer;
