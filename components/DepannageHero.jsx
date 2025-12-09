"use client";

import React, { useState } from "react";
import { Phone, Calendar, Headset } from "lucide-react";

export default function DepannageHero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    hour: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendDepannageMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        console.error("Erreur API :", await res.text());
        alert("Erreur lors de l’envoi du formulaire.");
        return;
      }

      alert("Votre demande a bien été envoyée !");
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        hour: "",
      });
    } catch (err) {
      console.error("Erreur réseau :", err);
      alert("Erreur lors de l’envoi du formulaire.");
    }
  };

  return (
    <section className="depannage-hero-section">
      <div className="depannage-hero-container">
        <div className="content-wrapper">
          <div className="content-dep">
            <div className="promo-tag">
              Dépannage et Remorquage professionnel
            </div>

            <h1>Remorquage Auto Rapide Paris & Île-de-France</h1>

            <p>
              Panne ou accident ? Trouvez un professionnel du dépannage et du
              remorquage 24/7 dans toute la France. Intervention rapide et devis
              immédiat par téléphone ou par mail.
            </p>

            <div className="buttons">
              <button className="button-primary" >
                <i className="fa-solid fa-phone"></i>&nbsp;
                07 53 35 00 12
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-widgets-container">
        {/* FORMULAIRE DE RÉSERVATION */}
        <div className="widget-box booking-widget">
          <h3> Réserver une intervention </h3>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row-dep">
              <input
                type="text"
                name="name"
                placeholder="Nom"
                className="input-field"
                onChange={handleChange}
                value={formData.name}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                className="input-field"
                onChange={handleChange}
                value={formData.phone}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <div className="form-row-dep">
              <input
                type="date"
                name="date"
                className="input-field"
                onChange={handleChange}
                value={formData.date}
              />

              <input
                type="text"
                name="hour"
                placeholder="Heure"
                className="input-field"
                onChange={handleChange}
                value={formData.hour}
              />

              <button className="btn-booking-submit" type="submit">
                <Calendar size={18} style={{ marginRight: "8px" }} />
                Réserver
              </button>
            </div>
          </form>
        </div>

        {/* BLOC APPEL URGENT */}
        <div className="widget-box call-widget">
          <h3>Urgence ? Appelez-nous !</h3>

          <div className="call-content">
            <div className="icon-box-purple">
              <Headset size={32} color="white" />
            </div>

            <div className="call-text">
              <span className="sub-label">24/7 DÉPANNAGE URGENT</span>
              <span className="phone-number">07 53 35 00 12</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
