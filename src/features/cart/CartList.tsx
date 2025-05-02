import { removeCart } from "./cartSlice";
import { useAppDispatch } from "../../app/hooks";

type cartProps = {
    id:number
    title: string;
    price: number;
    image: string;
    description:string
   
};

const CartList = ({ title, price, image, id, description }: cartProps) => {
  const dispatch = useAppDispatch();
  const handleOnClick = (id: number) => {
    dispatch(removeCart(id));
  };
  return (
    <div className="flex items-center justify-between border p-4 rounded shadow-sm mb-4">
      <div className="flex items-center gap-4">
        <img src={image} alt="Product" className="h-22 w-32 object-contain" />
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-600">${price}</p>
          <p className="text-sm text-gray-600 truncated">{description}</p>
        </div>
      </div>
      <button
        className="text-red-600 hover:text-red-800 w-40"
              onClick={() => handleOnClick(id)}
              
      >
        🗑️
      </button>
    </div>
  );
};

export default CartList
