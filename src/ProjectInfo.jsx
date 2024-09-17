import React from 'react';

const ProjectInfo = () => {
  return (
    <div className="space-x-10">
      
      {/* Left Section - Image and Description */}
      <div className="col-span-2">
        <img
          src="https://webextheme.com/html/loxicat/images/project/single-project.jpg" 
          alt="Project Work" 
          className="w-screen h-full object-cover rounded-md mb-10 px-2"
        />
        <div className="mt-4 mb-10 px-5">
          <h2 className="text-3xl tracking-tighter font-semibold text-gray-900 ">Project Description</h2>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, natus numquam unde qui
            pariatur porro necessitatibus harum libero commodi rem veritatis in nisi vero odit tenetur 
            esse quidem inventore ex. Sunt nam mollitia, accusantium voluptates recusandae dolor isbus 
            the necessitatibus praesentium excepturi.
          </p>
        </div>
      </div>

      
      


    </div>
  );
};

export default ProjectInfo;
