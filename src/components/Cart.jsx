import React, { useState } from 'react'
import { useCart } from '../context/context';

const Cart = () => {
  const { cart, removeFromCart,increaseQty,decreaseQty } = useCart();

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );



    return (
    <div className=' w-full'>
        <h1 className='text-4xl h-30 text-black font-semibold flex items-center justify-center bg-[#f5f5f5] '>Shopping Cart</h1>
        <div className='bg-white h-125 p-10 flex gap-18'>
          <div className='h-90  ml-10 w-250 shrink-0 overflow-y-auto'>
            <div className="h-12 bg-[#F9C21E] rounded-2xl grid grid-cols-[2fr_1fr_1.5fr_1fr] items-center px-6 font-semibold">
              <span>Product</span>
              <span className="text-center">Price</span>
              <span className="text-center">Quantity</span>
              <span className="text-right">Subtotal</span>
            </div>
            {cart.map(item => (
              <div key={item.id} className="py-4 border-b">

                <div className="grid grid-cols-[2fr_1fr_1.5fr_1fr] items-center px-6 text-black">

                  <div className="flex items-center gap-4">
                    <button className="text-red-800" onClick={() => removeFromCart(item.id)}>
                      <i className="ri-close-line"></i>
                    </button>

                    <img
                      src={`http://localhost:8080/uploads/${item.image}`}
                      className="h-14 w-14 object-contain border rounded"
                    />

                    <h2 className="font-medium">{item.name}</h2>
                  </div>

                  <p className="text-center">₹{item.price}</p>

                  <div className="flex justify-center">
                    <div className="flex items-center border rounded-full px-3 py-1 bg-white shadow-sm">
                      <button onClick={()=> decreaseQty(item.id)} className="px-2">-</button>
                      <span className="px-3 font-semibold">{item.quantity}</span>
                      <button onClick={()=> increaseQty(item.id)} className="px-2">+</button>
                    </div>
                  </div>

                  <p className="text-right font-semibold">
                    ₹{item.price * item.quantity}
                  </p>

                </div>
                <hr className='text-gray-100 mt-2'/>
                
              </div>
            ))}
          </div>
          <div className='h-75 w-64 rounded-xl p-4   bg-white border-2 border-gray-200 shadow-amber-50'>
              <h1 className='text-lg text-black font-semibold'>Order Summary</h1>
              <hr className='text-gray-200 mt-1.5'/>
              <div className='flex'>
                <div className='text-gray-400 flex flex-col'>
                  <span className='mt-2 w-34 ' >items</span>
                  <span className='mt-2 w-34 '>Sub Total</span>
                  <span className='mt-2 w-34 '>Shipping</span>
                  <span className='mt-2 w-34 '>Taxes</span>
                  <span className='mt-2 w-34 '>Coupon Discount</span>
                </div>
                <div className='text-gray-400 flex flex-col ml-4'>
                    <span className='mt-2 w-34 ' >{totalItems}</span>
                    <span className='mt-2 w-34 '>{subTotal}</span>
                    <span className='mt-2 w-34 '>0</span>
                    <span className='mt-2 w-34 '>0</span>
                    <span className='mt-2 w-34 '>0</span>
                </div>
              
              </div>
              <hr className='mt-2 text-gray-200'/>
                <div className='flex gap-19 text-gray-400'>
                    
                    <span className='mt-2 w-34 mb-2 '>Total</span>
                   <span className='mt-2 w-34 mb-2  '>{subTotal}</span>
              </div>
                <div className='text-center'>
                  <button className='bg-green-700 text-white rounded-full p-1 px-3 active:scale-95 hover:cursor-pointer'>Proceed to Checkout</button>
                </div>
          </div>
        </div>
        
        <div className='h-14 text-xl text-black text-center p-8 font-semibold bg-[#f5f5f5]'>About Us</div>
        <div>
      
    </div>
    </div>
  )
}

export default Cart