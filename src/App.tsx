import React from 'react'
import Home from '@components/Home/Home'
import AboutMe from '@components/AboutMe/AboutMe'
import ContactMe from '@components/ContactMe/ContactMe'
import Cursor from '@components/Cursor/Cursor'
import Navbar from '@components/Navbar/Navbar'
import Services from '@components/Services/Services'

const App = () => {
  return (
    <div>
      <Cursor />
      <Navbar />
      <Home />
      <Services />
      <AboutMe />
      <ContactMe />
    </div>
  )
}

export default App
