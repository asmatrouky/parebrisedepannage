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
              src="/img/logo.png"
              alt="Logo"
              width={160}
              height={50}
              className="navbar-logo-img"
            />
          </Link>
        </div>

        <nav className="navbar-links">
          <Link href="/">PARE-BRISE</Link>
          <Link href="/depannage">REMORQUAGE</Link>
          <Link href="/#Faq" scroll={true}>F.A.Q</Link>
          <Link href="/contacteznous">NOUS CONTACTER</Link>
        </nav>

        {/* Bouton RDV Desktop */}
        <div className="navbar-btn-desktop">
          <a href="#" onClick={handleRdvClick} className="navbar-rdv-btn">
            PRENEZ RENDEZ-VOUS
          </a>
        </div>

        {/* Boutons Mobile (Phone/Calendar) */}
        <div className="navbar-mobile-btns" style={{ display: 'none' }}>
          <a className="navbar-mobile-icon" href="tel:0753350012">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a className="navbar-mobile-icon" href="#" onClick={handleRdvClick}>
            <i className="fa-solid fa-calendar-day"></i>
          </a>
        </div>

        {/* Burger Menu / Bouton Fermer */}
        <button className="navbar-burger" onClick={toggleMenu}>
          {menuOpen ? (
            <i className="fa-solid fa-xmark"></i> // Icône X pour fermer
          ) : (
            <i className="fa-solid fa-bars"></i> // Icône Burger
          )}
        </button>
      </div>

      {/* 📱 Structure du Menu Mobile (AJOUTÉE) */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-menu-links">
            {/* Liens Mobile comme sur l'image */}
            <Link href="/" onClick={toggleMenu}>
              PARE-BRISE
            </Link>
            <Link href="/depannage" onClick={toggleMenu}>
              REMORQUAGE
            </Link>
            <Link href="/contacteznous" onClick={toggleMenu}>
              F.A.Q
            </Link>
          </nav>

          <a href="#" onClick={handleRdvClick} className="mobile-rdv-btn">
            PRENDRE RENDEZ-VOUS
          </a>
        </div>
      </div>
    </header>
  );
}