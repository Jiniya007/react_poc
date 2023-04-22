import React from 'react'
import  single from '../img/single.png'
import double from '../img/double.png'
import triple from '../img/triple.png'

function Cards() {
  return (
    <>
    <div className="py-[100px] px-2 ">
        <div className=" max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
            <div className="shadow-xl my-2  h-[500px]
            hover:scale-110 duration-500">
                <img src={single} alt=""className='w-20 mx-auto mt-2' />
                <h1 className="text-4xl text-center font-bold">
                    Web development</h1>
                    <p className='text-center text-4xl font-bold'>₹800</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Courses to get you started </p>
                        <p className='py-2 border-b mx-8'>The Web Developer Bootcamp 2023</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                   target='_blank'  className="border border-black bg-[#00df9a] rounded-md "
                    id='btn'>
                        Start Trial</a>
                     
            </div>
             <div className="shadow-xl my-2  h-[500px]
            hover:scale-110 duration 500 bg-gray-400">
               <img src={double} alt="" className='w-20 mx-auto mt-2
               bg-transparent'  />
                <h1 className="text-4xl text-center font-bold">
                Digital Marketin</h1>
                <p className='text-center text-4xl font-bold'>₹649</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Courses to get you started </p>
                        <p className='py-2 border-b mx-8'>The Complete Digital Marketing Guide - 23 Courses in 1</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <a href="https://www.udemy.com/course/digital-marketing-guide/"
               target='_blank'className="border border-black bg-[#00df9a] rounded-md "
                    id='btn'>
                        Start Trial</a>
            </div> 
             <div className="shadow-xl my-2 
            hover:scale-110 duration-500 h-[500px]">
                <img src={triple} alt=""className='w-20 mx-auto mt-2' />
                <h1 className="text-4xl text-center font-bold">
                App Development</h1>
                <p className='text-center text-4xl font-bold'>₹649</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Courses to get you started </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <a href="https://www.udemy.com/course/mobile-app-development-with-flutter/"
                     target='_blank'  className="border border-black bg-[#00df9a] rounded-md "
                    id='btn'>
                        Start Trial</a>
            </div> 
            <div className="shadow-xl my-2 
            hover:scale-110 duration-500 h-[500px]">
                <img src={triple} alt=""className='w-20 mx-auto mt-2' />
                <h1 className="text-4xl text-center font-bold">
                Python Development</h1>
                <p className='text-center text-4xl font-bold'>₹500</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Courses to get you started</p>
                        <p className='py-2 border-b mx-8'>Python relates to DevelopmentIT & Software</p>
                        <p className='py-2 border-b mx-8'>The Complete Python Bootcamp From Zero to Hero in Python</p>
                    </div>
                    <a href="https://www.udemy.com/course/complete-python-developer-zero-to-mastery/" 
                   target='_blank'   className="border border-black bg-[#00df9a] rounded-md "
                    id='btn'>
                        Start Trial</a>
            </div> 
            <div className="shadow-xl my-2  h-[500px]
            hover:scale-110 duration 500 bg-gray-400">
               <img src={double} alt="" className='w-20 mx-auto mt-2
               bg-transparent'  />
                <h1 className="text-4xl text-center font-bold">
                Full Stack Development</h1>
                <p className='text-center text-4xl font-bold'>₹649</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Courses to get you started </p>
                        <p className='py-2 border-b mx-8'>Full Satck  to DevelopmentIT & Software</p>
                        <p className='py-2 border-b mx-8'>The Complete Web Developer in 2023: Zero to Mastery</p>
                    </div>
                    <a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/"
                   target='_blank'    className="border border-black bg-[#00df9a] rounded-md "
                    id='btn'>
                        Start Trial</a>
            </div>
            <div className="shadow-xl my-2  h-[500px]
            hover:scale-110 duration-500">
                <img src={single} alt=""className='w-20 mx-auto mt-2' />
                <h1 className="text-4xl text-center font-bold">
                    React Development</h1>
                    <p className='text-center text-4xl font-bold'>₹700</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Courses to get you started </p>
                        <p className='py-2 border-b mx-8'>Recat Courses to DevelopmentIT & Software</p>
                        <p className='py-2 border-b mx-8'>The Complete React Developer in 2023: Zero to Mastery</p>
                    </div>
                    <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?kw=react&src=sac" target='_blank' 
                     className="border border-black bg-[#00df9a] rounded-md "
                    id='btn'>
                        Start Trial</a>
                     
            </div>

        </div>
    </div>
      
    </>
  )
}

export default Cards
