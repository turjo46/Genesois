import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'
import { HiOutlineMailOpen } from 'react-icons/hi'




const ContactUs = () => {
  return (
    <div>
      
        <div className='grid grid-cols-12 lg:gap-10 container mx-auto  font-rajdhani mb-[65px] mt-[5%] px-[5%]'>
            <div className='col-span-12  md:col-span-12 lg:col-span-7 '>
            <div className='font-rajdhani mt-20 lg:mt-2'>
      <span className='flex mb-10'>
        <h1 className='font-rajdhani text-5xl font-medium mr-2 text-black'>Send</h1>
        <h1 className='font-bold text-5xl text-[#15803d]'>Message</h1>
      </span>
      
      <form className=''>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <label className="block pb-5 lg:pr-5">
              <input 
                type="text" 
                placeholder="Name" 
                className="block w-full px-5 py-5  text-lg border rounded ring-[#E3E3E3] bg-[#F5F5F5] h-14 placeholder:text-[#495057] focus:bg-white focus:outline-[#F1705A] focus:outline-double"
              />
            </label>
          </div> 
          <div>
            <label className="block pb-5">
              <input 
                type="text" 
                placeholder="Phone" 
                className="block w-full px-5 py-5  text-lg border rounded ring-[#E3E3E3] bg-[#F5F5F5] h-14 placeholder:text-[#495057] focus:bg-white focus:outline-[#F1705A] focus:outline-double"
              />
            </label>
          </div>
        </div>

        <label className="block pb-5">
          <input 
            type="email" 
            placeholder="Email" 
            className="block w-full px-5 py-5  text-lg border rounded ring-[#E3E3E3] bg-[#F5F5F5] h-14 placeholder:text-[#495057] focus:bg-white focus:outline-[#F1705A] focus:outline-double"
          />
        </label>

        <label className="block">
          <textarea 
            placeholder="Messages" 
            className="block w-full px-5 py-5  text-lg border rounded ring-[#E3E3E3] bg-[#F5F5F5] h-52 placeholder:text-[#495057] focus:bg-white focus:outline-[#F1705A] focus:outline-double"
          />
        </label>
        
        <button className='px-12 py-5 my-5 font-medium font-roboto  bg-[#15803d] text-white hover:bg-[#15803d] text-lg rounded-md'>
        SUBMIT NOW
        </button>
      </form>
    </div>
            </div>
            <div className='col-span-12 md:col-span-12 lg:col-span-5 '>
            <div>
         <span className='flex mb-10'><h1 className='font-medium text-5xl mr-2 text-black'>Our </h1>
        <h1 className='font-bold text-5xl text-[#15803d]'>Address</h1>
        </span>

        <div>
            <div>

            </div>
            
            <div className='flex items-center bg-[#F5F5F5] mb-[30px] p-[30px] shadow-sm border'>
            <div className="flex items-center justify-center w-[72px] h-[72px] mr-[30px]  rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md bg-[#15803d]">
            <FaMapLocationDot className='text-white text-4xl'/>
				</div>
                <div>
                    <h1 className='text-black text-[22px] font-extrabold mb-[10px] text-lg'>Our Address</h1>
                    <p className='text-black text-lg '>House # 657, Road # 10 Avenue 4, Dhaka 1216</p>
                </div>
            </div>




            <div className='flex items-center bg-[#F5F5F5] mb-[30px] p-[30px] shadow-sm border'>
            <div className="flex items-center justify-center  w-[72px] h-[72px]  mr-[30px]  rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md bg-[#15803d]">
				<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9   text-[#FFFFFF]">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
				</div>
                <div>
                    <h1 className='text-black text-[22px] font-extrabold mb-[10px] text-lg'>Phone Number</h1>
                    <p className='text-black  text-lg '>02-51055022</p>
                </div>
            </div>




            <div className='flex items-center bg-[#F5F5F5] mb-[30px] p-[30px] shadow-sm border'>
            <div className="flex items-center justify-center  w-[72px] h-[72px]  mr-[30px]  rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md bg-[#15803d]">
            <HiOutlineMailOpen className='text-white text-4xl'/>
				</div>
                <div>
                    <h1 className='text-black text-[22px] font-extrabold mb-[10px] text-lg'>Email Us</h1>
                    <p className='text-black text-lg '>rbornali@yahoo.com</p>
                </div>
            </div>


            
           
        </div>
    </div>
            </div>
      
        </div>
        
    </div>

  )
}

export default ContactUs