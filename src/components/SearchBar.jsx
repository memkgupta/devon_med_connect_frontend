import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/global';
import { Link } from 'react-router-dom';

function SearchBar() {
    const [recommendations,setRecommendations] = useState([]);
    const [query,setQuery] = useState("");
    const getData = async()=>{
      if(query!=""){
        const res = await axios.get(`${BASE_URL}/doctor/search?query=${query}`);
        if(res.status===200){
          setRecommendations(res.data.result);
        }
      }

    }
    
    const handleSearch = async()=>{
let context= this;
let timeout;
if(timeout){
  clearTimeout(timeout);
}
setTimeout(()=>{
getData.apply(this);
},500)
    }
    useEffect(()=>{
      if(query===""){
        setRecommendations([]);
      }
      else{
        handleSearch();
      }

    },[query])
  return (
    <div className='flex  p-4'>
       <div className="relative grow">
       <input value={query} onChange={(e)=>{setQuery(e.target.value)}}type="text" className='w-full flex-1 rounded-l-lg py-3 px-3 w-auto outline-none'  name="query" id="query" placeholder='Search Doctors By name,city,specialization'/>
       <div className={`${recommendations.length<1?'hidden':'absolute'} top-15 left-0 bg-white rounded-sm shadow-sm hover:bg-gray-200 p-4 w-full grid grid-cols-1 gap-y-2`}>
   {
    recommendations.map((recommendation,index)=>{
      return(
        <div key={index}>
          <Link className='text-black text-center' to={`/doctor/${recommendation._id}`}>{recommendation.name}</Link>
          </div>
      )
    })
   }
  </div>
       </div>
       

        <button className='bg-blue-700 text-white rounded-r-lg px-2 text-center'>Search</button>
    </div>
  )
}

export default SearchBar