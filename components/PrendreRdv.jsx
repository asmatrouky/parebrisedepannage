export default function PrendreRDV({
  tag = "Rendez-vous rapide",
  title = "Prendre rendez-vous !",
  description = "Prenez rendez-vous dès maintenant pour le remplacement de votre pare-brise. Notre intervention est rapide, écologique et sans avance de frais. Votre pare-brise est remplacé en moins d'une heure avec un vitrage certifié constructeur.",
  buttonLabel = "PRENDRE RENDEZ-VOUS",
  buttonHref = "#",
}) {
  return (
    <section className="rdv-container">
      
      {tag && <div className="tag">{tag}</div>}

      {title && <h2 className="title">{title}</h2>}

      {description && (
        <p className="description">
          {description}
        </p>
      )}

      {buttonLabel && (
        <a href={buttonHref} className="btn-rdv">
          {buttonLabel}
        </a>
      )}
      
    </section>
  );
}
