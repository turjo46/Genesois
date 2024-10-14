import React from 'react'

const Experience = () => {
  return (
    <div>
        <div classname='justify-center px-[5%] lg:px-[12%] font-aldrich pb-12 text-white'>
           
            <div classname=' grid grid-cols-2 mt-14'>


                <div className='text-white'>
                <h2 className="text-3xl text-white font-bold mb-4">Experience</h2>
          <p className="text-gray-400 mb-6">
            Experience is a silent teacher, often unfolding in moments of trial and triumph. It shapes our understanding, revealing lessons we couldn’t grasp from words alone.
          </p>
          <div className="flex justify-between items-center mb-2">
            <span>Efforts</span>
            <span>97%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "97%" }}></div>
          </div>
                </div>




                <div className='text-white'>
                <h2 className="text-3xl font-bold mb-4">Company</h2>
          <div className="flex  space-x-6">
            {/* Left Column */}
            <div className="space-y-4 w-1/2">
              <div className="flex items-start space-x-2">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">
                    Head of Information Technology
                  </h3>
                  <p className="text-gray-400">
                    Masco Group, Experience: 11 Years <br />
                    Feb 2006 - Oct 2016
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">
                    Head of Information Technology
                  </h3>
                  <p className="text-gray-400">
                    Impress Group, Experience: 4.2 Years <br />
                    Nov 2016 - Feb 2018
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 w-1/2">
              <div className="flex items-start space-x-2">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">
                    Head of Information Technology
                  </h3>
                  <p className="text-gray-400">
                    Next IT Ltd, Experience: 1.4 Years <br />
                    Nov 2016 - Feb 2018
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">
                    Head of Information Technology
                  </h3>
                  <p className="text-gray-400">
                    Skylark Soft Ltd, Experience: 4.2 Years <br />
                    Nov 2016 - Feb 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
      
      
                </div>

            </div>

        </div>
    </div>
  )
}

export default Experience