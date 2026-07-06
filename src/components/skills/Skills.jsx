import React from 'react'
import { motion } from 'motion/react'
import './Skills.css'
import c from './../../assets/c.png'
import tailwin from './../../assets/tailwind.png'
import ret from './../../assets/react.png'
import java from './../../assets/java.png'
import mzcet from './../../assets/mzcet.png'
import spring from './../../assets/springboot.png'
import html from './../../assets/html.png'
import cs from './../../assets/cs.png'
import redis from './../../assets/redis.png'

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
    { name: 'Java', logo: java },
    { name: 'Spring Boot', logo: spring },
    { name: 'HTML', logo: html },
    { name: 'C', logo: c },
    { name: 'React', logo: ret },
    { name: 'Tailwind', logo: tailwin },
    { name: 'CSS', logo: cs },
    { name: 'Redis', logo: redis }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section className='skills-edu-section' id='skill'>
      <div className="skills-edu-container">
        
        {/* Technical Skills Sub-section */}
        <div className="skills-column">
          <motion.h2 
            className="section-title-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {skills.map((item, index) => (
              <motion.div 
                className="skill-card glass-card" 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: 'var(--accent-cyan)',
                  boxShadow: '0 0 15px rgba(0, 242, 254, 0.25)' 
                }}
              >
                <div className="skill-logo-wrapper">
                  <img src={item.logo} alt={item.name} />
                </div>
                <span className="skill-name">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Sub-section */}
        <div className="education-column" id='education'>
          <motion.h2 
            className="section-title-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="gradient-text">Education</span>
          </motion.h2>

          <motion.div 
            className="edu-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {education.map((edu, index) => (
              <motion.div 
                className="edu-card glass-card" 
                key={index}
                whileHover={{ 
                  scale: 1.02, 
                  borderColor: 'var(--accent-purple)',
                  boxShadow: '0 0 20px rgba(157, 78, 221, 0.15)'
                }}
              >
                <div className="edu-header">
                  <div className="edu-logo-wrapper">
                    <img src={mzcet} alt="MZCET logo" />
                  </div>
                  <div className="edu-titles">
                    <h3>{edu.college}</h3>
                    <span className="edu-degree">{edu.degree}</span>
                  </div>
                </div>
                <div className="edu-meta">
                  <span className="edu-year var-font-mono">{edu.year}</span>
                  <span className="edu-place">{edu.place}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Skills

