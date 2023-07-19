import React, {useState} from 'react'
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaBars  } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
            setNav(!nav);
    }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className='hidden sm:flex px-4'>
            <li><a href="/">Home</a></li>
            <li><a href="#Gallery">Gallery</a></li>
            <li><a href="#Deals">Deals</a></li>
            <li><a href="#Contacts">Contacts</a></li>
        </ul>
        <div className='flex justify-between'>
            <FaInstagram className='mx-4' />
            <FaTwitter className='mx-4'/>
            <FaLinkedin className='mx-4'/>
            <FaYoutube className='mx-4'/>
        </div>
        {/* Hamburger icon */}
        <div onClick={handleNav} className='sm:hidden z-10'>
            <FaBars size={20} className='mr-4 cursor-pointer' />
        </div>
        {/* mobile menu */}
        <div 
        className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col items-center'
                            : 'absolute top-0 h-full left-[-100%] ease-in duration-500'}>
        <ul className='w-full h-full py-12 text-center'>
            <li className='text-2xl py-8'><a href="/">Home</a></li>
            <li className='text-2xl py-8'><a href="#Gallery">Gallery</a></li>
            <li className='text-2xl py-8'><a href="#Deals">Deals</a></li>
            <li className='text-2xl py-8'><a href="#Contacts">Contacts</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar