'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleRdvClick = (e) => {
    e.preventDefault();
    console.log("Formulaire RDV (à connecter plus tard)");
  };

  return (
    <header className="navbar-root">
      <div className={`navbar-container ${menuOpen ? 'menu-open' : ''}`}>
        
        {/* Logo */}
        <div className="navbar-logo">
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="Logo"
              width={160}
              height={50}
              className="navbar-logo-img"
            />
          </Link>
        </div>

        {/* Navigation Desktop */}
        <nav className="navbar-links">
          <Link href="/offres">PARE-BRISE</Link>
            <Link href="/depannage">REMORQUAGE</Link>
          <Link href="/fonctionnement#faq">F.A.Q</Link>
          <Link href="/contact">NOUS CONTACTER</Link>
        </nav>

        {/* Bouton RDV Desktop */}
        <div className="navbar-btn-desktop">
          <a href="#" onClick={handleRdvClick} className="navbar-rdv-btn">
            PRENEZ RENDEZ-VOUS
          </a>
        </div>

        {/* Boutons Mobile */}
        <div className="navbar-mobile-btns">
          <a className="navbar-mobile-icon" href="tel:0753350012">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a className="navbar-mobile-icon" href="#" onClick={handleRdvClick}>
            <i className="fa-solid fa-calendar-day"></i>
          </a>
        </div>

        {/* Burger Menu */}
        <button className="navbar-burger" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
