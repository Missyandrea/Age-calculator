/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      borderRadius:{
        'card': '15px 15px 150px 15px'
      },
      colors:{
        'date-value':'rgb(151, 79, 206)',
        'input-group': 'rgb(111, 111, 111)'
      }
    },
  },
  plugins: [],
}

