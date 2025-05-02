
import { useGetProductsQuery } from "./productApi"
import { addToCart } from "../cart/cartSlice";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

export default function ProductsList() {
    const{data:products,isLoading,error}=useGetProductsQuery()
  const dispatch = useAppDispatch()
  const navigate=useNavigate()



    return (
      <>
        {isLoading ? (
          <>
            <div>
              <h1>loading....</h1>
            </div>
          </>
        ) : error ? (
          <>
            <div>
              <h1>Something went wrong...</h1>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 m-1 gap-4 p-2 ">
            {products?.map((product) => (
              <div
                className="border rounded-lg p-4 shadow m-2 "
                style={{ width: "18rem" }}
                key={product.id}
              >
                <img
                  src={product.image}
                  className="h-36 object-contain mx-auto"
                  alt="..."
                  onClick={() => navigate(`/product/${product.id}`)}
                />
                <div className="card-body">
                  <h5 className="card-title truncate">{product.title}</h5>
                  <p className="card-text truncate">{product.description}.</p>
                  <p className="text-sm">${product.price}</p>
                  <div className="mt-auto">
                    <button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );

}
