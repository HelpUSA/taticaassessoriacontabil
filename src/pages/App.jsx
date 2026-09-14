import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { translations } from '../translations'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import NfseHub from '../components/NfseHub'
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
import NfsePage from './NfsePage'
import SegmentosPage from './SegmentosPage'
import BeneficiosPage from './BeneficiosPage'
import NoticiasPage from './NoticiasPage'
import FAQPage from './FAQPage'
import ParceirosPage from './ParceirosPage'
import ContatoPage from './ContatoPage'

export default function App() {
  const [lang, setLang] = useState('pt')
  const t = translations[lang] || translations.pt

  return (
    <>
      <Navbar lang={lang} setLang={setLang} t={t} />

      <Routes>
        {/* HOME — Landing Page Completa */}
        <Route
          path="/"
          element={
            <>
              <Hero t={t} />

              <section className="strip">
                <div className="container strip-inner">
                  <div>{t.strip.address}</div>
                  <div>{t.strip.hours}</div>
                  <div>
                    <a href="tel:+5583988419118">{t.strip.phone}</a>
                  </div>
                </div>
              </section>

              <Services t={t} />
              <NfseHub t={t} />
              <Segments t={t} />
              <Benefits t={t} />
              <News t={t} />
              <FAQ t={t} />
              <Partners t={t} />
              <Contact t={t} />
            </>
          }
        />

        {/* Rotas das páginas no menu */}
        <Route path="/servicos" element={<ServicosPage t={t} />} />
        <Route path="/emissao-nfse" element={<NfsePage t={t} />} />
        <Route path="/segmentos" element={<SegmentosPage t={t} />} />
        <Route path="/beneficios" element={<BeneficiosPage t={t} />} />
        <Route path="/noticias" element={<NoticiasPage t={t} />} />
        <Route path="/faq" element={<FAQPage t={t} />} />
        <Route path="/parceiros" element={<ParceirosPage t={t} />} />
        <Route path="/contato" element={<ContatoPage t={t} />} />

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

      <Footer t={t} />
      <WhatsAppFloat t={t} />
    </>
  )
}
