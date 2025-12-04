import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <div className="education-container">
      <h2>Education</h2>

      <div className="education-list">
        <div className="education-item">
          <h3>Centennial College</h3>
          <p><strong>Program:</strong> Software Engineering Technology</p>
          <p><strong>Lenght:</strong> 2024 – 2026</p>
          <p><strong>Where:</strong> Toronto, ON, Canadá</p>
        </div>

        <div className="education-item">
          <h3>Centro Andino de Estudios Tecnicos</h3>
          <p><strong>Program:</strong> Repair and maintenance of computers</p>
          <p><strong>Año de graduación:</strong> 2020</p>
          <p><strong>Ubicación:</strong> [Bogota, Colombia]</p>
        </div>
      </div>
    </div>
  );
}
