const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate: {
        33: '33deg',
      },
      fontSize: {
        '10xl': '43.5rem',
      },
      inset: {
        '28pc': '28%',
      },
      borderWidth: {
        10: '10px',
      },
      margin: {
        '-925px': '-925px',
      },
      minWidth: {
        '300px': '300px',
      },
      width: {
        '250px': '250px',
      },
    },
    colors: {
      yellow: '#EEFF00',
      dark: '#292F33',
      white: '#ffffff',
      gray: {
        light: '#E6EBEF',
        dark: '#CED6DC',
        border: '#74787B',
      },
      red: 'red',
    },
  },

  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      width: ['responsive'],
      minWidth: ['responsive'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
