// import colors from "./src/configs/colors";
let colors = require("./src/configs/colors");

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
          grey: colors.text.grey,
          white: colors.text.white,
          darkGrey: colors.text.darkGrey,
        },
      },
      width: {
        "5px": "5px",
      },
      backgroundImage: (theme) => ({
        "index-pattern": "url('/img/Home/Pattern.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
