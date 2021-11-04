const colors = require("./src/configs/colors");

module.exports = {
  mode: "jit",
  important: true,
  purge: { content: ["./src/**/*.{js,ts,jsx,tsx}"] },

  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          dark: colors.primary.dark,
          dark1: colors.primary.dark1,
          purple: colors.primary.purple,
          light: colors.primary.light,
          light1: colors.primary.light1,
          deepBlue: colors.primary.deepBlue,
          darkViolet: colors.primary.darkViolet,
        },
        secondary: {
          yellow: colors.secondary.yellow,
          orange: colors.secondary.orange,
          cyan: colors.secondary.cyan,
          pink: colors.secondary.pink,
          violet: colors.secondary.violet,
          blue: colors.secondary.blue,
          neonGreen: colors.secondary.neonGreen,
          red: colors.secondary.red,
          darkGrey: colors.secondary.darkGrey,
        },
        text: {
          black: colors.text.black,
          grey: colors.text.grey,
          white: colors.text.white,
          darkGrey: colors.text.darkGrey,
          whiteGrey: colors.text.whiteGrey,
          lineDark: colors.text.lineDark,
        },
      },
      width: {
        "5px": "5px",
      },
      backgroundImage: (theme) => ({
        "index-pattern": "url('/img/Home/Pattern.png')",
      }),
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
