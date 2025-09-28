import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaFileDownload } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Contact Me</h2>
      <p>Let’s connect! You can reach me through any of these platforms:</p>

      <div className="footer-links">
        <a href="https://www.linkedin.com/in/Sakthiram-s" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/Sakthiram2004" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="mailto:senthil.sakthiram@gmail.com">
          <FaEnvelope /> Email
        </a>
        <a href="tel:+916383926551">
          <FaPhone /> +91 6383926551
        </a>
        <a href="/Sakthiram-CV.pdf" download>
          <FaFileDownload /> Download CV
        </a>
      </div>

      <p className="footer-copy">© 2025 Sakthiram | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
