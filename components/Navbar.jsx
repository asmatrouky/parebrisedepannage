'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleRdvClick = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.openAppointmentForm) {
      window.openAppointmentForm();
    } else {
      console.log("Formulaire RDV non disponible pour l'instant");
    }
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="navbar-root">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <Link href="/">
            <Image
              src="/img/logofb.png"
              alt="Logo"
              width={160}
              height={50}
              className="navbar-logo-img"
            />
          </Link>
        </div>

        {/* Liens Desktop */}
        <nav className="navbar-links">
          <Link href="/">PARE-BRISE</Link>
          <Link href="/depannage">REMORQUAGE</Link>
          <Link href="/FAQ" scroll={true}>F.A.Q</Link>
          <Link href="/contacteznous">NOUS CONTACTER</Link>
        </nav>

        {/* Bouton RDV Desktop */}
        <div className="navbar-btn-desktop">
          <a href="#" onClick={handleRdvClick} className="navbar-rdv-btn">
            PRENEZ RENDEZ-VOUS
          </a>
        </div>

        {/* 📱 Boutons Mobile (Contient maintenant le bouton RDV) */}
        <div className="navbar-mobile-btns">
          {/* NOUVEAU: Bouton RDV pour Mobile */}
          <a 
            href="#" 
            onClick={handleRdvClick} 
            className="navbar-rdv-btn navbar-mobile-rdv-btn"
          >
            PRENEZ RENDEZ-VOUS
          </a>
          
          {/* Icône d'appel conservée */}
          <a className="navbar-mobile-icon" href="tel:0753350012">
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>

        {/* Burger Menu - NOUVELLE STRUCTURE */}
        <button 
          type="button" 
          className={`navbar-burger uicore-toggle uicore-ham ${menuOpen ? 'is-active' : ''}`} 
          aria-label="mobile-menu" 
          onClick={toggleMenu}
        >
          <span className="bars">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </span>
        </button>

      </div>

      {/* 📱 Menu Mobile (overlay plein écran) */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-menu-links">
            <Link href="/" onClick={toggleMenu}>PARE-BRISE</Link>
            <Link href="/depannage" onClick={toggleMenu}>REMORQUAGE</Link>
            <Link href="/FAQ" onClick={toggleMenu}>F.A.Q</Link>
            <Link href="/contacteznous" onClick={toggleMenu}>NOUS CONTACTER</Link>
          </nav>

          <a href="#" onClick={handleRdvClick} className="mobile-rdv-btn">
            PRENDRE RENDEZ-VOUS
          </a>
        </div>
      </div>
    </header>
  );
}