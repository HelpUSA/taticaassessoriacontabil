import React from 'react'
export default function WhatsAppFloat(){
  const wa = 'https://wa.me/5583988419118?text=' + encodeURIComponent('Olá! Quero falar com a Tática Assessoria Contábil.');
  return (
    <a className="wa-float" href={wa} target="_blank" rel="noopener" aria-label="Abrir WhatsApp">
      <span className="wa-pulse"></span>
      <span className="wa-icon">⌁</span>
    </a>
  )
}
