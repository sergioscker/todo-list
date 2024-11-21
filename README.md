# Todo List Application

This repository contains a **Todo List** application built with **Next.js**, **React**, and **TailwindCSS**, leveraging modern libraries to ensure a rich and fluid user experience. The application is modular, accessible, and easy to customize.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Technologies Used

Below is a list of the main dependencies used in the project:

### **Production**
- **Next.js**: React framework for server-side rendering and static site generation.
- **React and React DOM**: Library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for rapid styling.
- **Radix UI**: Accessible components such as checkboxes and slots.
- **Lucide React**: Configurable and optimized icons.
- **clsx** and **class-variance-authority**: Utilities for handling CSS class names.
- **tailwind-merge**: A utility for merging TailwindCSS class names.
- **tailwindcss-animate**: Predefined animations for TailwindCSS.

### **Development**
- **ESLint**: Tool for code analysis and enforcement of coding standards.
- **PostCSS**: CSS processing tool.

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-list.git
   cd todo-list
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

---

## Available Scripts

The `package.json` defines the following scripts:

- **`dev`**: Starts the development server.
- **`build`**: Builds the project for production.
- **`start`**: Starts the production server.
- **`lint`**: Runs the linter to identify code issues.

Run any of these scripts using:

```bash
npm run <script>
# or
yarn <script>
```

---

## Project Structure

The project structure is organized as follows:

```
.
├── .next/            # Next.js build artifacts (cache, static files, etc.)
├── app/              # New Next.js `app` directory for layouts and pages
├── components/       # Reusable UI components
├── hooks/            # Custom hooks
├── lib/              # Utility modules and helper functions
├── node_modules/     # Installed dependencies
├── public/           # Static files (images, icons, etc.)
├── styles/           # Global styles and TailwindCSS configurations
├── .eslintrc.json    # ESLint configuration
├── .gitignore        # Git ignored files
├── .prettierrc.json  # Prettier configuration for code formatting
├── components.json   # (Additional file, purpose unspecified)
├── jsconfig.json     # Configuration for JavaScript paths and aliases
├── next.config.mjs   # Next.js configuration
├── package.json      # Dependencies and script definitions
├── postcss.config.mjs# PostCSS configuration
├── tailwind.config.js# TailwindCSS configuration
├── yarn.lock         # Dependency lock file for Yarn
```

This structure organizes files and folders in a modular way, keeping the project scalable and easy to navigate.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a branch for your feature or fix: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the remote branch: `git push origin my-feature`.
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Built by [Sergio Oliveira](https://github.com/sergioscker). 🚀