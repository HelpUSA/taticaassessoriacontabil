import React from 'react'

export default function Footer(){
  const endereco =
    'Avenida João Câncio, 620 — Sala 901 — Manaíra, João Pessoa - PB'
  const wa  = 'https://wa.me/5583988419118'
  const tel = 'tel:+5583988419118'
  const mapsLink =
    'https://www.google.com/maps?q=Avenida%20Jo%C3%A3o%20C%C3%A2ncio%2C%20620%20%E2%80%94%20Sala%20901%20%E2%80%94%20Mana%C3%ADra%2C%20Jo%C3%A3o%20Pessoa%20-%20PB'
  const mapsEmbed = `${mapsLink}&output=embed`

  return (
    <footer>
      {/* Bloco de contato + mapa */}
      <section className="container footer-contact">
        <div className="contact-grid">
          <div className="contact-card">
            <h2 className="h2" style={{marginTop:0}}>Contato</h2>
            <p style={{margin:'6px 0 10px', color:'var(--muted)'}}>
              {endereco}
              <br/>⏰ Seg–Sex 08h–18h
            </p>
            <div className="contact-actions">
              <a className="btn primary" href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="btn ghost" href={tel}>Ligar</a>
              <a className="btn ghost" href={mapsLink} target="_blank" rel="noopener noreferrer">Abrir no Maps</a>
            </div>
          </div>

          <div className="map-card">
            <iframe
              className="map-frame"
              src={mapsEmbed}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa — Tática Assessoria Contábil"
            />
          </div>
        </div>
      </section>

      {/* Créditos HelpUS */}
      <div className="footer-inner container footer-credits">
        <div>© {new Date().getFullYear()} Tática Assessoria Contábil</div>

        <a className="credit" href="https://helpusbr.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/helpus-icon.png"
            alt="HelpUS"
            width="34" height="34"
            style={{borderRadius:8, background:'#fff', padding:4, border:'1px solid #ffffff22'}}
          />
          <span>Site desenvolvido pela <strong>HelpUS</strong></span>
        </a>
      </div>
    </footer>
  )
}
