import React from 'react'

export default function Contact({ t }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const d = Object.fromEntries(fd.entries())
    const subject = encodeURIComponent('Contato via site — Tática Assessoria')
    const body = encodeURIComponent(`Nome: ${d.nome}\nE-mail: ${d.email}\nMensagem: ${d.mensagem}`)
    window.location.href = `mailto:contato@taticaassessoria.com.br?subject=${subject}&body=${body}`
  }

  const waText = encodeURIComponent(t.waMessage)
  const waUrl = `https://wa.me/5583988419118?text=${waText}`
  const telUrl = 'tel:+5583988419118'
  const mapsLink =
    'https://www.google.com/maps?q=Avenida%20Jo%C3%A3o%20C%C3%A2ncio%2C%20620%20%E2%80%94%20Sala%20901%20%E2%80%94%20Mana%C3%ADra%2C%20Jo%C3%A3o%20Pessoa%20-%20PB'

  return (
    <section id="contato" className="section container">
      <div className="section-header center mb-6">
        <h2>{t.contact.title}</h2>
        <p className="muted">{t.contact.subtitle}</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-card card">
          <h3 className="h3 mb-3">{t.contact.addressTitle}</h3>
          <p className="mb-4">{t.contact.addressValue}</p>

          <h3 className="h3 mb-3">{t.contact.hoursTitle}</h3>
          <p className="mb-4">{t.contact.hoursValue}</p>

          <h3 className="h3 mb-3">{t.contact.phoneTitle}</h3>
          <p className="mb-4">
            <a href={telUrl} className="font-bold text-blue-400">+55 83 98841-9118</a>
          </p>

          <h3 className="h3 mb-3">{t.contact.emailTitle}</h3>
          <p className="mb-4">
            <a href="mailto:contato@taticaassessoria.com.br">contato@taticaassessoria.com.br</a>
          </p>

          <div className="contact-actions flex flex-wrap gap-2 mt-4">
            <a className="btn primary" href={waUrl} target="_blank" rel="noopener noreferrer">
              {t.contact.whatsappBtn}
            </a>
            <a className="btn ghost" href={telUrl}>
              {t.contact.callBtn}
            </a>
            <a className="btn ghost" href={mapsLink} target="_blank" rel="noopener noreferrer">
              {t.contact.mapsBtn}
            </a>
          </div>
        </div>

        <form className="contact-form-card card" onSubmit={handleSubmit}>
          <h3 className="h3 mb-4">{t.contact.formTitle}</h3>
          <div className="form-group">
            <label>{t.contact.nameLabel}</label>
            <input name="nome" required placeholder={t.contact.namePlaceholder} />
          </div>
          <div className="form-group">
            <label>{t.contact.emailLabel}</label>
            <input name="email" type="email" required placeholder={t.contact.emailPlaceholder} />
          </div>
          <div className="form-group">
            <label>{t.contact.messageLabel}</label>
            <textarea name="mensagem" required rows={4} placeholder={t.contact.messagePlaceholder} />
          </div>
          <button className="btn primary glow full mt-3" type="submit">
            {t.contact.sendBtn}
          </button>
        </form>
      </div>
    </section>
  )
}