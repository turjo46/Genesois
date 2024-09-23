import React from 'react';

const Form = () => {
  return (
    <div className='container mx-auto '>
    <div className="bg-gray-100 w-[1000px] px-36 ">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Leave a Reply:</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full h-16 p-3 border border-gray-300 bg-white text-gray-200 rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-16 p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Messages"
            rows="6"
            className="w-full h-52 p-5 border border-gray-300 bg-white rounded-md focus:outline-none focus:border-gray-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white h-16 font-semibold py-2 px-6 rounded-md mb-4 hover:bg-[#0c2239] transition-colors"
        >
          POST COMMENT
        </button>
      </form>
    </div>
    </div>
  );
};

export default Form;
