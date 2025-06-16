import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {

    const products = [
    {
      name: "Classic White T-Shirt",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
      price: 499,
    },
    {
      name: "Leather Wallet",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      price: 799,
    },
    {
      name: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
      price: 2499,
    },
    {
      name: "Ceramic Coffee Mug",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      price: 299,
    },
    {
      name: "Stainless Steel Water Bottle",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      price: 599,
    },
    {
      name: "Bluetooth Speaker",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      price: 1599,
    },
    {
      name: "Cotton Tote Bag",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      price: 349,
    },
    {
      name: "Scented Candle",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
      price: 449,
    },
  ];

  const [cartProduct, setCartProduct] = useState(()=>{
     const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(products);
  }, []);
  // setProduct(products);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartProduct));
  }, [cartProduct]);

    const addToCart = (product) => {
    setCartProduct([...cartProduct, product]);
  };
  return (
    <ProductContext.Provider
      value={{ setProduct, product,addToCart, cartProduct, setCartProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};


