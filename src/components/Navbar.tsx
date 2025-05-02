
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "../app/hooks";
export default function Navbar() {
  const items = useAppSelector((state) => state.cart.cartItems)
  const itemNumber = items.length
  
  
  

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-300 text-white h-20 shadow border">
      <Link to="/" className="text-xl font-bold">
        MiniShop
      </Link>
      <div className="flex justify-between items-center p-4 bg-gray-300 text-black bold gap-10">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
        Contact
        </Link>
      
      </div>

      <div className="relative">
        <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
         {itemNumber}
        </div>
        <Link to="/cart">
          <FaShoppingCart size={24} />
        </Link>
      </div>
    </nav>
  );
}
