import React from 'react'
import Update from './Update'
import { useNavigate } from 'react-router-dom'

const Edit = ({ productId }) => {

    const navigate = useNavigate();
    const handleClick = (e) => {
    e.stopPropagation();         
    navigate(`/update/${productId}`);    
  };
  return (
    <div className='flex bg-blue-700 rounded gap-1 ml-[54%]  items-center justify-center active:scale-95 hover:cursor-pointer w-25 'onClick={handleClick}>
        <i className="ri-edit-line"></i>
        <h2>Edit</h2>
    </div>
  )
}

export default Edit