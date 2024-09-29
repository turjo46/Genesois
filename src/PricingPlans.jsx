import React from 'react';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';

const PricingPlans = () => {
  return (
    <div className="bg-white container mx-auto max-w-[1200px] my-12 p-5 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Starter Plan */}
      <div className="border shadow-lg  overflow-hidden">
        <div className="bg-white p-8">
          <h2 className="text-6xl font-bold text-gray-900">
            <span className="text-3xl mr-3">$</span>480
            <span className="text-xl font-normal text-gray-500"> / Per Month</span>
          </h2>
        </div>
        <div className="bg-orange-500 text-white text-center py-8">
          <h3 className="text-3xl tracking-tighter font-semibold">Starter Plan</h3>
        </div>
        <div className='bg-gray-100'>
        <ul className="p-6 space-y-4  text-gray-700 text-lg">
          <li className="flex items-center py-2">
            <span className="text-[#5C5E64] "><TiTick/></span>
            <span className="ml-2">Creative Business Consulting</span>
          </li>
          <li className="flex items-center py-2 bg-gray-200 px-5">
            <span className="text-[#5C5E64] "><TiTick /></span>
            <span className="ml-2">Make a Perfect Corporate Office</span>
          </li>
          <li className="flex items-center py-2">
            <span className="text-[#5C5E64]  "><ImCross /></span>
            <span className="ml-2">Powerful Management</span>
          </li>
          <li className="flex items-center py-2 bg-gray-200 px-5">
            <span className="text-[#5C5E64]"><ImCross /></span>
            <span className="ml-2">Position Your Business Growth</span>
          </li>
          <li className="flex items-center py-2">
            <span className="text-[#5C5E64]"><ImCross /></span>
            <span className="ml-2">Consulting Service Provider</span>
          </li>
        </ul>
        </div>
        <div className="bg-white p-6 text-center">
          <button className="bg-orange-500 text-white px-4 py-5 w-60 rounded-md hover:bg-[#0c2239]">
            PURCHASE NOW
          </button>
        </div>
      </div>

{/* Basis Plan */}
<div className="border shadow-lg  overflow-hidden">
        <div className="bg-white p-8">
          <h2 className="text-6xl font-bold text-gray-900">
            <span className="text-3xl mr-3">$</span>750
            <span className="text-xl font-normal text-gray-500"> / Per Month</span>
          </h2>
        </div>
        <div className="bg-orange-500 text-white text-center py-8">
          <h3 className="text-3xl tracking-tighter font-semibold">Basic Plan</h3>
        </div>
        <div className='bg-gray-100'>
        <ul className="p-6 space-y-4  text-gray-700 text-lg">
          <li className="flex items-center py-2">
            <span className="text-[#5C5E64] "><TiTick /></span>
            <span className="ml-2">Creative Business Consulting</span>
          </li>
          <li className="flex items-center py-2 bg-gray-200 px-5">
            <span className="text-[#5C5E64]"><TiTick /></span>
            <span className="ml-2">Make a Perfect Corporate Office</span>
          </li>
          <li className="flex items-center py-2">
            <span className="text-[#5C5E64]"><TiTick /></span>
            <span className="ml-2">Powerful Management</span>
          </li>
          <li className="flex items-center py-2 bg-gray-200 px-5">
            <span className="text-[#5C5E64]"><ImCross /></span>
            <span className="ml-2">Position Your Business Growth</span>
          </li>
          <li className="flex items-center py-2">
            <span className="text-[#5C5E64]"><ImCross /></span>
            <span className="ml-2">Consulting Service Provider</span>
          </li>
        </ul>
        </div>
        <div className="bg-white p-6 text-center">
          <button className="bg-orange-500 text-white px-4 py-5 w-60 rounded-md hover:bg-[#0c2239]">
            PURCHASE NOW
          </button>
        </div>
      </div>


    {/*Advanced Plan */}
<div className="border shadow-lg  overflow-hidden">
        <div className="bg-white p-8">
          <h2 className="text-6xl font-bold text-gray-900">
            <span className="text-3xl mr-3">$</span>860
            <span className="text-xl font-normal text-gray-500"> / Per Month</span>
          </h2>
        </div>
        <div className="bg-orange-500 text-white text-center py-8">
          <h3 className="text-3xl tracking-tighter font-semibold">Advanced Plan</h3>
        </div>
        <div className='bg-gray-100'>
        <ul className="p-6 space-y-4  text-gray-700 text-lg">
          <li className="flex items-center py-2">
            <span className="text-[#5C5E64] "><TiTick /></span>
            <span className="ml-2">Creative Business Consulting</span>
          </li>
          <li className="flex items-center py-2 bg-gray-200 px-5">
            <span className="text-[#5C5E64]"><TiTick /></span>
            <span className="ml-2">Make a Perfect Corporate Office</span>
          </li>
          <li className="flex items-center py-2">
            <span className="text-[#5C5E64]"><TiTick /></span>
            <span className="ml-2">Powerful Management</span>
          </li>
          <li className="flex items-center py-2 bg-gray-200 px-5">
            <span className="text-[#5C5E64]"><TiTick /></span>
            <span className="ml-2">Position Your Business Growth</span>
          </li>
          <li className="flex items-center py-2">
            <span className="text-[#5C5E64]"><TiTick /></span>
            <span className="ml-2">Consulting Service Provider</span>
          </li>
        </ul>
        </div>
        <div className="bg-white p-6 text-center">
          <button className="bg-orange-500 text-white px-4 py-5 w-60 rounded-md hover:bg-[#0c2239]">
            PURCHASE NOW
          </button>
        </div>
      </div>  

     
     
    </div>
  );
};

export default PricingPlans;
