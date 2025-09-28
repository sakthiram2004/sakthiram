import React from 'react'
import './Skills.css'
import zoho from './../../assets/zoho.png'
import c from './../../assets/c.png'
import tailwin from './../../assets/tailwind.png'
import ret from './../../assets/react.png'
import java from './../../assets/java.png'
import spring from './../../assets/springboot.png'
//import flutter from './../../assets/flutter.png'
//import node from './../../assets/node.png'
//import mysql from './../../assets/mysql.png'
//import git from './../../assets/git.png'
import html from './../../assets/html.png'
import cs from './../../assets/cs.png'

const Skills = () => {
  const education = [
    {
      college: "Mount Zion College of Engineering and Technology",
      degree: "B.E. Computer Science and Engineering",
      year: "2021 - 2025",
      place: "Pudukkottai, Tamil Nadu"
    }
  ]

  const skills = [
    { name: 'Java', logo:java  },
    { name: 'Spring Boot', logo: spring },
    // { name: 'Flutter', logo: zoho },
    // { name: 'Node.js', logo: zoho },
    // { name: 'MySQL', logo: zoho },
    // { name: 'Git & GitHub', logo: zoho },
    { name: 'HTML', logo: html },
    { name: 'C', logo: c },
    { name: 'REACT', logo: ret },
    { name: 'TAILWIND', logo: tailwin },
    { name: 'CSS', logo: cs }
  ]

  return (
    <div className='skill'>
      {/* Education Section */}
      

      {/* Skills Section */}
      <div className="skills-container">
        <h1 className="section-title">Technical Skills</h1>
        <div className="skills-grid">
          {skills.map((item, index) => (
            <div className="skill-card" key={index}>
              <img src={item.logo} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
      <div className="education">
        <h1 className="section-title">Education</h1>
        <div className="edu-container">
          {education.map((edu, index) => (
            <div className="edu-card" key={index}>
              <h2>{edu.college}</h2>
              <h3>{edu.degree}</h3>
              <p>{edu.year}</p>
              <p>{edu.place}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
