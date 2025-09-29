import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaFileDownload } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Contact Me</h2>
      <p>Let’s connect! You can reach me through any of these platforms:</p>

      <div className="footer-links">
        <a 
          href="https://www.linkedin.com/in/sakthiram-s" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ marginRight: "0.5em" }} /> LinkedIn
        </a>

        <a 
          href="https://github.com/Sakthiram2004" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub style={{ marginRight: "0.5em" }} /> GitHub
        </a>

        <a 
          href="mailto:senthil.sakthiram@gmail.com?subject=Hello Sakthiram&body=Hi Sakthiram," 
        >
          <FaEnvelope style={{ marginRight: "0.5em" }} /> senthil.sakthiram@gmail.com
        </a>
        <a href="https://drive.google.com/file/d/1idOW-E_-ntVH_9zQEbK2740RwTkJmVPJ/view?usp=sharing" download>
          <FaFileDownload style={{ marginRight: "0.5em" }} /> Download CV
        </a>
      </div>

      <p className="footer-copy">© 2025 Sakthiram | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
