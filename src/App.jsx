import React from 'react'
import TopBar from './conponents/TopBar'
import Navbar from './conponents/Navbar'
import Heromg from './conponents/Herosec'
import Activities from './conponents/Activities'
import Booking from './conponents/Booking'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Heromg />
      <Activities />
      <Booking />
    </div>
  )
}

export default App