/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#D87C49',
        primary: '#0B0B0B',
        lightGray: '#4E4E4E',
        veryLightGray: '#828282',
      },
    },
  },
  plugins: [],
}
