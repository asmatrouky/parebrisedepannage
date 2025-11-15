// components/ServicesSection.jsx

export default function ServicesSection({
  tag,
  title,
  intro,
  services = [],
  columns = 3, // nombre de cartes par ligne (modifiable)
  className = "",
}) {
  return (
    <section className={`service-section ${className}`}>
      <div className="service-header">
        {tag && <div className="tag">{tag}</div>}
        {title && <h2 className="sectiontitle">{title}</h2>}
        {intro && <p className="intro-text">{intro}</p>}
      </div>

      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "2rem",
        }}
      >
        {services.map((service) => (
          <div key={service.title} className="service-card">
            {service.image && (
              <div className="image-container">
                <img src={service.image} alt={service.alt || service.title} />
              </div>
            )}

            <div className="text-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
