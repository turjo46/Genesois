import React from 'react';

const Section = () => {
  return (
    <div className="flex flex-wrap bg-white p-8 max-w-6xl mx-auto">
      {/* Left Section */}
      <div className="w-full md:w-1/3 flex flex-col  mb-8 md:mb-0">
        <img 
          className="w-80 h-96 object-cover  mb-6"
          src="https://webextheme.com/html/loxicat/images/team/team2.jpg"
          alt="Sebastian Turner"
        />
        <h2 className="text-2xl font-bold text-gray-800">Sebastian Turner</h2>
        <p className="text-md text-gray-500 mb-6">- Business Consultant</p>
        <div className="flex space-x-4">
          {/* Social Media Icons */}
          <i className='border border-gray-600  bg-gray-600 p-2 rounded-full hover:bg-[#ff7906] '>
          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                            ></path>
                        </svg>
          </i>
          <i  className='border border-gray-600  bg-gray-600 p-2 rounded-full  hover:bg-[#ff7906]'>
          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>

          </i>
          <i  className='border border-gray-600  bg-gray-600 p-2 rounded-full  hover:bg-[#ff7906]' >
          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                            ></path>
                        </svg>
          </i>
          <i className='border border-gray-600  bg-gray-600 p-2 rounded-full hover:bg-[#ff7906] ' >
          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                            ></path>
                        </svg>
          </i>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="w-full md:w-2/3 ">
        <div className="  mb-6">
          <h3 className="  text-3xl font-bold text-gray-800 mb-6">Personal Details</h3>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum eos, earum laborum nesciunt! Dolor, ipsam. Ratione neque itaque maxime sit fugiat autem expedita omnis ducimus soluta quia, eius laudantium.
          </p>
          <p className="text-gray-600 mb-4"><strong>Email:</strong> demomail@gmail.com</p>
          <p className="text-gray-600 mb-4"><strong>Phone:</strong> (+46) 844 0319 0125</p>
          <p className="text-gray-600 mb-4"><strong>Website:</strong> name@domain.com</p>
          <p className="text-gray-600 mb-4"><strong>Address:</strong> 121 King Street, Melbourne</p>
        </div>
        
        {/* Professional Skills */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Professional Skills</h3>
          <SkillBar label="Business Consulting" percentage={85} />
          <SkillBar label="Market Analysis" percentage={96} />
          <SkillBar label="Money Management" percentage={90} />
          <SkillBar label="Business Growth" percentage={88} />
        </div>
         {/* Career & Experience and Awards */}
         <div className="flex space-x-16">
          <div>
          <h3 className="text-3xl font-bold text-gray-700 mb-5">Career & Experience</h3>
          <p className="text-gray-600 mb-4">🌟 Nanotechnology immersion information</p>
          
          <p className="text-gray-600 mb-4">🌟 Nanotechnology immersion information</p>
          
          <p className="text-gray-600 mb-4">🌟 Nanotechnology immersion information</p>
         
          <p className="text-gray-600 mb-4">🌟 Nanotechnology immersion information</p>
          </div>
          <div>
          <h3 className="text-3xl font-bold text-gray-700 mb-5 ">Awards & Achievement</h3>
          <p className="text-gray-600 mb-4">🏆 Nanotechnology immersion information</p>
          <p className="text-gray-600 mb-4">🏆 Nanotechnology immersion information</p>
          <p className="text-gray-600 mb-4">🏆 Nanotechnology immersion information</p>
          <p className="text-gray-600 mb-4">🏆 Nanotechnology immersion information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// SkillBar Component
const SkillBar = ({ label, percentage }) => (
  <div className="mb-2">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="text-sm font-medium text-gray-700">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-orange-500 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default Section;
