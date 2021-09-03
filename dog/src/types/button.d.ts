import { ButtonPropsColorOverrides } from "@material-ui/core/Button/Button";

declare module "@material-ui/core/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tab: true;
    disabled: true;
  }
}
