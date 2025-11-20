'use client';

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
              Remplacement de pare-brise rapide sans rien avancer
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
          </div>
        </div>
      </div>
    </section>
  );
}
