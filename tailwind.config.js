const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate: {
        33: '33deg',
      },
    },
    colors: {
      yellow: '#EEFF00',
      dark: '#292F33',
      white: '#ffffff',
      gray: {
        light: '#E6EBEF',
        dark: '#CED6DC',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
