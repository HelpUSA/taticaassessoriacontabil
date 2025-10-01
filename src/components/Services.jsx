import React from 'react'

export default function Services() {
  const services = [
    'Assessoria Contábil',
    'Assessoria Fiscal e Tributária',
    'Assessoria Trabalhista',
    'Assessoria Societária',
    'Revisão e Planejamento Tributário',
    'Auditoria Contábil, Fiscal e Trabalhista', // <-- novo serviço
    'Contabilidade para Infoprodutores',
    'Contabilidade para E-commerce & Dropshipping',
    'Contabilidade para MEI',
    'Imposto de Renda PF e PJ',
    'Certificado Digital',
  ]

  const wa = 'https://wa.me/5583988419118?text=' +
    encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de contabilidade.')

  return (
    <section id="servicos" className="section container">
      <h2>Serviços ideais para a sua empresa</h2>
      <div className="grid cards">
        {services.map((t) => (
          <article className="card" key={t}>
            <h3>{t}</h3>
            <p>Atendimento completo e orientação contínua para o seu negócio.</p>
          </article>
        ))}
      </div>

      <div className="center" style={{ marginTop: 24 }}>
        <a className="btn primary" href={wa} target="_blank" rel="noopener">
          Falar com um contador
        </a>
      </div>
    </section>
  )
}
