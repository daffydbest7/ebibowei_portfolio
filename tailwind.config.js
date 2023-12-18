/* @type {import('tailwindcss').Config} */
module.exports = {

  /* for toggling darkmode based on class */
  darkMode: "class",
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ], 
    theme: {
      container: {
        padding: {
          DEFAULT: '30px',
        },
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl':'1536px',
      },
      
      extend: {
        colors: {
          primary: '#14b8a6',
          secondary:'#eceeed',
          igyellow: '#feda75',
          igorange: '#fa7e1e',
          igpink: '#d62976',
          igpurple: '#962fbf',
          igblue: '#4f5bd5',
          twitter:'#00acee',
          github: '#171515',

        },
        backgroundImage:{
          about: "url('./images/about.jpg')",
          about_new: "url('./images/ebibowei.jpg')",
          service_img:"url('./images/analysis.jpg')",
          service_new: "url('./images/analysis.jpg')",
        }       
      },
      fontFamily: {
        signature: ['Great Vibes'],
      },
    },
    plugins: [],
  }
  
  