import React from 'react'
import img from '../img/laptop.jpg'

function About() {
  return (
    <>
  <div className="max-w-[1240px] my-10 p-2 mx-auto   md:grid grid-cols-3">
    <div className=" col-span-1 md:w-[80%] text-center">
        <img src={img} alt=""  className='inline'/>
    </div>
    <div className=" flex justify-center  flex-col  col-span-2">
        <h1 className='text-[#00df9a] text-bold mx-3'>LEARN FROM About</h1>
        <p className='my-2 text-justify'>“We know that we are influencing the foundations of your future, and we take this responsibility very seriously. With ItechCompany, I ensure that you always get top-class training backed by practical projects and future prospects. Wishing you a successful & future-proof career!”</p>
        <button className='bg-black text-white py-1 px-2 mt-2
        rounded inline w-[20%]'>Get Started</button>
    </div>
   </div>

   <div className="bg-[#2699fb] p-5">
      <div className="max-w-[1240px] md:flex mx-auto justify-between">
        <div className=" m-2">
          <h1 className=" text-[20px] md:text-4xl font-bold text-white ">
            Want to learn latest I.T skills?</h1>
            <span className="text-white">
              Sign up to our newsletter and stay up to date.</span>
        </div>
        <div className="m-2">
          <input type="email" placeholder='email' className='sm:w-full py-2 px-3 mx-2
          rounded text-2xl mb-2 '  />
          <button className='border border-black py-2 px-3 text-2xl
            bg-black text-white rounded'>Notify Me</button>
            <br />
            <p className="py-2 text-white"> We care bout the protection of your data. Read our.
            </p>
            <a href='#' className='text-white'>Privacy Policy.</a>
        </div>

      </div>
    </div>
    </>
  )
}

export default About
