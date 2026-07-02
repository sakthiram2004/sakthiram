import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NaveBar.css'

const NaveBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'EXPERIENCE', href: '#experiance' },
    { name: 'SKILLS', href: '#skill' },
    { name: 'PROJECTS', href: '#project' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'ACHIEVEMENTS', href: '#achive' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <motion.header 
      className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="gradient-text">SR</span>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          <ul>
            {navLinks.map((link, idx) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <motion.a 
                  href={link.href}
                  whileHover={{ y: -2, color: 'var(--accent-cyan)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {link.name}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default NaveBar