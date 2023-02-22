/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    fontFamily: {
      BebasNeue: ['Bebas Neue', 'Arial'],
      Barlow: ['Barlow Semi Condensed', 'Arial'],
      Raleway: ['Raleway', 'Arial'],
    },
    extend: {},
  },
  plugins: [],
}
