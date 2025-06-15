import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa6";
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='grid grid-cols-3 p-4 place-items-center bg-slate-200'>
      <div className='flex justify-center items-center gap-4'>
        <img  src= {logo}  className='h-16'/>
        <FaInstagram size={36} />
        <FaFacebook size={36} />
        <FaLinkedin size={36}/>    
      </div>
      <div> Contact us: +91123456789</div>
      <div  className="flex justify-center gap-8">
        <ul className="flex space-x-6 text-sm">
          <li className='text-2xl '>Services</li>
          <li className='text-2xl '>About</li>
          <li className='text-2xl '>Join</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
