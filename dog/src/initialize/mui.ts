import { createTheme } from "@material-ui/core/styles";

export const MuiTheme = createTheme({
  typography: {
    fontFamily: `"Exo 2", sans-serif`,
    h1: {
      fontFamily: "Exo 2",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "28px",
    },
    h2: {
      fontFamily: "Exo 2",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
    },
    h3: {
      fontFamily: "Exo 2",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "22px",
    },
    h4: {
      fontFamily: "Exo 2",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "20px",
    },
    h5: {
      fontFamily: "Exo 2",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
    },
    h6: {
      fontFamily: "Exo 2",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
    },
    body1: {
      fontFamily: "Exo 2",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
    },
  },
  // palette: {
  //   primary: {
  //     main: "#556cd6",
  //   },
  //   secondary: {
  //     main: "#19857b",
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "normal",
        },
      },

      variants: [
        {
          props: {
            variant: "primary",
          },
          style: {
            background: "linear-gradient(90deg, #6A4BFF 0%, #2196F3 100%)",
            boxShadow: "0px 4px 20px rgba(33, 150, 243, 0.2)",
            // backgroundColor: "red",
          },

        },
      ],
    },
  },
});
