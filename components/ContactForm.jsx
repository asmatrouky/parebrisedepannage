import React from 'react';

export default function ContactForm() {
  return (
    <div className="contact-form-container">
      <form>
        {/* Première Ligne : Nom et Prénom */}
        <div className="form-grid">
          <div className="form-group col-half">
            <label htmlFor="prenom" className="form-label">Prénom <span style={{ color: 'red' }}>*</span></label>
            <input type="text" id="prenom" name="prenom" className="form-input" required />
          </div>

          <div className="form-group col-half">
            <label htmlFor="nom" className="form-label">Nom de famille <span style={{ color: 'red' }}>*</span></label>
            <input type="text" id="nom" name="nom" className="form-input" required />
          </div>
        </div>

        {/* Deuxième Ligne : E-mail, Téléphone, Objet */}
        <div className="form-grid">
          <div className="form-group col-half">
            <label htmlFor="email" className="form-label">E-mail <span style={{ color: 'red' }}>*</span></label>
            <input type="email" id="email" name="email" className="form-input" required />
          </div>

          <div className="form-group col-half" style={{ flexBasis: 'calc(33.333% - 13.33px)' }}> {/* Ajustement pour 3 colonnes si l'espace le permet */}
            <label htmlFor="telephone" className="form-label">Téléphone <span style={{ color: 'red' }}>*</span></label>
            <input type="tel" id="telephone" name="telephone" className="form-input" required />
          </div>

          <div className="form-group col-half" style={{ flexBasis: 'calc(33.333% - 13.33px)' }}>
            <label htmlFor="objet" className="form-label">Objet</label>
            <select id="objet" name="objet" className="form-select">
              <option value="">Sélectionner</option>
              <option value="depannage">Demande de Dépannage</option>
              <option value="pare-brise">Remplacement Pare-Brise</option>
              <option value="autre">Autre demande</option>
            </select>
          </div>
        </div>

        {/* Troisième Ligne : Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" name="message" className="form-textarea"></textarea>
        </div>

        {/* Traitement des données */}
        <div className="data-consent-section">
          <label className="data-consent-label">
            <input type="checkbox" className="data-consent-checkbox" required />
            J'accepte que les informations saisies dans ce formulaire soient utilisées, exploitées, traitées pour permettre de me recontacter, dans le cadre de la relation commerciale qui découle de cette demande.
          </label>
        </div>

        {/* Bouton Envoyer */}
        <button type="submit" className="form-submit-button">
          ENVOYER MON MESSAGE
        </button>
      </form>
    </div>
  );
}