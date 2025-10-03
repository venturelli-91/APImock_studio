# API Mocking Studio

API Mocking Studio is a frontend platform that lets developers simulate REST endpoints directly in the browser. It is built with **Next.js**, **TypeScript**, **TailwindCSS** and **Zustand** to deliver a fast, modular and accessible experience for managing mock APIs.

## ✨ Key Features

- Create, edit and delete mock endpoints with real-time preview.
- Configure HTTP method, status code, headers, delays and JSON payloads per endpoint.
- Organise endpoints into collections tailored for different projects or teams.
- Validate and visualise JSON payloads with instant feedback.
- Persist data locally and prepare for future backend integration with minimal changes required.
- Enjoy polished UX with floating labels, toast notifications, modals and microinteractions.

## 🧱 Architecture Overview

The project follows SRP, DRY, KISS and Clean Architecture principles to keep the codebase scalable and easy to maintain.

```
app/
└── src/
	├── components/
	│   ├── features/         # Feature-specific UI (e.g. endpoint form)
	│   ├── layouts/          # Layout wrappers and shells
	│   └── shared/           # Reusable design-system primitives
	├── hooks/                # Custom hooks split by domain (api, auth, ui)
	├── store/                # Global state slices (Zustand)
	├── types/                # TypeScript definitions organised by domain
	├── utils/                # Helper functions, formatters and validators
	└── styles/               # Global styles and theme tokens
```

### Shared UI primitives

- **Button** – single-responsibility button with Tailwind utilities and theme variants.
- **Input / FloatingLabelInput / FloatingLabelTextarea** – form controls with floating-label UX.

### Feature example: Endpoint Management

- `EndpointForm` encapsulates the fields required to configure mock endpoints (name, path, method, status code, description, headers, delay and payload).
- Components are composed from `shared` primitives to keep the business layer small and testable.

## 🛠️ Tech Stack

- **Next.js 14** for server components, routing and build tooling.
- **TypeScript** for static typing and maintainability.
- **TailwindCSS** for utility-first styling and dark-mode support.
- **Zustand** for predictable, lightweight global state.

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run linting
pnpm lint
```

> ℹ️ The project currently focuses on the frontend. Backend integration endpoints can be wired in with minimal refactors thanks to the layered architecture.

## 🔗 Useful Links

- Repository: [venturelli-91/APImock_studio](https://github.com/venturelli-91/APImock_studio)
- Flowbite components documentation: https://flowbite.com/docs/components/overview/

---

Built with ❤️ to streamline API prototyping and developer collaboration.
