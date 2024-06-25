/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFFFFF",
          400: "#00CCBB",
        },
        neutral: {
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          1000: "#030712",
        },
        link: "#0E7EF8",
        negative: "#EB2733",
        positive: "#3AE971",
        warning: "#FDE965",
      },
    },
  },
  plugins: [],
};
