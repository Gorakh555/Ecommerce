import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddProducts from "./components/AddProducts";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Update from "./components/Update";

const App = () => {

  const [products, setProducts] = useState([]);
  const [suggestions, setsuggestions] = useState([]);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:8080/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log("Error fetching products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    
    <div className="bg-white text-white min-h-screen">
      <Navbar setsuggestions={setsuggestions}/>

      <Routes>
        <Route path="/" element={<Home products={products} refreshProducts={fetchProducts} />} />
        <Route 
          path="/AddProducts" 
          element={<AddProducts products={products} refreshProducts={fetchProducts} />} 
        />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
};

export default App;
