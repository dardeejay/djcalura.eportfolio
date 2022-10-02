/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Apercu': ['Apercu', 'sans-serif'],
        'SuisseMono': [ 'Suisse Intl Mono', 'monospace' ],
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'bgColor' : '#FFF0E5',
        'secondaryColor':'#10162F',
        'headLineColor' : '#fffffe',
        'paragraphColor' : '#94a1b2',
        'blogsColor': '#fffffe',
        'blueColor': '#3B82F6',
      },
      
    },
  },
  plugins: [],
}