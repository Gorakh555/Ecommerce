import React from "react";
import { useNavigate } from "react-router-dom";
import Delete from "./Delete";
import Edit from "./Edit";
import { useCart } from "../context/context";
import { useProduct } from "../context/Product";

const Card = ({ productId }) => {

  const { addToCart } = useCart();

  const { getProductById } = useProduct();
  const product = getProductById(productId);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();  
    addToCart(product);       
    // navigate(`/Cart`);    
  };

  return (
    <div className="h-75 w-70 bg-[#F5F5F5] text-white mt-3 mr-5 p-5 shrink-0 rounded-2xl border-2 border-[#0D6F72] shadow-lg flex flex-col gap-2 hover:cursor-pointer" onClick={() =>navigate(`/product/${product.id}`)}>
      <div className="flex justify-between">
        <h1 className="text-white bg-[#0D6F72] rounded-2xl text-center w-28 p-0.5"> <span className="text-[#F9C21E] font-semibold">{product.stockQuantity}+</span> Items</h1>
      <Delete productId={productId}/>
      </div>
      
      <div className="flex mb-3">
        <div className="pl-1">
        <h1 className="text-lg font-bold text-black">{product.name}</h1>


        <h3 className="text-sm text-gray-600 font-semibold">{product.brand}</h3>

        <p className="text-xs text-gray-600 font-semibold mt-1 line-clamp-2">
          {product.description}
        </p>
      </div>

      <div>
        {product.image && (
        <img 
          src={`http://localhost:8080/uploads/${product.image}`}
        alt={product.name}
          className="w-full h-38 object-contain rounded bg-cover"
        />
      )}
      </div>
      </div>

      <button className="bg-[#0D6F72] w-full p-2 rounded active:scale-95 hover:bg-blue-800 mb-2" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
