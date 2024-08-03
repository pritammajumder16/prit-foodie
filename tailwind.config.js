/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFFFFF",
          100: "#e6faf8",
          200: "#ccf5f1",
          300: "#99ebe4",
          400: "#00CCBB",
          500: "#01A296",
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
