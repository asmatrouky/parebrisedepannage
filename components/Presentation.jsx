import React from 'react';
import Image from 'next/image';

/**
 * Props possibles :
 * - tag: petit texte au-dessus du titre
 * - title: titre principal
 * - description: texte
 * - buttonLabel: texte du bouton
 * - buttonHref: lien du bouton
 * - imageSrc: chemin de l'image
 * - imageAlt: texte alternatif
 * - mobileImageFirst: true = image en 1er sur mobile, false = texte en 1er
 */
export default function PresentationSection({
  tag = 'Expertise & Qualité',
  title = 'Experts pare-brise & vitrages',
  description = 'Nos techniciens sont formés aux dernières techniques de pose et vous assurent un travail précis, sécurisé et conforme aux exigences constructeur. Chaque intervention est réalisée avec du matériel professionnel et des vitrages certifiés.',
  buttonLabel = 'En savoir +',
  buttonHref = '#',
  imageSrc = '/img/prsentation.jpg',
  imageAlt = 'Technicien remplaçant un pare-brise dans un centre spécialisé',
  mobileImageFirst = true, // <--- contrôle l’ordre sur mobile
}) {
  return (
    <section className="presentation-section">
      <div
        className={`presentation-container ${
          mobileImageFirst ? 'mobile-image-first' : 'mobile-text-first'
        }`}
      >
        {/* Image */}
        <div className="presentation-image-container">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={400}
            className="presentation-image"
          />
        </div>

        {/* Contenu texte */}
        <div className="presentation-content">
          {tag && <div className="tag">{tag}</div>}

          {title && (
            <h2 className="sectiontitle_left">
              {title}
            </h2>
          )}

          {description && (
            <p className="intro-text_left">
              {description}
            </p>
          )}

          {buttonLabel && (
            <a href={buttonHref} className="btn-rdv">
              {buttonLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
