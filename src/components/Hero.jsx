import React, { useEffect, useRef, useState } from 'react'

export default function Hero({ t }) {
  const waText = encodeURIComponent(t.waMessage)
  const waAbrir = `https://wa.me/5583988419118?text=${waText}`
  const waMigrar = `https://wa.me/5583988419118?text=${waText}`

  const videoRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const mq = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

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

  useEffect(() => {
    const m = window.matchMedia('(max-width: 640px)')
    const onChange = () => setIsMobile(m.matches)
    onChange()
    m.addEventListener?.('change', onChange) || m.addListener(onChange)
    return () => m.removeEventListener?.('change', onChange) || m.removeListener(onChange)
  }, [])

  const carouselStyle = isMobile
    ? {
        zIndex: 2,
        position: 'absolute',
        right: '12px',
        top: '80px',
        bottom: 'auto',
        width: 'min(28vw, 120px)',
        aspectRatio: '3/4',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 14px 30px rgba(0,0,0,.5)',
        background: 'linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02))',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255,255,255,.15)',
        pointerEvents: 'none',
      }
    : {
        zIndex: 2,
        position: 'absolute',
        right: 'max(4vw, 16px)',
        bottom: 'max(6vh, 24px)',
        width: 'min(18vw, 190px)',
        aspectRatio: '3/4',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,.55)',
        background: 'linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02))',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255,255,255,.15)',
        pointerEvents: 'none',
      }

  return (
    <header
      id="hero"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
        textAlign: 'center',
        isolation: 'isolate',
      }}
    >
      {/* VÍDEO DE FUNDO MANTIDO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(.45) contrast(1.1)',
          zIndex: 0,
        }}
      >
        <source src="/video/video01.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY DE GRADIENTE HELPUS DARK */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(65% 65% at 50% 40%, rgba(59,130,246,.15) 0%, rgba(11,18,32,.75) 65%, rgba(11,18,32,.92) 100%)',
          zIndex: 1,
        }}
      />

      {/* CARROSSEL DA EQUIPE */}
      <div className="hero-person" style={carouselStyle} aria-label="Equipe Tática — Carrossel">
        {photos.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 900ms ease',
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* CONTEÚDO HERO TRADUZIDO */}
      <div className="container hero-content" style={{ zIndex: 2 }}>
        <div className="hero-badge">🏆 25+ Anos de Excelência Contábil</div>
        <h1 style={{ fontSize: 'clamp(30px, 5vw, 52px)', margin: '12px 0 14px', lineHeight: 1.15 }}>
          {t.hero.title}
        </h1>
        <h2
          style={{
            color: '#cbd5e1',
            fontSize: 'clamp(16px, 2.4vw, 21px)',
            fontWeight: 400,
            margin: '0 0 26px',
            maxWidth: '780px',
          }}
        >
          {t.hero.subtitle}
        </h2>

        <div style={{ marginTop: 8, display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
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
    </header>
  )
}
