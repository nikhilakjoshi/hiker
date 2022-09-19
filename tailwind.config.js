/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Serif SC"', "serif"],
        mont: ["Oswald", "sans-serif"],
        combo: ["Combo", "cursive"],
      },
    },
  },
  plugins: [],
};
