'use client';

export default function PrendreRDV({
  tag = "Rendez-vous rapide",
  title = "Prendre rendez-vous !",
  description = "Prenez rendez-vous dès maintenant pour le remplacement de votre pare-brise. Notre intervention est rapide, écologique et sans avance de frais. Votre pare-brise est remplacé en moins d'une heure avec un vitrage certifié constructeur.",
  buttonLabel = "PRENDRE RENDEZ-VOUS",
  buttonHref = null, // ⬅️ IMPORTANT : null = ouverture formulaire
}) {
  const handleClick = (e) => {
    // 👉 Cas formulaire (pas de lien)
    if (!buttonHref) {
      e.preventDefault();
      if (typeof window !== 'undefined' && window.openAppointmentForm) {
        window.openAppointmentForm();
      }
    }
  };

  return (
    <section className="rdv-container">
      {tag && <div className="tag">{tag}</div>}

      {title && <h2 className="title">{title}</h2>}

      {description && <p className="description">{description}</p>}

      {buttonLabel && (
        buttonHref ? (
          <a href={buttonHref} className="btn-rdv">
            {buttonLabel}
          </a>
        ) : (
          <button
            type="button"
            className="btn-rdv"
            onClick={handleClick}
          >
            {buttonLabel}
          </button>
        )
      )}
    </section>
  );
}
