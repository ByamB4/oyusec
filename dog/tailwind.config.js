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
          light: colors.primary.light,
        },
        secondary: {
          orange: colors.secondary.orange,
          cyan: colors.secondary.cyan,
        },
        text: {
          darkGrey: colors.text.darkGrey,
        },
      },
      width: {
        "5px": "5px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
