import React from 'react'
import { useProduct } from '../context/Product'

const Delete = ({productId}) => {

  const { removeProduct } = useProduct();

  

  return (
    <div className='flex justify-end'>
        <i className="ri-close-line mb-2 hover:bg-red-500 hover:opacity-300  text-amber-400 rounded-full px-1 opacity-50 active:scale-95" 
        onClick={(e) => {
    e.stopPropagation();   // 🔥 stops card click
    removeProduct(productId);
  }}
         ></i>
         

    </div>
  )
}

export default Delete