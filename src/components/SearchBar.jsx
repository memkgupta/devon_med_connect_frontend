import React, { useState } from 'react'

function SearchBar() {
    const [recommendations,setRecommendations] = useState([]);
    const [query,setQuery] = useState("");
  return (
    <div className='flex  p-4'>
       <div className="relative grow">
       <input value={query} onChange={(e)=>{setQuery(e.target.value)}}type="text" className='w-full flex-1 rounded-l-lg py-3 px-3 w-auto outline-none'  name="query" id="query" placeholder='Search Doctors By name,city,specialization'/>
       <div className={`${recommendations.length<1?'hidden':'absolute'} top-15 left-0 bg-gray-300 p-4 w-full`}>
   
  </div>
       </div>
       

        <button className='bg-blue-700 text-white rounded-r-lg px-2 text-center'>Search</button>
    </div>
  )
}

export default SearchBar