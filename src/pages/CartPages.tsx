import { useAppSelector } from "../app/hooks"

import CartList from "../features/cart/CartList"
const CartPages = () => {
    const cartItems = useAppSelector((state) => state.cart.cartItems)
      const total = useAppSelector((state) => state.cart.totalAmount);
  return (
    <div className="flex flex-col gap-4 m-4">
      <h1>MY-CART</h1>
      {cartItems.map((item) => (
        <CartList
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
          id={item.id}
        />
      ))}
      <div className="flex justify-end mr-16">
        <p className="text-3xl text-gray-800 font-bold">Total: $ {total}</p>
      </div>
    </div>
  );
}

export default CartPages
