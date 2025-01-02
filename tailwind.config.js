/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Tinos: ['Tinos', 'sans-serif'],
        Silkscreen: ['Silkscreen', 'sans-serif'],
      },
    },
  },
  plugins: [],
}