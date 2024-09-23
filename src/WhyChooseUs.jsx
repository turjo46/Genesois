import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-orange-500 h-96 flex items-center px-44 mt-20 container mx-auto max-w-[1700px]">
      <div className="w-1/2 -translate-y-24 border bg-white h-96 translate-x-20 px-5">
        <h2 className="text-orange-600 font-bold text-base tracking-tighter uppercase mt-5 underline">Best Industrial Company</h2>
        <h1 className="text-5xl text-black tracking-tighter font-bold mt-2">WHY CHOOSE US?</h1>
        <p className="text-gray-600 text-base mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt rem sunt odit, cupiditate, ratione,
          praesentium minima, obcaecati eos vel voluptatem ipsa necessitatibus eius. Repellat.
        </p>
        <div className="mt-6">
          <div className="mb-4">
            <div className="flex justify-between ">
              <span className="font-semibold text-black mb-3">Welding Services</span>
              <span className='text-black'>95%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <span className="font-semibold text-black">Industrial Service</span>
              <span className='text-black'>96%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '96%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <span className="font-semibold text-black">Construction Works</span>
              <span className='text-black'>90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src="https://webextheme.com/html/loxicat/images/about/person.png" // replace with actual image URL or import statement
          alt="Worker"
          className="w-[450px] h-auto"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
