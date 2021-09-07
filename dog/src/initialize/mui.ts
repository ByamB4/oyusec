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
        sizeMedium: {
          fontSize: "16px",
        },
        sizeLarge: {
          padding: "12px 24px",
          fontSize: "18px",
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
