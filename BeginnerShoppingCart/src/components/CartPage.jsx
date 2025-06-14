import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context";
import { MdDelete } from "react-icons/md";
 
const CartPage = () => {


const { productName } = useParams();
const { product, setProduct } = useContext(ProductContext);

 const selectedProduct = product.find((item) => {
    item.name === product.name;
  });


  if (!selectedProduct) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <div>
        <img src= {selectedProduct.image} alt= {selectedProduct.name} />
      </div>
      <div>
        {selectedProduct.name}
      </div>
      <div>
        {selectedProduct.price}
      </div>
      <div>
        <MdDelete />
      </div>
    </div>
  );
};

export default CartPage;
