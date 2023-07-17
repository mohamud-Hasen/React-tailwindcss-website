import React from 'react'
import Herosection from '../assets/Herosection.jpg'


const Herosec = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img  src={Herosection} className='w-full h-full object-cover'/>
        <div className='max-w-[1140px] m-auto'>
          <div className='absolute top-[40%] w-full md:-[50%] max-w-[1000px] h-full flex flex-col text-white p-4' >
            <h1 className='text-bold text-4xl'>Find Your Special Trip</h1>
            <h2 className='text-italic py-4'>with Weekaway</h2>
            <p>Weekaway is a renowned tourist company that specializes in providing unique and memorable travel experiences to its customers. 
              With a focus on offering short getaways and weekend trips, 
              Weekaway aims to cater to travelers who are looking for quick and exciting adventures without taking extended vacations.
              
              </p>
          </div>
        </div>
    </div>
  )
}

export default Herosec