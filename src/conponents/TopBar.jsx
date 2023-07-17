import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'

const TopBar = () => {
  return (
    <div>
        <div>
            <BsChatSquareDots />
            <h1>WEEKAWAY</h1>
        </div>
        <div>
        <div>
            <AiOutlineClockCircle />
            <p>9AM - 5PM</p>
        </div>
        <div>
            <AiFillPhone />
            <p>1-612-437-5806</p>
        </div>
        <button>Get a Free Quate</button>
        </div>
    </div> 
  )
}

export default TopBar