# Vanilla Extract CSS: Type-safe Styling for React Component Packages
> React Advanced London 2023 Conference Demo

This project is a hands-on demonstration of using Vanilla Extract CSS to introduce type-safe styling in React components. It highlights the utility of Vanilla Extract CSS in theme creation, component styling, and ensuring type safety across your styles.

## Introduction

Vanilla Extract CSS is a tool that aids in creating type-safe styles for your components. This demo showcases:

- Setting up Vanilla Extract CSS with Vite and React.
- Creating two themes using Vanilla Extract CSS.
- Developing a button component with three variations, using one Vanilla Extract plugins: Recipes

## Getting Started

### Installation

1. Install the dependencies:
    ```bash
    npm install
    ```

2. Run the development server:
    ```bash
    npm run dev
    ```

## Project Structure

```
root
├── src/
│   ├── ui-kit/ 
│   │   ├── components/          # React components (e.g., Button) 
|   |   ├── ThemeSwitcher.tsx    # A theme switcher wrapping the application     
│   │   └── theme.css.ts         # Theme contracts
│   └── App.tsx                  # Main application entry
├── vite.config.ts               # Vite configuration
└── package.json                 # Dependency management
```