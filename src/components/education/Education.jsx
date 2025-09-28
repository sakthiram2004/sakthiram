import React from 'react'
import './Education.css'

const Education = () => {
  const educationData = [
    {
      degree: "B.E. Computer Science and Engineering",
      college: "Mount Zion College of Engineering and Technology",
      year: "2021 - 2025",
      grade: "CGPA: 8.2 / 10"
    },
    {
      degree: "Higher Secondary (HSC)",
      college: "XYZ Higher Secondary School",
      year: "2019 - 2021",
      grade: "Percentage: 85%"
    },
    {
      degree: "SSLC",
      college: "ABC Matriculation School",
      year: "2018 - 2019",
      grade: "Percentage: 90%"
    }
  ];

  return (
    <div className="education">
      <h2>Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p>{edu.college}</p>
              <span>{edu.year}</span>
              <small>{edu.grade}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
