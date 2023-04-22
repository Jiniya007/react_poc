import React from "react";
import itech from '../img/it.jpeg'
import { Link } from "react-router-dom";

function Company() {
  return (
    <>
      <div className="max-w-[1240px] my-10 p-2 mx-auto mt-[100px]  md:grid grid-cols-3">
        <div className="col-span-2 md:w-[80%] text-center">
          {/* <img src={img} alt=""  className='inline'/> */}
         <h1 className="text-4xl font-bold">
            Welcome to Itech Company Online 
           </h1> 
        </div>
        <div className=" flex justify-center  flex-col  col-span-2">
          <h1 className="text-[#00df9a] text-bold text-4xl py-3 mx-3">Itech Company</h1>
          <p className="my-2 text-justify">
          The solution delivers your licensed view of Experian’s ConsumerView database providing a single, definitive and consistent outlook of UK consumers.

ItechCompany online features include data hygiene, a comprehensive set of data link keys enabling Data Enrichment of your 1st party customer data, and Customer Insight from the Profile Report. The report summarises the data matching process and presents a series of demographic, segmentation, lifestyle and behavioural benchmark metrics giving actionable insight into the levels of discrimination helping to inform your target marketing activities.
          </p>
          <button
            className="bg-black text-white py-1 px-2 mt-2
        rounded inline w-[20%]"
          > <Link to="/About">
            Get Started</Link>
          
          </button>
        </div>
        <div className=" px-2 py-2 
    text-center mx-auto">
            <img src={itech} alt="" className="inline"/>
        </div>
      </div>
    </>
  );
}

export default Company;
