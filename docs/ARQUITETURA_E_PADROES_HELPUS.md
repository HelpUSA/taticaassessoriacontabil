---
tags:
  - arquitetura
  - react
  - vite
  - tailwind
  - vercel
  - i18n
created: 2026-09-21
updated: 2026-09-21
author: HelpUS Technology Solutions
status: Active
---

# 🏗️ Arquitetura de Software & Padrões HelpUS

Documentação da estrutura técnica e padrões de engenharia adotados no desenvolvimento da plataforma web da **Tática Assessoria Contábil**.

> [!NOTE]
> O projeto segue os padrões de design **Executive Dark Glassmorphic Theme** da HelpUS Technology, com suporte nativo a internacionalização (i18n) em 3 idiomas e pipeline automatizado na Vercel.

---

## 🛠️ Stack Tecnológico
* **Frontend Core:** React 18, Vite 5, React Router DOM (HashRouter).
* **Estilização:** CSS Custom Properties + Utility Classes (`src/styles.css`).
* **Internacionalização (i18n):** Dicionário de tradução estático e reativo em `src/translations.js` (PT 🇧🇷, EN 🇺🇸, ES 🇪🇸).
* **Infraestrutura:** Vercel Production Serverless + GitHub Actions pipeline.
* **Repositório Git:** `HelpUSA/taticaassessoriacontabil` (Visibilidade: **Pública**).

---

## 📁 Estrutura de Diretórios
```
taticaassessoriacontabil/
├── docs/                                    # Documentação Vault Obsidian
│   ├── INDEX.md                             # Map of Content (TOC)
│   ├── Documentacao_Requisitos_e_Acompanhamento_Contador_Marx.md
│   ├── ARQUITETURA_E_PADROES_HELPUS.md
│   ├── MANUAL_DE_OPERACAO_FISCAL.md
│   └── HISTORICO_DEPLOY_VERCEL.md
├── public/                                  # Assets estáticos (logos, fotos da equipe, vídeos)
├── src/
│   ├── components/                          # Componentes modulares
│   │   ├── Navbar.jsx                       # Cabeçalho com i18n switcher
│   │   ├── Hero.jsx                         # Hero com vídeo e carrossel
│   │   ├── NfseHub.jsx                      # Central de Emissão NFS-e (Auto-CNPJ & Clonar)
│   │   ├── Footer.jsx                       # Rodapé com Login do Contador
│   │   └── ...
│   ├── pages/                               # Páginas do React Router
│   ├── translations.js                      # Dicionário i18n PT / EN / ES
│   └── styles.css                           # Tema Dark Glassmorphism HelpUS
├── package.json
└── vercel.json                              # Rewrites e cabeçalhos de cache Vercel
```

---

## 📊 Vínculos Obsidian
* [[INDEX]] — Voltar ao mapa de conteúdos.
* [[Documentacao_Requisitos_e_Acompanhamento_Contador_Marx]] — Ver requisitos do Contador Marx.
