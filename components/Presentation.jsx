'use client';

import React from 'react';
import Image from 'next/image';

export default function PresentationSection({
  tag = 'Expertise & Qualité',
  title = 'Experts pare-brise & vitrages',
  description = 'Nos techniciens sont formés aux dernières techniques de pose...',
  buttonLabel = 'En savoir +',
  buttonHref = null,
  buttonClass = '',
  imageSrc = '/img/prsentation.jpg',
  imageAlt = 'Technicien remplaçant un pare-brise dans un centre spécialisé',
  mobileImageFirst = false,
}) {
  const handleClick = (e) => {
    // 👉 Cas formulaire (pas de lien)
    if (!buttonHref) {
      e.preventDefault();
      if (typeof window !== 'undefined' && window.openAppointmentForm) {
        window.openAppointmentForm();
      }
      return;
    }
  };

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

          {title && <h2 className="sectiontitle_left">{title}</h2>}

          {description && <p className="intro-text_left">{description}</p>}

          {buttonLabel && (
            buttonHref ? (
              <a href={buttonHref} className={`btn-rdv ${buttonClass}`}>
                {buttonLabel}
              </a>
            ) : (
              <button
                type="button"
                className={`btn-rdv ${buttonClass}`}
                onClick={handleClick}
              >
                {buttonLabel}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
