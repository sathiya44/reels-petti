🚀 Next.js Advanced Starter

A modern, production-ready Next.js 15 starter with Tailwind CSS v4, TypeScript, ESLint, Prettier, Husky, and more—all set up and ready to build.

✨ Features

Next.js 15 (App Router + TypeScript)

Tailwind CSS v4 with prettier-plugin-tailwindcss for auto class sorting

ESLint (flat config) + Prettier integration

Husky + lint-staged for pre-commit formatting & linting

Path aliases (@/\*) for clean imports

Reusable utilities & UI components

cn() helper (clsx + tailwind-merge)

Button component with variants

Pre-configured VS Code settings (format-on-save, auto imports)

.gitignore tuned for Next.js + Node.js

📦 Getting Started

1. Clone this repo (as a fresh project)
   npx degit sathiya/nextjs-advanced-starter my-app
   cd my-app

2. Install dependencies
   npm install

3. Run dev server
   npm run dev

Visit http://localhost:3000

🧹 Available Scripts
npm run dev # Start local dev server
npm run build # Production build
npm run start # Run built app
npm run lint # Run ESLint
npm run format # Check formatting
npm run format:fix # Auto-fix formatting

⚡ Husky + Lint-staged

Every commit automatically:

Runs Prettier on staged files

Fixes ESLint issues

Blocks commit if errors remain

📂 Project Structure
src/
app/ # Next.js app router
page.tsx # Homepage
layout.tsx # Root layout
components/ # Shared UI components
ui/button.tsx
lib/ # Utilities (cn.ts)

🔧 VS Code Setup

Prettier extension installed (esbenp.prettier-vscode)

ESLint extension installed

Format on Save enabled (.vscode/settings.json included)

📝 License

MIT © Sathiya
