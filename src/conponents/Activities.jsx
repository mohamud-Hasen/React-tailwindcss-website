import React from 'react'
import Resort from '../assets/resort.jpg'
import Resort2 from '../assets/resort2.jpg'
import Cruse from '../assets/cruse.jpg'

const Activities = () => {
  return (
    <div className='max-w-[1140] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 text-2xl text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>Resort</h3>
        <img src={Resort} className='w-full h-full object-cover relative border-4 border-white shadow-lg'  />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 text-2xl text-white top-[50%] left-[60%] translate-x-[-50%] translate-y-[-50%]'>Resort</h3>
        <img src={Resort2} className='w-full h-full object-cover relative border-4 border-white shadow-lg' />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 text-2xl text-white top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>Travel With Us</h3>
        <img src={Cruse} className='w-full h-full object-cover relative border-4 border-white shadow-lg' />
        </div>
    </div>
  )
}

export default Activities