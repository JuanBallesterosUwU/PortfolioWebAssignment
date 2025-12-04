import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="welcome-section">
        <h1>Welcome to my portfolio</h1>
        <p>
          I am <strong>Juan Diego Ballesteros</strong>, a Software Engineering Technology student at Centennial College.
          I specialize in frontend development with React, minimalist design, and clean, functional solutions.
        </p>
        <p className="mission">
          <em>My mission is to build digital experiences that combine clarity, aesthetics, and performance.</em>
        </p>
        <Link to="/about" className="cta-button">Get to know me</Link>
      </section>
    </div>
  );
}
