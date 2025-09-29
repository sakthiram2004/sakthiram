import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      name: "E-Commerce App",
      stack: ["Spring Boot", "MySQL", "React"],
      link: "https://sakthiram2004.github.io/furniture-ecommerce/",
       description: "A full-stack furniture e-commerce platform with product management, cart, and checkout system."
    }
    // {
    //   name: "Evently App",
    //   stack: ["Flutter", "Node.js", "MongoDB"],
    //   link: "https://github.com/sakthiram2004/eventlyapp.git"
    // },
    // {
    //   name: "To-Do App",
    //   stack: ["Spring Boot", "Flutter"],
    //   link: "https://github.com/sakthiram2004/todoapp.git"
    // }
  ]

  return (
    <div className="projects">
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.name}</h2>
            <p className="stack">
              {project.stack.join(" • ")}
        
            </p>
            <p >
             
              {project.description}
            </p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
