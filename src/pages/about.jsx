import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h2>Sobre Mí</h2>

      <div className="about-content">
        <img
          src="/profile.jpg" 
          alt="Juan Diego Ballesteros"
          className="profile-image"
        />

        <div className="about-text">
          <p><strong>Name:</strong> Juan Diego Ballesteros</p>
          <p>
            I am a Software Engineering Technology student at Centennial College (2024–2026).
            I specialize in frontend development with React, minimalist design, and clean, functional solutions.
            I’m passionate about creating digital experiences that blend clarity, aesthetics, and performance.
          </p>

          <a href="/resume.pdf" download className="resume-link">
            Download my CV
          </a>
        </div>
      </div>
    </div>
  );
}