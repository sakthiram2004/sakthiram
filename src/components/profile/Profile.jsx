import React from 'react'
import { motion } from 'motion/react'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import './Profile.css'
import men from './../../assets/men.png'

const Profile = () => {
  return (
    <section className='profile' id='home'>
      <div className="profile-container">
        <motion.div 
          className="profile-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h4 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            WELCOME TO MY PORTFOLIO
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hello, I'm <span className="gradient-text font-bold">Sakthiram</span>
          </motion.h1>
          <motion.h3
            className="role-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Software Developer
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A passionate software developer. I enjoy building high-performance web and mobile applications, solving complex coding challenges, and creating elegant developer experiences.
          </motion.p>
          
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me <FaArrowRight size={14} style={{ marginLeft: '8px' }} />
            </motion.a>
            <motion.a 
              href="https://drive.google.com/file/d/1idOW-E_-ntVH_9zQEbK2740RwTkJmVPJ/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV <FaDownload size={14} style={{ marginLeft: '8px' }} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="profile-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div 
            className="image-glow-ring"
            animate={{ 
              rotate: 360 
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
          />
          <motion.div 
            className="profile-image-wrapper"
            animate={{
              y: [0, -15, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <img src={men} alt="Sakthiram" className="profile-img" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Profile