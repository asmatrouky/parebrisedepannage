export default function NosServices() {
  return (
    <section className="service-section">
      <div className="service-header">
        <div className="tag">Tous vitrages – Intervention rapide</div>
        <h2 className="sectiontitle">Nos services</h2>
        <p className="intro-text">
          Nous intervenons sur l’ensemble des vitrages automobiles : réparation,
          remplacement et diagnostic. Un service précis, rapide et réalisé par
          des techniciens spécialisés.
        </p>
      </div>

      <div className="services-group">
        {/* Première rangée */}
        <div className="services-container">
          <div className="service-card">
            <div className="image-container">
              <img src="/img/1.png" alt="Remplacement pare-brise" />
            </div>
            <div className="text-card">
              <h3>Remplacement pare-brise</h3>
              <p>
                Pose d’un pare-brise certifié, conforme aux normes constructeur,
                avec une installation maîtrisée et rapide. Votre sécurité avant
                tout.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="image-container">
              <img src="/img/3.png" alt="Réparation d'impact" />
            </div>
            <h3>Réparation d’impact</h3>
            <p>
              Une solution efficace pour stopper l’évolution d’un impact. Rapide,
              économique et idéale pour éviter un remplacement complet lorsque
              cela est possible.
            </p>
          </div>

          <div className="service-card">
            <div className="image-container">
              <img src="/img/2.png" alt="Vitre latérale" />
            </div>
            <h3>Remplacement vitre latérale</h3>
            <p>
              Intervention express en cas de bris ou d’effraction. Nous
              remplaçons votre vitre par un vitrage homologué, parfaitement
              ajusté à votre véhicule.
            </p>
          </div>
        </div>

        {/* Deuxième rangée */}
        <div className="services-container">
          <div className="service-card">
            <div className="image-container">
              <img src="/img/6.png" alt="Lunette arrière" />
            </div>
            <h3>Remplacement lunette arrière</h3>
            <p>
              Remplacement complet avec restauration de l’étanchéité et du
              système de dégivrage pour une visibilité optimale et durable.
            </p>
          </div>

          {/* SECTION MODIFIÉE */}
          <div className="service-card">
            <div className="image-container">
              <img src="/img/4.png" alt="Déflecteur / Custode" />
            </div>
            <h3>Déflecteur & Custode</h3>
            <p>
              Intervention sur les déflecteurs et vitres custodes : remplacement
              rapide, ajustement précis et vitrage homologué pour garantir
              sécurité et esthétique d’origine.
            </p>
          </div>

          <div className="service-card">
            <div className="image-container">
              <img src="/img/5.png" alt="Toit panoramique" />
            </div>
            <h3>Remplacement toit panoramique</h3>
            <p>
              Expertise sur tous types de toits panoramiques. Remplacement
              complet avec un montage précis, quelle que soit la marque du
              véhicule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
