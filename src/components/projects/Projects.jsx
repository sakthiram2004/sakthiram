import React from 'react'
import { motion } from 'motion/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { use3DTilt } from '../../hooks/use3DTilt'
import './Projects.css'

const ProjectCard = ({ project, cardVariants }) => {
  const tilt = use3DTilt()

  return (
    <motion.div 
      className="project-card glass-card" 
      variants={cardVariants}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      whileHover={{ 
        y: -8,
        borderColor: 'var(--accent-cyan)',
        boxShadow: '0 10px 30px rgba(0, 242, 254, 0.15)'
      }}
    >
      <div className="project-header">
        <div className="folder-icon">📂</div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-icon-link"
        >
          <FaGithub size={22} />
        </a>
      </div>

      <div className="project-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-footer">
        <div className="stack-container">
          {project.stack.map((tech, idx) => (
            <span className="tech-badge" key={idx}>{tech}</span>
          ))}
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link-btn"
        >
          View Repository <FaExternalLinkAlt size={12} style={{ marginLeft: '6px' }} />
        </a>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const projects = [
    {
      name: "Ziply Food Delivery App",
      stack: ["Spring Boot", "MySQL", "REST API"],
      link: "https://github.com/sakthiram2004/Ziply.git",
      description: "A comprehensive Spring Boot backend for food delivery application, integrating user authentication, food menu, cart operations, order processing, and payment status checks."
    },
    {
      name: "E-Commerce App",
      stack: ["Spring Boot", "MySQL", "Thymeleaf"],
      link: "https://github.com/sakthiram2004/furniture.git",
      description: "A premium furniture e-commerce platform with administrative dashboard, product inventories, cart management, checking system, and secure order workflows."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15
      }
    }
  }

  return (
    <section className="projects" id='project'>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>

      <motion.div 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {projects.map((project, index) => (
          <ProjectCard 
            project={project} 
            cardVariants={cardVariants} 
            key={index} 
          />
        ))}
      </motion.div>
    </section>
  )
}

export default Projects

