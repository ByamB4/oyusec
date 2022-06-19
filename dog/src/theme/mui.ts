import { createTheme } from '@mui/material/styles'
import colors from './colors'

export const MuiTheme = createTheme({
  typography: {
    fontFamily: 'Exo2',
    allVariants: {
      color: colors.text.lineDark,
    },
    h1: {
      fontFamily: 'Exo2',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '28px',
    },
    h2: {
      fontFamily: 'Exo2',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '24px',
    },
    h3: {
      fontFamily: 'Exo2',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '22px',
    },
    h4: {
      fontFamily: 'Exo2',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '20px',
    },
    h5: {
      fontFamily: 'Exo2',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '18px',
    },
    h6: {
      fontFamily: 'Exo2',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
    },
    body1: {
      fontFamily: 'Exo2',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h7',
          },
          style: {
            fontFamily: 'Exo2',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontSize: '16px',
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: {
            variant: 'outlined',
          },
          style: {
            color: '#fff',
            // backgroundColor: "red",
            borderRadius: '10px',
            borderColor: 'red',
            // "&:input": {
            //   backgroundColor: "red",
            // },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: colors.text.grey,
                color: colors.text.grey,
              },
              '&:hover fieldset': {
                borderColor: '#fff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#fff',
              },
            },
          },
        },
      ],
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'normal',
        },
        sizeSmall: {
          padding: '5px 14px',
          fontFamily: "Exo 2 'sans-serif'",
          fontSize: '12px',
          fontWeight: 'normal',
        },
        sizeMedium: {
          padding: '7px 16px',
          fontFamily: "Exo 2, 'sans-serif'",
          fontSize: '14px',
          fontWeight: 400,
        },
        sizeLarge: {
          padding: '10px 20px',
          fontFamily: "Exo 2, 'sans-serif'",
          fontSize: '16px',
          fontWeight: 500,
        },
      },

      variants: [
        {
          props: {
            variant: 'contained',
          },
          style: {
            background: colors.primary.purple,
            borderRadius: '4px',
            color: 'white',
            boxShadow:
              '0px 10px 20px rgba(106, 75, 255, 0.18), 0px 7.7037px 6.37037px rgba(106, 75, 255, 0.109333), 0px 1.62963px 1.62963px rgba(106, 75, 255, 0.0706667)',
            '&:hover': {
              backgroundColor: '#7B61FF',
              boxShadow:
                '0px 10px 20px rgba(123, 97, 255, 0.18), 0px 7.7037px 6.37037px rgba(123, 97, 255, 0.109333), 0px 1.62963px 1.62963px rgba(123, 97, 255, 0.0706667)',
            },
            '&:focus': {
              backgroundColor: '#6548F6',
              boxShadow:
                '0px 10px 20px rgba(101, 72, 246, 0.18), 0px 7.7037px 6.37037px rgba(101, 72, 246, 0.109333), 0px 1.62963px 1.62963px rgba(101, 72, 246, 0.0706667)',
            },
            '&:active': {
              backgroundColor: '#785CFE',
            },
          },
        },
        {
          props: {
            variant: 'text',
          },
          style: {
            color: colors.text.grey,
            // fontFamily: "Manrope, 'sans-serif'",
            // fontWeight: 700,
            // padding: "10px 32px",
            '&:hover': {
              color: '#fff',
              backgroundColor: 'transparent',
            },
          },
        },
        {
          props: {
            variant: 'outlined',
          },
          style: {
            color: colors.text.white,
            borderRadius: '4px',
            borderWidth: '2px',
            borderColor: colors.primary.purple,
            // padding: "10px 32px",
            // fontWeight: 700,
            // fontFamily: "Manrope, 'sans-serif'",
            '&:hover': {
              borderRadius: '4px',
              borderWidth: '2px',
              borderColor: colors.primary.purpleDark,
            },
          },
        },
      ],
    },
  },
})
