import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Search = ({setsuggestions}) => {

  const [keyword, setkeyword] = useState("")
  const [results, setResults] = useState([])
  const navigate = useNavigate();


  const handleSearch = async(value) =>{
    setkeyword(value)
    if(value.trim() === "") {
      setResults([]);
      return;
    }  
    const res = await axios.get(`http://localhost:8080/products/search?keyword=${keyword}`)
    setResults(res.data);
  }

  return (
    <div className=''>
        <form className='bg-white rounded h-7 p-1 text-black'>
          <i className="ri-search-line text-gray-500 pr-2"></i>
            <input type="text" value={keyword} placeholder='Search' className='outline-none' onChange={(e) => handleSearch(e.target.value)}></input>
            {results.length > 0 && (
        <div style={{
          position: "absolute",
          background: "white",
          border: "1px solid white",
          zIndex: 1000
        }}
        className='rounded-bl-md w-46  '>
          {results.map((product) => (
            <div
              key={product.id}
              style={{ padding: "8px", cursor: "pointer" }}
              className='hover:bg-amber-500'
              onClick={() => {
                setResults([]);
                setkeyword("");
                navigate(`/product/${product.id}`);
              }
              }
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
        </form>
    </div>
  )
}

export default Search