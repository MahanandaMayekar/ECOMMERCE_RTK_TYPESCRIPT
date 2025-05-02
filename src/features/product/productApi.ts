import { Product } from "./productTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productApi = createApi({
    reducerPath: "Product",
    
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    tagTypes:["Products"],
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "products"
        }),
        getProductById: builder.query<Product, number>({
            query: (id) => `products/${id}`
        })
    })

})