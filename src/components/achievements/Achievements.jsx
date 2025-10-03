import React from "react";
import "./Achievements.css";

const Achievements = () => {
  return (
    <div className="achievements" id="achive">
      <h1 className="section-title">Achievements & Certificates</h1>

      <div className="achievements-list">
        <div className="achievement-card">
          <h3>🏆 LeetCode 400+ Problems</h3>
          <p>Solved over 400 coding problems across contests and practice.</p>
          <a
            href="https://leetcode.com/u/sakthiram/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Profile
          </a>
        </div>

        <div className="achievement-card">
          <h3>🚀Zoho Internship Completed</h3>
          <p>Java Intern at ITechTechnology and Fizontech.</p>
          <a
            href="https://drive.google.com/file/d/1SDAlcrHCmI9dhZZjOvqnFtESDcl8mtj1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Certificate
          </a>
        </div>

        <div className="achievement-card">
          <h3>📚 NPTEL Certification</h3>
          <p>Completed Java Programming Course with good performance.</p>
          <a
            href="https://drive.google.com/file/d/14PfNUrxc8uqoNzSPu-ob5IKaS_16L5RT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Certificate
          </a>
        </div>

        <div className="achievement-card">
          <h3>🎓 Fizontech Internship</h3>
          <p>Internship experience in Java Development.</p>
          <a
            href="https://drive.google.com/file/d/1Sgj2GdEU1P4P0TLVPgUoC-L3ENgtDCM0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Certificate
          </a>
        </div>

        {/* <div className="achievement-card">
          <h3>🎓 ITech Internship</h3>
          <p>Worked on real-world Java projects during internship.</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Certificate
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Achievements;
