import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {

    const [show, setshow] = useState(false);
    const dropdownRef = useRef(null);

    const categories = [
    "Technology",
    "Sports",
    "Music",
    "Movies",
    "Health",
    "Education",
    "Business",
    "Travel",
    "Gaming"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setshow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='bg-[#F9C21E] top-10 left-0 rounded p-1 text-black z-50'>
        <button onClick={() =>{
            setshow(!show)
        }}>
            <div>
              <i class="ri-menu-line"></i>
              <span>Categories</span> 
            </div>
        </button>

        {show && (
            <div 
            ref={dropdownRef}
            className='absolute h-38 w-40 overflow-y-auto bg-black text-white flex flex-col top-full mt-4 p-2 shadow-lg rounded-b-lg'>
           
            {categories.map(function(elem,idx){
                return <Link key={idx} to={"/Category/${elem.toLowerCase()}"} className='text-white hover:bg-amber-500 p-1 rounded '>{elem}</Link>
            })}

            </div>
        )}

    </div>
  )
}

export default Categories