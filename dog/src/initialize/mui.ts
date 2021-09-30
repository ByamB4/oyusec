import { createTheme } from "@mui/material/styles";
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
    body1: {
      fontFamily: "Exo 2, sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h7",
          },
          style: {
            fontFamily: "Exo 2, sans-serif",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
          },
        },
      ],
    },
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
        sizeSmall: {
          padding: "10px 14px",
          fontFamily: "Exo 2 'sans-serif'",
          fontSize: "12px",
          fontWeight: "normal",
        },
        sizeMedium: {
          padding: "10px 16px",
          fontFamily: "Exo 2, 'sans-serif'",
          fontSize: "16px",
          fontWeight: "normal",
        },
        sizeLarge: {
          padding: "16px 28px",
          fontFamily: "Exo 2, 'sans-serif'",
          fontSize: "18px",
          fontWeight: "bold",
        },
      },

      variants: [
        {
          props: {
            variant: "contained",
          },
          style: {
            background: colors.primary.purple,
            borderRadius: "4px",
            color: "white",
            boxShadow:
              "0px 1.3037036657333374px 1.3037036657333374px 0px #6A4BFF0C, 0px 6.162962913513184px 5.096296310424805px 0px #6A4BFF13, 0px 16px 16px 0px #6A4BFF1F",

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
            // padding: "10px 32px",
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
            borderRadius: "4px",
            borderWidth: "2px",
            borderColor: colors.primary.purple,
            // padding: "10px 32px",
            // fontWeight: 700,
            // fontFamily: "Manrope, 'sans-serif'",
            "&:hover": {
              borderRadius: "4px",
              borderWidth: "2px",
              borderColor: colors.primary.purpleDark,
            },
          },
        },
      ],
    },
  },
});
