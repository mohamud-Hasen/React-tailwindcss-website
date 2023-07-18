import React from 'react'

const Booking = () => {
  return (
    <div id='Deals' className='max-w-[1140px] mx-auto w-full p-4'>
        <form className='lg:flex lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
                <label>Destination</label>
                <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                    <option>Malvies</option>
                    <option>Santorini</option>
                    <option>Mauritius</option>
                    <option>Maui, Hawaii</option>
                </select>
                </div>
                <div className='flex w-full'>
                    <div className='flex flex-col w-full lg:max-w[250px] my2 p-2'>
                        <label >Check-In</label>
                        <input type="date" className='border rounded-md p-2' />
                    </div>
                <div  className='flex flex-col w-full lg:max-w[250px] my2 p-2'>
                        <label >Check-Out</label>
                        <input type="date" className='border rounded-md p-2' />
                    </div>
            </div>
            <div className='flex flex-col w-full my-2 p-2'>
                <label >Search</label>
                <button className='w-full'>Rates & Availablities</button>
            </div>
        </form>
    </div>
  )
}

export default Booking