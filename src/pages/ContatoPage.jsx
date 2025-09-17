import React from 'react'

export default function ContatoPage(){
  const wa = 'https://wa.me/5583988419118'
  const tel = 'tel:+5583988419118'
  return (
    <main className="page container">
      <h1>Contato</h1>
      <p className="page-lead">Fale com a Tática Assessoria Contábil.</p>
      <p><strong>Endereço:</strong> Av. João Câncio, 620 — Sala 901 — Manaíra, João Pessoa - PB</p>
      <p><strong>Horário:</strong> Seg–Sex 08h–18h</p>
      <p>
        <a className="btn primary" href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a>{' '}
        <a className="btn ghost" href={tel}>Ligar</a>
      </p>
    </main>
  )
}
