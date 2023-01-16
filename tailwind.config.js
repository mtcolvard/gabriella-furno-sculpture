/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    extend: {
      fontFamily: {
        sans: ['var(--font-cormorant)']
      }
    },
  },
  plugins: [],
}
// fontSize: {
//   base: ['22px', '1rem'],
//   lg: ['26px', '1rem'],
// },
