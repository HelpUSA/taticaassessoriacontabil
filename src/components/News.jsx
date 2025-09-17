import React from 'react'

export default function News() {
  const posts = [
    {
      tipo: 'Últimas Notícias',
      titulo: 'Alterações na TEC que entram em vigor dia 01/10/2025',
      data: '17/09/2025',
      link: '#'
    },
    {
      tipo: 'Últimas Notícias',
      titulo: 'Reforma Tributária: NFS-e — Receita Federal e municípios avançam',
      data: '16/09/2025',
      link: '#'
    },
    {
      tipo: 'Artigo',
      titulo: 'Entenda o PL da ampliação da isenção do IR',
      data: '19/03/2025',
      link: '#'
    },
    {
      tipo: 'Artigo',
      titulo: 'A impossibilidade de o profissional liberal atuar como MEI',
      data: '08/10/2023',
      link: '#'
    },
    {
      tipo: 'Blog',
      titulo: 'Profissional Liberal: Simples Nacional x Lucro Presumido',
      data: '19/07/2022',
      link: '#'
    }
  ]

  const wa = 'https://wa.me/5583988419118?text=' + encodeURIComponent(
    'Olá! Gostaria de receber atualizações e notícias contábeis.'
  )

  return (
    <section id="noticias" className="section container">
      <div className="section-header">
        <h2>Canais de notícias</h2>
        <span className="muted">Fique por dentro das últimas atualizações</span>
      </div>

      <div className="news-grid">
        {posts.map(p => (
          <article className="post-card" key={p.titulo}>
            <span className="post-type">{p.tipo}</span>
            <h3 className="post-title">
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {p.titulo}
              </a>
            </h3>
            <p className="post-meta">{p.data}</p>
            <div className="post-actions">
              <a className="btn ghost" href={p.link} target="_blank" rel="noopener noreferrer">
                Ler mais
              </a>
              <a className="btn primary" href={wa} target="_blank" rel="noopener noreferrer">
                Falar com contador
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
