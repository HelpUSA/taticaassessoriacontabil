// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const waAbrir  = 'https://wa.me/5583988419118?text=' + encodeURIComponent('Olá! Quero abrir minha empresa com a Tática Assessoria Contábil.')
  const waMigrar = 'https://wa.me/5583988419118?text=' + encodeURIComponent('Olá! Quero migrar minha empresa para a Tática Assessoria Contábil.')

  const videoRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const mq = useRef(null)

  // flag de mobile para posicionar o carrossel
  const [isMobile, setIsMobile] = useState(false)

  // imagens no /public/assets
  const photos = [
    { src: '/assets/marx01.png', alt: 'Marx — Tática Assessoria Contábil' },
    { src: '/assets/rayana.png', alt: 'Rayana — Tática Assessoria Contábil' },
    { src: '/assets/leo.png',   alt: 'Leo — Tática Assessoria Contábil' },
  ]

  useEffect(() => {
    // vídeo respeitando prefers-reduced-motion
    mq.current = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      if (!videoRef.current) return
      if (mq.current.matches) { 
        videoRef.current.pause()
        videoRef.current.style.display = 'none'
      } else {
        videoRef.current.style.display = ''
        videoRef.current.play().catch(()=>{})
      }
    }
    apply()
    mq.current.addEventListener?.('change', apply) || mq.current.addListener(apply)
    return () => mq.current.removeEventListener?.('change', apply) || mq.current.removeListener(apply)
  }, [])

  useEffect(() => {
    // rotação do carrossel (pausa se prefers-reduced-motion)
    if (mq.current?.matches) return
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % photos.length)
    }, 2000)
    return () => clearInterval(id)
  }, [photos.length])

  useEffect(() => {
    // detectar mobile para reposicionar o carrossel
    const m = window.matchMedia('(max-width: 640px)')
    const onChange = () => setIsMobile(m.matches)
    onChange()
    m.addEventListener?.('change', onChange) || m.addListener(onChange)
    return () => m.removeEventListener?.('change', onChange) || m.removeListener(onChange)
  }, [])

  // estilos do carrossel responsivos
  const carouselStyle = isMobile
    ? {
        zIndex: 2,
        position: 'absolute',
        right: '12px',
        top: '90px',            // sobe no topo no mobile para não colidir com botões
        bottom: 'auto',
        width: 'min(26vw, 120px)',
        aspectRatio: '3/4',
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: '0 14px 30px rgba(0,0,0,.45)',
        background: 'linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))',
        backdropFilter: 'blur(2px)',
        pointerEvents: 'none',  // evita bloquear cliques nos botões
      }
    : {
        zIndex: 2,
        position: 'absolute',
        right: 'max(4vw, 16px)',
        bottom: 'max(6vh, 24px)',
        width: 'min(18vw, 190px)', // metade do tamanho desktop original
        aspectRatio: '3/4',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,.45)',
        background: 'linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))',
        backdropFilter: 'blur(2px)',
        pointerEvents: 'none',
      }

  return (
    <header
      id="hero"
      style={{
        position:'relative',
        minHeight:'86vh',
        display:'grid',
        placeItems:'center',
        overflow:'hidden',
        textAlign:'center',
        isolation:'isolate'
      }}
    >
      {/* VÍDEO DE FUNDO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
        style={{
          position:'absolute',
          inset:0,
          width:'100%',
          height:'100%',
          objectFit:'cover',
          filter:'brightness(.55) contrast(1.05)',
          zIndex:0
        }}
      >
        <source src="/video/video01.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div
        style={{
          position:'absolute',
          inset:0,
          background:'radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,.12) 0%, rgba(0,0,0,.50) 60%, rgba(0,0,0,.78) 100%)',
          zIndex:1
        }}
      />

      {/* CARROSSEL SOBRE O VÍDEO */}
      <div className="hero-person" style={carouselStyle} aria-label="Equipe Tática — carrossel de fotos">
        {photos.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            style={{
              position:'absolute',
              inset:0,
              width:'100%',
              height:'100%',
              objectFit:'cover',
              transition:'opacity 900ms ease',
              opacity: i === current ? 1 : 0
            }}
          />
        ))}
      </div>

      {/* CONTEÚDO */}
      <div className="container hero-content" style={{ zIndex:2 }}>
        <h1 style={{ fontSize:'clamp(28px,5vw,44px)', margin:'8px 0 10px' }}>
          Precisa abrir ou migrar sua empresa?
        </h1>
        <h2
          style={{
            color:'#cbd5e1',
            fontSize:'clamp(16px,2.4vw,20px)',
            fontWeight:400,
            margin:'0 0 20px'
          }}
        >
          💎 25 anos de experiência • 🏆 O melhor planejamento tributário para a sua empresa
        </h2>

        <div style={{ marginTop:16, display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center' }}>
          <a className="btn primary" href="#servicos">Saiba como funciona</a>
          <a className="btn ghost" href={waAbrir} target="_blank" rel="noopener noreferrer">Quero abrir</a>
          <a className="btn ghost" href={waMigrar} target="_blank" rel="noopener noreferrer">Quero migrar</a>
        </div>
      </div>
    </header>
  )
}
