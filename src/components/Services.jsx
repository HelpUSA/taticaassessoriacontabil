import React from 'react'

export default function Services({ t }) {
  const waText = encodeURIComponent(t.waMessage)
  const waUrl = `https://wa.me/5583988419118?text=${waText}`

  return (
    <section id="servicos" className="section container">
      <div className="section-header center">
        <h2>{t.services.title}</h2>
        <p className="muted">{t.services.subtitle}</p>
      </div>

      <div className="grid cards">
        {t.services.list.map((s, idx) => (
          <article className="card service-card" key={idx}>
            <div className="card-icon font-mono">0{idx + 1}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>

      <div className="center mt-6">
        <a className="btn primary glow" href={waUrl} target="_blank" rel="noopener noreferrer">
          {t.services.ctaTalk}
        </a>
      </div>
    </section>
  )
}
