'use client';

import React, { useState } from 'react';

// Données de la FAQ intégrées directement
const faqData = [
  {
    question: 'Combien vais-je toucher pour mon pare-brise cassé ?',
    answer: 'Cela dépend de votre assureur et de votre contrat. En général, les franchises sont offertes ou remboursées intégralement si vous avez l’option bris de glace. Nous pouvons vous aider à vérifier ces informations.',
    id: 'q1'
  },
  {
    question: 'Puis-je faire réparer un impact sans changer le pare-brise ?',
    answer: 'Oui, la réparation est possible lorsque l\'impact est mineur et situé hors du champ de vision. Cette solution est rapide, économique et évite le remplacement complet. Nos techniciens évaluent la faisabilité sur place.',
    id: 'q2'
  },
  {
    question: 'En combien de temps le vitrage est-il remplacé ?',
    answer: 'Le remplacement d’un pare-brise prend généralement entre 1h30 et 2h. Une fois l\'opération terminée, un temps de séchage est nécessaire avant de reprendre la route en toute sécurité.',
    id: 'q3'
  },
  {
    question: 'Dois-je avancer les frais de remplacement vitrage ?',
    answer: 'Non, dans la majorité des cas, nous pratiquons le tiers payant. Vous n\'avez donc pas à avancer les frais de remplacement si vous êtes couvert par votre assurance bris de glace.',
    id: 'q4'
  },
  {
    question: 'Intervenez-vous sur tous types de véhicules ?',
    answer: 'Oui, nous intervenons sur tous types de véhicules légers, y compris les voitures de tourisme, les utilitaires, et les camping-cars.',
    id: 'q5'
  },
  {
    question: 'Où sont situés vos centres ?',
    answer: 'Nous opérons principalement en France. Pour connaître le centre le plus proche, veuillez utiliser notre outil de localisation ou nous contacter directement.',
    id: 'q6'
  },
];

export default function Faq() {
  // État pour gérer la question actuellement ouverte
  // Laisse la deuxième question ouverte par défaut ('q2'), comme sur l'image.
  const [openId, setOpenId] = useState('q2');

  const toggleItem = (id) => {
    // Ferme si déjà ouvert, sinon ouvre le nouvel élément
    setOpenId(prevId => prevId === id ? null : id);
  };

  return (
    <section className="faq-section">
      
      {/* 1. Entête de la section FAQ */}
      <div className="service-header">
        <div className="tag">Vos questions fréquentes</div>
        <h2 className="sectiontitle">Questions fréquentes</h2>
        <p className="intro-text">
          Retrouvez ici les réponses aux questions que vous vous posez avant de remplacer ou réparer votre pare-brise. Nous vous accompagnons à chaque étape pour un service simple et rapide.
        </p>
      </div>

      {/* 2. Conteneur de l'accordéon */}
      <div className="faq-container">
        {faqData.map((item) => {
          const isOpen = item.id === openId;
          const Icon = isOpen ? '-' : '+'; // Change l'icône
          
          return (
            <div key={item.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
              
              {/* Tête de la question (cliquable) */}
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

              {/* Corps de la réponse (avec animation) */}
              <div 
                className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}
                style={{ 
                    maxHeight: isOpen ? '200px' : '0', // Ajuster '200px' si les réponses sont plus longues
                    // Assurez-vous que l'animation est gérée dans le CSS
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