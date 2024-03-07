/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      heading: ["Shojumaru", "cursive"],
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
