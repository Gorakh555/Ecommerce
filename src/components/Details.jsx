import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Edit from './Edit';
import { useProduct } from '../context/Product';

const Details = () => {
    const { id } = useParams();

    const { getProductById,fetchProducts } = useProduct();
    const product = getProductById(Number(id));

    if(!product) {
        return <div>
            <p>Loading....</p>
        </div>
    }

  return (
    <div className='max-h-screen bg-white '>
        <div className='flex gap-10 h-100'>
            <img 
            src={`http://localhost:8080/uploads/${product.image}`} 
            alt={product.name}
            className="w-100 h-100 flex p-20 m-10 border-amber-100"
            />

            <div className='text-black'>
                <h1 className=' mt-15 text-3xl '>{product.name}</h1>
                <h1 className='text-2xl '>  by {product.brand}</h1>
                <div className='flex gap-2 mt-1.5 '>
                    <h1 className=' text-white  text-sm bg-red-500 w-23 pl-1 rounded pt-0.5'>#1 Best Seller </h1>
                    <h1 className='text-blue-800 rounded pb-0.5'>Most Loved by Gamers</h1>
                </div>
                <h1 className='text-sm mt-2'><span className='font-semibold'>2K+ bought</span> in past month</h1>
                <hr className='border-gray-400 w-100' />
                <h1 className='mt-3 text-white bg-red-700 w-33 pl-1 rounded'>Limited time deal</h1>
                <p className='font-semibold flex'><span className='m-1'>₹</span>  <span className='text-2xl '> {product.price}</span></p>
                <div className='flex gap-44 items-center justify-center'>
                <h1 className='text-sm font-medium'>Inclusive of all taxes</h1>
                
            </div>
            
        </div>
        </div>
        <Edit productId={id}/>
        
    </div>
  )
}

export default Details