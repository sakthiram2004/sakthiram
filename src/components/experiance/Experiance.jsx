import React from 'react'
import './Experiance.css'
import zoho from './../../assets/zoho.png'
import itech from './../../assets/itech.jpg'
import fizontech from './../../assets/fizon tech.jpg'

const Experiance = () => {
  const exp = [
    {
      name: 'ZOHO',
      from: 'Feb-2025',
      to: 'May-2025',
      role: 'Project Trainee',
      photo: zoho,
      discription: 'Worked on real-time projects as a Project Trainee.'
    },
    {
      name: 'Fizon Tech',
      from: 'July-2024',
      to: 'Aug-2024',
      role: 'Flutter Developer',
      photo: fizontech,
      discription: 'Built mobile applications using Flutter.'
    },
    {
      name: 'ITech',
      from: 'June-2023',
      to: 'July-2023',
      role: 'Java Developer',
      photo: itech,
      discription: 'Developed backend solutions using Java and Spring Boot.'
    }
  ]

  return (
    <div className="experience" id='experiance'>
      <h1>Experience</h1>
      <div className="exp-div">
        {exp.map((item, index) => (
          <div className="exp-container" key={index}>
            <div className="exp-left">
              <img src={item.photo} alt={item.name} />
            </div>
            <div className="exp-right">
              <h2>{item.name}</h2>
              <h5>{item.from} - {item.to}</h5>
              <h3>{item.role}</h3>
              <p>{item.discription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiance
