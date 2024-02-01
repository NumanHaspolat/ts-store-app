import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductsState {
  loading: boolean;
  error: boolean;
  productsList: Product[];
  favorites: Product[];
}

const initialState: ProductsState = {
  loading: false,
  error: false,
  productsList: [],
  favorites: [],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = false;
    },
    getSuccessProduct(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.error = false;
      state.productsList = action.payload;
    },
    addFavorites(state, action: PayloadAction<Product>) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorites(state, action: PayloadAction<Product[]>) {
      state.favorites = action.payload;
    },

    fetchFail(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  getSuccessProduct,
  addFavorites,
  removeFavorites,
} = ProductsSlice.actions;

export const productsReducer = ProductsSlice.reducer;
