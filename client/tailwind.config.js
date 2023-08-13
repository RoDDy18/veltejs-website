/** @type {import('tailwindcss').Config} */

const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons');

module.exports = {
  darkMode: "class",
	mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx}", "node_modules/preline/dist/*.js"],
	theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        primary:"#7446CE",
        primary_light:"#784CE5",
        secondary: "#161616"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'source': ['Source Code Pro', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage:{
        'contour-pattern': "url('/assets/images/contour black bg.png')",
        'contour-pattern-light': "url('/assets/images/contour white bg.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['uil', 'basil']),
    }),
    require('preline/plugin'),
  ],
};