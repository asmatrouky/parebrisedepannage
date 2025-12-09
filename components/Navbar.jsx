'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleRdvClick = (e) => {
    e.preventDefault();

    if (pathname === "/depannage") {
      window.location.href = "tel:0753350012";
      return;
    }

    if (typeof window !== 'undefined' && window.openAppointmentForm) {
      window.openAppointmentForm();
    } else {
      console.log("Formulaire RDV non disponible pour l'instant");
    }

    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header className="navbar-root">

      {/* 🎨 STYLE AJOUTÉ POUR AGRANDIR LE TEXTE MOBILE + ESPACEMENT */}

      <style>{`
        /* Taille du texte + espacement sur mobile */
        @media (max-width: 768px) {
          .btn-phone-mobile {
            font-size: 1rem;      /* Texte plus grand */
            gap: 10px !important;    /* Plus d'espace entre icône et numéro */
          }
        }

        /* Sur desktop : texte légèrement plus grand mais propre */
        @media (min-width: 769px) {
          .btn-phone-desktop {
            font-size: 1rem;
            gap: 8px !important;
          }
        }
      `}</style>

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
          <a 
            href="#" 
            onClick={handleRdvClick} 
            className={`navbar-rdv-btn flex items-center ${pathname === "/depannage" ? "btn-phone-desktop" : ""}`}
          >
            {pathname === "/depannage" ? (
              <>
                <i className="fa-solid fa-phone"></i>
                07 53 35 00 12
              </>
            ) : (
              "PRENEZ RENDEZ-VOUS"
            )}
          </a>
        </div>

        {/* 📱 Mobile */}
        <div className="navbar-mobile-btns">

          <a 
            href="#" 
            onClick={handleRdvClick} 
            className={`navbar-rdv-btn navbar-mobile-rdv-btn flex items-center ${pathname === "/depannage" ? "btn-phone-mobile" : ""}`}
          >
            {pathname === "/depannage" ? (
              <>
                <i className="fa-solid fa-phone"></i>
                07 53 35 00 12
              </>
            ) : (
              "PRENEZ RENDEZ-VOUS"
            )}
          </a>

          {/* Icône téléphone */}
          <a className="navbar-mobile-icon" href="tel:0753350012">
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>

        {/* Burger Menu */}
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

      {/* 📱 Menu Mobile */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">

          <nav className="mobile-menu-links">
            <Link href="/" onClick={toggleMenu}>PARE-BRISE</Link>
            <Link href="/depannage" onClick={toggleMenu}>REMORQUAGE</Link>
            <Link href="/FAQ" onClick={toggleMenu}>F.A.Q</Link>
            <Link href="/contacteznous" onClick={toggleMenu}>NOUS CONTACTER</Link>
          </nav>

          <a 
            href="#" 
            onClick={handleRdvClick} 
            className={`mobile-rdv-btn flex items-center ${pathname === "/depannage" ? "btn-phone-mobile" : ""}`}
          >
            {pathname === "/depannage" ? (
              <>
                <i className="fa-solid fa-phone"></i>
                07 53 35 00 12
              </>
            ) : (
              "PRENDRE RENDEZ-VOUS"
            )}
          </a>

        </div>
      </div>

    </header>
  );
}
