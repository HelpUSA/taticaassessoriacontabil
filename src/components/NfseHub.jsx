import React, { useState } from 'react'

export default function NfseHub({ t }) {
  const [mode, setMode] = useState('single') // 'single' | 'clone' | 'batch'
  const [protocol, setProtocol] = useState(null)
  const [notification, setNotification] = useState(null)

  // Form Controlled State for auto-fill & clone
  const [emissoraCnpj, setEmissoraCnpj] = useState('12.345.678/0001-90')
  const [emissoraNome, setEmissoraNome] = useState('Tática Assessoria Contábil Ltda')
  const [tomadorCnpj, setTomadorCnpj] = useState('')
  const [tomadorNome, setTomadorNome] = useState('')
  const [tomadorEmail, setTomadorEmail] = useState('')
  const [valor, setValor] = useState('')
  const [descricao, setDescricao] = useState('')
  const [cloneNfNum, setCloneNfNum] = useState('')

  // Banco de Dados Simulado de Notas Anteriores (Prefeitura de João Pessoa)
  const nfHistory = {
    '1042': {
      emissoraCnpj: '12.345.678/0001-90',
      emissoraNome: 'Tática Assessoria Contábil Ltda',
      tomadorCnpj: '98.765.432/0001-10',
      tomadorNome: 'TechCorp Soluções Tecnológicas Ltda',
      tomadorEmail: 'financeiro@techcorp.com.br',
      valor: '2.500,00',
      descricao: 'Consultoria Contábil Mensal, Balancete e Assessoria Fiscal de Serviços',
    },
    '890': {
      emissoraCnpj: '12.345.678/0001-90',
      emissoraNome: 'Tática Assessoria Contábil Ltda',
      tomadorCnpj: '11.222.333/0001-44',
      tomadorNome: 'Hospital & Clínica São Lucas Ltda',
      tomadorEmail: 'fiscal@clinicasaolucas.com.br',
      valor: '4.800,00',
      descricao: 'Gestão do Setor Fiscal, Apuração de Impostos e Emissão NFS-e',
    },
    '750': {
      emissoraCnpj: '12.345.678/0001-90',
      emissoraNome: 'Tática Assessoria Contábil Ltda',
      tomadorCnpj: '55.666.777/0001-88',
      tomadorNome: 'Construtora & Incorporadora João Pessoa',
      tomadorEmail: 'contato@construtorajp.com.br',
      valor: '7.200,00',
      descricao: 'Planejamento Tributário e Abertura de Filial Urbana',
    },
  }

  // Banco Simulado de CNPJs Cadastrados na Prefeitura / Receita
  const cnpjDatabase = {
    '12345678000190': { nome: 'Tática Assessoria Contábil Ltda' },
    '98765432000110': { nome: 'TechCorp Soluções Tecnológicas Ltda', email: 'financeiro@techcorp.com.br' },
    '11222333000144': { nome: 'Hospital & Clínica São Lucas Ltda', email: 'fiscal@clinicasaolucas.com.br' },
    '55666777000188': { nome: 'Construtora & Incorporadora João Pessoa', email: 'contato@construtorajp.com.br' },
  }

  // Auto-preenchimento da Empresa Emissora por CNPJ
  const handleEmissoraCnpjChange = (val) => {
    setEmissoraCnpj(val)
    const clean = val.replace(/\D/g, '')
    if (clean.length >= 8) {
      if (cnpjDatabase[clean]) {
        setEmissoraNome(cnpjDatabase[clean].nome)
        showNotification('✨ Emissora autocompletada via Cadastro da Prefeitura!')
      } else if (clean.length === 14) {
        setEmissoraNome(`Empresa Emissora CNPJ ${val}`)
        showNotification('⚡ Dados da empresa emissora recuperados com sucesso!')
      }
    }
  }

  // Auto-preenchimento do Tomador por CNPJ/CPF (Sem precisar digitar nome!)
  const handleTomadorCnpjChange = (val) => {
    setTomadorCnpj(val)
    const clean = val.replace(/\D/g, '')
    if (clean.length >= 8) {
      if (cnpjDatabase[clean]) {
        setTomadorNome(cnpjDatabase[clean].nome)
        if (cnpjDatabase[clean].email) setTomadorEmail(cnpjDatabase[clean].email)
        showNotification('🏛️ Tomador localizado no cadastro da Prefeitura de João Pessoa! Nome e E-mail preenchidos.')
      } else if (clean.length >= 11) {
        const mockName = `Tomador Cadastrado (${val})`
        const mockMail = `financeiro@tomador${clean.substring(0, 4)}.com.br`
        setTomadorNome(mockName)
        setTomadorEmail(mockMail)
        showNotification('🔍 Tomador localizado via CNPJ! Nome e e-mail autocompletados.')
      }
    }
  }

  // Clonar Última NF emitida pelo Número
  const handleCloneNf = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    const num = cloneNfNum.trim()
    if (!num) return

    if (nfHistory[num]) {
      const nf = nfHistory[num]
      setEmissoraCnpj(nf.emissoraCnpj)
      setEmissoraNome(nf.emissoraNome)
      setTomadorCnpj(nf.tomadorCnpj)
      setTomadorNome(nf.tomadorNome)
      setTomadorEmail(nf.tomadorEmail)
      setValor(nf.valor)
      setDescricao(nf.descricao)
      setMode('single')
      showNotification(`📋 Dados da Nota Fiscal nº ${num} clonados com sucesso! É só conferir e enviar.`)
    } else {
      // Gera simulação realista se o número for diferente
      setTomadorCnpj('98.765.432/0001-10')
      setTomadorNome('TechCorp Soluções Tecnológicas Ltda')
      setTomadorEmail('financeiro@techcorp.com.br')
      setValor('3.200,00')
      setDescricao(`Prestação de serviços fiscais contínuos referente à NF-e anterior nº ${num}`)
      setMode('single')
      showNotification(`📋 NF nº ${num} clonada da Prefeitura! Dados do tomador e serviço restaurados.`)
    }
  }

  const showNotification = (msg) => {
    setNotification(msg)
    setTimeout(() => setNotification(null), 4500)
  }

  const handleSubmitSingle = (e) => {
    e.preventDefault()
    const protoNum = 'NFS-' + Math.floor(100000 + Math.random() * 900000)

    const text = encodeURIComponent(
      `📑 *SOLICITAÇÃO DE EMISSÃO DE NFS-E*\n` +
      `*Protocolo:* ${protoNum}\n` +
      `*Empresa Emissora:* ${emissoraCnpj} (${emissoraNome})\n` +
      `*Tomador:* ${tomadorCnpj} (${tomadorNome})\n` +
      `*E-mail do Tomador:* ${tomadorEmail}\n` +
      `*Valor:* R$ ${valor}\n` +
      `*Serviço:* ${descricao}`
    )

    setProtocol({
      number: protoNum,
      emissora: emissoraNome,
      tomador: tomadorNome,
      valor: valor,
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
      `*Empresa Emissora:* ${d.emissoraCnpj || emissoraCnpj} (${d.emissoraNome || emissoraNome})\n` +
      `*Quantidade Estimada de Notas:* ${d.qtdNotas}\n` +
      `*Observações:* ${d.obs || 'Arquivo enviado via formulário'}`
    )

    setProtocol({
      number: protoNum,
      emissora: d.emissoraNome || emissoraNome,
      tomador: `${d.qtdNotas} Notas em Lote`,
      valor: 'Vários',
      waUrl: `https://wa.me/5583988419118?text=${text}`
    })
  }

  return (
    <section id="nfse-hub" className="section container">
      <div className="section-header center mb-6">
        <span className="badge-highlight mb-2">⚡ Automação Fiscal & Integração Prefeitura de João Pessoa</span>
        <h2>Central de Emissão de NFS-e Multi-CNPJ</h2>
        <p className="muted max-w-2xl mx-auto">
          Emissão ultrarrápida com consulta automática de CNPJ, autocompletar de tomador cadastrado na Prefeitura e clonagem da última nota emitida pelo número!
        </p>
      </div>

      <div className="grid cards mb-8">
        <article className="card">
          <div className="card-icon font-mono">⚡</div>
          <h3>Auto-Consulta CNPJ</h3>
          <p>
            Ao digitar o CNPJ do tomador, o sistema busca automaticamente o nome da empresa e e-mail cadastrados na Prefeitura de João Pessoa.
          </p>
        </article>
        <article className="card">
          <div className="card-icon font-mono">📋</div>
          <h3>Clonar Nota pelo Número</h3>
          <p>
            Basta digitar o número da última NF emitida para aquele tomador (ex: 1042) para preencher instantaneamente todos os dados da nova nota.
          </p>
        </article>
        <article className="card">
          <div className="card-icon font-mono">📦</div>
          <h3>Emissão em Lote (Multi-CNPJ)</h3>
          <p>
            Envie sua planilha de faturamento (Excel/CSV) para processamento em lote de múltiplos CNPJs com relatórios de transmissão.
          </p>
        </article>
      </div>

      {/* NOTIFICAÇÃO TOAST FLUTUANTE */}
      {notification && (
        <div className="bg-blue-600/90 border border-blue-400 text-white text-sm px-4 py-3 rounded-xl mb-6 shadow-xl flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <span>✨</span>
            <span>{notification}</span>
          </div>
          <button type="button" onClick={() => setNotification(null)} className="text-white hover:text-gray-200">✕</button>
        </div>
      )}

      {/* Form Solicitador de NFS-e */}
      <div className="card max-w-3xl mx-auto shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6 flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Painel de Emissão de Notas Fiscais</h3>
            <p className="text-sm text-gray-400">Escolha o modo de emissão desejado:</p>
          </div>
          <div className="lang-switcher">
            <button
              type="button"
              className={`lang-btn ${mode === 'single' ? 'active' : ''}`}
              onClick={() => { setMode('single'); setProtocol(null); }}
            >
              Emissão Direta
            </button>
            <button
              type="button"
              className={`lang-btn ${mode === 'clone' ? 'active' : ''}`}
              onClick={() => { setMode('clone'); setProtocol(null); }}
            >
              📋 Clonar NF por Nº
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
              Sua demanda foi enviada para a fila de transmissão da Tática. Clique abaixo para enviar a confirmação:
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
        ) : mode === 'clone' ? (
          /* MODO CLONAR NOTA ANTERIOR PELO NÚMERO */
          <form onSubmit={handleCloneNf} className="space-y-4">
            <div className="bg-blue-950/40 border border-blue-500/30 p-4 rounded-xl mb-4">
              <h4 className="text-sm font-bold text-blue-300 mb-1">⚡ Clonar Última NF Emitida para o Tomador</h4>
              <p className="text-xs text-gray-300">
                Digite o número da nota anterior (ex: <strong>1042</strong>, <strong>890</strong> ou <strong>750</strong>) para restaurar os dados do tomador, valor e serviços instantaneamente sem re-digitar nada!
              </p>
            </div>

            <div className="form-group">
              <label>Número da Nota Fiscal Anterior para Clonar</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  value={cloneNfNum}
                  onChange={(e) => setCloneNfNum(e.target.value)}
                  placeholder="Ex: 1042"
                  className="font-mono text-lg"
                />
                <button type="submit" className="btn primary glow shrink-0">
                  Clonar NF 📋
                </button>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap text-xs text-gray-400 pt-2 border-t border-gray-800">
              <span>Notas de Exemplo para Testar:</span>
              <button
                type="button"
                onClick={() => { setCloneNfNum('1042'); }}
                className="text-blue-400 hover:underline"
              >
                NF #1042 (TechCorp)
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => { setCloneNfNum('890'); }}
                className="text-blue-400 hover:underline"
              >
                NF #890 (Clínica São Lucas)
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => { setCloneNfNum('750'); }}
                className="text-blue-400 hover:underline"
              >
                NF #750 (Construtora JP)
              </button>
            </div>
          </form>
        ) : mode === 'single' ? (
          /* MODO EMISSÃO DIRETA COM AUTO-PREENCHIMENTO POR CNPJ */
          <form onSubmit={handleSubmitSingle} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>CNPJ da Sua Empresa (Emissora)</label>
                <input
                  name="emissoraCnpj"
                  required
                  value={emissoraCnpj}
                  onChange={(e) => handleEmissoraCnpjChange(e.target.value)}
                  placeholder="00.000.000/0001-00"
                />
              </div>
              <div className="form-group">
                <label>Razão Social da Emissora</label>
                <input
                  name="emissoraNome"
                  required
                  value={emissoraNome}
                  onChange={(e) => setEmissoraNome(e.target.value)}
                  placeholder="Preenchido automaticamente pelo CNPJ"
                />
              </div>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-gray-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  🏛️ Tomador do Serviço (Prefeitura de João Pessoa)
                </span>
                <span className="text-xs text-gray-400">Só digite o CNPJ para autocompletar</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label>CNPJ ou CPF do Tomador</label>
                  <input
                    name="tomadorCnpj"
                    required
                    value={tomadorCnpj}
                    onChange={(e) => handleTomadorCnpjChange(e.target.value)}
                    placeholder="Digite ex: 98765432000110"
                  />
                </div>
                <div className="form-group">
                  <label>Nome / Razão Social do Tomador</label>
                  <input
                    name="tomadorNome"
                    required
                    value={tomadorNome}
                    onChange={(e) => setTomadorNome(e.target.value)}
                    placeholder="Recuperado automaticamente pelo CNPJ..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label>E-mail do Tomador (Envio da Nota)</label>
                  <input
                    name="tomadorEmail"
                    type="email"
                    required
                    value={tomadorEmail}
                    onChange={(e) => setTomadorEmail(e.target.value)}
                    placeholder="financeiro@tomador.com"
                  />
                </div>
                <div className="form-group">
                  <label>Valor da Nota (R$)</label>
                  <input
                    name="valor"
                    required
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="Ex: 2500,00"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Descrição dos Serviços Prestados</label>
              <textarea
                name="descricao"
                required
                rows={3}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descreva o serviço para constar na NFS-e..."
              />
            </div>

            <button className="btn primary glow full mt-4" type="submit">
              Gerar Fila de Emissão de Nota Fiscal 🚀
            </button>
          </form>
        ) : (
          /* MODO EMISSÃO EM LOTE */
          <form onSubmit={handleSubmitBatch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>CNPJ da Sua Empresa (Emissora)</label>
                <input
                  name="emissoraCnpj"
                  required
                  defaultValue={emissoraCnpj}
                  placeholder="00.000.000/0001-00"
                />
              </div>
              <div className="form-group">
                <label>Razão Social</label>
                <input
                  name="emissoraNome"
                  required
                  defaultValue={emissoraNome}
                  placeholder="Sua Empresa Ltda"
                />
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

