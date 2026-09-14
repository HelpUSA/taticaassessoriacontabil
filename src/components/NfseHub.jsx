import React, { useState } from 'react'

export default function NfseHub({ t }) {
  const [mode, setMode] = useState('single') // 'single' | 'batch'
  const [protocol, setProtocol] = useState(null)

  const handleSubmitSingle = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const d = Object.fromEntries(fd.entries())
    const protoNum = 'NFS-' + Math.floor(100000 + Math.random() * 900000)

    const text = encodeURIComponent(
      `📑 *SOLICITAÇÃO DE EMISSÃO DE NFS-E*\n` +
      `*Protocolo:* ${protoNum}\n` +
      `*Empresa Emissora:* ${d.emissoraCnpj} (${d.emissoraNome})\n` +
      `*Tomador:* ${d.tomadorCnpj} (${d.tomadorNome})\n` +
      `*E-mail do Tomador:* ${d.tomadorEmail}\n` +
      `*Valor:* R$ ${d.valor}\n` +
      `*Serviço:* ${d.descricao}`
    )

    setProtocol({
      number: protoNum,
      emissora: d.emissoraNome,
      tomador: d.tomadorNome,
      valor: d.valor,
      waUrl: `https://wa.me/5583988419118?text=${text}`
    })
  }

  const handleSubmitBatch = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const d = Object.fromEntries(fd.entries())
    const protoNum = 'LOTE-' + Math.floor(100000 + Math.random() * 900000)

    const text = encodeURIComponent(
      `📦 *SOLICITAÇÃO DE EMISSÃO DE NFS-E EM LOTE*\n` +
      `*Protocolo:* ${protoNum}\n` +
      `*Empresa Emissora:* ${d.emissoraCnpj} (${d.emissoraNome})\n` +
      `*Quantidade Estimada de Notas:* ${d.qtdNotas}\n` +
      `*Observações:* ${d.obs || 'Arquivo enviado via formulário'}`
    )

    setProtocol({
      number: protoNum,
      emissora: d.emissoraNome,
      tomador: `${d.qtdNotas} Notas em Lote`,
      valor: 'Vários',
      waUrl: `https://wa.me/5583988419118?text=${text}`
    })
  }

  return (
    <section id="nfse-hub" className="section container">
      <div className="section-header center mb-6">
        <span className="badge-highlight mb-2">⚡ Automação Fiscal & Procuração e-CNPJ</span>
        <h2>Central de Emissão de NFS-e Multi-CNPJ</h2>
        <p className="muted max-w-2xl mx-auto">
          Simplificamos a rotina fiscal da sua empresa. Através da procuração eletrônica, a Tática emite e transmite suas notas fiscais de serviço para múltiplos tomadores sem complicações.
        </p>
      </div>

      <div className="grid cards mb-8">
        <article className="card">
          <div className="card-icon font-mono">🔑</div>
          <h3>Procuração Eletrônica A1</h3>
          <p>
            Acessamos o portal fiscal e emitimos suas notas com a procuração e-CNPJ da Tática, sem necessidade de enviar a senha do seu certificado.
          </p>
        </article>
        <article className="card">
          <div className="card-icon font-mono">📦</div>
          <h3>Emissão em Lote (Multi-CNPJ)</h3>
          <p>
            Possui múltiplos CNPJs ou mais de 50 tomadores por mês? Enviamos todas as notas em lote com relatórios de confirmação.
          </p>
        </article>
        <article className="card">
          <div className="card-icon font-mono">✉️</div>
          <h3>Envio Automático ao Tomador</h3>
          <p>
            O PDF e XML da nota fiscal são transmitidos automaticamente para o e-mail do tomador e ficam armazenados na sua pasta em nuvem.
          </p>
        </article>
      </div>

      {/* Form Solicitador de NFS-e */}
      <div className="card max-w-3xl mx-auto shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6 flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Solicitar Emissão de NFS-e</h3>
            <p className="text-sm text-gray-400">Preencha os dados da nota ou envie sua planilha de faturamento.</p>
          </div>
          <div className="lang-switcher">
            <button
              type="button"
              className={`lang-btn ${mode === 'single' ? 'active' : ''}`}
              onClick={() => { setMode('single'); setProtocol(null); }}
            >
              Nota Única
            </button>
            <button
              type="button"
              className={`lang-btn ${mode === 'batch' ? 'active' : ''}`}
              onClick={() => { setMode('batch'); setProtocol(null); }}
            >
              Lote / Excel 📊
            </button>
          </div>
        </div>

        {protocol ? (
          <div className="protocol-card text-center py-6 px-4 bg-slate-900 border border-emerald-500/40 rounded-xl">
            <div className="text-4xl mb-3">✅</div>
            <h4 className="text-xl font-bold text-white mb-2">Solicitação Gerada com Sucesso!</h4>
            <p className="text-gray-300 text-sm mb-4">
              Protocolo: <strong className="text-emerald-400 font-mono">{protocol.number}</strong>
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Sua demanda foi cadastrada na fila da equipe fiscal da Tática. Clique no botão abaixo para confirmar pelo WhatsApp:
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a className="btn primary glow" href={protocol.waUrl} target="_blank" rel="noopener noreferrer">
                Enviar Protocolo pelo WhatsApp 💬
              </a>
              <button
                type="button"
                className="btn ghost"
                onClick={() => setProtocol(null)}
              >
                Nova Solicitação
              </button>
            </div>
          </div>
        ) : mode === 'single' ? (
          <form onSubmit={handleSubmitSingle} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>CNPJ da Sua Empresa (Emissora)</label>
                <input name="emissoraCnpj" required placeholder="00.000.000/0001-00" />
              </div>
              <div className="form-group">
                <label>Razão Social / Nome Fantasia</label>
                <input name="emissoraNome" required placeholder="Sua Empresa Ltda" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>CNPJ ou CPF do Tomador (Cliente)</label>
                <input name="tomadorCnpj" required placeholder="CNPJ ou CPF do cliente" />
              </div>
              <div className="form-group">
                <label>Nome / Razão Social do Tomador</label>
                <input name="tomadorNome" required placeholder="Cliente que receberá a nota" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>E-mail do Tomador (para envio da nota)</label>
                <input name="tomadorEmail" type="email" required placeholder="financeiro@cliente.com" />
              </div>
              <div className="form-group">
                <label>Valor da Nota (R$)</label>
                <input name="valor" required placeholder="Ex: 1500,00" />
              </div>
            </div>

            <div className="form-group">
              <label>Descrição dos Serviços Prestados</label>
              <textarea
                name="descricao"
                required
                rows={3}
                placeholder="Descreva detalhadamente o serviço prestado para constar na NFS-e..."
              />
            </div>

            <button className="btn primary glow full mt-4" type="submit">
              Gerar Fila de Emissão de Nota Fiscal 🚀
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmitBatch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>CNPJ da Sua Empresa (Emissora)</label>
                <input name="emissoraCnpj" required placeholder="00.000.000/0001-00" />
              </div>
              <div className="form-group">
                <label>Razão Social</label>
                <input name="emissoraNome" required placeholder="Sua Empresa Ltda" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>Quantidade de Notas a Emitir</label>
                <input name="qtdNotas" type="number" required placeholder="Ex: 25" min="1" />
              </div>
              <div className="form-group">
                <label>Anexar Planilha (Excel / CSV)</label>
                <input type="file" accept=".csv, .xlsx, .xls" className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700" />
              </div>
            </div>

            <div className="form-group">
              <label>Observações / Instruções Especiais</label>
              <textarea
                name="obs"
                rows={3}
                placeholder="Insira informações adicionais sobre impostos retidos, datas ou códigos de serviço..."
              />
            </div>

            <button className="btn primary glow full mt-4" type="submit">
              Enviar Solicitação de Emissão em Lote 📊
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
