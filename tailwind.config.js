/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#050505",
        background: "#fafafa",
        primary: "#71acf9",
        secondary: "#ffffff",
        accent: "#676864",
      },
      fontFamily: {
        "alex-brush": ["Alex Brush", "cursive"],
        "fira-sans": ["Fira Sans", "sans-serif"],
        "im-fell": ["IM Fell English SC", "serif"],
      },
    },
  },

  plugins: [],
};
