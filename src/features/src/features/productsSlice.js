import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    { 
      id: 1, 
      name: "Snake Plant", 
      price: 25, 
      category: "Low-Light", 
      thumbnail: "/images/snake-plant.jpg" 
    },
    { 
      id: 2, 
      name: "Monstera Deliciosa", 
      price: 35, 
      category: "Tropical", 
      thumbnail: "/images/monstera.jpg" 
    },
    { 
      id: 3, 
      name: "ZZ Plant", 
      price: 20, 
      category: "Low-Light", 
      thumbnail: "/images/zz-plant.jpg" 
    },
    { 
      id: 4, 
      name: "Fiddle Leaf Fig", 
      price: 40, 
      category: "Tropical", 
      thumbnail: "/images/fiddle-leaf.jpg" 
    },
    { 
      id: 5, 
      name: "Aloe Vera", 
      price: 15, 
      category: "Succulent", 
      thumbnail: "/images/aloe.jpg" 
    },
    { 
      id: 6, 
      name: "Pothos", 
      price: 18, 
      category: "Beginner-Friendly", 
      thumbnail: "/images/pothos.jpg" 
    },
  ],
  reducers: {},
});

export default productsSlice.reducer;
