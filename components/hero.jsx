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
              Pare-brise remplacé = Franchise Offerte
            </div>

  <h1 className="relative inline-block leading-tight">
  Installation pare-brise avec reprise jusqu’à{' '}
  <span className="relative inline-block">
    500€
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      className="underline-svg"
      aria-hidden="true"
    >
      <path
        d="M14.4,111.6c0,0,202.9-33.7,471.2,0c0,0-194-8.9-397.3,24.7c0,0,141.9-5.9,309.2,0"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        style={{ animationPlayState: "running" }}
      />
    </svg>
  </span>
</h1>




            <p>
              Remplacez votre pare-brise en toute simplicité : intervention en 1 heure,
              prise en charge sans avance de frais et installation d’un vitrage certifié.
              En bonus, chaque remplacement vous donne droit à un cadeau offert.
            </p>

            <div className="buttons" onClick={handleClick}>
              <button className="button-primary" >
                PRENEZ RENDEZ-VOUS
              </button>
            </div>
             
            {/* --- Reste du contenu inchangé... --- */}
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
          </div>
        </div>
      </div>
    </section>
  );
}