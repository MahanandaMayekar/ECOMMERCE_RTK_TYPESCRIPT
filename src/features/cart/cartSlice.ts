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
                product.quantity += action.payload.quantity,
                    product.price += action.payload.price * action.payload.quantity;
            } else {
                state.cartItems.push(action.payload),
                    state.totalAmount += action.payload.price * action.payload.quantity;
            }
        },
        removeCart: (state, action: PayloadAction<number>) => {
            state.cartItems=state.cartItems.filter((item)=>item.id!==action.payload)
           
       }
      

    },
    
})
export const { addToCart, removeCart } = cartSlice.actions
export default cartSlice.reducer