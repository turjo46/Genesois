// src/components/ClientSlider.js

import React, { useEffect, useState } from 'react';

const clients = [
  { id: 1, name1: 'VFS Global', logo1: 'https://www.gtl.com.bd/img_upload/clients/339.jpg' },
  { id: 2, name2: 'Siemens', logo2: 'https://www.gtl.com.bd/img_upload/clients/343.jpg' },
  { id: 3, name3: 'Siemens', logo3: 'https://www.gtl.com.bd/img_upload/clients/336.jpg' },
  { id: 4, name4: 'Siemens', logo4: 'https://www.gtl.com.bd/img_upload/clients/349.jpg' },
  { id: 5, name5: 'Siemens', logo5: 'https://www.gtl.com.bd/img_upload/clients/346.jpg' },
  { id: 6, name6: 'Siemens', logo6: 'https://www.gtl.com.bd/img_upload/clients/352.jpg' },
];

const ClientSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 5000); // Slide changes every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center h-64 bg-gray-100">
      <div className="w-full max-w-lg overflow-hidden">
        <h2 className="text-lg font-bold text-center mb-4">Our Clients</h2>
        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide effect
          >
            {clients.map((client) => (
              <div key={client.id1} className="flex-shrink-0 w-full">
                <div key={client.id2} className="flex-shrink-0 w-full">
                    <div key={client.id3} className="flex-shrink-0 w-full">
                    <div key={client.id4} className="flex-shrink-0 w-full">
                    <div key={client.id5} className="flex-shrink-0 w-full">
                    <div key={client.id6} className="flex-shrink-0 w-full">
               
                <img
                  src={client.logo1}
                  alt={client.name1}
                  className="w-full h-24 object-contain"
                />
                <img
                  src={client.logo1}
                  alt={client.name1}
                  className="w-full h-24 object-contain"
                />
                <img
                src={client.logo1}
                alt={client.name1}
                className="w-full h-24 object-contain"
              />
               <img
                src={client.logo2}
                alt={client.name2}
                className="w-full h-24 object-contain"
              />
               <img
                src={client.logo2}
                alt={client.name2}
                className="w-full h-24 object-contain"
              />
               <img
                src={client.logo2}
                alt={client.name2}
                className="w-full h-24 object-contain"
              />
               <img
                src={client.logo3}
                alt={client.name3}
                className="w-full h-24 object-contain"
              />
               <img
                src={client.logo3}
                alt={client.name3}
                className="w-full h-24 object-contain"
              />
               <img
                src={client.logo3}
                alt={client.name3}
                className="w-full h-24 object-contain"
              />
              <img
                src={client.logo4}
                alt={client.name4}
                className="w-full h-24 object-contain"
              />
              <img
                src={client.logo4}
                alt={client.name4}
                className="w-full h-24 object-contain"
              />
              <img
                src={client.logo4}
                alt={client.name4}
                className="w-full h-24 object-contain"
              />
              <img
                src={client.logo5}
                alt={client.name5}
                className="w-full h-24 object-contain"
              />
              <img
              src={client.logo5}
              alt={client.name5}
              className="w-full h-24 object-contain"
            />
            <img
                src={client.logo5}
                alt={client.name5}
                className="w-full h-24 object-contain"
              />
              <img
                src={client.logo6}
                alt={client.name6}
                className="w-full h-24 object-contain"
              />
              <img
                src={client.logo6}
                alt={client.name6}
                className="w-full h-24 object-contain"
              />
              <img
                src={client.logo6}
                alt={client.name6}
                className="w-full h-24 object-contain"
              />

              
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>

              
              
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
