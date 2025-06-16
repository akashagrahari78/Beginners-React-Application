import React, { useContext } from "react";
import { FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context";

const Navbar = () => {

  const {cartProduct} = useContext(ProductContext)
  //  console.log("CartProducts: ", cartProduct)

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

       <Link to="/cart">
      <div
        className="
          flex items-center gap-2
          bg-green-600
          border-2 border-green-700
          rounded-md
          px-5 py-2
          shadow
          hover:bg-green-700
          transition
          duration-150
        "
        style={{ width: "auto", minWidth: "90px" }}
      >
        <FaShoppingCart size={28} className="text-white" />
        <span className="text-yellow-300 font-bold text-lg">{cartProduct.length}</span>
         
      </div>
    </Link>
      </div>
      {/* <FaShoppingCart /> */}
    </div>
  );
};

export default Navbar;
