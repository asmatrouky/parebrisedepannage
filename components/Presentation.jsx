// components/Presentation.jsx

import React from 'react';
import Image from 'next/image';

export default function Presentation() {
  return (
    <section className="presentation-section">
      <div className="presentation-container">
        
        {/* Partie Gauche : Image */}
        <div className="presentation-image-container">
          <Image
            src="/img/prsentation.jpg" // Remplacez par le chemin réel de votre image
            alt="Intérieur d'un centre de franchisé avec voiture et éclairage moderne"
            width={500}
            height={400}
            className="presentation-image"
          />
        </div>
        
        {/* Partie Droite : Contenu Textuel */}
        <div className="presentation-content">
          
          <div className="tag ">
            Franchise Innovante
          </div>
          
          <h2 className="presentation-title ">
            Rejoignez notre réseau de franchisés
          </h2>
          
          <p className="presentation-description">
            Rejoignez le réseau Pare-Brise Éco et devenez acteur de l'économie circulaire. Profitez d'un concept innovant, rentable et en pleine croissance. Bénéficiez d'un accompagnement complet pour développer votre activité sur un marché porteur.
          </p>
          
          <a href="#" className="btn-rdv">
        En savoir +
      </a>
        </div>
        
      </div>
    </section>
  );
}