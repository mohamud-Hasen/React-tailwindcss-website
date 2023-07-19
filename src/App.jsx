import React from 'react'
import TopBar from './conponents/TopBar'
import Navbar from './conponents/Navbar'
import Heromg from './conponents/Herosec'
import Activities from './conponents/Activities'
import Booking from './conponents/Booking'
import Gallery from './conponents/Gallery'
import Contact from './conponents/Contact'
import Footer from './conponents/Footer'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Heromg />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App