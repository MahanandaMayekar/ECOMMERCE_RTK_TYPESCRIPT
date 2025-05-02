import { useAppDispatch } from "../app/hooks";
import { useGetProductByIdQuery } from "../features/product/productApi";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

const Productpage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams()
    const numericId = Number(id);
    const {
        data: product,
        isLoading,
        error,
    } = useGetProductByIdQuery(numericId);
    return (
        <div>
            {isLoading?(<div>LOADING......</div>):(<div className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={product?.image}
                alt="Product"
                className="object-contain h-80"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{product?.title}</h1>
              <p className="text-xl text-green-600 font-semibold">
                ${product?.price}
              </p>
              <p className="text-gray-700">{product?.description}</p>
              <div className="flex items-center gap-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: product?.id ?? 0,
                        title: product?.title ?? "",
                        price: product?.price ?? 0,
                        description: product?.description ?? "",
                        image: product?.image ?? "",
                        quantity: 1,
                      })
                    )
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>)}
        
      </div>
    );
};

export default Productpage;
