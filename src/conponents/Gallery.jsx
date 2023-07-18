import React from 'react'
import Resort from '../assets/resort.jpg'
import Resort2 from '../assets/resort2.jpg'
import Cruse from '../assets/cruse.jpg'

const Gallery = () => {
  return (
    <div className='max-w-[1140] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Our Gallery</h2>
        < div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
        <img src={Resort} className='w-full h-full object-cover '  />
        </div>
        
    
        <div >
        <img src={Resort2} className='w-full h-full object-cover ' />
        </div>
        
        
        <div>
        <img src={Cruse} className='w-full h-full object-cover ' />
        </div>
        </div>
    </div>
  )
}

export default Gallery 