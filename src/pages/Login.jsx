import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/global';
import { useToken } from '../context/TokenProvider';
import { toast ,ToastContainer} from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [data,setData]=useState({email:"",password:""});
  const [token,setToken] = useToken();
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setData(prev=>({...prev,[name]:value}))
  }
  const navigate = useNavigate();
  const  handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/user/login`,data);
      const d = res.data;
     if(d.success){
      toast('Login SuccessFull')
  setToken(d.token);
  navigate('/',{replace:true})
     }
     else{
      toast(d.message)
     }
    } catch (error) {
      toast('Some Error Occured')
    }
 
  
  }
  useEffect(()=>{
    if(token!=null){
      navigate('/',{replace:true})
    }
  },[])
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer></ToastContainer>
    <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="email"
            id="email"
            required
            name="email"
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button
        
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Log In
        </button>
      </form>
    </div>
  </div>
  )
}

export default Login