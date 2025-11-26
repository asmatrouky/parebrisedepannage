import React from 'react';

export default function PourquoiNous() {
  return (
    <section className="depannage-why-choose-section">
      <h2 className="depannage-why-choose-title">Pourquoi Choisir Notre Dépanneuse ?</h2>

      <div className="depannage-usp-grid">

        {/* Carte 1 : Intervention ultra-rapide */}
        <div className="depannage-usp-card">
          <div className="depannage-usp-header">
            <span className="depannage-usp-icon">&#10003;</span>
            <h3>Intervention ultra-rapide</h3>
          </div>
          <p>Moins de 30 minutes en moyenne</p>
        </div>

        {/* Carte 2 : Prix transparents */}
        <div className="depannage-usp-card">
          <div className="depannage-usp-header">
            <span className="depannage-usp-icon">&#10003;</span>
            <h3>Prix transparents</h3>
          </div>
          <p>Devis clair avant intervention</p>
        </div>

        {/* Carte 3 : Professionnels certifiés */}
        <div className="depannage-usp-card">
          <div className="depannage-usp-header">
            <span className="depannage-usp-icon">&#10003;</span>
            <h3>Professionnels certifiés</h3>
          </div>
          <p>Équipe expérimentée et formée</p>
        </div>

        {/* Carte 4 : Matériel moderne */}
        <div className="depannage-usp-card">
          <div className="depannage-usp-header">
            <span className="depannage-usp-icon">&#10003;</span>
            <h3>Matériel moderne</h3>
          </div>
          <p>Dépanneuses équipées et entretenues</p>
        </div>

        {/* Carte 5 : Tous véhicules */}
        <div className="depannage-usp-card">
          <div className="depannage-usp-header">
            <span className="depannage-usp-icon">&#10003;</span>
            <h3>Tous véhicules</h3>
          </div>
          <p>Voiture, moto, utilitaire, 4x4</p>
        </div>

        {/* Carte 6 : Paiement facilité */}
        <div className="depannage-usp-card">
          <div className="depannage-usp-header">
            <span className="depannage-usp-icon">&#10003;</span>
            <h3>Paiement facilité</h3>
          </div>
          <p>CB, espèces, prise en charge assurance</p>
        </div>

      </div>
    </section>
  );
}