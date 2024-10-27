import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

function CaseStudySection() {
  const caseStudies = [
    {
      title: "Bally Website Research",
      image: "https://i.postimg.cc/DwZ5SYbT/Img.png", // Replace with actual image URL
    },
    {
      title: "Bally Website Research",
      image: "https://i.postimg.cc/Y93mfMJy/Img-3.png", // Replace with actual image URL
    },
    {
      title: "Bally Website Research",
      image: "https://i.postimg.cc/X72k6c1D/Img-1.png", // Replace with actual image URL
    },
    {
      title: "Bally Website Research",
      image: "https://i.postimg.cc/ydzFyfWW/Img-2.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-black text-white container mx-auto max-w-[1300px] p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <div key={index} className="flex">
            {/* Text Section */}
            <div className="flex flex-col justify-between bg-black  ">
              <div>
                <h4 className="uppercase text-sm text-gray-400 mb-2 px-20">UX case study</h4>
                <h2 className="text-4xl font-bold px-20">{study.title}</h2>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-purple-500 text-xl flex items-center"
                >
                  
                  <div className=" bg-gradient-to-r from-[#D500EC] to-[#5101F8]   ml-20 text-white text-4xl ">
                  <MdOutlineArrowOutward/>
                  </div>
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className=" mr-28">
              <img
                src={study.image}
                alt={study.title}
                className="rounded-lg shadow-lg w-full h-full object-cover mr-56"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="bg-white text-black font-bold py-2 px-6  flex items-center justify-center mx-auto">
          Load more 
          <div className="ml-2 bg-gradient-to-r from-[#D500EC] to-[#5101F8]  p-2  text-white text-xl">
        <MdOutlineArrowOutward />
          </div>
        </button>
      </div>
    </div>
  );
}

export default CaseStudySection;
