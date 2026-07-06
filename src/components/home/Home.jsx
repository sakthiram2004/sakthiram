import React from 'react'
import NaveBar from '../navebar/NaveBar'
import Profile from '../profile/Profile'
import Experiance from '../experiance/Experiance'
import Skills from '../skills/Skills'
import Projects from '../projects/Projects'
import Achievements from '../achievements/Achievements'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
      <NaveBar/>
      <Profile/>
      <Experiance/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Footer/>
    </div>
  )
}

export default Home