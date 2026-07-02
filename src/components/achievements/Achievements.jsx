import React from "react";
import { motion } from "motion/react";
import { FaExternalLinkAlt, FaAward, FaCertificate, FaGraduationCap } from "react-icons/fa";
import "./Achievements.css";

const Achievements = () => {
  const achievementsList = [
    {
      title: "LeetCode 400+ Problems",
      description: "Solved over 400 coding problems across contests and practice, focusing on advanced algorithms and data structures.",
      link: "https://leetcode.com/u/sakthiram/",
      type: "award",
      icon: <FaAward size={28} />
    },
    {
      title: "Zoho Internship Completed",
      description: "Successfully completed full internship curriculum as a Project Trainee working with enterprise frameworks.",
      link: "https://drive.google.com/file/d/1SDAlcrHCmI9dhZZjOvqnFtESDcl8mtj1/view?usp=sharing",
      type: "certificate",
      icon: <FaCertificate size={28} />
    },
    {
      title: "NPTEL Certification",
      description: "Completed NPTEL Programming in Java certification with exceptional marks and performance score.",
      link: "https://drive.google.com/file/d/14PfNUrxc8uqoNzSPu-ob5IKaS_16L5RT/view?usp=sharing",
      type: "certificate",
      icon: <FaGraduationCap size={28} />
    },
    {
      title: "Fizontech Internship",
      description: "Completed mobile application development certification with hands-on industrial learning curve.",
      link: "https://drive.google.com/file/d/1Sgj2GdEU1P4P0TLVPgUoC-L3ENgtDCM0/view?usp=sharing",
      type: "certificate",
      icon: <FaCertificate size={28} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section className="achievements" id="achive">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Achievements & <span className="gradient-text">Certificates</span>
      </motion.h2>

      <motion.div 
        className="achievements-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {achievementsList.map((item, index) => (
          <motion.div 
            className="achievement-card glass-card" 
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              borderColor: 'var(--accent-purple)',
              boxShadow: '0 8px 25px rgba(157, 78, 221, 0.15)'
            }}
          >
            <div className="achievement-icon-wrapper">
              <span className="achievement-icon gradient-text">{item.icon}</span>
            </div>
            
            <div className="achievement-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <div className="achievement-footer">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                {item.type === "award" ? "View Profile" : "View Certificate"}
                <FaExternalLinkAlt size={11} style={{ marginLeft: "6px" }} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;

