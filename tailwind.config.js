/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
    },
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        anton: ['Anton', 'sans-serif']
      },
      dropShadow: {
        'outline':
        ['0 0 1px #000',
        '0 0 1px #000',
        '0 0 1px #000',
        '0 0 1px #000',
        '0 0 1px #000',
        '0 0 1px #000',
        '0 0 1px #000',
        '0 0 1px #000']
      }
    },
  },
  plugins: [],
}
