import React from 'react'

export default function News({ t }) {
  const waText = encodeURIComponent(t.waMessage)
  const waUrl = `https://wa.me/5583988419118?text=${waText}`

  return (
    <section id="noticias" className="section container">
      <div className="section-header">
        <div>
          <h2>{t.news.title}</h2>
          <p className="muted">{t.news.subtitle}</p>
        </div>
      </div>

      <div className="news-grid">
        {t.news.posts.map((p, idx) => (
          <article className="post-card" key={idx}>
            <span className="post-type">{p.tipo}</span>
            <h3 className="post-title">{p.titulo}</h3>
            <p className="post-meta">📅 {p.data}</p>
            <div className="post-actions">
              <a className="btn ghost small" href={waUrl} target="_blank" rel="noopener noreferrer">
                {t.news.readMore}
              </a>
              <a className="btn primary small" href={waUrl} target="_blank" rel="noopener noreferrer">
                {t.news.talkCounter}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
