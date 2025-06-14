import { createContext, useEffect, useState } from "react";

const ProductContext = createContext()

const ProductContextProvider = (props)=>{

   const products = [
  {
    name: "Classic White T-Shirt",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: 499
  },
  {
    name: "Leather Wallet",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    price: 799
  },
  {
    name: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    price: 2499
  },
  {
    name: "Ceramic Coffee Mug",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    price: 299
  },
  {
    name: "Stainless Steel Water Bottle",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    price: 599
  },
  {
    name: "Bluetooth Speaker",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    price: 1599
  },
  {
    name: "Cotton Tote Bag",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    price: 349
  },
  {
    name: "Scented Candle",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: 449
  }
];

    const [product, setProduct] = useState([]);
    useEffect(()=>{
      setProduct(products)
    },[])
    // setProduct(products);

    return (
        <ProductContext.Provider value={{setProduct, product}} >
            {props.children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductContextProvider};