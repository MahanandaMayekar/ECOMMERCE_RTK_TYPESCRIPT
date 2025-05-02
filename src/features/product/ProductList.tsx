
import { useGetProductsQuery } from "./productApi"

export default function ProductsList() {
    const{data:products,isLoading,error}=useGetProductsQuery()




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
          <div className="grid grid-cols-2 md:grid-cols-5 m-1 gap-4 p-2">
            {products?.map((product) => (
              <div
                className="border rounded-lg p-4 shadow m-2 "
                style={{ width: "18rem" }}
                key={product.id}
              >
                <img
                  src={product.image}
                  className="h-32 object-contain mx-auto"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text truncate">{product.description}.</p>
                  <p className="text-sm">${product.price}</p>
                  <a href="#" className="btn btn-primary">
                    Add to cart
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );

}
