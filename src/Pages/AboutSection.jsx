import React from 'react';

const AboutMeSection = () => {
  return (
    <section className="bg-black text-white py-10 px-5 sm:px-10 md:px-20 font-Aldrich">
      <div className="container mx-auto">
        {/* Top Section with Image and Text */}
        <div className="lg:flex lg:flex-row md:flex-row md:items-center lg:items-center gap-10">
          {/* Left Side - Image */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            {/* Image */}
            <img
              src="../../../../public/image/image 1.png" // replace this with your image path
              alt="Profile"
              className="rounded-xl object-cover shadow-lg lg:h-[560px] h-96 "
              style={{ width: '', height: '' }}
            />

            {/* Watch Intro Button */}
            <a
              href="#watch-intro" // this could link to a video or section
              className="absolute lg:right-[388px] lg:top-[55px] border bg-black border-[#a855f7] md:right-[146px] md:top-[55px] right-[251px] top-[14px] transform -translate-y-12 md:-translate-y-24 h-16 w-34 md:h-20 md:w-44 text-lg md:text-2xl tracking-tighter  text-[#a855f7] px-4 py-2 rounded-lg flex items-center rotate-90 origin-left "
            >
              Watch Intro
            </a>
          </div>

          {/* Right Side - Text */}
          <div className="mt-5 md:w-1/2 text-center md:text-left lg:mr-10 md:mr-10  ">
            <p className="text-3xl md:text-4xl font-[400] mb-6">
              <span className="text-purple-500">Knowledge</span> is the key that unlocks the way of possibility
            </p>
            <p className="text-md md:text-md tracking-wide px-2 font-[300]">
              I’m a strong advocate for mentorship, guiding the next generation of developers toward success. My approach is collaborative and combined with strategic thinking.
            </p>

            {/* Progress Bars Section */}
            <div className="mt-10">
              {/* Progress bars */}
              <div className="flex flex-col md:flex-row justify-between mb-6 gap-10 md:gap-14 px-3">
                <div className="w-full md:w-1/2 pr-4">
                  <div className="mb-2">Opportunity Created</div>
                  <div className="bg-gray-800 w-full rounded-full h-3 mb-2">
                    <div className="flex">
                      <div className="bg-purple-500 h-3  rounded-full" style={{ width: '92%' }}></div>
                      <div className="ml-2 mt-[-4px] text-sm">92%</div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 pl-4">
                  <div className="mb-2">Skill Developed</div>
                  <div className="bg-gray-800 w-full rounded-full h-3 mb-2">
                    <div className="flex">
                      <div className="bg-purple-500 h-3 rounded-full" style={{ width: '95%' }}></div>
                      <div className="ml-2 mt-[-4px] text-sm">95%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-14 px-3">
                <div className="w-full md:w-1/2 pr-4">
                  <div className="mb-2">Time Spent</div>
                  <div className="bg-gray-800 w-full rounded-full h-3 mb-2">
                    <div className="flex">
                      <div className="bg-purple-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                      <div className="ml-2 mt-[-4px] text-sm">85%</div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 pl-4">
                  <div className="mb-2">Consulted</div>
                  <div className="bg-gray-800 w-full rounded-full h-3 mb-2">
                    <div className="flex">
                      <div className="bg-purple-500 h-3 rounded-full" style={{ width: '94%' }}></div>
                      <div className="ml-2 mt-[-4px] text-sm">94%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 flex flex-col justify-center md:justify-start items-center md:items-start">
              <div className="text-purple-500 text-xl mb-5">◆ Embrace Endless Growth</div>
              <div className="text-purple-500 text-xl">◆ Pursue Greatness Relentlessly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
