import React, { useContext } from "react";
import { ProductContext } from "../Context";
import { MdDelete } from "react-icons/md";

const CartPage = () => {
  const { cartProduct } = useContext(ProductContext);
  console.log(cartProduct)

  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartProduct.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        cartProduct.map((item, index) => (
          <div
            key={index}
            className="border p-2 mb-2 rounded-md flex space-x-7 items-center "
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p>₹{item.price}</p>
            </div>
 
    <select name="Quantity" className="
      border
      border-gray-300
      rounded-md
      px-3
      py-2
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      transition
      duration-150
      ease-in-out
      text-gray-700
      bg-white
      shadow-sm
    "
    defaultValue=""
  >
    <option value="" disabled> Quantity</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
 <div> 
</div>

          <div
    className="
      p-2 
      rounded-md 
      cursor-pointer 
      transition 
      duration-150 
      hover:bg-gray-200
      active:bg-gray-300
    "
    title="Delete"
  // Optional: add your delete handler
  >
    <MdDelete className="text-red-500 text-xl" />
  </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
