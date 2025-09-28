import React from "react";
import "./Achievements.css";

const Achievements = () => {
  return (
    <div className="achievements">
      <h1>Achievements</h1>
      <div className="achievements-list">
        <div className="achievement-card">
          <h3>🏆 LeetCode 400+ Problems</h3>
          <p>Solved over 400 coding problems across contests and practice.</p>
        </div>
        <div className="achievement-card">
          <h3>🚀 Internships Completed</h3>
          <p>Java Intern at ITechTechnology and Fizontech.</p>
        </div>
        <div className="achievement-card">
          <h3>📚 NPTEL Certification</h3>
          <p>Completed Java Programming Course with good performance.</p>
        </div>
      </div>

      <h1>Certificates</h1>
      <div className="certificates-list">
        <div className="certificate-card">
          <h3>🎓 Java (NPTEL)</h3>
          <a href="#" target="_blank" rel="noreferrer">View Certificate</a>
        </div>
        <div className="certificate-card">
          <h3>🎓 Fizontech Internship</h3>
          <a href="#" target="_blank" rel="noreferrer">View Certificate</a>
        </div>
        <div className="certificate-card">
          <h3>🎓 ITech Internship</h3>
          <a href="#" target="_blank" rel="noreferrer">View Certificate</a>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
