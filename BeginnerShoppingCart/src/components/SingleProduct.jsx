import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context";
import { MdDelete } from "react-icons/md";

const SingleProduct = () => {
  const { productName } = useParams();
  const { product, addToCart } = useContext(ProductContext);

  if (!product || product.length === 0) {
    return <div>Loading product...</div>;
  }

  const selectedProduct = product.find(
    (item) => item.name.toLowerCase() === productName.toLowerCase()
  );

  // console.log(selectedProduct);

  if (!selectedProduct) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-5">
      <div>
        <img
          className="rounded-xl shadow-lg border border-gray-200"
          src={selectedProduct.image}
          alt={selectedProduct.name}
        />
      </div>
      <div className="text-2xl">{selectedProduct.name}</div>
      <div className="text-xl">₹{selectedProduct.price}</div>
      <button onClick={()=> addToCart(selectedProduct)}>
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;
