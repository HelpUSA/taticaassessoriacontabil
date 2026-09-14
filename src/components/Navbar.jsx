import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ lang = 'pt', setLang, t }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960 && open) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  const waText = encodeURIComponent(t.waMessage)
  const waAbrir = `https://wa.me/5583988419118?text=${waText}`
  const waMigrar = `https://wa.me/5583988419118?text=${waText}`
  const waSimular = `https://wa.me/5583988419118?text=${waText}`

  return (
    <header className="nav-wrap">
      <nav className="container nav-inner">
        <Link to="/" className="nav-brand" aria-label="Tática Assessoria Contábil">
          <img src="/assets/logo.png" className="nav-logo" width={38} height={38} alt="Logo Tática" />
          <div className="brand-text">
            <span className="brand-name">Tática Assessoria Contábil</span>
            <span className="brand-badge">HelpUS Technology Partner</span>
          </div>
        </Link>

        {/* Botão Hambúrguer Mobile */}
        <button
          className="nav-toggle"
          aria-label={open ? 'Fechar Menu' : 'Abrir Menu'}
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Menu Principal */}
        <div id="primary-menu" className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Início</NavLink>
          <NavLink to="/servicos" onClick={() => setOpen(false)}>{t.nav.servicos}</NavLink>
          <NavLink to="/segmentos" onClick={() => setOpen(false)}>{t.nav.segmentos}</NavLink>
          <NavLink to="/beneficios" onClick={() => setOpen(false)}>{t.nav.beneficios}</NavLink>
          <NavLink to="/noticias" onClick={() => setOpen(false)}>{t.nav.noticias}</NavLink>
          <NavLink to="/faq" onClick={() => setOpen(false)}>{t.nav.faq}</NavLink>
          <NavLink to="/parceiros" onClick={() => setOpen(false)}>{t.nav.parceiros}</NavLink>
          <NavLink to="/contato" onClick={() => setOpen(false)}>{t.nav.contato}</NavLink>

          {/* Seletor de Idiomas (Padrão HelpUS i18n) */}
          <div className="lang-switcher">
            <button
              className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
              onClick={() => setLang && setLang('pt')}
              title="Português"
              type="button"
            >
              🇧🇷 PT
            </button>
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang && setLang('en')}
              title="English"
              type="button"
            >
              🇺🇸 EN
            </button>
            <button
              className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
              onClick={() => setLang && setLang('es')}
              title="Español"
              type="button"
            >
              🇪🇸 ES
            </button>
          </div>

          <div className="nav-cta">
            <a className="btn ghost" href={waAbrir} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              {t.nav.abertura}
            </a>
            <a className="btn ghost" href={waMigrar} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              {t.nav.migracao}
            </a>
            <a className="btn primary" href={waSimular} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              {t.nav.simulador}
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
