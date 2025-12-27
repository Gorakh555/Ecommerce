import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useProduct } from '../context/Product';

const Update = () => {

  const { updateProduct } = useProduct();


  const { id } = useParams()
    console.log("ID from params:", id);

  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [stockQuantity, setStockQuantity] = useState("")
  const [date, setDate] = useState("")
  const [available, setAvailable] = useState(false)
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (!id) return;
  const fetchProduct = async () => {
    const res = await fetch(`http://localhost:8080/products/${id}`);
    if (!res.ok) return;
    const p = await res.json();

    setName(p.name);
    setBrand(p.brand);
    setDescription(p.description);
    setPrice(p.price);
    setCategory(p.category);
    setStockQuantity(p.stockQuantity);
    setDate(p.date);
    setAvailable(p.available);
  };

  fetchProduct();
}, [id]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("name",name);
  formData.append("brand",brand);
  formData.append("description",description);
  formData.append("price",Number(price));
  formData.append("category",category);
  formData.append("stockQuantity",Number(stockQuantity));
  formData.append("date",date);
  formData.append("available",available);
  if (image) formData.append("image", image);

  updateProduct(Number(id),formData);

};

  

  return ( 
    <div className='flex items-center justify-center h-screen'>
      <form className= 'flex gap-4 text-black h-100 w-150 flex-wrap' onSubmit={handleSubmit}>
        <label>Name <br/>
        <input
        type="text" className='bg-white w-70 rounded mt-1 text-black outline-none pl-1 p-1 border-2' 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Brand <br/>
        <input
        type="text" className='bg-white w-70 rounded mt-1 text-black outline-none pl-1 p-1 border-2' 
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        />
      </label>
      <label>Description <br/>
        <input
        type="text" className='bg-white w-140 rounded mt-1 text-black outline-none pl-1 p-1 border-2'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        
        />
      </label>
      <label>Price <br/>
        <input
        type="number" className='bg-white w-50 rounded mt-1 text-black outline-none pl-1 p-1 border-2' 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>Category <br/>
        <input
        type="text" className='bg-white w-70 rounded mt-1 text-black outline-none pl-1 p-1 border-2'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <label>Stock Quantity <br/>
        <input
        type="number" className='bg-white w-45 rounded mt-1 text-black outline-none pl-1 p-1 border-2'
        value={stockQuantity}
        onChange={(e) => setStockQuantity(e.target.value)}
        />
      </label>
      <label>Date <br/>
        <input
        type="date" className='bg-white w-45 rounded mt-1 text-black outline-none pl-1 p-1 cursor-pointer border-2' 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>Image <br/>
        <input
        type="file" className='bg-white w-45 rounded mt-1 text-black outline-none pl-1 p-1 cursor-pointer border-2'
        accept="image/*" 
        onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
        <div className='flex items-center justify-center gap-2'>
          <input
            type="checkbox" className='bg-white rounded mt-1 text-black outline-none pl-1 p-1' 
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
            <h1>Products Available</h1>
        </div><br/>
        <button className='bg-blue-700 active:scale-95 cursor-pointer rounded w-25 text-white'>Update</button>
      </form>
    </div>
 )
};

export default Update;
