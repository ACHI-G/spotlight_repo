/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      fontFamily:{
        'primary': ['Montserrat'],
        
      },
      colors: {
        'desert': '#a99e90',
        'stoney': '#9b9a99',
        'blackish': '#212427',
      },
     
    
    },    
  },

  

  
}

