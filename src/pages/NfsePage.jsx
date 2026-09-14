import React from 'react'
import { Link } from 'react-router-dom'
import NfseHub from '../components/NfseHub'

export default function NfsePage({ t }) {
  return (
    <main className="page container py-8">
      <div className="flex items-center justify-between bg-slate-900/90 border border-blue-500/30 rounded-xl p-4 mb-6 backdrop-blur flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔒</span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-white margin-0">Área Administrativa Restrita</h1>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs px-2 py-0.5 rounded-full font-medium">
                🟢 Sessão Ativa (Procuração e-CNPJ)
              </span>
            </div>
            <p className="text-xs text-gray-400 margin-0 mt-0.5">
              Painel de Operações Fiscais Tática Assessoria — Lote & Nota Única
            </p>
          </div>
        </div>
        <Link to="/" className="btn ghost small">
          ← Sair da Área Administrativa
        </Link>
      </div>

      <NfseHub t={t} />
    </main>
  )
}

