import React from "react";
import Card from "./Card";
import { useProduct } from "../context/Product";

const Home = () => {

  const { products } = useProduct();
  console.log(products);

  
  if (products.length === 0) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div className="flex flex-wrap  max-h-screen w-full relative">
      <img src="sofa.webp" alt="sofa" className="h-[600px] w-full" />
      <div className="h-70 w-120 m-20 mt-30 p-10 rounded-xl bg-teal-900/85 text-white absolute">
          <span className="text-4xl font-semibold text-center">Sofa Chair Set For Relaxation & Home Decor Status</span>
      </div>
      <span className=" text-5xl font-semibold p-5 text-black text-center w-full mt-10">Our Product's Collection</span>
        <div className="flex flex-wrap p-10 bg-white  items-center h-110 rounded-xl justify-evenly w-full ">
          
            {products.map((product) => (
              <Card key={product.id} productId={product.id} />
            ))}
        </div>
    </div>
  );
};

export default Home;

