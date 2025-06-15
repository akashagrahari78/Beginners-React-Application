import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutUs1 from './components/AboutUs1/AboutUs1'
import AboutUs2 from './components/AboutUs2/AboutUs2'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner'
import Testimonal from './components/Testimonal/Testimonal'
import Footer from './components/Footer/Footer'
import Card from './components/Services/Card'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <AboutUs1/>
      <AboutUs2/>
      <AboutUs1/>
      <Contact/>
      <Services/>
      {/* <Card/> */}
      <AppStoreBanner/>
      <Testimonal/>
      <Footer/>
    </div>
  )
}

export default App
