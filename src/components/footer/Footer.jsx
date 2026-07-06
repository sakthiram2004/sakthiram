import React from "react";
import { motion } from "motion/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sakthiram-s",
      icon: <FaLinkedin size={20} />,
      color: "#0077b5"
    },
    {
      name: "GitHub",
      href: "https://github.com/Sakthiram2004",
      icon: <FaGithub size={20} />,
      color: "#333"
    },
    {
      name: "Email",
      href: "mailto:senthil.sakthiram@gmail.com?subject=Hello Sakthiram&body=Hi Sakthiram,",
      icon: <FaEnvelope size={20} />,
      color: "#ea4335"
    },
    {
      name: "Download CV",
      href: "https://drive.google.com/file/d/1idOW-E_-ntVH_9zQEbK2740RwTkJmVPJ/view?usp=sharing",
      icon: <FaFileDownload size={20} />,
      color: "#00f2fe"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-glow"></div>
      <div className="footer-container">
        
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In <span className="gradient-text">Touch</span></h2>
          <p className="footer-tagline">
            Let’s collaborate on something amazing! I'm always open to discussing new projects, creative opportunities, or technology frameworks.
          </p>
        </motion.div>

        <div className="footer-links-grid">
          {socialLinks.map((link, index) => (
            <motion.a 
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-pill glass-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                borderColor: link.color,
                boxShadow: `0 0 15px ${link.color}40`
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="link-icon" style={{ color: link.color }}>{link.icon}</span>
              <span className="link-text">{link.name}</span>
            </motion.a>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Sakthiram | All Rights Reserved</p>
          
          <motion.button 
            className="scroll-top-btn"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, background: 'var(--gradient-primary)', color: 'var(--bg-primary)' }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

