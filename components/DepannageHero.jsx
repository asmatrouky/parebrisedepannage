"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Headset } from "lucide-react";

export default function DepannageHero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    hour: "",
  });

  const [isIOS, setIsIOS] = useState(false);

  // Détecter iPhone / iPad (Safari mobile)
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent || navigator.vendor || "";
      setIsIOS(/iPad|iPhone|iPod/.test(ua));
    }
  }, []);

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
      alert("Erreur réseau.");
      console.error(err);
    }
  };

  return (
    <section className="depannage-hero-section">

      {/* STYLE pour placeholder iOS */}
      <style>{`
        .ios-placeholder::placeholder {
          color: #b3b3b3;
        }
      `}</style>

      <div className="depannage-hero-container">
        <div className="content-wrapper">
          <div className="content-dep">
            <div className="promo-tag">Dépannage et Remorquage professionnel</div>

            <h1>Remorquage Auto Rapide Paris & Île-de-France</h1>

            <p>
              Panne ou accident ? Trouvez un professionnel du dépannage et du
              remorquage 24/7 dans toute la France.
            </p>

            <div className="buttons">
              <a href="tel:0753350012" className="button-primary">
                <i className="fa-solid fa-phone"></i>&nbsp;07 53 35 00 12
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-widgets-container">
        <div className="widget-box booking-widget">
          <h3>Réserver une intervention</h3>

          <form className="booking-form" onSubmit={handleSubmit}>

            {/* Ligne nom / téléphone / email */}
            <div className="form-row-dep">
              <input
                type="text"
                name="name"
                placeholder="Nom"
                className="input-field"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                className="input-field"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Ligne date / heure / bouton */}
            <div className="form-row-dep">

              {/* DATE – adaptatif iPhone */}
              <input
                name="date"
                className={`input-field ${isIOS ? "ios-placeholder" : ""}`}
                value={formData.date}
                onChange={handleChange}
                required
                type={isIOS ? "text" : "date"}
                placeholder={isIOS ? "Date (JJ/MM/AAAA)" : undefined}
                inputMode={isIOS ? "numeric" : undefined}
                pattern={isIOS ? "\\d{2}/\\d{2}/\\d{4}" : undefined}
              />

              {/* HEURE – adaptatif iPhone */}
              <input
                name="hour"
                className={`input-field ${isIOS ? "ios-placeholder" : ""}`}
                value={formData.hour}
                onChange={handleChange}
                required
                type={isIOS ? "text" : "time"}
                placeholder={isIOS ? "Heure (HH:MM)" : undefined}
                inputMode={isIOS ? "numeric" : undefined}
                pattern={isIOS ? "^\\d{2}:\\d{2}$" : undefined}
              />

              <button className="btn-booking-submit" type="submit">
                <Calendar size={18} style={{ marginRight: "8px" }} />
                Réserver
              </button>
            </div>
          </form>
        </div>

        {/* APPEL URGENT */}
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
