import React from 'react'

export default function FAQ({ t }) {
  return (
    <section id="faq" className="section container">
      <div className="section-header center">
        <h2>{t.faq.title}</h2>
        <p className="muted">{t.faq.subtitle}</p>
      </div>

      <div className="faq-container">
        {t.faq.items.map((item, idx) => (
          <details key={idx} className="faq-item">
            <summary className="faq-question">
              <span>{item.q}</span>
              <span className="faq-arrow">▼</span>
            </summary>
            <p className="faq-answer">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
