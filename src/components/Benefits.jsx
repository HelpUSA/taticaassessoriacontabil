import React from 'react'

export default function Benefits({ t }) {
  const waText = encodeURIComponent(t.waMessage)
  const waUrl = `https://wa.me/5583988419118?text=${waText}`

  return (
    <section id="beneficios" className="section container">
      <div className="benefits-layout">
        <div className="benefits-main">
          <h2>{t.benefits.title}</h2>
          <p className="muted mb-4">{t.benefits.subtitle}</p>

          <ul className="benefits-list">
            {t.benefits.list.map((item, idx) => (
              <li key={idx}>
                <span className="check-icon">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="benefits-actions mt-4">
            <a className="btn ghost" href={waUrl} target="_blank" rel="noopener noreferrer">
              {t.benefits.ctaSimulate}
            </a>
            <a className="btn primary" href={waUrl} target="_blank" rel="noopener noreferrer">
              {t.benefits.ctaTalk}
            </a>
          </div>

          <div className="scenarios-block mt-6">
            <h3>{t.benefits.scenariosTitle}</h3>
            <div className="grid cards mini-cards">
              <article className="card">
                <h4>{t.benefits.meiTitle}</h4>
                <p>{t.benefits.meiDesc}</p>
                <a className="btn ghost small" href={waUrl} target="_blank" rel="noopener noreferrer">
                  {t.benefits.meiCta}
                </a>
              </article>
              <article className="card">
                <h4>{t.benefits.migrateTitle}</h4>
                <p>{t.benefits.migrateDesc}</p>
                <a className="btn ghost small" href={waUrl} target="_blank" rel="noopener noreferrer">
                  {t.benefits.migrateCta}
                </a>
              </article>
              <article className="card">
                <h4>{t.benefits.closeTitle}</h4>
                <p>{t.benefits.closeDesc}</p>
                <a className="btn ghost small" href={waUrl} target="_blank" rel="noopener noreferrer">
                  {t.benefits.closeCta}
                </a>
              </article>
            </div>
          </div>
        </div>

        {/* Card CTA Lateral */}
        <div className="benefits-sidebar">
          <div className="card side-cta-card">
            <div className="badge-highlight">🚀 Abertura Rápida</div>
            <h3>{t.benefits.ctaBoxTitle}</h3>
            <p>{t.benefits.ctaBoxDesc}</p>
            <a className="btn primary glow full" href={waUrl} target="_blank" rel="noopener noreferrer">
              {t.benefits.ctaBoxBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
