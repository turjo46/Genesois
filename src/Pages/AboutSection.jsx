import React, { useState, useEffect } from 'react';

const ProgressBar = ({ label, target }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < target) return prev + 1;
        clearInterval(interval); // Clear interval once the target is reached
        return target;
      });
    }, 20); // Adjust this value to control the speed of the animation

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="w-full mb-4">
      <div className="text-white mb-2 text-sm font-semibold">{label}</div>
      <div className="bg-gray-800 w-full rounded-full h-3 mb-2">
        <div className="flex items-center">
          <div
            className="bg-gradient-to-r from-[#D500EC] to-[#5710FD] h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
          <div className="ml-2 mt-[-4px] text-sm text-white font-semibold">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

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
            />

            {/* Watch Intro Button */}
            <a
              href="#watch-intro"
              className="absolute lg:right-[388px] lg:top-[55px] border-2 bg-black border-transparent bg-gradient-to-r from-[#AC01C6] to-[#5411FF] md:right-[146px] md:top-[55px] right-[251px] top-[14px] transform -translate-y-12 md:-translate-y-24 h-16 w-34 md:h-20 md:w-44 text-lg md:text-2xl tracking-tighter bg-clip-text text-transparent px-4 py-2 rounded-lg flex items-center rotate-90 origin-left"
              style={{
                borderImage: "linear-gradient(90deg, #AC01C6, #5411FF) 1",
              }}
            >
              Watch Intro
            </a>
          </div>

          {/* Right Side - Text */}
          <div className="mt-5 md:w-1/2 text-center md:text-left lg:mr-10 md:mr-10">
            <p className="text-3xl md:text-4xl font-[400] mb-6">
              <span className="bg-gradient-to-r bg-clip-text from-[#AC01C6] to-[#5411FF] text-transparent">
                Knowledge
              </span>{" "}
              is the key that unlocks the way of possibility
            </p>
            <p className="text-md md:text-md tracking-wide px-2 font-[300]">
              I’m a strong advocate for mentorship, guiding the next generation of developers toward success. My approach is collaborative and combined with strategic thinking.
            </p>

            {/* Progress Bars Section */}
            <div className="mt-10">
              <div className="flex flex-col md:flex-row justify-between mb-6 gap-10 md:gap-14 px-3">
                <div className="w-full md:w-1/2 pr-4">
                  <ProgressBar label="Opportunity Created" target={92} />
                </div>
                <div className="w-full md:w-1/2 pl-4">
                  <ProgressBar label="Skill Developed" target={95} />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-14 px-3">
                <div className="w-full md:w-1/2 pr-4">
                  <ProgressBar label="Time Spent" target={85} />
                </div>
                <div className="w-full md:w-1/2 pl-4">
                  <ProgressBar label="Consulted" target={94} />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 flex flex-col justify-center md:justify-start items-center md:items-start">
              <div className="text-3xl bg-gradient-to-r bg-clip-text from-[#D500EC] to-[#5101F8] text-transparent">
                ◆ <span className="text-white text-lg">Embrace Endless Growth</span>
              </div>
              <div className="text-3xl bg-gradient-to-r bg-clip-text from-[#D500EC] to-[#5101F8] text-transparent">
                ◆ <span className="text-white text-lg">Pursue Greatness Relentlessly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
