import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NaveBar.css'

const NaveBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'EXPERIENCE', href: '#experiance' },
    { name: 'SKILLS', href: '#skill' },
    { name: 'PROJECTS', href: '#project' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'ACHIEVEMENTS', href: '#achive' },
    { name: 'CONTACT', href: '#contact' },
  ]

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

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href))
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.25, rootMargin: '-20% 0px -60% 0px' })

    sections.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
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
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <a 
                      href={link.href}
                      className={`nav-link-btn ${isActive ? 'active' : ''}`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavigationPill"
                          className="active-pill"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </motion.li>
                )
              })}
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
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul>
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1)
                  return (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className={isActive ? 'active' : ''}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

export default NaveBar