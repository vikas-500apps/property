/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          50: "#2563eb80", // Adds opacity support (50% opacity)
        },
        "primary-dark": "#1d4ed8",
        secondary: "#64748b",
        accent: "#f59e0b",
        background: "#f8fafc",
        text: "#0f172a",
        "text-light": "#64748b",
        border: "#e2e8f0",
        error: "#ef4444",
        success: "#10b981",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
