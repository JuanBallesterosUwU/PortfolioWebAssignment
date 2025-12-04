import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/about.jsx';
import Education from '../pages/education.jsx';
import Projects from '../pages/project.jsx';
import Contact from '../pages/contact.jsx';

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="project" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

