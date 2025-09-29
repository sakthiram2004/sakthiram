import React from 'react'
import './Profile.css'
import alex from './../../assets/alex.png'
import men from './../../assets/men.png'
const Profile = () => {
  return (
    <div className='profile'>
      <div className="content">
            <h1>Hello, I'm Sakthiram</h1>
            <p>
                  A  passionate software developer. I enjoy building web and mobile applications, solving coding challenges.
            </p>
      </div>
      <div className="image">
            <img src={men} alt="" />
      </div>
    </div>
  )
}

export default Profile