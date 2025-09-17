import React from 'react'

export default function Segments() {
  const segs = [
    'Infoprodutores',
    'E-commerce',
    'Dropshipping',
    'Comércio Varejista',
    'Comércio Atacadista',
    'Produtor Rural',
    'Igrejas e ONG´s',
    'Farmácias',
    'Oficinas Mecânicas',
    'Bares, Restaurantes e Lanchonetes',
    'Profissionais da Saúde',
    'Profissionais Liberais',
    'Advogados',
    'Engenheiros',
    'Arquitetos',
    'Fisioterapeutas',
    'Psicólogos',
    'Psiquiatras',
    'Construtoras',
    'Serviços Relacionados à Construção Civil',
    'Serviços de Despachantes',
    'Profissionais da Beleza',
    'Corretores de Imóveis e Seguros em geral',
    'Entre outros',
  ]

  return (
    <section id="segmentos" className="section container">
      <h2>Segmentos que atendemos</h2>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        {segs.map((x) => (
          <li
            key={x}
            style={{
              padding: '8px 12px',
              border: '1px solid #ffffff1a',
              borderRadius: 999,
              background: '#0b1220d9',
            }}
          >
            {x}
          </li>
        ))}
      </ul>
    </section>
  )
}
