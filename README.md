# React Task Manager & API Viewer

A simple React application built with [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), and [React Router](https://reactrouter.com/).  
Features include a persistent Task Manager, API data fetching with search, dark mode, and a responsive layout.

---

## Features

- **Task Manager**: Add, complete, and delete tasks. Tasks are saved in your browser's local storage.
- **API Data Viewer**: Fetches and displays posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), with live search.
- **Dark Mode**: Respects system preference and can be toggled.
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly layouts.
- **Reusable Components**: Includes Button, Card, Navbar, Footer, and Layout components.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-Dev-Romm.git
   cd week-3-react-js-assignment-Dev-Romm

Collecting workspace information```md
# React Task Manager & API Viewer

A simple React application built with [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), and [React Router](https://reactrouter.com/).  
Features include a persistent Task Manager, API data fetching with search, dark mode, and a responsive layout.

---

## Features

- **Task Manager**: Add, complete, and delete tasks. Tasks are saved in your browser's local storage.
- **API Data Viewer**: Fetches and displays posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), with live search.
- **Dark Mode**: Respects system preference and can be toggled.
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly layouts.
- **Reusable Components**: Includes Button, Card, Navbar, Footer, and Layout components.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-Dev-Romm.git
   cd week-3-react-js-assignment-Dev-Romm
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Project Structure

```
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and SVGs
│   ├── components/        # Reusable UI components (Button, Card, Navbar, Footer)
│   ├── context/           # Theme context for dark mode
│   ├── hooks/             # Custom React hooks (useLocalStorage)
│   ├── layout/            # Layout wrapper
│   ├── pages/             # App pages (Home, TaskManager, ApiData)
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Entry point
│   ├── index.css          # Tailwind CSS import
│   └── App.css            # Additional styles
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # This file
```

---

## Usage

- **Home**: Welcome page.
- **Tasks**: Manage your to-do list. Tasks persist in your browser.
- **API**: Browse and search posts fetched from a public API.

Navigate using the top navbar.

---

## Customization

- **Styling**: Modify Tailwind classes in component files or add custom styles in App.css.
- **Dark Mode**: The theme toggles based on system preference and can be toggled via the context in ThemeContext.jsx.
- **API Endpoint**: Change the API URL in ApiData.jsx if needed.

---

## Linting

Run ESLint to check for code issues:
```sh
npx eslint .
```

---

## Deployment

To build for production:
```sh
npm run build
```
The output will be in the `dist/` folder.

---

## License

ISC  
© 2025 Rommy

---

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
```
