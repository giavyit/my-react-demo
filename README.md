# My React Demo

This is a modern React application built with minimal setup and designed for scalability, performance, and maintainability.

## ✨ Features

- **React 18** with **TypeScript** for robust component development.
- **Vite** for blazing fast HMR and optimized production builds.
- **Atomic Design Architecture** ensuring modular and highly reusable UI components.
- **Tailwind CSS v4** combined with **SCSS** for flexible and utility-first styling.
- **Storybook** integration for isolated component documentation and testing.
- **Vitest** for fast unit testing.
- **Playwright** for end-to-end (E2E) testing.
- **React Router DOM** for client-side routing.
- **ESLint** for code linting and maintaining high quality.

## 📁 Architecture (Atomic Design)

This project strictly adheres to the **Atomic Design** methodology to structure the UI components (`src/components`):

- ⚛️ **Atoms**: The foundational building blocks (e.g., Buttons, Inputs, Typography, Icons). They cannot be broken down further.
- 🧬 **Molecules**: Simple groups of UI elements functioning together (e.g., a form label combined with an input field and a validation message).
- 🏗️ **Organisms**: Relatively complex components that form distinct sections of an interface (e.g., Headers, Footers, complex Forms).
- 📐 **Templates**: Page-level components that articulate the design's underlying structure (layouts without specific data).
- 📄 **Pages**: Specific instances of templates filled with real content and connected to application state.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   cd my-react-demo
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## 🛠️ Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server with hot-module replacement.
- `npm run build`: Type-checks the code and builds the app for production to the `dist` folder.
- `npm run preview`: Bootstraps a local server to preview the production build.
- `npm run lint`: Runs ESLint to find and fix problems in your code.
- `npm run test`: Runs unit tests using Vitest.
- `npm run test:ui`: Runs unit tests and opens the Vitest UI in your browser.
- `npm run storybook`: Starts the Storybook development server on port 6006.
- `npm run build-storybook`: Builds the Storybook documentation for production deployment.

## 🧪 Testing

The project uses **Vitest** for unit testing and **Playwright** for E2E testing.

- To run unit tests: `npm run test`
- Writing test files: Ensure your test files end with `.test.ts` or `.test.tsx`.

## 📚 Storybook

We use Storybook for component-driven development. It allows UI components to be developed and tested in isolation.

- Start the interactive UI environment: `npm run storybook`
- Stories are typically located next to their respective components (e.g., `Button.stories.tsx`).
