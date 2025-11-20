import React from 'react';
import Image from 'next/image';

export default function Presentation() {
  return (
    <section className="presentation-section">
      <div className="presentation-container">
        
        {/* Image */}
        <div className="presentation-image-container">
          <Image
            src="/img/prsentation.jpg"
            alt="Technicien remplaçant un pare-brise dans un centre spécialisé"
            width={500}
            height={400}
            className="presentation-image"
          />
        </div>
        
        {/* Texte */}
        <div className="presentation-content">
          
          <div className="tag">Expertise & Qualité</div>
          
          <h2 className="presentation-title">
            Experts pare-brise & vitrages
          </h2>
          
          <p className="presentation-description">
            Nos techniciens sont formés aux dernières techniques de pose
            et vous assurent un travail précis, sécurisé et conforme aux
            exigences constructeur. Chaque intervention est réalisée avec
            du matériel professionnel et des vitrages certifiés.
          </p>

          
          <a href="#" className="btn-rdv">En savoir +</a>
        </div>
        
      </div>
    </section>
  );
}
