import React from 'react'
import  './NaveBar.css'
const NaveBar = () => {
  return (
    <div className='navebar'id='home'>
      < div className="logo">SR</div>
     <div className='menu'>
      {/* <h3>Home</h3>
       <h3>Experiance</h3>
     <h3>Skill</h3><h3>Projects</h3>
      <h3>Education</h3><h3>Contact</h3> */}

      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#experiance">EXPERIANCE</a></li>
        <li><a href="#skill">SKILL</a></li>
        <li><a href="#project">PROJECT</a></li>
        <li><a href="#education">EDUCATION</a></li>
         <li><a href="#achive">ACHIVE & CERTIFICATE</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      </div> 
    </div>
  )
}

export default NaveBar