import React, { useState } from 'react'
import Edit from './Edit';
import { useProduct } from '../context/Product';

const AddProducts = () => {

  const { addProducts } = useProduct();

  const [image, setimage] = useState(null);

  const [preview, setPreview] = useState(null);

  const [product, setProduct] = useState({
    name:"",
    brand:"",
    description:"",
    price:"",
    category:"",
    stockQuantity:"",
    date:"",
    available:false,
  });

  const handleInput = (e) => {
    setProduct({
      ...product,
      [e.target.name]:e.target.value
    });
  };

  const handleImage = (e) =>{
    const file = e.target.files[0];
    setimage(file);
    setPreview(URL.createObjectURL(file));
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("name",product.name);
  formData.append("brand",product.brand);
  formData.append("description",product.description);
  formData.append("price",Number(product.price));
  formData.append("category",product.category);
  formData.append("stockQuantity",Number(product.stockQuantity));
  formData.append("date",product.date);
  formData.append("available",product.available);
  formData.append("image",image);

  addProducts(formData);

  setProduct({
    name:"",
    brand:"",
    description:"",
    price:"",
    category:"",
    stockQuantity:"",
    date:"",
    available:false,
  })

  setimage(null);
  setPreview(null);

};


  return ( 
    <div className='h-screen bg-white w-full p-5 text-black'>
      <form className= 'flex gap-4 text-black h-100 w-150 flex-wrap' 
        onSubmit={handleSubmit}>
        <div className='flex gap-15 ml-30'>
          <div className='flex flex-col gap-6'>
            <div className='w-180 h-110 p-5 rounded-2xl flex flex-col gap-4 bg-[#FAF9F9]'>
              <span className='text-xl font-semibold'>General Information</span>

              <div className='flex gap-4'>
                <label className=' text-lg '>Name Product<br/>
                <input type="text" className='bg-[#EFEFEF] w-82 rounded-lg mt-1  outline-none pl-1 p-2 ' 
                  name='name' value={product.name} onChange={handleInput}></input> 
                </label>

                <label className=' text-lg '>Brand<br/>
                  <input type="text" className='bg-[#EFEFEF] w-82 rounded-lg mt-1  outline-none pl-1 p-2 ' 
                  name='brand' value={product.brand} onChange={handleInput}></input> 
                </label>
              </div>

              <label className='text-lg'>Description Product<br/>
                <textarea type="text" className='bg-[#EFEFEF] w-full rounded mt-1 text-start outline-none pl-1 p-2 h-30' 
                name='description' value={product.description} onChange={handleInput}></textarea> 
              </label>

              <div className='flex gap-68'>
                <label className=' text-lg '>Gender<br/>
                  <div className='text-center flex gap-2'>
                    <input type="radio" name="gender" value="male" /> Male
                    <input type="radio" name="gender" value="female" /> Female
                    <input type="radio" naem="gender" value="other"/> Unisex
                  </div>
                </label>

                <label>Release Date <br/><input type="date" className='bg-[#EFEFEF] w-45 rounded mt-1 pl-1 p-2 cursor-pointer' 
                  name='date' value={product.date} onChange={handleInput}></input> 
                </label> 
              </div>

            </div>
            <div className='w-180 h-65 p-5 rounded-2xl flex flex-col gap-4 bg-[#FAF9F9] mb-5'>
              <span className='text-xl font-semibold'>Pricing And Stock</span>
              <div className='flex gap-4 items-center'>

                <label className='text-lg'> Base Pricing <br/><input type="number" className='bg-[#EFEFEF] w-80 rounded mt-1 outline-none pl-1 p-2' 
                  name='price' value={product.price} onChange={handleInput}></input>
                </label> 

                <label className='text-lg'>Stock <br/><input type="number" min="0" className='bg-[#EFEFEF] w-80 rounded mt-1 outline-none pl-1 p-2' 
                  name='stockQuantity' value={product.stockQuantity} onChange={handleInput}></input> 
                </label>

              </div>
              <div className='flex gap-4 items-center'>
                <label className='text-lg'> Discount <br />
                  <input type="text" name='Discount' className='bg-[#EFEFEF] w-80 rounded mt-1 outline-none pl-1 p-2'/>
                </label>

                <label className='text-lg'> Discount Type <br />
                  <input type="text" name='DiscountType' className='bg-[#EFEFEF] w-80 rounded mt-1 outline-none pl-1 p-2'/>
                </label>

              </div>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='w-90 h-110 p-5 rounded-2xl bg-[#FAF9F9]'>
              <span className='text-xl font-semibold'>Upload Image</span><br />
              <div>
                <label className='text-lg'>Image <br/><input type="file" accept="image/*" className='bg-[#EFEFEF] w-45 rounded text-black outline-none pl-1 mt-0.5 flex items-center text-sm h-8 pt-1.5 cursor-pointer border-2 border-black' 
                  name='image' onChange={handleImage}></input> 
                  {preview && (
                    <img
                      src={preview}
                      alt="preview"
                      style={{ width: "150px", marginTop: "10px" }}
                    />
                  )}
                </label>
              </div> 
            </div>
            <div className='w-90 h-40 p-5 rounded-2xl flex flex-col gap-4 bg-[#FAF9F9]'>
              <label className='text-lg'>Category <br/><input type="text" className='bg-[#EFEFEF] w-70 rounded mt-2 outline-none pl-1 p-2' 
                name='category' value={product.category} onChange={handleInput}></input> 
              </label> 
              <div className='flex items-center w-140 gap-2'> 
               <input type="checkbox" name='available' id="agree" checked={product.available} 
                  onChange={(e) =>
                  setProduct({ ...product, available: e.target.checked })
                }/> 
                <label className='text-lg' htmlFor="agree">Products Available</label> 
              </div>
            </div>
            <div className='flex gap-105 items-end justify-end'>
              <button className='bg-[#9FEDA8] active:scale-95 cursor-pointer w-25 p-2 rounded-full'>Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div> 
  )
}

export default AddProducts;
