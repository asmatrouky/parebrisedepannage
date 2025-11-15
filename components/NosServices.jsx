// components/NosServices.jsx

export default function NosServices() {
  return (
    <section className="service-section">
      <div className="service-header">
        <div className="tag">Intervention tous vitrages auto</div>
        <h2 className="sectiontitle">Nos services</h2>
        <p className="intro-text">
          Notre équipe prend en charge tous types de vitrage automobile, qu&apos;il
          s&apos;agisse de remplacement ou de réparation pare-brise.
        </p>
      </div>

      <div className="services-group">
        {/* Première rangée */}
        <div className="services-container">
          <div className="service-card">
            <div className="image-container">
              <img src="/img/1.png" alt="Remplacement de pare-brise" />
            </div>
            <div className="text-card">
              <h3>Remplacement pare-brise</h3>
              <p>
                Nous remplaçons votre pare-brise par un vitrage certifié, conforme
                aux normes de sécurité constructeur (monte d&apos;origine) et
                installé en moins d&apos;une heure.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="image-container">
              <img src="/img/3.png" alt="Réparation d'impact sur pare-brise" />
            </div>
            <h3>Réparation pare-brise</h3>
            <p>
              Nous privilégions la réparation des impacts légers, une solution
              rapide, économique et écologique qui évite le remplacement complet du
              pare-brise.
            </p>
          </div>

          <div className="service-card">
            <div className="image-container">
              <img src="/img/2.png" alt="Remplacement de vitre latérale" />
            </div>
            <h3>Remplacement vitre latérale</h3>
            <p>
              En cas de bris ou d&apos;effraction, nous remplaçons vos vitres
              latérales rapidement avec des vitrages conformes aux spécifications
              constructeur.
            </p>
          </div>
        </div>

        {/* Deuxième rangée */}
        <div className="services-container">
          <div className="service-card">
            <div className="image-container">
              <img src="/img/6.png" alt="Remplacement lunette arrière" />
            </div>
            <h3>Remplacement lunette arrière</h3>
            <p>
              Nous intervenons sur votre lunette arrière pour un remplacement
              sécurisé, garantissant une parfaite étanchéité et une visibilité
              optimale.
            </p>
          </div>

          <div className="service-card">
            <div className="image-container">
              <img src="/img/4.png" alt="Remplacement toit ouvrant" />
            </div>
            <h3>Remplacement toit ouvrant</h3>
            <p>
              Nous assurons le changement ou la réparation de votre toit ouvrant
              avec des pièces compatibles et un montage réalisé dans les règles de
              l&apos;art.
            </p>
          </div>

          <div className="service-card">
            <div className="image-container">
              <img src="/img/5.png" alt="Remplacement toit panoramique" />
            </div>
            <h3>Remplacement toit panoramique</h3>
            <p>
              Nous réalisons le remplacement complet de votre toit panoramique,
              quel que soit le modèle de votre véhicule, avec une parfaite qualité
              de pose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
