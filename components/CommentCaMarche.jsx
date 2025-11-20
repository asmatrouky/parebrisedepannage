export default function CommentCaMarche() {
  return (
    <section className="how-it-works-section">
      <div className="service-header">
        <div className="tag">Processus simple & rapide</div>
        <h2 className="sectiontitle">Comment ça marche ?</h2>
        <p className="intro-text">
          Une prise en charge fluide, pensée pour vous faire gagner du temps.
          De la réservation à la restitution du véhicule, tout est conçu pour
          être rapide, fiable et sans complication.
        </p>
      </div>

      <div className="steps-container">
        
        {/* Étape 1 */}
        <div className="step-card">
          <div className="step-image-container">
            <img
              src="/img/calendrier.png"
              alt="Prise de rendez-vous"
              className="step-image"
            />
          </div>
          <h3>
            Réservez votre créneau <span className="emoji">🗓️</span>
          </h3>
          <p>
            Choisissez l'heure et le centre qui vous conviennent. En quelques clics,
            votre rendez-vous est confirmé.
          </p>
        </div>

        {/* Étape 2 */}
        <div className="step-card">
          <div className="step-image-container">
            <img
              src="/img/parebrise.png"
              alt="Remplacement du vitrage"
              className="step-image"
            />
          </div>
          <h3>
            Intervention du technicien <span className="emoji">🚗</span>
          </h3>
          <p>
            Nos spécialistes procèdent au remplacement du vitrage avec des matériaux
            certifiés et une pose réalisée dans les règles de l’art.
          </p>
        </div>

        {/* Étape 3 */}
        <div className="step-card">
          <div className="step-image-container">
            <img
              src="/img/cadeau.png"
              alt="Réception de votre avantage"
              className="step-image"
            />
          </div>
          <h3>
            Bénéficiez de votre avantage <span className="emoji">💰</span>
          </h3>
          <p>
            Une fois l’intervention terminée, vous recevez votre avantage financier
            lié à la reprise de votre ancien vitrage – sans avance de frais.
          </p>
        </div>

      </div>
    </section>
  );
}
