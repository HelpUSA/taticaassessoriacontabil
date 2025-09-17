// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const waAbrir  = 'https://wa.me/5583988419118?text=' + encodeURIComponent('Olá! Quero abrir minha empresa com a Tática Assessoria Contábil.')
  const waMigrar = 'https://wa.me/5583988419118?text=' + encodeURIComponent('Olá! Quero migrar minha empresa para a Tática Assessoria Contábil.')
  const videoRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      if (!videoRef.current) return
      if (mq.matches) { videoRef.current.pause(); videoRef.current.style.display = 'none' }
      else { videoRef.current.style.display = ''; videoRef.current.play().catch(()=>{}) }
    }
    apply()
    mq.addEventListener?.('change', apply) || mq.addListener(apply)
    return () => mq.removeEventListener?.('change', apply) || mq.removeListener(apply)
  }, [])

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

      {/* FOTO SOBRE O VÍDEO (direita) */}
      <img className="hero-person" src="/assets/marx01.png" alt="Representante Tática" style={{ zIndex:2 }} />

      {/* CONTEÚDO — agora alinhado à esquerda com espaço para a foto */}
      <div className="container hero-content">
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
          💎 11 anos de experiência • 🏆 O melhor planejamento tributário para a sua empresa
        </h2>

        <div style={{ marginTop:16, display:'flex', gap:12, flexWrap:'wrap' }}>
          <a className="btn primary" href="#servicos">Saiba como funciona</a>
          <a className="btn ghost" href={waAbrir} target="_blank" rel="noopener noreferrer">Quero abrir</a>
          <a className="btn ghost" href={waMigrar} target="_blank" rel="noopener noreferrer">Quero migrar</a>
        </div>
      </div>
    </header>
  )
}
