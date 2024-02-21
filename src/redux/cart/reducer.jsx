import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: []
  },
  reducers: {
    setItemsInCart: (state, action) => {
      state.itemsInCart.push(action.payload)
    },
    deleteItemsFromCart: (state, action) => {
state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
    }
  }
});

export const { setItemsInCart, deleteItemsFromCart } = cartSlice.actions;
export default cartSlice.reducer;