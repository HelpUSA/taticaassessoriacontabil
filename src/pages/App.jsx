import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Segments from '../components/Segments'
import Benefits from '../components/Benefits'
import News from '../components/News'
import FAQ from '../components/FAQ'
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

// Páginas dedicadas
import ServicosPage from './ServicosPage'
import SegmentosPage from './SegmentosPage'
import BeneficiosPage from './BeneficiosPage'
import NoticiasPage from './NoticiasPage'
import FAQPage from './FAQPage'
import ParceirosPage from './ParceirosPage'
import ContatoPage from './ContatoPage'

export default function App() {
  const telLink = 'tel:+5583988419118'

  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME — Landing Page Completa */}
        <Route
          path="/"
          element={
            <>
              <Hero />

              <section className="strip">
                <div className="container strip-inner">
                  <div>📍 Avenida João Câncio, 620 — Sala 901 — Manaíra, João Pessoa - PB</div>
                  <div>⏰ Seg–Sex 08h–18h</div>
                  <div>☎️ <a href={telLink}>+55 83 98841-9118</a></div>
                </div>
              </section>

              <Services />
              <Segments />
              <Benefits />
              <News />
              <FAQ />
              <Partners />
              <Contact />
            </>
          }
        />

        {/* Rotas das páginas no menu */}
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/segmentos" element={<SegmentosPage />} />
        <Route path="/beneficios" element={<BeneficiosPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/parceiros" element={<ParceirosPage />} />
        <Route path="/contato" element={<ContatoPage />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <main className="page container">
              <h1>Página não encontrada</h1>
              <p>Verifique o endereço ou volte para a página inicial.</p>
            </main>
          }
        />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}

