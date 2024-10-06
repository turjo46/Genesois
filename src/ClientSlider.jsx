// src/components/ClientSlider.js

import React, { useEffect, useState } from 'react';

const clients = [
  { id: 1, name: 'VFS Global', logo: 'https://www.gtl.com.bd/img_upload/clients/339.jpg' },
  { id: 2, name: 'Siemens', logo: 'https://www.gtl.com.bd/img_upload/clients/336.jpg' },
  { id: 3, name: 'Siemens', logo: 'https://www.gtl.com.bd/img_upload/clients/349.jpg' },
  { id: 4, name: 'Siemens', logo: 'https://www.gtl.com.bd/img_upload/clients/343.jpg' },
  { id: 5, name: 'Siemens', logo: 'https://www.gtl.com.bd/img_upload/clients/346.jpg' },
  { id: 6, name: 'Siemens', logo: 'https://www.gtl.com.bd/img_upload/clients/352.jpg' },
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
    <div className="flex justify-center items-center h-52 bg-white border w-72">
      <div className="w-full max-w-lg overflow-hidden border-spacing-5">
        <h2 className="text-xl text-white font-bold bg-[#262e39]  mb-4 border-b-2">Our Clients</h2>
        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide effect
          >
            {clients.map((client) => (
              <div key={client.id} className="flex-shrink-0 w-full flex justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
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

export default ClientSlider;
