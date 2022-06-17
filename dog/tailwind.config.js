const colors = require('./src/theme/colors.js')

module.exports = {
  mode: 'jit',
  important: true,
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      width: {
        '5px': '5px',
      },
      backgroundImage: (theme) => ({
        'index-pattern': "url('/img/Home/Pattern.png')",
      }),
      transitionProperty: {
        width: 'width',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
