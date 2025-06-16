import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDisplay = () => {
  const { product, setProduct, cartProduct, setCartProduct } =
    useContext(ProductContext);

    
  const handleAddToCart = (item) => {
    // console.log(e)
    setCartProduct([...cartProduct, item]);
    
  };
 
  useEffect(()=>{
    console.log("Cart Updated: ", cartProduct)
  },[cartProduct])

  if (product)
    return (
      <div className="grid grid-cols-3 gap-6 p-6">
        {product.map((item, id) => (
          // <Link  to={`/${item.name}`}>

          <div
            key={id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 h-[350px] flex flex-col items-center justify-center transition-transform hover:scale-105"
          >
            <Link to={`/${item.name}`}>
              <img className="w-[300px]" src={item.image} alt={item.name} />
            </Link>
            <div className="font-semibold text-lg text-center">{item.name}</div>
            <div className="text-lg mb-2">₹{item.price}</div>
            <div className="flex space-x-4">
              <button className="bg-red-500 rounded-md p-2 text-white">
                Remove From Cart
              </button>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-blue-400 rounded-lg text-white p-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
          // </Link>
        ))}
      </div>
    );
};

export default ProductDisplay;
