// components/Hero.jsx

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="content-wrapper">
          <div className="content">
            <div className="promo-tag">
              Un pare-brise remplacé = Un cadeau offert
            </div>

            <h1>
              Remplacement pare-brise avec reprise jusqu&apos;à 500€
            </h1>

            <p>
              Faire changer son pare-brise ne devrait jamais être compliqué.
              Ici, tout est pensé pour vous : un remplacement en 1 heure, sans
              avance de frais, avec un service rapide et sans tracas. Et parce
              qu’on aime faire mieux que les autres, un pare-brise changé =
              un cadeau offert.
            </p>

            <div className="buttons">
              <button className="button-primary">
                Prendre RDV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
