<h1 align="center">Mock Studio</h1>

<p align="center">
	Experience a Postman-inspired interface for mocking API collections, crafting endpoints, and previewing responses – all without wiring a backend.
</p>

---

## ✨ Overview

- **Endpoint List** with simulated async loading, interactive cards, and an always-on preview panel.<br />
- **Collections Sidebar** that mirrors Postman’s navigation for request groups.<br />
- **Modal Form** to create or edit endpoints with mocked submission flow.<br />
- **Design System** primitives covering buttons, cards, inputs, and modals.

> **Stack:** Next.js (App Router) • TypeScript • Tailwind CSS • Modular component architecture.

---

## 🏗️ Project Structure

```
app/
├─ app/
│  ├─ page.tsx                # Landing page featuring EndpointList
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ features/
│  │  │  │  └─ endpoints/
│  │  │  │     ├─ EndpointList/   # Main UI broken into sections
│  │  │  │     ├─ hooks/          # useEndpointList and future hooks
│  │  │  │     └─ index.ts        # Barrel file
│  │  │  └─ shared/               # Design system primitives
│  │  └─ types/                   # Feature-centric typings
│  └─ data/                       # Mock collections & endpoints
├─ public/                        # Icons and assets
└─ README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- One package manager: pnpm / npm / yarn / bun

### Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Run the development server

```bash
npm run dev
# http://localhost:3000
```

### Lint the project

```bash
npm run lint
```

> ESLint is configured with a ruleset aligned to Next.js + TypeScript best practices.

---

## 🧩 Featured Components

- `EndpointList`: Orchestrates the sidebar, main panel, and preview.
- `useEndpointList`: Encapsulates state, filters, and UI handlers.
- `EndpointListMainSection`: Renders header, skeletons, and cards.
- `EndpointPreviewSection`: Displays detailed information for the active endpoint.
- `EndpointCollectionsSidebar`: Provides navigation and a mock search over collections.

---

## 🛣️ Roadmap

- [ ] Real persistence via API or local storage.
- [ ] Genuine search/filter state in the sidebar.
- [ ] Unit tests for hooks and critical components.
- [ ] Design tokens integration plus light/dark theme switcher.

Contributions are welcome! Feel free to open an issue or submit a PR.

---
