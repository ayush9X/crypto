import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait a bit for navigation to complete before scrolling
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
    toggleMenu();
  };

  return (
    <nav role="navigation" aria-label="Primary Navigation">
      <div className="nav-left">
        <a href="/" className="logo" aria-label="Go to homepage">
          <svg viewBox="0 0 50 50" width="30" height="30">
            <path d="M10 40 L40 10 H25 L15 25 H40 V40 Z" fill="#00c9ba" />
          </svg>
          FX automater
        </a>
        <button className="burger" aria-label="Toggle Menu" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>

      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <a onClick={() => handleNavClick('home')}>Home</a>
        <a onClick={() => handleNavClick('product')}>Product</a>
        <a onClick={() => handleNavClick('testimonials')}>Reviews</a>
        <a onClick={() => handleNavClick('faq')}>FAQ</a>
        <a onClick={() => handleNavClick('contact')}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
