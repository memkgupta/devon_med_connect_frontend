import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
function Navbar() {
    const[isOpen,setIsOpen] = useState(false);
    const [isAuth,setIsAuth] = useState(true);
  return (
<>
<nav className="bg-blue-700 p-4">
        <div className="flex justify-between md:hidden items-center">
            <div className="text-xl text-white" onClick={(e)=>{setIsOpen(!isOpen)}}>
            <TiThMenu />
            </div>
            <div id='account-menu' className="rounded-full w-10 h-10 bg-gray-200 ">
        <img className='rounded-full w-10 h-10 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/30px-Avatar_icon_green.svg.png" alt="" />
      </div>
        <div className="text-white font-bold text-lg">Your Logo</div>
        </div>
        {/* For screen greater than md */}

    <div className="hidden mx-auto md:flex items-center justify-between">
      <div className="text-white font-bold text-lg">Your Logo</div>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-red-400 duration-300 ease-in hover:scale-125">Home</Link>
        <Link to="/doctors" className="text-white hover:text-red-400 duration-300 ease-in hover:scale-125">Doctors</Link>
        <Link to="/services" className="text-white hover:text-red-400 duration-300 ease-in hover:scale-125">Services</Link>
        <Link to="/contact" className="text-white hover:text-red-400 duration-300 ease-in hover:scale-125">Contact</Link>
      </div>
      {isAuth?<div id='account-menu' className="rounded-full w-10 h-10 bg-gray-200 ">
        <img className='rounded-full w-10 h-10 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/30px-Avatar_icon_green.svg.png" alt="" />
      </div>:<Link to={"/login"}>Login</Link>}
    </div>
  </nav>
  <div className={`md:hidden ${isOpen?'flex flex-col':'hidden'}  bg-blue-700 `}>

        <Link to="/"        className="text-white hover:text-red-400 duration-300 ease-in hover:scale-125">Home</Link>
        <Link to="/doctors" className="text-white hover:text-red-400 duration-300 ease-in hover:scale-125">Doctors</Link>
        <Link to="/services" className="text-white hover:text-red-400 duration-300 ease-in hover:scale-125">Services</Link>
        <Link to="/contact" className="text-white hover:text-red-400 duration-300 ease-in hover:scale-125">Contact</Link>
     
  </div>
</>
  )
}

export default Navbar