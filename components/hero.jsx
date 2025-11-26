'use client';
import Image from 'next/image';

export default function Hero() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.openAppointmentForm) {
      window.openAppointmentForm();
    } else {
      console.warn('openAppointmentForm n’est pas défini sur window');
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="content-wrapper">
          <div className="content">
            <div className="promo-tag">
              Un pare-brise remplacé = Un cadeau offert
            </div>

            <h1>
              Faites remplacer votre pare-brise et recevez jusqu’à 500€
            </h1>

            <p>
              Remplacez votre pare-brise en toute simplicité : intervention en 1 heure,
              prise en charge sans avance de frais et installation d’un vitrage certifié.
              En bonus, chaque remplacement vous donne droit à un cadeau offert.
            </p>

            <div className="buttons">
              <button className="button-primary" onClick={handleClick}>
                PRENEZ RENDEZ-VOUS
              </button>
            </div>
             
            {/* --- Nouvelle section d'assurance ajoutée ici --- */}
            <div className="insurance-section">
              <p className="collaboration-text">
                Nous collaborons avec la plupart des grandes compagnies d’assurance :
              </p>
              <div className="insurance-logos">
                <Image src="/img/logo-axa.png" alt="Logo MAAF" width={50} height={30} className="logo" />
                <Image src="/img/logo-macif.png" alt="Logo MACIF" width={50} height={30} className="logo" />
                <Image src="/img/logo-maaf.png" alt="Logo AXA" width={50} height={30} className="logo" />
                <Image src="/img/logo-maif.png" alt="Logo MAIF" width={50} height={30} className="logo" />
                <Image src="/img/logo-gmf.png" alt="Logo GMF" width={50} height={30} className="logo" />
                
                <span className="and-more-link">
                  et bien d’autres encore, <a href="/savoir-plus">  en savoir plus...</a>
                </span>
              </div>
            </div>
            {/* ------------------------------------------------ */}

          </div>
        </div>
      </div>
    </section>
  );
}