import React from 'react'

export default function Footer({ t }) {
  const mapsLink =
    'https://www.google.com/maps?q=Avenida%20Jo%C3%A3o%20C%C3%A2ncio%2C%20620%20%E2%80%94%20Sala%20901%20%E2%80%94%20Mana%C3%ADra%2C%20Jo%C3%A3o%20Pessoa%20-%20PB'
  const mapsEmbed = `${mapsLink}&output=embed`

  const waText = encodeURIComponent(t.waMessage)
  const waUrl = `https://wa.me/5583988419118?text=${waText}`
  const telUrl = 'tel:+5583988419118'

  return (
    <footer className="footer-wrap">
      <div className="container footer-content">
        <div className="footer-grid">
          {/* Coluna 1: Perfil & Registro */}
          <div className="footer-col brand-col">
            <div className="footer-brand flex items-center gap-3 mb-3">
              <img src="/assets/logo.png" alt="Tática Assessoria Contábil" width="40" height="40" className="footer-logo" />
              <h3 className="footer-title">{t.footer.aboutTitle}</h3>
            </div>
            <p className="footer-text">{t.footer.aboutText}</p>
            <div className="crc-badge">
              <span className="crc-dot" />
              {t.footer.creci}
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.footer.quickLinks}</h4>
            <ul className="footer-links">
              <li><a href="#hero">{t.nav.servicos}</a></li>
              <li><a href="#segmentos">{t.nav.segmentos}</a></li>
              <li><a href="#beneficios">{t.nav.beneficios}</a></li>
              <li><a href="#noticias">{t.nav.noticias}</a></li>
              <li><a href="#faq">{t.nav.faq}</a></li>
              <li><a href="#parceiros">{t.nav.parceiros}</a></li>
              <li><a href="#contato">{t.nav.contato}</a></li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento & Localização */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.footer.contactInfo}</h4>
            <div className="footer-info space-y-2">
              <p>📍 {t.contact.addressValue}</p>
              <p>⏰ {t.contact.hoursValue}</p>
              <p>☎️ <a href={telUrl}>+55 83 98841-9118</a></p>
              <p>✉️ <a href="mailto:contato@taticaassessoria.com.br">contato@taticaassessoria.com.br</a></p>
            </div>
            <div className="footer-actions mt-3">
              <a className="btn primary small" href={waUrl} target="_blank" rel="noopener noreferrer">
                {t.contact.whatsappBtn}
              </a>
              <a className="btn ghost small" href={mapsLink} target="_blank" rel="noopener noreferrer">
                {t.contact.mapsBtn}
              </a>
            </div>
          </div>

          {/* Coluna 4: Mapa Google Embed */}
          <div className="footer-col map-col">
            <h4 className="footer-heading">Localização</h4>
            <iframe
              className="footer-map-frame"
              src={mapsEmbed}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa — Tática Assessoria Contábil"
            />
          </div>
        </div>

        {/* Rodapé Inferior — Assinatura Oficial HelpUS Technology */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>

          <a
            className="helpus-credit-link"
            href="https://helpusbr.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Desenvolvido por HelpUS Technology — Soluções Web & Software"
          >
            <span className="helpus-badge">
              <span className="helpus-badge-dot" />
              {t.footer.developedBy} <strong style={{ color: '#60a5fa', marginLeft: 4 }}>HelpUS Technology</strong>
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
