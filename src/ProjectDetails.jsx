import React from 'react';

const ProjectDetails = () => {
  return (
    <div className="">
      
      {/* Left Section - Strategy, Challenge, and Solution */}
      <div className="col-span-2 space-y-8">
        
        {/* Project Strategy */}
        <div className='px-5'>
          <h2 className="text-3xl tracking-tighter font-semibold text-gray-900">Project Strategy</h2>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, natus numquam unde qui pariatur porro 
            necessitatibus harum libero commodi rem veritatis in nisi vero odit tenetur esse quidem inventore ex. Sunt 
            nam mollitia, accusantium voluptates recusandae dolor isbus the necessitatibus praesentium excepturi earum 
            sint inventore aperiam? Aperiam dolores.
          </p>
        </div>

        {/* Project Challenge */}
        <div className='px-5'>
          <h2 className="text-3xl tracking-tighter font-semibold text-gray-900">Project Challenge</h2>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus corporis minima, maiores. Doloribus ab et 
            repudiandae molestiae. Quibusdam, tempora, amet.
          </p>

          {/* Challenges List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 space-y-2 sm:space-y-0 sm:space-x-4 px-5">
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Nanotechnology immersion information</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Bring to the table survival strategies</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700 ">Capitalize on low hanging identify</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Leverage agile frameworks to provide</span>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Nanotechnology immersion information</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Bring to the table survival strategies</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Capitalize on low hanging identify</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Leverage agile frameworks to provide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Project Solution */}
        <div>
          <h2 className="text-3xl tracking-tighter font-semibold text-gray-900 px-5">Project Solution</h2>
          <p className="mt-2 text-gray-700 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, natus numquam unde qui pariatur porro 
            necessitatibus harum libero commodi rem veritatis in nisi vero odit tenetur esse quidem inventore ex. Sunt 
            nam mollitia, accusantium voluptates recusandae dolor isbus the necessitatibus praesentium excepturi earum 
            sint inventore aperiam? Aperiam dolores.
          </p>
        </div>

         {/* Project Result */}
         <div>
          <h2 className="text-3xl tracking-tighter font-semibold text-gray-900 px-5">Project Result</h2>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, natus numquam unde qui pariatur porro 
            necessitatibus harum libero commodi rem veritatis in nisi vero odit tenetur esse quidem inventore ex. Sunt 
            nam mollitia, accusantium voluptates recusandae dolor isbus the necessitatibus praesentium excepturi earum 
            sint inventore aperiam? Aperiam dolores.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default ProjectDetails;
