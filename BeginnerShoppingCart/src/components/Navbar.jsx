import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-around items-center p-6 bg-slate-600 text-white text-2xl">
        <div>Shopping Cart</div>
        <form>

        <input
          className="p-2 text-black h-10 w-[400px] rounded-md"
          placeholder="Search a Product"
          required
          />
          
          </form>

        <div className="bg-green-500 h-[50px] w-[50px] flex items-center justify-center border-2 border-green-700 rounded">
          <FaShoppingCart size={24} className="text-white" />
        </div>
      </div>
      {/* <FaShoppingCart /> */}
    </div>
  );
};

export default Navbar;
