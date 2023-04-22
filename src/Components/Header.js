import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
 import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';


function Header() {
    const [toggle ,setToggle] = useState(false);
  return (
    <>
    <div className="bg-[#2699fb] p-5">
        <div className="max-w-[1240px] py-[15px] flex justify-between 
        items-center mx-auto">
            <div className='text-3xl font-bold  '>
            Itech Company
            </div>
            {
                toggle ?
                <AiOutlineClose  onClick={()=>setToggle(!toggle)} className='text-white text-2xl 
                md:hidden block'/>
                :

            <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl 
            md:hidden block'/>
            }
           
            <ul className='hidden md:flex  gap-5 text-2xl text-white'>
                <li>
                 <Link to="/">Home</Link>
                </li>
                <li>
                     <Link to="/company">Company</Link>
                </li>
                <li>
                     <Link to="/courses">Courses</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
            </ul>
            {/* Responsive menu  */}
            <ul className= {` duration-300 first-letter:md:hidden  text-2xl text-white fixed bg-black
             py-3 px-3 w-full h-screen top-[104px]  
                 ${toggle ? 'left-[-0]' : 'left-[-100%]'} ` 
             }>
              <li className='p-3'>
                 <Link to="/">Home</Link>
                </li>
                <li className='p-3'>
                     <Link to="/company">Company</Link>
                </li>
                <li className='p-3'>
                     <Link to="/courses">Courses</Link>
                </li>
                <li className='p-3'>
                    <Link to="/about">About</Link>
                </li>
                <li className='p-3'>
               
                  <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>

    </div>
   
    </>
  )
}

export default Header
