/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light':'#bde4c3',
        'slight':'#daf0df',
        'darkened':'#241f21',
        'slightx':'#eef9f0'
      },
      boxShadow: {
        '4xl': '0 4px 0px 3px rgba(0,0,0,0.3)',
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'prime': ["Courier Prime", "cursive"],
        'spartan': ["League Spartan", "sans-serif"],
        


      },
    
    },
  },
  plugins: [],
}