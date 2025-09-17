import React, { useEffect, useRef, useState } from 'react'

const IMAGES = [
  '/assets/image01.jpg',
  '/assets/image02.jpg',
  '/assets/image03.jpg',
  '/assets/image04.jpg',
  '/assets/image05.jpg',
  '/assets/image06.jpg.png',
  '/assets/image07.jpg.png',
  '/assets/image08.jpg.png',
]

export default function NoticiasPage(){
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const slideWRef = useRef(0)

  // define slides por view (3/2/1)
  useEffect(() => {
    const calcSpv = () => {
      const w = window.innerWidth
      setSlidesPerView(w <= 720 ? 1 : w <= 1024 ? 2 : 3)
    }
    calcSpv()
    window.addEventListener('resize', calcSpv)
    return () => window.removeEventListener('resize', calcSpv)
  }, [])

  // mede a largura efetiva de um slide (incluindo gap)
  const measureSlideWidth = () => {
    if (!trackRef.current) return
    const slides = trackRef.current.querySelectorAll('.hslide')
    if (!slides.length) return
    const s0 = slides[0].getBoundingClientRect()
    let gap = 0
    if (slides.length > 1) {
      const s1 = slides[1].getBoundingClientRect()
      gap = Math.max(0, s1.left - s0.right)
    }
    slideWRef.current = s0.width + gap
  }

  useEffect(() => {
    measureSlideWidth()
    const onResize = () => measureSlideWidth()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [slidesPerView])

  const next = () => {
    const vp = viewportRef.current
    if (!vp || !slideWRef.current) return
    const nearEnd = vp.scrollLeft + vp.clientWidth >= vp.scrollWidth - slideWRef.current - 2
    if (nearEnd) {
      vp.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      vp.scrollBy({ left: slideWRef.current, behavior: 'smooth' })
    }
  }
  const prev = () => {
    const vp = viewportRef.current
    if (!vp || !slideWRef.current) return
    if (vp.scrollLeft <= 2) {
      vp.scrollTo({ left: vp.scrollWidth, behavior: 'auto' })
    } else {
      vp.scrollBy({ left: -slideWRef.current, behavior: 'smooth' })
    }
  }

  // autoplay
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [paused, slidesPerView])

  return (
    <main className="page container">
      <h1>Notícias & Blog</h1>
      <p className="page-lead">Publicações, avisos e conteúdos da Tática.</p>

      <h2 className="h2">Galeria</h2>

      <div
        className="hcarousel"
        style={{ '--spv': slidesPerView }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="hcarousel-viewport" ref={viewportRef}>
          <div className="hcarousel-track" ref={trackRef}>
            {IMAGES.map((src, i) => (
              <figure key={i} className="gallery-item hslide">
                <img src={src} alt={`Publicação ${i + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>

        <button className="hcarousel-btn prev" onClick={prev} aria-label="Anterior">‹</button>
        <button className="hcarousel-btn next" onClick={next} aria-label="Próximo">›</button>
      </div>
    </main>
  )
}
