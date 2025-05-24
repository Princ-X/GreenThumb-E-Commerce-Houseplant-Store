// src/features/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    { id: 1, name: "Snake Plant", price: 25, category: "Low-Light" },
    { id: 2, name: "Monstera", price: 35, category: "Tropical" },
    { id: 3, name: "ZZ Plant", price: 20, category: "Low-Light" },
    { id: 4, name: "Pothos", price: 18, category: "Beginner-Friendly" },
    { id: 5, name: "Aloe Vera", price: 15, category: "Succulent" },
    { id: 6, name: "Fiddle Leaf Fig", price: 40, category: "Tropical" },
  ],
  reducers: {},
});

export default productsSlice.reducer;
