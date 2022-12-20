/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '160px',
      'md': '450px',
      'lg': '750px',
      'xl': '1000px'
    },
    extend: {
      colors: {
        'overlay': 'rgba(0, 0, 0, 0.4)'
      }
    },
  },
  plugins: [],
}
