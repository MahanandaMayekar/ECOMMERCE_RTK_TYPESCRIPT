export type CartItem = {
     id: number;
    title: string;
    price: number;
    description: string;
  image: string;
    quantity:number
}

export type Cart = {
    cartItems: CartItem[]
    totalAmount:number
    
}

export const initialState: Cart = {
  cartItems: [],
  totalAmount: 0,
};