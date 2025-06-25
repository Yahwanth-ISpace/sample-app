# 🧱 Sample App – Full-Stack Monorepo Skeleton

Welcome to the **Sample App Monorepo** – a scalable, real-world full-stack boilerplate that follows best practices and a modular architecture. Built using **npm workspaces**, it provides a unified setup for frontend (Next.js) and backend (NestJS or Node/Express) development, with shared utilities and documentation in one place.

---

## 📁 Project Structure

```
sample-app/
├── apps/
│   ├── client/         # Frontend app (Next.js + Tailwind + TypeScript)
│   └── server/         # Backend app (NestJS or Express + TypeScript)
├── libs/               # Shared code (utils, types, constants)
├── .github/            # GitHub workflows, PR/issue templates
├── docs/               # Project documentation, onboarding guides
├── package.json        # Root package.json with workspaces config
└── README.md           # You are here

````

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Yahwanth-ISpace/sample-app.git
cd sample-app
````

### 2. Install dependencies

```bash
npm install
```

> Uses `npm` workspaces to install dependencies for all sub-projects from the root.

---

## 📦 Workspaces Defined

In `package.json`:

```json
{
  "name": "sample-app",
  "private": true,
  "workspaces": [
    "apps/client",
    "apps/server",
    "libs/*"
  ]
}
```

---

## 💻 Running Applications

### Frontend – `apps/client` (Next.js)

```bash
npm run dev --workspace=apps/client
```

Opens the Next.js development server at `http://localhost:3000`

---

### Backend – `apps/server` (NestJS or Node.js)

```bash
npm run start:dev --workspace=apps/server
```

Starts the backend server (adjust based on your backend tech, like NestJS or Express).

---

## 🔧 Tech Stack

| Layer        | Tech Stack                                |
| ------------ | ----------------------------------------- |
| Frontend     | React (Next.js), Tailwind CSS, TypeScript |
| Backend      | Node.js, NestJS (or Express), TypeScript  |
| Database     | MongoDB                                   |
| Package Mgmt | npm (with workspaces)                     |
| Editor       | Visual Studio Code                        |

---

## 📁 Shared Libraries – `libs/`

You can store:

* ✅ Common utility functions
* 📜 Shared TypeScript types/interfaces
* 🔒 Constants and validators

E.g.,

```
libs/
├── utils/          # Utility functions used by both apps
├── types/          # Shared TypeScript types
└── validators/     # Input validation logic
```

---

## 📘 Documentation

* All internal guides, process documents, and onboarding content go into the `docs/` folder.
* You can also use tools like Notion or Docusaurus if you'd like to sync or auto-generate docs.

---

## 🔄 GitHub & CI/CD

* `.github/` contains:

  * PR templates
  * Issue templates
  * GitHub Actions for linting, tests, deployments

---

## 🧑‍💻 Developer Guidelines

* Follow folder-based component structure (`components/Button/index.tsx`)
* Use **Prettier + ESLint** for consistent code style
* Use clear, structured commit messages:

  ```
  feat(auth): implement JWT token refresh
  fix(task): resolve null ID issue in task manager
  ```

---

## 🧪 Future Additions (Suggestions)

* Linting & Pre-commit hooks (Husky + lint-staged)
* Testing setup (Jest, React Testing Library)
* Docker setup for backend
* Authentication (JWT, Auth guards)
* CI/CD: Auto deploy to Vercel / Render

---

## 🤝 Contributing

Contributions, improvements, and suggestions are welcome!

* Fork the repo
* Create a new branch (`feat/your-feature-name`)
* Push your changes
* Open a Pull Request

---

## 🔗 Author

**Yahwanth (ISpace)**
🔗 [GitHub](https://github.com/Yahwanth-ISpace)
