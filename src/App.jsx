import React from 'react'
import TopBar from './conponents/TopBar'
import Navbar from './conponents/Navbar'
import Heromg from './conponents/Herosec'
import Activities from './conponents/Activities'
import Booking from './conponents/Booking'
import Gallery from './conponents/Gallery'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Heromg />
      <Activities />
      <Booking />
      <Gallery />
    </div>
  )
}

export default App