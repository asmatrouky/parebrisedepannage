import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: 'Remplacement pare-brise', href: '/' },
    { label: 'Réparation pare-brise', href: '/' },
    { label: 'Remplacement vitre latérale', href: '/' },
    { label: 'Remplacement lunette arrière', href: '/' },
    { label: 'Remplacement toit ouvrant', href: '/' },
    { label: 'Remplacement toit panoramique', href: '/' },
  ];

  const entrepriseLinks = [
    { label: 'Dépannage', href: '/depannage' },
    { label: 'Remorquage', href: '/depannage' },
  ];

  return (
    <footer className="footer-root">
      <div className="footer-content-wrapper">
        
        <div className="footer-main-content">
          
          {/* Bloc logo + description */}
          <div className="footer-column footer-info">
            <Link href="/" className="footer-logo-link">
              <Image 
                src="/img/logo2.png" 
                alt="Logo du site" 
                width={150} 
                height={50} 
              />
            </Link>

            <p className="footer-description">
              Spécialiste du vitrage automobile, nous intervenons pour le remplacement 
              de pare-brise, la réparation d’impact et le changement de tout type de vitre. 
              Nous assurons un service rapide, soigné et adapté à tous les véhicules.
            </p>

            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
          
          {/* Bloc Vitrage */}
          <div className="footer-column footer-links-group">
            <h3 className="footer-title">Vitrage</h3>
            <ul className="footer-links-list">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Bloc Dépannage */}
          <div className="footer-column footer-links-group">
            <h3 className="footer-title">Dépannage</h3>
            <ul className="footer-links-list">
              {entrepriseLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} WebmaAgency. Tous droits réservés.
          </p>
          <div className="footer-legal-links">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/cgu">CGU</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
