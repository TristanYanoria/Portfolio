import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuToggle = () => setMenuOpen(open => !open);

  return (
    <header className="Header">
      <button
        className="Header-hamburger"
        onClick={handleMenuToggle}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <div className="Header-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        INSANITICS
      </div>
      <nav className={`Header-nav${menuOpen ? ' open' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#achievements" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <div className="Header-spacer"></div>
    </header>
  );
}

export default Header;