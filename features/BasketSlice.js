import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const basketCopy = state.items;

      if (index >= 0) {
        basketCopy.splice(index, 1);
      } else {
        console.warn(`Item with ${action.payload.id} not in basket.`);
      }

      state.items = basketCopy;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsById = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const basketTotalPrice = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
