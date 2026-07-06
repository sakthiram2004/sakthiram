import React from 'react'
import { motion } from 'motion/react'
import './Experiance.css'
import zoho from './../../assets/zoho.png'
import itech from './../../assets/itech.jpg'
import fizontech from './../../assets/fizon tech.jpg'

const Experiance = () => {
  const exp = [
    {
      name: 'ZOHO',
      from: 'Feb 2025',
      to: 'May 2025',
      role: 'Project Trainee',
      photo: zoho,
      description: 'Worked on enterprise solutions, building components and working with engineering teams to deploy production code.'
    },
    {
      name: 'Fizon Tech',
      from: 'July 2024',
      to: 'Aug 2024',
      role: 'Flutter Developer',
      photo: fizontech,
      description: 'Built cross-platform mobile applications using Flutter and Dart, focused on smooth UI/UX and REST API integrations.'
    },
    {
      name: 'ITech',
      from: 'June 2023',
      to: 'July 2023',
      role: 'Java Developer',
      photo: itech,
      description: 'Developed scalable backend solutions using Java and Spring Boot. Created secure APIs and database schemas.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15
      }
    }
  }

  return (
    <section className="experience" id='experiance'>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        Work <span className="gradient-text">Experience</span>
      </motion.h2>

      <motion.div 
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="timeline-line"></div>
        
        {exp.map((item, index) => (
          <motion.div 
            className="timeline-item" 
            key={index}
            variants={itemVariants}
          >
            <div className="timeline-badge">
              <img src={item.photo} alt={item.name} className="timeline-logo" />
            </div>

            <div className="timeline-card glass-card">
              <span className="timeline-date">{item.from} — {item.to}</span>
              <h3>{item.role}</h3>
              <h4 className="gradient-text">{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Experiance

