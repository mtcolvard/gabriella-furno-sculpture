/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      base: ['22px', '1rem'],
      lg: ['26px', '1rem'],
    },
    extend: {},
  },
  plugins: [],
}
