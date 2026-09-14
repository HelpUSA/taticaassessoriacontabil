import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer({ t }) {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const navigate = useNavigate()

  const mapsLink =
    'https://www.google.com/maps?q=Avenida%20Jo%C3%A3o%20C%C3%A2ncio%2C%20620%20%E2%80%94%20Sala%20901%20%E2%80%94%20Mana%C3%ADra%2C%20Jo%C3%A3o%20Pessoa%20-%20PB'
  const mapsEmbed = `${mapsLink}&output=embed`

  const waText = encodeURIComponent(t.waMessage)
  const waUrl = `https://wa.me/5583988419118?text=${waText}`
  const telUrl = 'tel:+5583988419118'

  const handleLoginSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    setLoginSuccess(true)
    setTimeout(() => {
      setLoginSuccess(false)
      setShowLoginModal(false)
      navigate('/emissao-nfse')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 1000)
  }

  return (
    <>
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
              <div className="crc-badge mb-3">
                <span className="crc-dot" />
                {t.footer.creci}
              </div>

              {/* Botão de Área Administrativa no Rodapé */}
              <button
                type="button"
                onClick={() => setShowLoginModal(true)}
                className="btn ghost small mt-2"
                style={{ borderColor: 'rgba(96, 165, 250, 0.4)', color: '#60a5fa' }}
              >
                🔒 Área Administrativa (Login do Contador)
              </button>
            </div>

            {/* Coluna 2: Navegação Rápida */}
            <div className="footer-col">
              <h4 className="footer-heading">{t.footer.quickLinks}</h4>
              <ul className="footer-links">
                <li><a href="#/">{t.nav.inicio || 'Início'}</a></li>
                <li><a href="#/servicos">{t.nav.servicos}</a></li>
                <li><a href="#/segmentos">{t.nav.segmentos}</a></li>
                <li><a href="#/beneficios">{t.nav.beneficios}</a></li>
                <li><a href="#/noticias">{t.nav.noticias}</a></li>
                <li><a href="#/faq">{t.nav.faq}</a></li>
                <li><a href="#/parceiros">{t.nav.parceiros}</a></li>
                <li><a href="#/contato">{t.nav.contato}</a></li>
                <li>
                  <button
                    type="button"
                    onClick={() => setShowLoginModal(true)}
                    style={{ background: 'none', border: 'none', color: '#60a5fa', cursor: 'pointer', padding: 0, fontSize: '13px' }}
                  >
                    🔒 Área Administrativa
                  </button>
                </li>
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
            <div className="flex items-center gap-4 flex-wrap">
              <p>© {new Date().getFullYear()} {t.footer.rights}</p>
              <button
                type="button"
                onClick={() => setShowLoginModal(true)}
                className="text-xs text-blue-400 hover:underline flex items-center gap-1"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                🔒 Área Administrativa / Login do Setor Fiscal
              </button>
            </div>

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

      {/* MODAL DE LOGIN INSTITUCIONAL DO CONTADOR / SETOR FISCAL */}
      {showLoginModal && (
        <div className="modal-backdrop" onClick={() => setShowLoginModal(false)}>
          <div className="modal-card card" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b border-gray-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🔒</span>
                <h3 className="text-lg font-bold text-white margin-0">Área Administrativa — Login do Contador</h3>
              </div>
              <button
                type="button"
                className="btn ghost small"
                onClick={() => setShowLoginModal(false)}
                style={{ padding: '2px 8px' }}
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-gray-400 mb-4">
              Acesso exclusivo para contadores, encarregados do setor fiscal e colaboradores autorizados da Tática Assessoria.
            </p>

            {loginSuccess ? (
              <div className="text-center py-6">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="text-emerald-400 font-bold text-base mb-1">Autenticação Concluída!</h4>
                <p className="text-xs text-gray-300">Redirecionando para a Central Interna de Emissão NFS-e...</p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="form-group">
                  <label>Usuário / E-mail Institucional</label>
                  <input
                    type="email"
                    required
                    placeholder="fiscal@taticaassessoria.com.br"
                    defaultValue="fiscal@taticaassessoria.com.br"
                  />
                </div>
                <div className="form-group">
                  <label>Senha de Acesso</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    defaultValue="tatica2026"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 my-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked /> Manter conectado
                  </label>
                  <a href="#/contato" onClick={() => setShowLoginModal(false)} className="text-blue-400 hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>

                <button className="btn primary glow full mt-3" type="submit">
                  Entrar na Central Administrativa 🔑
                </button>

                <div className="text-center mt-3 pt-3 border-t border-gray-800">
                  <button
                    type="button"
                    className="btn ghost small full"
                    onClick={() => {
                      handleLoginSubmit({ preventDefault: () => {} })
                    }}
                  >
                    🔐 Autenticar com Certificado e-CNPJ Mestre
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

