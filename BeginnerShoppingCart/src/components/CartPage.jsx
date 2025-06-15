import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context";
import { MdDelete } from "react-icons/md";

const CartPage = () => {
  const { cartProduct } = useContext(ProductContext);
  console.log(cartProduct);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartProduct.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        cartProduct.map((itemName, index) => (
          <div key={index} className="border p-2 mb-2 rounded-md">
            {itemName}
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
