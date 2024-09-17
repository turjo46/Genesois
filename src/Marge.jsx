import React from 'react'
import ProjectInfo from './ProjectInfo'
import ProjectDetails from './ProjectDetails'
import Temporary from './Temporary'

const Marge = () => {
  return (
    <div className='bg-white mt-8  '>
      <div className='lg:container lg:mx-auto lg:max-w-[1200px] grid grid-cols-12 gap-10'>
      <div className='col-span-7'>
            <ProjectInfo/>
            <ProjectDetails/>
        </div>
        <div className='col-span-4'>
            <Temporary/>
        </div>
      </div>
  
    </div>
  )
}

export default Marge