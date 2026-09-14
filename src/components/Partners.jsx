import React from 'react'

export default function Partners({ t }) {
  const waText = encodeURIComponent(t.waMessage)
  const waUrl = `https://wa.me/5583988419118?text=${waText}`

  return (
    <section id="parceiros" className="section container">
      <div className="section-header">
        <div>
          <h2>{t.partners.title}</h2>
          <p className="muted">{t.partners.subtitle}</p>
        </div>
      </div>

      <div className="partners-grid">
        {t.partners.list.map((p, idx) => (
          <article className="partner-card" key={idx}>
            <h3 className="partner-name">{p.nome}</h3>
            <p className="partner-desc">{p.desc}</p>
            <div className="partner-actions">
              <a className="btn ghost small" href={p.link} target="_blank" rel="noopener noreferrer">
                {t.partners.viewPartner}
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="center mt-6">
        <a className="btn primary" href={waUrl} target="_blank" rel="noopener noreferrer">
          {t.partners.ctaBePartner}
        </a>
      </div>
    </section>
  )
}
