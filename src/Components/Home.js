import React from 'react'
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
// import NavLink from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="bg-[#2699fb] w-full h-screen py-[100px]">
        <div className="max-w-[1240px] my-[50px] mx-auto text-center  font-bold ">
            <h1 className=' text-xl md:text-3xl mb-2 '>
                Learn With Us.
            </h1>
            <h2 className='text-white text-3xl md:text-5xl mt-1 '>
                Grow With Us.
            </h2>
            <div className=' text-[20px] md:text-[50px] md:pt-2 text-white '>
                Learn
                <Typed
                className='pl-3'
                    strings={['Web Development ','Digital Marketing',
                    'Eathical Hacking','React development','Python Development','Full Stack Development']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={true}
                />
            </div>
            <button className='border border-black py-2 px-3 text-2xl
            bg-black text-white rounded'> 
             <Link to="/company">Get Started</Link></button>
        </div>
    </div>
   
    </>
  )
}

export default Home
