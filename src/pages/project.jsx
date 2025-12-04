import React from 'react';
import './Project.css';
import Logo from '../assets/logo.svg';
import Portfolio from '../assets/portfolio.png'
import Form from '../assets/Form.png'


export default function Project() {
  const projects = [
    {
      title: 'Portfolio React',
      image: Portfolio, 
      description: 'I designed and developed my portfolio using React, Vite, and modular CSS. It focuses on clean design, clear navigation, and personalized branding.',
    },
    {
      title: 'Logo SVG',
      image: Logo,
      description: 'I created a vector logo with my initials (JB), integrating it into my site with a transparent background, responsive behavior, and a professional style.',
    },
    {
      title: 'Interactive Contact Form',
      image: Form,
      description: 'I implemented a form with basic validation, data capture, and functional redirection using React Router and responsive CSS',
    },
  ];

  return (
    <div className="project-container">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
