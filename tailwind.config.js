/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair: ['Playfair+Display','sans-serif'],
        katibeh: ['Katibeh','sans-serif'],
        lexend: ['"Lexend", sans-serif;']
      }
    },
  },
  plugins: [],
}