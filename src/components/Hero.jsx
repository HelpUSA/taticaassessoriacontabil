import React, { useEffect, useRef, useState } from 'react'

export default function Hero({ t }) {
  const waText = encodeURIComponent(t.waMessage)
  const waAbrir = `https://wa.me/5583988419118?text=${waText}`
  const waMigrar = `https://wa.me/5583988419118?text=${waText}`

  const videoRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const mq = useRef(null)

  const photos = [
    { src: '/assets/marx01.png', alt: 'Marx — Tática Assessoria Contábil' },
    { src: '/assets/rayana.png', alt: 'Rayana — Tática Assessoria Contábil' },
    { src: '/assets/leo.png', alt: 'Leo — Tática Assessoria Contábil' },
  ]

  useEffect(() => {
    mq.current = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      if (!videoRef.current) return
      if (mq.current.matches) {
        videoRef.current.pause()
        videoRef.current.style.display = 'none'
      } else {
        videoRef.current.style.display = ''
        videoRef.current.play().catch(() => {})
      }
    }
    apply()
    mq.current.addEventListener?.('change', apply) || mq.current.addListener(apply)
    return () => mq.current.removeEventListener?.('change', apply) || mq.current.removeListener(apply)
  }, [])

  useEffect(() => {
    if (mq.current?.matches) return
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % photos.length)
    }, 2500)
    return () => clearInterval(id)
  }, [photos.length])

  return (
    <header className="hero-wrap">
      {/* VÍDEO DE FUNDO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
        className="hero-video"
      >
        <source src="/video/video01.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY DE GRADIENTE DARK */}
      <div className="hero-overlay" />

      {/* CONTEÚDO HERO RESPONSIVO EM GRID */}
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">🏆 25+ Anos de Excelência Contábil</div>
          <h1 className="hero-title">{t.hero.title}</h1>
          <h2 className="hero-subtitle">{t.hero.subtitle}</h2>

          <div className="hero-cta-group">
            <a className="btn primary glow" href="#servicos">
              {t.hero.ctaLearn}
            </a>
            <a className="btn ghost" href={waAbrir} target="_blank" rel="noopener noreferrer">
              {t.hero.ctaOpen}
            </a>
            <a className="btn ghost" href={waMigrar} target="_blank" rel="noopener noreferrer">
              {t.hero.ctaMigrate}
            </a>
          </div>
        </div>

        {/* CARROSSEL DA EQUIPE */}
        <div className="hero-carousel-card" aria-label="Equipe Tática — Carrossel">
          {photos.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`hero-carousel-img ${i === current ? 'active' : ''}`}
            />
          ))}
          <div className="hero-carousel-badge">Equipe Tática</div>
        </div>
      </div>
    </header>
  )
}

