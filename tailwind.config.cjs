/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    fontFamily: {
      sans: ["Secular One", "Noto Sans TC", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1f4e5f",
        secondary: "#79a8a9",
        tertiary: "#aacfd0",
        quaternary: "#f4f7f7",
      },
    },
  },
  plugins: [],
};
