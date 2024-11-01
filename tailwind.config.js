/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans" , "sans-serif"],
        serif: ["Noto Serif Display", "serif"],
      },
    },
  },
  plugins: [],
}