import React from 'react'

export default function Segments({ t }) {
  return (
    <section id="segmentos" className="section container">
      <div className="section-header center">
        <h2>{t.segments.title}</h2>
        <p className="muted">{t.segments.subtitle}</p>
      </div>

      <ul className="segments-pill-grid">
        {t.segments.items.map((item, idx) => (
          <li key={idx} className="segment-pill">
            <span className="pill-dot" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
