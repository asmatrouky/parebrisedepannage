import React from 'react';
import { Phone, Calendar, Headset } from "lucide-react";

export default function DepannageHero() {
  return (
    <section className="depannage-hero-section">
      <div className="depannage-hero-container">
        <div className="content-wrapper">
          <div className="content-dep">
            
            <div className="promo-tag">
              Dépannage et Remorquage professionnel
            </div>

            <h1>
              Remorquage Auto Rapide Paris & Île-de-France
            </h1>

            <p>
              Panne ou accident ? Trouvez un professionnel du dépannage et du remorquage 24/7 dans toute la France. Intervention rapide et devis immédiat par téléphone ou par mail.
            </p>

          </div>
        </div>

        </div>
            <div className="hero-widgets-container">
              
              <div className="widget-box booking-widget">
                <h3> Reserver une intervention </h3>
                <form className="booking-form">
                  <div className="form-row-dep">
                    <input type="text" placeholder="Nom" className="input-field" />
                    <input type="tel" placeholder="Téléphone" className="input-field" />
                    <input type="email" placeholder="Email" className="input-field" />
                  </div>
                  
                  <div className="form-row-dep">
                    <input type="date" className="input-field" />
                    <input type="text" placeholder="Heure" className="input-field" />
                    <button className="btn-booking-submit" type="button">
                      <Calendar size={18} style={{ marginRight: '8px' }} />
                      Reserver une i
                    </button>
                  </div>
                </form>
              </div>

              {/* Bloc Droite : Call Us */}
              <div className="widget-box call-widget">
                <h3> Urgence ? Appelez nous !</h3>
                <div className="call-content">
                  <div className="icon-box-purple">
                    <Headset size={32} color="white" />
                  </div>
                  <div className="call-text">
                    <span className="sub-label">24/7 DÉPANNAGE URGENT</span>
                    <span className="phone-number">01 23 45 67 89</span>
                  </div>
                </div>
              </div>

            
      </div>
    </section>
  );
}