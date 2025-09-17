// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900 && open) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  const waAbrir   = 'https://wa.me/5583988419118?text=' + encodeURIComponent('Olá! Quero abrir minha empresa com a Tática Assessoria Contábil.')
  const waMigrar  = 'https://wa.me/5583988419118?text=' + encodeURIComponent('Olá! Quero migrar minha empresa para a Tática Assessoria Contábil.')
  const waSimular = 'https://wa.me/5583988419118?text=' + encodeURIComponent('Olá! Gostaria de simular o valor da minha contabilidade.')

  return (
    <header className="nav-wrap">
      <nav className="container nav-inner">
        <Link to="/" className="nav-brand" aria-label="Tática Assessoria Contábil — Início">
          <img src="/assets/logo.png" className="nav-logo" width={36} height={36} alt="Logo Tática" />
          <span className="brand-name">Tática Assessoria Contábil</span>
        </Link>

        {/* Botão hamburguer (mobile) */}
        <button
          className="nav-toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen(v => !v)}
        >
          <span className="bar" /><span className="bar" /><span className="bar" />
        </button>

        {/* Links */}
        <div id="primary-menu" className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/servicos"   onClick={()=>setOpen(false)}>Serviços</NavLink>
          <NavLink to="/segmentos"  onClick={()=>setOpen(false)}>Segmentos</NavLink>
          <NavLink to="/beneficios" onClick={()=>setOpen(false)}>Benefícios</NavLink>
          <NavLink to="/noticias"   onClick={()=>setOpen(false)}>Notícias</NavLink>
          <NavLink to="/faq"        onClick={()=>setOpen(false)}>FAQ</NavLink>
          <NavLink to="/parceiros"  onClick={()=>setOpen(false)}>Parceiros</NavLink>

          <div className="nav-cta">
            <a className="btn ghost"   href={waAbrir}   target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>Abertura</a>
            <a className="btn ghost"   href={waMigrar}  target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>Migração</a>
            <a className="btn primary" href={waSimular} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>Simulador</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
