import React from 'react'

export default function Partners() {
  const parceiros = [
    { nome: 'Meu Site Contábil', link: 'https://meusitecontabil.com.br/' },
    { nome: 'Getra', link: 'https://getra.com.br/' },
    { nome: 'Grupo Veri', link: 'https://grupoveri.com.br/' },
  ]

  return (
    <section id="parceiros" className="section container">
      <div className="section-header">
        <h2>Nossos parceiros de sucesso</h2>
        <span className="muted">Crescendo juntos, com confiança</span>
      </div>

      <div className="partners-grid">
        {parceiros.map(p => (
          <article className="partner-card" key={p.nome}>
            {/* caso futuramente tenha logo, basta adicionar:
            <img src="/assets/parceiro-logo.png" alt={p.nome} className="partner-logo" />
            */}
            <h3 className="partner-name">
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {p.nome}
              </a>
            </h3>
            <div className="partner-actions">
              <a className="btn ghost" href={p.link} target="_blank" rel="noopener noreferrer">
                Ver parceiro
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="center" style={{ marginTop:20 }}>
        <a className="btn primary" href="#contato">Quero ser parceiro</a>
      </div>
    </section>
  )
}
