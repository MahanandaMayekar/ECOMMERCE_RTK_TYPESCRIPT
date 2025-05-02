export type CartItem = {
     id: number;
  title: string;
  price: number;
  quantity: number;
}

export type Cart = {
    cartItems: CartItem[]
    totalAmount:number
    
}

export const initialState: Cart = {
  cartItems: [],
  totalAmount: 0,
};