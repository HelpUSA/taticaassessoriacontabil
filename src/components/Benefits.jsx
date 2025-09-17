import React from 'react'

export default function Benefits() {
  const wa = 'https://wa.me/5583988419118?text=' + encodeURIComponent('Olá! Quero simular minha contabilidade / falar com um contador.')
  const waMEI     = 'https://wa.me/5583988419118?text=' + encodeURIComponent('Soluções para MEI')
  const waMEparaME= 'https://wa.me/5583988419118?text=' + encodeURIComponent('Mudar de MEI para ME')
  const waBaixar  = 'https://wa.me/5583988419118?text=' + encodeURIComponent('Baixar empresa')

  const vantagens = [
    'Serviços pertinentes ao departamento pessoal de sua empresa',
    'Declaração de Imposto de Renda',
    'Assessoria e Consultoria em diversas áreas',
    'Relatórios mensais da gestão contábil',
    'Realização de diversos cálculos contábeis para sua empresa',
    'Softwares de troca de documentos entre contador × cliente',
    'Diversos canais de atendimento para suporte ao cliente',
    'Gestão completa dos serviços contábeis para sua empresa',
  ]

  return (
    <section id="beneficios" className="section container" style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 24 }}>
      <div>
        <h2>Vantagens e benefícios</h2>
        <ul style={{ paddingLeft: 18 }}>
          {vantagens.map((v) => <li key={v}>{v}</li>)}
        </ul>

        <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
          <a className="btn ghost" href={wa} target="_blank" rel="noopener">Acessar simulador</a>
          <a className="btn primary" href={wa} target="_blank" rel="noopener">Falar com contador</a>
        </div>

        {/* "Se encaixa nessas opções?" */}
        <div style={{ marginTop: 24 }}>
          <h3 style={{ margin: '0 0 10px' }}>Se encaixa nessas opções abaixo?</h3>
          <div className="grid cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <article className="card">
              <h4 style={{ marginTop: 0 }}>Soluções para MEI</h4>
              <p>Regularização, DAS, orientações e migração.</p>
              <a className="btn ghost" href={waMEI} target="_blank" rel="noopener">Quero saber mais</a>
            </article>
            <article className="card">
              <h4 style={{ marginTop: 0 }}>Mudar de MEI para ME</h4>
              <p>Enquadramento correto e segurança fiscal.</p>
              <a className="btn ghost" href={waMEparaME} target="_blank" rel="noopener">Quero migrar</a>
            </article>
            <article className="card">
              <h4 style={{ marginTop: 0 }}>Baixar empresa</h4>
              <p>Encerramento sem dor de cabeça e com compliance.</p>
              <a className="btn ghost" href={waBaixar} target="_blank" rel="noopener">Quero baixar</a>
            </article>
          </div>
        </div>
      </div>

      {/* Painel de abertura de empresa (CTA) */}
      <div className="card">
        <h3>Abra sua empresa sem burocracias!</h3>
        <p>
          O processo é rápido e nós cuidamos de tudo para você.
          Você preenche um formulário e nossa equipe providencia o restante, informando todas as etapas.
        </p>
        <a className="btn primary" href={wa} target="_blank" rel="noopener">Quero abrir!</a>
      </div>
    </section>
  )
}
