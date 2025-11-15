// components/CommentCaMarche.jsx

export default function CommentCaMarche() {
  return (
    <section className="how-it-works-section">
      <div className="service-header">
        <div className="tag">Intervention tous vitrages auto</div>
        <h2 className="sectiontitle">Comment ça marche ?</h2>
        <p className="intro-text">
          Avec Pare-Brise Éco, remplacer votre pare-brise devient simple, rapide
          et rémunéré. Bénéficiez jusqu&apos;à 500€ avec un service écologique,
          sécurisé et sans avance de frais.
        </p>
      </div>

      <div className="steps-container">
        <div className="step-card">
          <div className="step-image-container">
            <img
              src="/img/calendrier.png"
              alt="Icône Calendrier"
              className="step-image"
            />
          </div>
          <h3>
            Prendre rendez-vous <span className="emoji">🗓️</span>
          </h3>
          <p>
            Planifiez votre rendez-vous en ligne ou par téléphone dans l&apos;un
            de nos nombreux centres franchisés, proches de chez vous.
          </p>
        </div>

        <div className="step-card">
          <div className="step-image-container">
            <img
              src="/img/parebrise.png"
              alt="Icône Pare-brise"
              className="step-image"
            />
          </div>
          <h3>
            Changement du vitrage <span className="emoji">🚗</span>
          </h3>
          <p>
            Nos techniciens réalisent le remplacement du pare-brise avec un
            vitrage certifié, installé rapidement et dans le respect des normes.
          </p>
        </div>

        <div className="step-card">
          <div className="step-image-container">
            <img
              src="/img/cadeau.png"
              alt="Icône Cadeau/Argent"
              className="step-image"
            />
          </div>
          <h3>
            Réception de votre argent <span className="emoji">💰</span>
          </h3>
          <p>
            Après l&apos;intervention, recevez jusqu&apos;à 500€ pour la reprise
            de votre ancien vitrage, sans avance de frais ni démarches complexes.
          </p>
        </div>
      </div>
    </section>
  );
}
