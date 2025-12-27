import React from 'react'
import { Link } from 'react-router-dom'
import Categories from './Categories'
import Mode from './Mode'
import Search from './Search'

const Navbar = ({setsuggestions}) => {
  return (
    <div className='bg-[#18595B]  z-50 text-white flex justify-between items-center h-13 p-2 relative'>
        <div className='flex gap-4 w-100 items-center'>
            <div className='bg-[##F9C21E]'>
              <h1 className='font-bold bg rounded p-1 bg-[#F9C21E]'>24<span className='text-[#1b8058] text-sm'>X</span>7</h1>
            </div>
            <div className='flex text-sm gap-4 items-center justify-center'>
              <div>
                  <Categories />
                </div>
                <Link to={"/"}>Home</Link>
                <Link to={"/AddProducts"}>Add Products</Link>
            </div>
        </div>
        <div className='flex gap-4 text-sm'> 
            <Mode />
            <Link to={"/Cart"}>
            <i className="ri-shopping-cart-line">Cart</i>
            </Link>
            <Search setsuggestions={setsuggestions} />
        </div>
    </div>
  )
}

export default Navbar