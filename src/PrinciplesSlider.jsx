// src/components/PrinciplesSlider.js

import React, { useEffect, useState } from 'react';

const Principless = [
  { id: 1, name: 'VFS Global', logo: 'https://www.gtl.com.bd/img_upload/brands/434.jpg' },
  { id: 2, name: 'Siemens', logo: 'https://www.gtl.com.bd/img_upload/brands/432.jpg' },

];

const PrinciplesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Principless.length);
    }, 5000); // Slide changes every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center h-52 bg-white border w-72">
      <div className="w-full max-w-lg overflow-hidden border-spacing-5">
        <h2 className="text-xl text-white font-bold bg-[#262e39]  mb-4 border-b-2">Our Principles</h2>
        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide effect
          >
            {Principless.map((Principles) => (
              <div key={Principles.id} className="flex-shrink-0 w-full flex justify-center">
                <img
                  src={Principles.logo}
                  alt={Principles.name}
                  className="h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesSlider;
