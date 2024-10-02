import React, { useState } from 'react';

const Pop = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const projects = [
    {
      title: 'Transportation and Communication',
      image: '/path/to/transportation-image.jpg',
    },
    {
      title: 'Port, Harbor and River Training',
      image: '/path/to/port-harbor-image.jpg',
      description: `The firm has a focus on the port, harbor, and river training sector. 
                    Areas of specialization include surveying, monitoring, and mapping of rivers; 
                    flood/river control works, erosion control/soil conservation, dredging works.`,
    },
    {
      title: 'Industrial Development',
      image: '/path/to/industrial-image.jpg',
    },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {projects.map((project, index) => (
        <div key={index} className="relative w-64 p-4 border rounded-md shadow-lg bg-white">
          <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
          <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleOpenModal}
          >
            View Details
          </button>

          {showModal && index === 1 && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-md shadow-lg">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="mt-4">{project.description}</p>
                <button
                  className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pop;
