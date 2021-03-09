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
      height: {
        '731px': '731px',
      },
      inset: {
        '64px': '64px',
        '96px': '96px',
        '120px': '120px',
        '135px': '135px',
        '162px': '162px',
        '-170px': '-170px',
        '185px': '185px',
        '219px': '219px',
        '293px': '293px',
        '414px': '414px',
        '421px': '421px',
        '495px': '495px',
        '663px': '663px',
        '819px': '819px',
        '947px': '947px',
        '21%': '21%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '64%': '64%',
      },
      margin: {
        '-94px': '-94px',
        '-158px': '-158px',
        '-132px': '-132px',
        '-200px': '-200px',
        '-209px': '-209px',
        '-247px': '-247px',
        '-925px': '-925px',
        '-1100px': '-1100px',
        '-21%': '-21%',
      },
      minWidth: {
        '300px': '300px',
      },
      width: {
        '63px': '63px',
        '87px': '87px',
        '107px': '107px',
        '137px': '137px',
        '161px': '161px',
        '250px': '250px',
        '14%': '14%',
      },
      backgroundPosition: {
        '-120px': '-120px',
      },
      fontSize: {
        xxs: '10px',
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
      height: ['responsive'],
      inset: ['responsive'],
      width: ['responsive'],
      minWidth: ['responsive'],
      backgroundPosition: ['responsive'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
