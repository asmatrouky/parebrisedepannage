'use client';

import React, { useState } from 'react';

// FAQ centrée sur : dépannage, remorquage, panne batterie, crevaison, carburant, clés...
const faqData = [
  {
    id: 'q1',
    question: "Pouvez-vous intervenir pour une panne de batterie ?",
    answer:
      "Oui. Nous intervenons sur place pour diagnostiquer votre batterie, effectuer un redémarrage ou procéder à son remplacement si nécessaire.",
  },
  {
    id: 'q2',
    question: "Combien de temps faut-il pour qu’un dépanneur arrive ?",
    answer:
      "Nos dépanneurs interviennent en moyenne entre 20 et 30 minutes selon votre localisation. Lors de votre appel, nous vous communiquons un délai précis.",
  },
  {
    id: 'q3',
    question: "Que faire si je me suis trompé de carburant en faisant le plein ?",
    answer:
      "En cas d’erreur de carburant (essence dans diesel ou inversement), nous intervenons pour sécuriser le véhicule et organiser une prise en charge rapide. Ne redémarrez surtout pas le moteur.",
  },
  {
    id: 'q4',
    question: "Pouvez-vous ouvrir mon véhicule si mes clés sont à l’intérieur ?",
    answer:
      "Oui. Nous procédons à l’ouverture de portière sans détériorer votre véhicule. Cette intervention est rapide et totalement sécurisée.",
  },
  {
    id: 'q5',
    question: "La réparation d’une crevaison peut-elle se faire sur place ?",
    answer:
      "Dans la majorité des cas, oui. Si la crevaison est réparable, nous la traitons sur place. Si le pneu est trop endommagé, nous installons une roue de secours ou proposons un remorquage.",
  },
  {
    id: 'q6',
    question: "Le remorquage est-il possible 24h/24 et 7j/7 ?",
    answer:
      "Oui. Notre service de remorquage et de dépannage fonctionne en continu, de jour comme de nuit, weekends et jours fériés.",
  },
];

export default function FaqDepannage() {
  const [openId, setOpenId] = useState('q2'); // 2e question ouverte par défaut

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="Faq">

      {/* En-tête FAQ */}
      <div className="service-header">
        <div className="tag">Dépannage & Remorquage</div>
        <h2 className="sectiontitle">Questions fréquentes</h2>
        <p className="intro-text">
          Retrouvez les réponses aux questions les plus courantes concernant nos interventions : panne batterie, crevaison, erreur carburant, ouverture de portière, remorquage et assistance.
        </p>
      </div>

      {/* Bloc FAQ */}
      <div className="faq-container">
        {faqData.map((item) => {
          const isOpen = item.id === openId;
          const Icon = isOpen ? '-' : '+';

          return (
            <div key={item.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
              
              {/* En-tête de question */}
              <div
                className="faq-header"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                tabIndex={0}
              >
                <h3 className="faq-question">{item.question}</h3>
                <div className="faq-icon-wrapper">
                  <span className="faq-icon">{Icon}</span>
                </div>
              </div>

              {/* Réponse */}
              <div
                className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}
                style={{
                  maxHeight: isOpen ? '200px' : '0',
                }}
              >
                <p className="faq-answer">{item.answer}</p>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
