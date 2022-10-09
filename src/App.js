import React from 'react'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Pricing from './components/Pricing'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import SignUp from './components/SignUp'
import RoadMap from './components/RoadMap'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Pricing />
    <AboutUs />
    <Services />
    <SignUp />
    <RoadMap />
    <NewsLetter />
    <Footer />
    </>
  )
}

export default App