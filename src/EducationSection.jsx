import React from 'react';

const EducationSection = () => {
  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 font-Aldrich">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row  border-gray-600 pb-4 px-4 md:px-20 ">
        <div className="text-xl text-purple-500 border-b border-[#a855f7] mb-4 md:mb-0 mr-8 md:mr-8">Education</div>
        <div className="lg:flex space-x-4 md:space-x-8">
          <span className="text-xl cursor-pointer">Experience</span>
          <span className="text-xl cursor-pointer ">Skills</span>
        </div>
      </div>

    

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-between mt-8 px-4 sm:px-8 space-y-8 md:space-y-0 md:space-x-8">
        {/* Education Column */}
        <div className="md:w-1/2 lg:px-10">
        <div className="text-2xl sm:text-3xl lg:mb-6 md:mb-6">Education</div>
          <h3 className="text-base md:text-lg tracking-tighter">
            <span className="text-lg md:text-xl tracking-tighter">
              BSc. & MSc in CS, CCNA, MCP, MCSA, MCSE, <br /> RHCT, RHCSA, RHCE   </span> Has extensive experience in <br /> Cybersecurity, IT Infrastructure, and Technology Training
          
            
           
          </h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              Performed Excellent Result
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              Joined in Extra Curricular Activities
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              Wonderful achievement in sports
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 lg:flex   lg:space-x-8 md:space-x-8">
        { /* Passing Years Column */}
        
        
          <div>
          <div className="text-2xl sm:text-3xl mt-4 sm:mt-0 mb-5 md:mb-5">Passing Years</div>
          
            <p className="text-base md:text-lg text-gray-300 underline underline-offset-8  mb-5">2000-2002</p>
            <p className="text-base md:text-lg tracking-tighter">MSc. in Computer Science</p>
            <p className="mt-6 text-base md:text-lg text-gray-300 underline underline-offset-8 mb-5">1994-1996</p>
            <p className="text-base md:text-lg tracking-tighter mb-5">Higher Secondary School Certificate</p>
          </div>
          <div className='  '>
            <p className="text-base md:text-lg text-gray-300 underline underline-offset-8 lg:mt-[50px] md:mt-[50px] lg:mb-5 md:mb-5  ">1995-2000</p>
            <p className="text-base md:text-lg md:mb-5 sm:mb-5">BSc. in Computer Science</p>
            <p className="mt-6 text-base md:text-lg text-gray-300 underline underline-offset-8  lg:mt-[30px] md:mt-[30px] lg:mb-5 md:mb-5 ">1992-1994</p>
            <p className="text-base md:text-lg">Secondary School Certificate</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full max-w-lg mx-auto">
        <div className="relative w-full h-4 bg-gray-700">
          <div className="absolute h-4 bg-purple-500" style={{ width: '30%' }}></div>
        </div>
      </div>

      {/* Show Less Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition">
          Show Less
        </button>
      </div>
    </div>
  );
};

export default EducationSection;
