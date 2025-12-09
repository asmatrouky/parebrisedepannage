// components/FloatingCTAButton.js
"use client";

import React from 'react';

const FloatingCTAButton = () => {

  // Fonction simple pour déclencher l'appel
  const handleCall = () => {
    window.location.href = 'tel:0753350012';
  };

  return (
    <>
      {/* Structure HTML strictement identique à l'originale */}
      <div className="wrapper"> 
        {/* Au clic, on lance la fonction handleCall */}
        <div className="pulse" onClick={handleCall} style={{ cursor: 'pointer' }}> 
          <div className="phone">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingCTAButton;