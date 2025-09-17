import React from 'react'

export default function FAQ() {
  const itens = [
    {
      q: 'Terei reuniões presenciais com o contador da minha empresa?',
      a: 'Atendemos online e presencialmente em João Pessoa (Manaíra). Agende pelo WhatsApp para definirmos o melhor formato.'
    },
    {
      q: 'Como faço o pagamento da mensalidade?',
      a: 'Planos fixos conforme porte e regime da empresa. Enviamos NFS-e e boleto; também trabalhamos com PIX.'
    },
    {
      q: 'Quais são as cidades atendidas pela Tática Assessoria Contábil?',
      a: 'Atendimento nacional com foco na Paraíba e região metropolitana de João Pessoa.'
    },
    {
      q: 'Terei acesso a relatórios da vida financeira da minha empresa?',
      a: 'Sim. Disponibilizamos relatórios contábeis e gerenciais mensais para apoiar suas decisões.'
    },
    {
      q: 'Como funcionam os processos da contabilidade na minha empresa?',
      a: 'Realizamos as rotinas contábil, fiscal e trabalhista de ponta a ponta, com checklists e prazos definidos. Você acompanha tudo pelos nossos canais.'
    },
    {
      q: 'Quais serviços estão inclusos na mensalidade?',
      a: 'Contábil, fiscal, trabalhista e societário básicos, orientação contínua e suporte. Serviços extraordinários são orçados à parte.'
    }
  ]

  return (
    <section id="faq" className="section container">
      <h2>Perguntas frequentes</h2>
      {itens.map(({ q, a }) => (
        <details key={q} style={{ background:'#0b1220', border:'1px solid #ffffff1a', borderRadius:12, padding:'12px 14px', margin:'10px 0' }}>
          <summary style={{ cursor:'pointer', fontWeight:600 }}>{q}</summary>
          <p style={{ marginTop:10, color:'#cbd5e1' }}>{a}</p>
        </details>
      ))}
    </section>
  )
}
