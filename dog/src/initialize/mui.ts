import { createTheme } from "@material-ui/core/styles";
import { colors } from "configs";

export const MuiTheme = createTheme({
  typography: {
    fontFamily: "Exo 2, sans-serif",
    allVariants: {
      color: "#fff",
    },
    h1: {
      fontFamily: "Exo 2, sans-serif",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "28px",
    },
    h2: {
      fontFamily: "Exo 2, sans-serif",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
    },
    h3: {
      fontFamily: "Exo 2, sans-serif",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "22px",
    },
    h4: {
      fontFamily: "Exo 2, sans-serif",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "20px",
    },
    h5: {
      fontFamily: "Exo 2, sans-serif",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
    },
    h6: {
      fontFamily: "Exo 2, sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
    },
    h7: {
      fontFamily: "Exo 2, sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
    },
    body1: {
      fontFamily: "Exo 2, sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: "#fff",
          fontSize: "16px",
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: {
            variant: "outlined",
          },
          style: {
            color: "#fff",
            // backgroundColor: "red",
            borderRadius: "10px",
            borderColor: "red",
            // "&:input": {
            //   backgroundColor: "red",
            // },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: colors.text.grey,
                color: colors.text.grey,
              },
              "&:hover fieldset": {
                borderColor: "#fff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "normal",
        },
        // sizeMedium: {
        //   fontSize: "16px",
        // },
        // sizeLarge: {
        //   padding: "12px 24px",
        //   fontSize: "18px",
        // },
      },

      // variants: [
      //   {
      //     props: {
      //       variant: "primary",
      //     },
      //     style: {
      //       background: "linear-gradient(90deg, #6A4BFF 0%, #2196F3 100%)",
      //       boxShadow: "0px 4px 20px rgba(33, 150, 243, 0.2)",
      //       // backgroundColor: "red",
      //     },
      //   },
      //   {
      //     props: {
      //       variant: "outlined",
      //     },
      //     style: {
      //       color: colors.text.white,
      //       // borderRadius: "14px",
      //       fontWeight: 700,
      //       borderColor: colors.primary.purple,
      //       "&:hover": {
      //         borderColor: colors.primary.deepBlue,
      //       },
      //     },
      //   },
      // ],
      variants: [
        {
          props: {
            variant: "primary",
          },
          style: {
            background: colors.primary.purple,
            fontWeight: 700,
            fontFamily: "Manrope, 'sans-serif'",
            padding: "10px 32px",
            borderRadius: "14px",
            color: "white",
            "&:hover": {
              backgroundColor: colors.primary.purpleDark,
            },
          },
        },
        {
          props: {
            variant: "text",
          },
          style: {
            color: colors.text.grey,
            // fontFamily: "Manrope, 'sans-serif'",
            // fontWeight: 700,
            padding: "10px 32px",
            "&:hover": {
              color: "#fff",
              backgroundColor: "transparent",
            },
          },
        },
        {
          props: {
            variant: "outlined",
          },
          style: {
            color: colors.text.white,
            borderRadius: "14px",
            borderColor: colors.primary.purple,
            padding: "10px 32px",
            // fontWeight: 700,
            // fontFamily: "Manrope, 'sans-serif'",
            "&:hover": {
              borderColor: colors.primary.purpleDark,
            },
          },
        },
      ],
    },
  },
});
