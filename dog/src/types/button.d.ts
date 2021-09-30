import { ButtonPropsColorOverrides } from "@mui/material/Button/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tab: true;
    disabled: true;
  }
}
