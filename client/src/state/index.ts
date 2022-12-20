import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/models";

const initialState = {
  isCartOpen: false,
  cart: [],
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts: (
      state: { products: string[] | any },
      action: { payload: string | any }
    ) => {
      state.products = action.payload;
    },

    addToCart: (state: { cart: string[] | any }, action: { payload: { product: any } } ) => {
        state.cart = [...state.cart, action.payload.product]
    },

    removeFromCart: (state: { cart: string[] | any }, action: { payload: { id: number } }) => {
        state.cart = state.cart.filter((product: any) => product.id !== action.payload.id)
    },

    increaseCount: (state: { cart: string[] | any }, action: { payload: { id: number } }) => { 
        state.cart = state.cart.map((product: any) => {
            if (product.id === action.payload.id) {
                product.count++
            }
            return product
        })
    },

    decreaseCount: (state: { cart: string[] | any }, action: { payload: { id: number } }) => {
        state.cart = state.cart.map((product: any) => {
            if (product.id === action.payload.id && product.count > 1) {
                product.count--
            }
            return product
        })
    },

    setIsCartOpen: (state) => {
        state.isCartOpen = !state.isCartOpen
    }
  },
});

export const { setProducts, addToCart, removeFromCart, increaseCount, decreaseCount, setIsCartOpen } = cartSlice.actions;

export default cartSlice.reducer;
