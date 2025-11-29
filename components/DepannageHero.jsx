import { Phone } from "lucide-react";

export default function DepannageHero() {
  return (
    <section className="hero-section">
      <div className="depannage-hero-container">
        <div className="content-wrapper">
          <div className="content">
            <div className="promo-tag ">
              Dépannage et Remorquage professionnel
            </div>

            <h1>
              Remorquage Auto Rapide Paris & Île-de-France
            </h1>

            <p>
              Panne ou accident ? Trouvez un professionnel du dépannage et du remorquage 24/7 dans toute la France. Intervention rapide et devis immédiat par téléphone ou par mail.
            </p>

            <div className="buttons ">
              <button className="button-primary button_urgent button-with-icon">
              <Phone size={18} />
              <span>APPELEZ-NOUS 🚨</span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
