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

  // 🔍 Détection simple d'iOS (iPhone / iPad) pour gérer le champ date
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      if (/iPad|iPhone|iPod/.test(ua)) {
        setIsIOS(true);
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

            <h1>Remorquage Auto Rapide Paris &amp; Île-de-France</h1>

            <p>
              Panne ou accident ? Trouvez un professionnel du dépannage et du
              remorquage 24/7 dans toute la France. Intervention rapide et devis
              immédiat par téléphone ou par mail.
            </p>
            <div className="buttons">
              <button className="button-primary">
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
              {/* 📅 Champ date : type="date" normal sauf sur iOS */}
              {isIOS ? (
                <input
                  type="text"
                  name="date"
                  placeholder="Date souhaitée (JJ/MM/AAAA)"
                  className="input-field"
                  onChange={handleChange}
                  value={formData.date}
                  required
                  inputMode="numeric"
                />
              ) : (
                <input
                  type="date"
                  name="date"
                  className="input-field"
                  onChange={handleChange}
                  value={formData.date}
                  required
                />
              )}

              {/* Sélection des créneaux 08:00 → 22:00 */}
              <select
                name="hour"
                className="input-field"
                onChange={handleChange}
                value={formData.hour}
                required
              >
                <option value="">Créneau souhaité</option>
                <option value="08:00">08:00</option>
                <option value="08:30">08:30</option>
                <option value="09:00">09:00</option>
                <option value="09:30">09:30</option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="14:00">14:00</option>
                <option value="14:30">14:30</option>
                <option value="15:00">15:00</option>
                <option value="15:30">15:30</option>
                <option value="16:00">16:00</option>
                <option value="16:30">16:30</option>
                <option value="17:00">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
                <option value="21:30">21:30</option>
                <option value="22:00">22:00</option>
              </select>

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
