import React, { useState } from 'react';

const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative container mx-auto p-6">
      {/* Card Container */}
      <div className="overflow-hidden w-full">
        <div
          className={`flex transition-transform duration-700 ${
            isOpen ? 'translate-x-0' : 'translate-x-64'
          }`}
        >
          {/* Card 1 with toggle button */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-64 h-40">
            <h2 className="text-lg font-bold">Card 1</h2>
            <p className="text-gray-600">Content for the first card goes here.</p>
            {/* Toggle button inside Card 1 */}
            <button
              onClick={toggleSlider}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              {isOpen ? 'Close' : 'Open'} Slider
            </button>
          </div>

          {/* Conditionally render Card 2 */}
          {isOpen && (
            <div className="bg-white p-6 rounded-lg shadow-lg w-64 h-40 ml-4">
              <h2 className="text-lg font-bold">Card 2</h2>
              <p className="text-gray-600">Content for the second card goes here.</p>
            </div>
          )}

          {/* Conditionally render Card 3 */}
          {isOpen && (
            <div className="bg-green-500 p-6 rounded-lg shadow-lg w-64 h-40 ml-4">
              <h2 className="text-lg font-bold text-white">Card 3</h2>
              <p className="text-white">Content for the third card goes here.</p>
            </div>
          )}

          {/* Always render Card 4 */}
          <div className="bg-green-500 p-6 rounded-lg shadow-lg w-64 h-40 ml-4">
            <h2 className="text-lg font-bold text-white">Card 4</h2>
            <p className="text-white">Content for the fourth card goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
