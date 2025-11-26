import React from 'react';

/**
 * Composant de titre de base avec fond sombre.
 * @param {string} title - Le texte du titre à afficher.
 * @param {string} [description] - Le texte de description centré sous le titre. <--- AJOUTÉ
 * @param {boolean} [hasBorder=false] - Indique si la bordure bleue doit être appliquée.
 */
export default function BasicHeader({ title, description, hasBorder = false }) {
  
  // Classe conditionnelle pour ajouter la bordure bleue
  const containerClasses = `basic-header-container ${hasBorder ? 'basic-header-with-border' : ''}`;

  return (
    <section className={containerClasses}>
        <div className="basic-header-content"> 
          <h2 className="basic-header-title">
            {title || "Titre par défaut"} 
          </h2>
          
          {/* La description est affichée si elle est fournie */}
          {description && (
            <p className="basic-header-description">
              {description}
            </p>
          )}

        </div>
    </section>
  );
}