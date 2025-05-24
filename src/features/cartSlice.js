import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload);
      } else {
        itemToRemove.quantity -= 1;
      }
      state.totalQuantity -= 1;
      state.totalPrice -= itemToRemove.price;
    },
    deleteItem: (state, action) => {
      const itemToDelete = state.items.find(item => item.id === action.payload);
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalQuantity -= itemToDelete.quantity;
      state.totalPrice -= itemToDelete.price * itemToDelete.quantity;
    },
  },
});

export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
