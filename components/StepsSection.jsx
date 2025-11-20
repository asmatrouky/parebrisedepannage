// components/StepsSection.jsx

export default function StepsSection({ tag, title, intro, steps }) {
  return (
    <section className="how-it-works-section">
      <div className="service-header">
        {tag && <div className="tag">{tag}</div>}
        {title && <h2 className="sectiontitle">{title}</h2>}
        {intro && <p className="intro-text">{intro}</p>}
      </div>

      <div className="steps-container">
        {steps?.map((step, index) => (
          <div className="step-card" key={index}>
            {step.image && (
              <div className="step-image-container">
                <img
                  src={step.image}
                  alt={step.imageAlt || step.title || 'Étape'}
                  className="step-image"
                />
              </div>
            )}
            {step.title && (
              <h3>
                {step.title}{' '}
                {step.emoji && <span className="emoji">{step.emoji}</span>}
              </h3>
            )}
            {step.description && <p>{step.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
