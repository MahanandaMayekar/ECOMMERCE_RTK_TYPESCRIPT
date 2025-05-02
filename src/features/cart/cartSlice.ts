import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./cartTypes";
import { CartItem } from "./cartTypes";
import { PayloadAction } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
  const product = state.cartItems.find(item => item.id === action.payload.id);

  if (product) {
    // Only increase quantity — don't touch unit price
    product.quantity += action.payload.quantity;
  } else {
    // Add product to cart as-is
    state.cartItems.push({ ...action.payload });
  }

  // Update totalAmount correctly
  state.totalAmount += action.payload.price;
},
        removeCart: (state, action: PayloadAction<number>) => {
            state.cartItems=state.cartItems.filter((item)=>item.id!==action.payload)
           
       }
      

    },
    
})
export const { addToCart, removeCart } = cartSlice.actions
export default cartSlice.reducer