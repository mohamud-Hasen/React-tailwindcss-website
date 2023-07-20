import React from 'react'
import Resor1 from '../assets/resor1.jpg'
import Resor2 from '../assets/resor2.jpg'
import Resor3 from '../assets/resor3.jpg'
import Resor4 from '../assets/resor4.jpg'
import Rseor5 from '../assets/rseor5.jpg'

const Gallery = () => {
  return (
    <div className='max-w-[1140] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Our Gallery</h2>
        < div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
        <img src={Resor1} className='w-full h-full object-cover '  />
        </div>
        
    
        <div >
        <img src={Resor2} className='w-full h-full object-cover ' />
        </div>
        
        
        <div>
        <img src={Resor3} className='w-full h-full object-cover ' />
        </div>
        <div>
        <img src={Resor4} className='w-full h-full object-cover ' />
        </div>
        <div>
        <img src={Rseor5} className='w-full h-full object-cover ' />
        </div>
        </div>
    </div>
  )
}

export default Gallery 