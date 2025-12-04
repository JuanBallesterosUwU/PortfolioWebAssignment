import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout-wrapper">
      <header className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
          <h1 className="site-title">Juan</h1>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/education">Education</Link>
          <Link to="/project">Project</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}
