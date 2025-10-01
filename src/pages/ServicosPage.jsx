import React from 'react'

export default function ServicosPage(){
  return (
    <main className="page container">
      <h1>Serviços</h1>
      <p className="page-lead">
        Descreva aqui seus serviços de abertura, migração, contabilidade mensal,
        fiscal, folha, auditorias e consultorias.
      </p>
      <ul className="bullets">
        <li>Abertura e legalização de empresas</li>
        <li>Migração e regularização</li>
        <li>Contabilidade completa (fiscal, DP, societário)</li>
        <li>Planejamento tributário</li>
        <li>Auditoria contábil, fiscal e trabalhista</li> {/* novo item */}
        <li>Consultoria para MEI, ME, EPP e Lucro Presumido</li>
      </ul>
    </main>
  )
}
